import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { Link, useLocation } from "wouter";
import { matchesRoute, ROUTES } from "../routes";
import LanIcon from "@mui/icons-material/Lan";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { default as MaterialLink } from "@mui/material/Link";

const NavigationBar = () => {
  const [location] = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <MaterialLink
          display="inline-flex"
          color="white"
          component={Link}
          href="/"
          underline="none"
          justifyContent="center"
          alignItems="center"
        >
          <LanIcon />
          <Typography component="span" sx={{ ml: 2, mr: 7 }} fontWeight="bold">
            CW Arena
          </Typography>
        </MaterialLink>
        <Box display="flex" sx={{ gap: 2 }}>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
