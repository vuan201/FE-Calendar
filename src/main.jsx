import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "rsuite/dist/rsuite.min.css"; // or 'rsuite/styles/index.less';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CustomProvider } from "rsuite";
import locale from "./constant/Locate.js";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomProvider locale={locale}>
      <Provider store={store}>
        <App />
      </Provider>
    </CustomProvider>
  </React.StrictMode>
);
