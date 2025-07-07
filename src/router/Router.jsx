import { Route, Routes } from "react-router-dom";

import { RoutePaths } from "./RoutePaths.jsx";
import { Home, NotFound, Event, CustomizedCalendar } from "../pages/index.jsx";
import { Layout } from "../layout/index.jsx";
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
