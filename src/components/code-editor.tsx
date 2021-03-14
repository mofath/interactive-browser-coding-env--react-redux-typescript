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
    <Editor
      onMount={editorDidMount}
      value={initialValue}
      theme="vs-dark"
      onChange={onChange}
      language="javascript"
      height="500px"
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
  );
};

export default CodeEditor;
