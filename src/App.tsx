import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

const App = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button size="large" sx={{ color: "white" }}>
            Home
          </Button>
          <Button size="large" sx={{ color: "white" }}>
            Hills
          </Button>
          <Button size="large" sx={{ color: "white" }}>
            Editor
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default App;
