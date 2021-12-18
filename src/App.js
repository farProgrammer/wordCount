import React, { useState } from "react";

import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "purple";
      showAlert("Dark mode has been enabled", "success");
      document.title = "WordCount-Dark Mode";
      // this is where this setInterval helps you change the title display
      setInterval(() => {
        document.title = "WordCount-A Text Editor easy to use";
      }, 3000);
      setInterval(() => {
        document.title = "WordCount-A very friendly application";
      }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "WordCount-Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title="MyTextEdition" aboutPage="AboutPage" /> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar title="WordCount" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter The text to analyze below"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
