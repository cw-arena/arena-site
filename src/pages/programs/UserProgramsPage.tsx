import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Redirect } from "wouter";
import { Program } from "../../api/client";
import { useAuthData } from "../../components/auth/AuthProvider";
import LinkButton from "../../components/ui/LinkButton";
import ProgramList from "../../components/ui/ProgramList";

const ProgramsPage = () => {
  const data = useAuthData();
  if (data === null) {
    return <Redirect to="/" />;
  }

  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  const deleteProgram = async (programId: string) => {
    await data.apiClient.deleteProgram({ id: programId });
    setPrograms(programs.filter((program) => program.id !== programId));
  };

  useEffect(() => {
    if (!loading) {
      return;
    }

    data.apiClient
      .getUserPrograms()
      .then(setPrograms)
      .finally(() => setLoading(false));
  }, [loading]);

  let content = null;
  if (loading) {
    content = <Typography fontSize="medium">Loading...</Typography>;
  } else if (programs.length === 0) {
    content = <Typography fontSize="medium">You have no programs.</Typography>;
  } else {
    content = (
      <ProgramList programs={programs} onDeleteProgram={deleteProgram} />
    );
  }

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" mb={5}>
        <Typography variant="h4" fontWeight="bold">
          Programs
        </Typography>
        <LinkButton href="/programs/debugger" variant="contained">
          New
        </LinkButton>
      </Box>
      {content}
    </Container>
  );
};

export default ProgramsPage;
