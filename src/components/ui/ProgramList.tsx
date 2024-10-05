import DeleteIcon from "@mui/icons-material/Delete";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import { format, formatDistanceToNowStrict } from "date-fns";
import { Program } from "../../api/client";
import Link from "./Link";

type ProgramListItemProps = {
  program: Program;
  onDeleteProgram?: (programId: string) => void;
};

const ProgramListItem = ({
  program,
  onDeleteProgram,
}: ProgramListItemProps) => (
  <TableRow key={program.id}>
    <TableCell>
      <Link
        href={`/programs/${program.id}`}
        fontWeight="bold"
        fontSize="medium"
      >
        {program.id}
      </Link>
    </TableCell>
    <TableCell align="left">
      <Tooltip title={program.is_public ? "Public" : "Private"}>
        {program.is_public ? <LockOpenIcon /> : <LockIcon />}
      </Tooltip>
    </TableCell>
    <TableCell>
      <Tooltip title={format(program.created_at, "yyyy-MM-dd hh:mm:ss a")}>
        <span>{formatDistanceToNowStrict(program.created_at)} ago</span>
      </Tooltip>
    </TableCell>
    <TableCell>
      <Tooltip title={format(program.updated_at, "yyyy-MM-dd hh:mm:ss a")}>
        <span>{formatDistanceToNowStrict(program.updated_at)} ago</span>
      </Tooltip>
    </TableCell>
    {onDeleteProgram && (
      <TableCell>
        <Tooltip title="Delete">
          <IconButton onClick={() => onDeleteProgram(program.id)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </TableCell>
    )}
  </TableRow>
);

type ProgramListProps = {
  programs: Program[];
  onDeleteProgram?: (programId: string) => void;
};

const ProgramList = ({ programs, onDeleteProgram }: ProgramListProps) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Visibility</TableCell>
          <TableCell>Created</TableCell>
          <TableCell>Last updated</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {programs.map((program) => (
          <ProgramListItem
            key={program.id}
            program={program}
            onDeleteProgram={onDeleteProgram}
          />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default ProgramList;
