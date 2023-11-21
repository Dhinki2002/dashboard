import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TestScreenCode.css";
import { Helmet } from "react-helmet";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp"; // Import the C++ mode
import "ace-builds/src-noconflict/mode-java"; // Import the Java mode
import "ace-builds/src-noconflict/mode-python"; // Import the Python mode
import "ace-builds/src-noconflict/theme-monokai"; // Import the Monokai theme
import Coding from "../../components/Coding/Coding";


const TestScreenCode = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/test-screen-objective");
  }, [navigate]);
  const [mode, setMode] = useState("c_cpp"); // Default mode is C++

  const onFrameButton2Click = useCallback(() => {
    navigate("/test-screen-objective");
  }, [navigate]);
  const [code, setCode] = useState("#1 Write your code here");

  return (
    <div className="test-screen-code">
      <Helmet>
        <title>Test Screen</title>
        <meta name="desc"
          content="Test Screen" />
      </Helmet>
      <div className="frame-parent254">
        <div className="frame-parent255">
          <div className="statement-container">
            <div className="code-snippet">Statement</div>
          </div>
          <div className="code-snippet">Help</div>
        </div>
        <div className="frame-parent256">
          <Coding/>
          <button className="frame-parent259">
            <div className="run-code-wrapper">
              <div className="run-code">Run code</div>
            </div>
            <button className="next-container" onClick={onFrameButton1Click}>
              <div className="next1">Next</div>
            </button>
          </button>
        </div>
        <div className="q1-problem-statement1">Q.1 Problem statement</div>
      </div>
      <img className="test-screen-code-child" alt="" src="/group-577.svg" />
      <div className="frame-parent260">
        <div className="frame-wrapper98">
          <div className="statement-container">
            <div className="hi-priyanshu1">Hi Priyanshu,</div>
            <div className="welcome-to-fulcrum1">Welcome to Fulcrum!</div>
          </div>
        </div>
        <div className="frame-parent261">
          <div className="oouinext-ltr-container">
            <img className="oouinext-ltr-icon4" alt="" src="/oouinextltr.svg" />
            <div className="code-snippet">Prev problem</div>
          </div>
          <div className="frame-parent262">
            <div className="frame-child192" />
            <div className="frame-child193" />
            <div className="frame-child193" />
            <div className="frame-child193" />
            <div className="frame-child193" />
            <div className="frame-child193" />
          </div>
          <button className="next-problem-group" onClick={onFrameButton2Click}>
            <div className="next-problem1">Next problem</div>
            <img
              className="oouinext-ltr-icon4"
              alt=""
              src="/oouinextltr2.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestScreenCode;
