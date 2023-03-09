import { useState } from "react";
import Container from "react-bootstrap/Container";

import { Banner } from "../components/Banner";
import { ErrorMessage } from "../components/ErrorMessage";
import { Repos } from "../components/Repos";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const MyRepos = () => {
  const [repos, setRepos] = useState(getFromLocalStorage("repos", []));

  const removeRepo = (repoToRemove) => {
    const reposFromLS = getFromLocalStorage("repos", []);

    const newRepos = reposFromLS.filter((repo) => {
      return repo.id !== repoToRemove.id;
    });

    localStorage.setItem("repos", JSON.stringify(newRepos));

    setRepos(newRepos);
  };

  return (
    <Container>
      <Banner
        title="My Repositories"
        subTitle="Here is a list of my favourite GitHub repositories"
      />
      {repos.length === 0 && (
        <ErrorMessage message="You have no repositories in your favourites." />
      )}
      {repos.length > 0 && (
        <Repos repos={repos} isFavourite={true} handleOnClick={removeRepo} />
      )}
    </Container>
  );
};
