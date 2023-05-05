import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "animate.css";

import store from "./store/redux";
import App from "./App";
import AboutScreen from "./components/screens/AboutScreen";
import WorksScreen from "./components/screens/WorksScreen";
import ContactScreen from "./components/screens/ContactScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <App ScreenComponent={<AboutScreen />} />,
  },
  {
    path: "/works",
    element: <App ScreenComponent={<WorksScreen />} />,
  },
  {
    path: "/contact",
    element: <App ScreenComponent={<ContactScreen />} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
