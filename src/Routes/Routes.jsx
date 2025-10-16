import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import InstalledApp from "../Pages/InstalledApps/InstalledApp";
import MainLayout from "../Layouts/MainLayout";
import Apps from "../Pages/Apps/Apps";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        // loader: () => fetch(/appData.json)
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "/installedApp",
        element: <InstalledApp></InstalledApp>,
      },
    ],
  },
]);

export default router;
