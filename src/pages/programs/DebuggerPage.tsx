import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CoreViewer from "../../components/editor/CoreViewer";
import ProgramEditor from "../../components/editor/ProgramEditor";

const memory: string[] = [];
for (let i = 1; i <= 8000; ++i) {
  memory.push("DAT.F #0, #0");
}

const DebuggerPage = () => (
  <Grid container spacing={8}>
    <Grid size={6}>
      <Typography variant="h5" sx={{ mb: 2 }} fontWeight="bold">
        Code
      </Typography>
      <ProgramEditor value="" />
    </Grid>
    <Grid size={6}>
      <Typography variant="h5" sx={{ mb: 2 }} fontWeight="bold">
        Memory
      </Typography>
      <CoreViewer memory={memory} />
    </Grid>
  </Grid>
);

export default DebuggerPage;
