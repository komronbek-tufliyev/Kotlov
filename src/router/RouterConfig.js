import React from "react";
import DesktopLayout from "../layout/DesktopLayout";


const Contact = React.lazy(() => import("../views/Contact"));
const Home = React.lazy(() => import("../views/Home"));
const Advantage = React.lazy(() => import("../views/Advantage"));
const More = React.lazy(() => import("../views/More"));

export const RoutesConfig = [{
    title: "",
    path: "/",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: Home,
  }, {
    title: "",
    path: "/contact",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: Contact,
  },

  {
    title: "",
    path: "/question",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: Advantage,
  },
  {
    title: "",
    path: "/more",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: More,
  },


];