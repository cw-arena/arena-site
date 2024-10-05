import LanIcon from "@mui/icons-material/Lan";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useLocation } from "wouter";
import { matchesRoute, ROUTES } from "../routes";
import { useAuthData } from "./auth/AuthProvider";
import Link from "./ui/Link";
import LinkButton from "./ui/LinkButton";

const NavigationBar = () => {
  const [location] = useLocation();
  const isLoggedIn = useAuthData() !== null;

  return (
    <AppBar position="static">
      <Toolbar>
        <Link justifyContent="center" alignItems="center">
          <LanIcon />
          <Typography component="span" sx={{ ml: 2, mr: 7 }} fontWeight="bold">
            CW Arena
          </Typography>
        </Link>
        <Box display="flex" sx={{ gap: 2 }}>
          {ROUTES.filter((route) => typeof route.name !== "undefined").map(
            (route) =>
              isLoggedIn || !route.authenticated ? (
                <LinkButton
                  key={route.href}
                  href={route.href}
                  disabled={matchesRoute(route, location)}
                >
                  {route.name}
                </LinkButton>
              ) : null
          )}
        </Box>
        <Box marginLeft="auto">
          {isLoggedIn ? (
            <LinkButton href="/accounts/logout">Sign out</LinkButton>
          ) : (
            <LinkButton href="/accounts/login">Sign in</LinkButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
