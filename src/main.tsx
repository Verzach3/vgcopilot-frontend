import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { Auth } from "./Auth.tsx";
import StartTest from "./StartTest.tsx";
import Rate from "./Rate.tsx";
import Loading from "./Loader.tsx";
import Recomendations from "./Recomendations.tsx";
import { RecoilRoot } from "recoil";
import Loader from "./Loader.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Reroute />,
      },
      {
        path: "/auth/login",
        element: <Auth register={false} />,
      },
      {
        path: "/auth/register",
        element: <Auth register={true} />,
      },
      {
        path: "/start-test",
        element: <StartTest />,
      },
      {
        path: "/rate",
        element: <Rate />,
      },
      {
        path: "/loading",
        element: <Loading />,
      },
      {
        path: "/recomendations",
        element: <Recomendations />,
      },
      {
        path: "/loading",
        element: <Loader />,
      },
      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <MantineProvider
        theme={{ colorScheme: "dark" }}
        withNormalizeCSS
        withGlobalStyles
      >
        <RouterProvider router={router} />
      </MantineProvider>
    </RecoilRoot>
  </React.StrictMode>
);

export function Reroute() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/auth/login");

    return () => {};
  }, []);

  return null;
}
