import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
/* import { motion } from "framer-motion"; */

/* IMPORTING FOR REACT ROUTER (V6) */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  /* DARK MODE USESTATE */
  const [mode, setMode] = useState("light");

  /* ALERT USESTATE */
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#003559";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FFFFFC";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* V6 REACT ROUTER TEMPLATE SYNTAX */}
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  /* heading="Try Text Operations :" */
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
