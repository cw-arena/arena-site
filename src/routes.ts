import { RouteProps } from "wouter";
import HomePage from "./pages/HomePage";
import ComingSoonPage from "./pages/ComingSoonPage";

type AppRoute = {
  name?: string;
  href: string;
  component: RouteProps["component"];
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
    name: "Editor",
    href: "/programs/new",
    component: ComingSoonPage,
  },
];
