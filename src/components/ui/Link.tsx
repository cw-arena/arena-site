import { default as MaterialLink } from "@mui/material/Link";
import { Link as WouterLink } from "wouter";

const Link = ({
  children,
  ...rest
}: React.ComponentProps<typeof MaterialLink>) => (
  <MaterialLink
    display="inline-flex"
    color="white"
    component={WouterLink}
    href="/"
    underline="none"
    {...rest}
  >
    {children}
  </MaterialLink>
);

export default Link;
