import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import InstalledApp from "../Pages/InstalledApps/InstalledApp";
import MainLayout from "../Layouts/MainLayout";
import Apps from "../Pages/Apps/Apps";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AppDetalils from "../Pages/AppDetails/AppDetalils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <h1>Loading...</h1>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "/installedApp",
        element: <InstalledApp></InstalledApp>,
      },
      {
        path: "/apps/:id",
        element: <AppDetalils></AppDetalils>,
      },
    ],
  },
]);

export default router;
