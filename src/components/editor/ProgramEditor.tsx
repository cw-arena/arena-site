import Box from "@mui/material/Box";
import { copilot } from "@uiw/codemirror-theme-copilot";
import CodeMirror from "@uiw/react-codemirror";
import { cwHighlighter } from "./highlighter";

type ProgramEditorProps = {
  defaultValue?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  value: string;
};

const ProgramEditor = ({
  defaultValue,
  onChange,
  readOnly,
  value,
}: ProgramEditorProps) => (
  <Box borderRadius={1} overflow="hidden">
    <CodeMirror
      basicSetup
      extensions={[cwHighlighter]}
      height="500px"
      onChange={onChange}
      readOnly={readOnly}
      theme={copilot}
      defaultValue={defaultValue}
      value={value}
    />
  </Box>
);

export default ProgramEditor;
