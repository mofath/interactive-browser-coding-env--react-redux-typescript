import "./code-editor.css";
import Editor, { OnMount } from "@monaco-editor/react";

interface CodeEditorProps {
  initialValue: string;
  onChange(value: any): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
  const editorDidMount: OnMount = (editor: any) => {
    editor.focus();
  };

  return (
    <div className="editor-wrapper">
      <button className="button button-format is-primary is-small">
        Format
      </button>
      <Editor
        onMount={editorDidMount}
        value={initialValue}
        theme="vs-dark"
        onChange={onChange}
        language="javascript"
        height="100%"
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
