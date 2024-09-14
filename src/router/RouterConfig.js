import React from "react";
import DesktopLayout from "../layout/DesktopLayout";


const Teachers = React.lazy(() => import("../views/Teachers"));
const Contact = React.lazy(() => import("../views/Contact"));
const MainPage = React.lazy(() => import("../views/MainPage"));
const Home = React.lazy(() => import("../views/Home"));
const Advantage = React.lazy(() => import("../views/Advantage"));

export const RoutesConfig = [{
    title: "",
    path: "/teachers",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: Teachers,
  },
  {
    title: "",
    path: "/contact",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: Contact,
  },
  {
    title: "",
    path: "/main",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: MainPage,
  },
  {
    title: "",
    path: "/",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: Home,
  },
  {
    title: "",
    path: "/advantage",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: Advantage,
  },


];