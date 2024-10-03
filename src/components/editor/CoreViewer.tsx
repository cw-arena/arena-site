import { gutter, GutterMarker } from "@codemirror/view";
import Box from "@mui/material/Box";
import { copilot } from "@uiw/codemirror-theme-copilot";
import CodeMirror from "@uiw/react-codemirror";
import { cwHighlighter } from "./highlighter";
import "./CoreViewer.css";

const lineNumberMarker = (width: number, lineNumber: number) =>
  new (class extends GutterMarker {
    toDOM() {
      let value = lineNumber.toString();
      while (value.length < width) {
        value = "0" + value;
      }
      return document.createTextNode(value);
    }
  })();

const lineNumberGutter = (width: number) =>
  gutter({
    class: "core-viewer-gutter",
    lineMarker(view, line) {
      const lineNumber = view.state.doc.lineAt(line.from).number;
      return lineNumberMarker(width, lineNumber);
    },
    initialSpacer: () => lineNumberMarker(width, 0),
  });

type CoreViewerProps = {
  memory: string[];
};

const numberLength = (x: number) => x.toString().length;

const CoreViewer = ({ memory }: CoreViewerProps) => (
  <Box borderRadius={1} overflow="hidden">
    <CodeMirror
      basicSetup={{
        allowMultipleSelections: false,
        highlightSelectionMatches: false,
        history: false,
        lineNumbers: false,
        rectangularSelection: false,
      }}
      editable={false}
      extensions={[
        cwHighlighter,
        lineNumberGutter(numberLength(memory.length)),
      ]}
      height="500px"
      theme={copilot}
      value={memory.join("\n")}
    />
  </Box>
);

export default CoreViewer;
