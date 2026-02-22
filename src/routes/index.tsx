import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [{}],
  },
  {
    path: "account/login",
    Component: AuthLayout,
  },
]);

export default router;
