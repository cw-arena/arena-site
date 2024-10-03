import { RouteProps } from "wouter";
import HomePage from "./pages/HomePage";
import DebuggerPage from "./pages/DebuggerPage";
import LoginPage from "./pages/accounts/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

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
    component: NotFoundPage,
  },
  {
    name: "Debugger",
    href: "/debugger",
    component: DebuggerPage,
  },
  {
    name: "Programs",
    href: "/programs",
    component: NotFoundPage,
    authenticated: true,
  },
  {
    href: "/accounts/login",
    component: LoginPage,
  },
];

// TODO: Support route paths with parameter bindings in them
export const matchesRoute = (route: AppRoute, path: string) =>
  route.href === path;
