import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "widgets/default-layout";
import Registration from "./registration";
import UploadPage from "./upload-page";

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: "/registration", element: <Registration /> },
      { path: "/upload-page", element: <UploadPage /> },
    ],
  },
]);
