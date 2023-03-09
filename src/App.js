import { BrowserRouter } from "react-router-dom";

import { NavigationBar } from "./components/NavigationBar";
import { AppRoutes } from "./AppRoutes";

export const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <AppRoutes />
    </BrowserRouter>
  );
};
