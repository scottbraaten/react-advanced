import { Outlet } from "react-router-dom";

import EventsNavigation from "../components/EventsNavigation";

const RootLayout = () => {
  return (
    <>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
