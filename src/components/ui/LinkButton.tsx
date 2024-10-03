import Button from "@mui/material/Button";
import { Link } from "wouter";

const LinkButton = ({
  children,
  ...rest
}: React.ComponentProps<typeof Button> & React.ComponentProps<typeof Link>) => (
  <Button component={Link} size="large" sx={{ color: "white" }} {...rest}>
    {children}
  </Button>
);

export default LinkButton;
