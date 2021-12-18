import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleClearClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
  const [text, setText] = useState("Enter text here");
  // setText("new text");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "orange",
        }}
      >
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "orange",
            }}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>
          Convert To UpperCase
        </button>

        <button className="btn btn-success mx-2" onClick={handleLoClick}>
          Convert To LowerCase
        </button>

        <button className="btn btn-success mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-success mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-success mx-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "orange",
        }}
      >
        <h1>Your text summary </h1>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above  to preview it here"}
        </p>
      </div>
    </>
  );
}
