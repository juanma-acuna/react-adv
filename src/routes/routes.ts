import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXElement = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSXElement> | JSXElement;
  name: string;
  children?: Route[];
}

export const routes: Route[] = [
  {
    path: "/lazyload",
    Component: lazy(
      () =>
        import(
          /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
        )
    ),
    name: "Lazyloading Nested",
  },
  {
    path: "/no-lazy",
    Component: NoLazy,
    name: "No Lazy Loading",
  },
];
