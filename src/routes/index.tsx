import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../pages/auth/login/Login";
import SignUp from "../pages/auth/signup/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [{}],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: SignUp,
      },
    ],
  },
]);

export default router;
