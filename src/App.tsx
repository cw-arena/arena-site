import { Route, Switch } from "wouter";
import NavigationBar from "./components/NavigationBar";
import { ROUTES } from "./routes";
import Box from "@mui/material/Box";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => (
  <>
    <NavigationBar />
    <Box padding={5} pt={12}>
      <Switch>
        {ROUTES.map((route) => (
          <Route
            key={route.href}
            path={route.href}
            component={route.component}
          />
        ))}
        <Route component={NotFoundPage} />
      </Switch>
    </Box>
  </>
);

export default App;
