import { RouteProps } from "wouter";
import HomePage from "./pages/HomePage";
import ComingSoonPage from "./pages/ComingSoonPage";
import DebuggerPage from "./pages/DebuggerPage";

export type AppRoute = {
  name?: string;
  href: string;
  component: RouteProps["component"];
  authenticated?: boolean;
};

export const ROUTES: AppRoute[] = [
  {
    name: "Home",
    href: "/",
    component: HomePage,
  },
  {
    name: "Hills",
    href: "/hills",
    component: ComingSoonPage,
  },
  {
    name: "Debugger",
    href: "/debugger",
    component: DebuggerPage,
  },
  {
    name: "Programs",
    href: "/programs",
    component: ComingSoonPage,
    authenticated: true,
  },
];

// TODO: Support route paths with parameter bindings in them
export const matchesRoute = (route: AppRoute, path: string) =>
  route.href === path;
