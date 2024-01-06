import logo from "./logo.svg";
import "./App.css";
import { Hello } from "./component/helo";
import { Buttons } from "./component/button";
import { Starwar } from "./component/starwar";
function App() {
  return (
    <div className="App">
      {/* <Buttons amt={1} /> */}
      {/* <Buttons amt={2} /> */}
      {/* <Buttons amt={3} /> */}
      <Starwar />
    </div>
  );
}

export default App;
