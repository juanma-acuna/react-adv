import { lazy } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  exact?: boolean;
}

const Lazy1 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1")
);
const Lazy2 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2")
);
const Lazy3 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3")
);

const Lazylayout = lazy(
  () =>
    /* webpackChunkName: "Lazylayout" */ import(
      "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: Lazylayout,
    name: "LazyLayout - Dashboard",
  },
  {
    path: "no-lazy",
    to: "/no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
