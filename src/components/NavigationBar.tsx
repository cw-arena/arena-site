import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { ROUTES } from "../routes";
import { Link, useLocation } from "wouter";

const NavigationBar = () => {
  const [location] = useLocation();

  return (
    <AppBar position="static" sx={{ mb: 7.5 }}>
      <Toolbar sx={{ gap: 5 }}>
        {ROUTES.filter((route) => typeof route.name !== "undefined").map(
          (route) => (
            <Button
              key={route.href}
              component={Link}
              href={route.href}
              size="large"
              sx={{ color: "white" }}
              disabled={route.href === location}
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
