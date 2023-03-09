import Container from "react-bootstrap/Container";
import axios from "axios";

import { Banner } from "../components/Banner";
import { SearchForm } from "../components/SearchForm";
import { ErrorMessage } from "../components/ErrorMessage";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Repos } from "../components/Repos";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [repos, setRepos] = useState();

  const [url, setUrl] = useState();

  const handleApiTrigger = (userName) => {
    setUrl(`https://api.github.com/users/${userName}/repos`);
  };

  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        setIsLoading(true);

        try {
          const { data } = await axios.get(url);

          setError(false);
          setRepos(data);
        } catch {
          setError(true);
          setRepos();
        }

        setIsLoading(false);
      };

      fetchData();
    }
  }, [url]);

  const addRepo = (repoToAdd) => {
    const reposFromLS = getFromLocalStorage("repos", []);

    reposFromLS.push(repoToAdd);

    localStorage.setItem("repos", JSON.stringify(reposFromLS));
  };

  return (
    <Container>
      <Banner
        title="GitHub Diary"
        subTitle="A GitHub search tool to save your favourite repositories"
      />

      <SearchForm handleApiTrigger={handleApiTrigger} />

      {isLoading && <LoadingSpinner />}

      {error && (
        <ErrorMessage message="No repositories found. Please try again." />
      )}

      {repos && <Repos repos={repos} handleOnClick={addRepo} />}
    </Container>
  );
};
