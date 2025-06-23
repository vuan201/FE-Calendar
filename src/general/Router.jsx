import { Route, Routes } from "react-router-dom";

import { RoutePaths } from "./RoutePaths.jsx";
import { Home } from "../Pages/home/Home.jsx";
import { NotFound } from "./NotFound.jsx";
import { Layout } from "./Layout.jsx";
import Event from "../Pages/event/Event";
import CustomizedCalendar from "../Pages/CustomizedCalendar/CustomizedCalendar.jsx";
export const Router = () => (
  <Routes>
    <Route
      path={RoutePaths.HOME}
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.EVENT}
      element={
        <Layout>
          <Event />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.CALENDAR}
      element={
        <Layout>
          <CustomizedCalendar />
        </Layout>
      }
    />
    <Route
      path="*"
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
  </Routes>
);
