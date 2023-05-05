import { AppShell } from "@mantine/core";
import { Outlet, useLocation } from "react-router-dom";
import { HeaderMenu, DefaultHeaderProps } from "./HeaderMenu";

function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <AppShell 
    styles={location.pathname === "/auth/login" || location.pathname === "/auth/register" ? {
      main: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
      }
    }: {}}
    header={<HeaderMenu links={DefaultHeaderProps.links} />}>
      <Outlet />
    </AppShell>
  );
}

export default App;
