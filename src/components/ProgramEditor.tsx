import { StreamLanguage } from "@codemirror/language";
import Box from "@mui/material/Box";
import { copilot } from "@uiw/codemirror-theme-copilot";
import CodeMirror, { ViewUpdate } from "@uiw/react-codemirror";
import { useCallback, useState } from "react";

const createTokenHighlighter = (tokenRegexps: Record<string, RegExp>) =>
  StreamLanguage.define({
    token: (stream, _state) => {
      if (stream.eatSpace()) {
        return null;
      }

      for (const [tokenType, pattern] of Object.entries(tokenRegexps)) {
        if (stream.match(pattern)) {
          return tokenType;
        }
      }

      stream.next();
      return null;
    },
  });

const cwHighlighter = createTokenHighlighter({
  arithmeticOperator: /^\b[*/%+-]\b/,
  comment: /^;[^\n]*/,
  unit: /^\b(AB|BA|[ABFXI])\b/i,
  number: /^[+-]?[0-9]+\b/,
  keyword:
    /^\b(DAT|MOV|ADD|SUB|MUL|DIV|MOD|JMP|JMZ|JMN|DJN|CMP|SLT|SPL|ORG|EQU|END)\b/i,
  name: /^\b[a-zA-Z_][a-zA-Z_0-9]*\b/,
  punctuation: /^\./,
  paren: /^\b[()]\b/,
  separator: /^\b,\b/,
  modifier: /^[#$@<>]/,
});

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
}: ProgramEditorProps) => {
  return (
    <Box
      style={{
        borderRadius: "6px",
        overflow: "hidden",
      }}
    >
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
};

export default ProgramEditor;
