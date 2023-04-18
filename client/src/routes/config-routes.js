import { Login } from "../pages/login-page/login-page";
import { Main } from "../pages/main-page/main-page";
import { Register } from "../pages/register-page/register-page";
import { useRoutes } from "react-router-dom";
import { Admin } from "../pages/admin-page/admin-page";

const routes = [
  {
    path: "registration",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/youtube/",
    element: <Main />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
];

export const Routes = () => {
  const elements = useRoutes(routes);
  return elements;
};
