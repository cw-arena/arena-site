import { Redirect } from "wouter";
import { useAuthUser } from "../components/AuthProvider";
import { Box, Card, Container, Stack, Typography } from "@mui/material";
import LanIcon from "@mui/icons-material/Lan";
import { ReactNode } from "react";

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
