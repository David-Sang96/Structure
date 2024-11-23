import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./routes/mainRouter";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={MainRouter} />
  </StrictMode>,
);
