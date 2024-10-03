import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { Link, useLocation } from "wouter";
import { matchesRoute, ROUTES } from "../routes";

const NavigationBar = () => {
  const [location] = useLocation();

  return (
    <AppBar position="static">
      <Toolbar sx={{ gap: 5 }}>
        {ROUTES.filter((route) => typeof route.name !== "undefined").map(
          (route) => (
            <Button
              key={route.href}
              component={Link}
              href={route.href}
              size="large"
              sx={{ color: "white" }}
              disabled={matchesRoute(route, location)}
            >
              {route.name}
            </Button>
          )
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
