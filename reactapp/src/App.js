import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/mainComponent/main";
import { TitleH1 } from "./Components/StyledComponents/common";

function App() {
  return (
    <div className="App">
      <div className="appcontainer">
        <header>
          <TitleH1>Process Management</TitleH1>
        </header>
        <Main />
        <footer>footer</footer>
      </div>
    </div>
  );
}

export default App;
