import "./App.css";
import CheckboxFirstContainer from "./Components/CheckboxOneContainer";
import CheckboxThreeContainer from "./Components/CheckboxThreeContainer";
import CheckboxTwoContainer from "./Components/CheckboxTwoContainer";
import SubmitButtonContainer from "./Components/SubmitButtonContainer";

function App(props) {
  return (
    <div className="App">
      <h1>React-Checkbox</h1>
      <CheckboxFirstContainer store={props.store} />
      <CheckboxTwoContainer store={props.store} />
      <CheckboxThreeContainer store={props.store} />
      <SubmitButtonContainer store={props.store} />
    </div>
  );
}

export default App;
