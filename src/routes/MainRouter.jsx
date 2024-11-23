import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import AboutUsHomePage from "../features/about_us/pages/AboutUsHomePage";
import ContactUsHomePage from "../features/contact_us/pages/ContactUsHomePage";
import StartHomePage from "../features/start/pages/StartHomePage";

const MainLayout = lazy(() => import("../layouts/mainLayout"));

const MainRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <StartHomePage />,
      },
      {
        path: "/contact-us",
        element: <ContactUsHomePage />,
      },
      {
        path: "/about-us",
        element: <AboutUsHomePage />,
      },
    ],
  },
]);

export default MainRouter;
