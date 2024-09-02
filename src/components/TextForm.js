import React, { useState } from "react";

export default function TextForm(props) {
  /* ONCLICK ARROW FUNCTIONS - FOR BUTTONS */
  const upperclick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };

  const lowerclick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };

  const clearclick = () => {
    setText("");
    props.showAlert("Text has been cleared!", "success");
  };

  const extraspace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces have been removed!", "success");
  };

  const copytext = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been copied to clipboard!", "success");
  };

  /* ONCHANGE FUNCTION (TO LISTEN FOR TEXT INPUT) */
  const onchangehandler = (event) => {
    setText(event.target.value);
  };

  /* USE STATE TEMPLATE */
  const [text, setText] = useState("");

  return (
    <>
      {/* TEXT AREA */}
      <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1 className="my-3">{props.heading}</h1>
        <textarea
          className={`form-control ${props.mode === 'dark' ? 'dark-mode' : ''}`}  // Conditional class
          value={text}
          onChange={onchangehandler}
          style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
          id="Box"
          rows="6"
          placeholder="Enter your text here"
        ></textarea>
      </div>

      {/* BUTTONS */} 
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={upperclick}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={lowerclick}>Convert to lowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copytext}>Copy text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={extraspace}>Remove Extra Spaces</button>
      <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={clearclick}>Clear Text</button>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your Text Summary:</h2>
        <p>{text.split(/\s+/).filter((word) => word.length > 0).length} words and {text.length} characters</p>
      </div>
    </>
  );
}
