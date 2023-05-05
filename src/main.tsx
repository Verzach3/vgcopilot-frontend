import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Auth } from "./Auth.tsx";
import StartTest from "./StartTest.tsx";
import Rate from "./Rate.tsx";
import Loading from "./Loader.tsx";
import Recomendations from "./Recomendations.tsx";

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children: [
    {
      path: "/auth/login",
      element: <Auth register={false}/>,
    },
    {
      path: "/auth/register",
      element: <Auth register={true}/>,
    },
    {
      path: "/start-test",
      element: <StartTest/>,
    },
    {
      path: "/rate",
      element: <Rate/>
    },
    {
      path: "/loading",
      element: <Loading/>
    },
    {
      path: "/recomendations",
      element: <Recomendations/>
    },
    {
      path: "*",
      element: <div>404</div>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider theme={{colorScheme: "dark"}} withNormalizeCSS withGlobalStyles>
      <RouterProvider router={router}/>
    </MantineProvider>
  </React.StrictMode>
);
