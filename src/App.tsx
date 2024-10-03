import { Route, Switch } from "wouter";
import NavigationBar from "./components/NavigationBar";
import { ROUTES } from "./routes";
import Box from "@mui/material/Box";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Box padding={5}>
        <Switch>
          {ROUTES.map((route) => (
            <Route
              key={route.href}
              path={route.href}
              component={route.component}
            />
          ))}
        </Switch>
      </Box>
    </>
  );
};

export default App;
