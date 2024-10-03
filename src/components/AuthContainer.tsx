import LanIcon from "@mui/icons-material/Lan";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import { Redirect } from "wouter";
import { useAuthUser } from "../components/AuthProvider";

type AuthContainerProps = {
  children: ReactNode;
};

const AuthContainer = ({ children }: AuthContainerProps) => {
  const user = useAuthUser();
  if (user !== null) {
    return <Redirect to="/" />;
  }

  return (
    <Container maxWidth="sm">
      <Card sx={{ px: 3, pb: 3 }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ pt: 3, pb: 5 }}
        >
          <LanIcon sx={{ fontSize: 42 }} />
          <Typography
            component="span"
            sx={{ ml: 2, fontSize: 36 }}
            fontWeight="bold"
          >
            CW Arena
          </Typography>
        </Box>
        <Stack spacing={1}>{children}</Stack>
      </Card>
    </Container>
  );
};

export default AuthContainer;
