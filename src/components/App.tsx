import "bulmaswatch/superhero/bulmaswatch.min.css";
import { useState } from "react";

import CodeEditor from "./code-editor";
import Preview from "./preview";
import bundle from "../bundler";

const App = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div className="editor-wrapper">
      <button className="button button-format is-primary is-small">
        Format
      </button>
      <CodeEditor
        initialValue="const a = 1;"
        onChange={(value) => {
          setInput(value);
        }}
      />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

export default App;
