import { RouteProps } from "wouter";
import LoginPage from "./pages/accounts/LoginPage";
import LogoutPage from "./pages/accounts/LogoutPage";
import SignupPage from "./pages/accounts/SignupPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import DebuggerPage from "./pages/programs/DebuggerPage";
import UserProgramsPage from "./pages/programs/UserProgramsPage";

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
    href: "/programs/debugger",
    component: DebuggerPage,
  },
  {
    name: "Programs",
    href: "/programs",
    component: UserProgramsPage,
    authenticated: true,
  },
  {
    href: "/accounts/login",
    component: LoginPage,
  },
  {
    href: "/accounts/signup",
    component: SignupPage,
  },
  {
    href: "/accounts/logout",
    component: LogoutPage,
  },
];

// TODO: Support route paths with parameter bindings in them
export const matchesRoute = (route: AppRoute, path: string) =>
  route.href === path;
