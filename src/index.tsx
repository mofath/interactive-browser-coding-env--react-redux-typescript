import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./state";
import TextEditor from "./components/text-editor";
// import CodeCell from "./components/code-cell";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <TextEditor />
      </Provider>
      {/* <CodeCell /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
