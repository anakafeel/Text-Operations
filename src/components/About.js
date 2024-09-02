import React from "react";

export default function About(props) {

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };
  let myStyle1 = {
    color: props.mode === "dark" ? "white" : "#042743",
  };

  return (
    <div>
      <h1 style={myStyle1}>About Text Operations</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <strong>Text Operations Utility Overview</strong>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              Text Utility Operations is a versatile web application designed to
              analyze and manipulate user-provided text. It allows users to
              input any text and perform a variety of operations such as
              counting words or characters, changing the case, removing extra
              spaces, reversing the text, or formatting it for readability. The
              application processes the text in real-time and delivers instant
              results, providing an efficient tool for anyone looking to
              analyze, clean up, or customize their text for different purposes.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              Text Operations is a free-to-use web application created by Saim
              Hashmi. Designed with simplicity and efficiency in mind, it offers
              a range of text manipulation tools without any cost or
              restrictions. Users can instantly analyze and modify their text
              with various features, all in one place. Whether you're a student,
              writer, or developer, Text Operations is an accessible tool to
              streamline your text-processing needs
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <strong>Browser Compatibility and Responsiveness</strong>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              Text Operations is fully responsive and compatible across
              all modern browsers, ensuring a seamless experience whether you're
              using it on a desktop, tablet, or smartphone. The application
              automatically adjusts its layout to fit any screen size, making it
              easy to use on the go. Developed with cross-browser compatibility
              in mind, Text Operations performs smoothly on Chrome,
              Firefox, Safari, Edge, and more, offering a consistent and
              reliable tool for text analysis and manipulation no matter your
              device or browser.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
