import { createBrowserRouter } from "react-router-dom";
import Registration from "./registration";
import UploadPage from "./upload-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div />,
  },
  { path: "/registration", element: <Registration /> },
  { path: "/upload-page", element: <UploadPage /> },
]);
