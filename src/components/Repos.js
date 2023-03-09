import Stack from "react-bootstrap/Stack";

import { Repo } from "./Repo";

export const Repos = ({ repos, isFavourite, handleOnClick }) => {
  return (
    <Stack direction="horizontal" className="justify-content-center flex-wrap">
      {repos.map((repo) => (
        <Repo
          repo={repo}
          key={repo.id}
          isFavourite={isFavourite}
          handleOnClick={handleOnClick}
        />
      ))}
    </Stack>
  );
};
