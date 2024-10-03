import { Route, Switch } from "wouter";
import NavigationBar from "./components/NavigationBar";
import { ROUTES } from "./routes";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Switch>
        {ROUTES.map((route) => (
          <Route
            key={route.href}
            path={route.href}
            component={route.component}
          />
        ))}
      </Switch>
    </>
  );
};

export default App;
