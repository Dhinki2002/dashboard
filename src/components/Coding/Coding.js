import { React, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Coding.css"
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

// import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-c_cpp"; // Import the C++ mode
// import "ace-builds/src-noconflict/mode-java"; // Import the Java mode
// import "ace-builds/src-noconflict/mode-python"; // Import the Python mode
// import "ace-builds/src-noconflict/theme-github"; // Import the Monokai theme
// import "ace-builds/src-noconflict/theme-ambiance"


const Coding = ({ currentQuestion, currentStep, onNextClick, onPrevClick }) => {
  const navigate = useNavigate();
  const onFrameButton1Click = useCallback(() => {
    navigate("/test-screen-objective");
  }, [navigate]);
  const [mode, setMode] = useState("c_cpp"); // Default mode is C++

  const onFrameButton2Click = useCallback(() => {
    navigate("/test-screen-objective");
  }, [navigate]);
  const [code, setCode] = useState(
    Array.from({ length: 25 }, () => "").join("\n")
  );
  const [userCode, setUserCode] = useState("int main() {\n//write your  Cpp code here\n\n\n\n\n \n\n\n\n\n\n\nreturn 0;\n}");

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    let boilerplateCode = "";

    switch (selectedLanguage) {
      case "c_cpp":
        boilerplateCode = "int main() {\n//write your  Cpp code here\n\n\n\n\n \n\n\n\n\n\n\nreturn 0;\n}";
        break;
      case "python":
        boilerplateCode = "def main(): \n//write your python code here\n\n\n\n\n \n\n\n\n\n\n\n\n";
        break;
      case "java":
        boilerplateCode = "int main() {\n//write your java code here\n\n\n\n\n \n\n\n\n\n\n\nreturn 0;\n}";
        break;
      case "c":
        boilerplateCode = "int main() {\n//write your C code here\n\n\n\n\n \n\n\n\n\n\n\nreturn 0;\n}";
        break;
      default:
        boilerplateCode = "";
    }

    setUserCode(boilerplateCode);
  };


  return (
    <>
      <div className="frame-parent257">

        <div className="frame-parent258">
          <select className="frame-child189" onChange={handleLanguageChange}>
            <option value="c_cpp">C++</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="c">C</option>
          </select>
          <div className="icoutline-refresh-parent">
            <button className="icoutline-refresh" onClick={() => setUserCode("int main() {\n//write your  Cpp code here\n\n\n\n\n \n\n\n\n\n\n\nreturn 0;\n}")}>
              <img className="vector-icon40" alt="" src="/vector26.svg" />
            </button>
            <button className="icoutline-refresh">
              <img className="vector-icon40" alt="" src="/vector27.svg" />
            </button>
          </div>
        </div>
        <div className="test">
          <CodeMirror
            mode="c_cpp"
            theme={vscodeDark}
            value={userCode} // Set the initial user code here
            onChange={(newCode) => setUserCode(newCode)}
            name="code-editor"
            editorProps={{ $blockScrolling: true }}
            options={{ viewportMargin: 10 }}
            wrapperClassName="custom-code-mirror-wrapper"
            style={{
              height: "30vw", // Change the height value here
              width: "46vw",
              maxWidth: "60vw",
              maxHeight: "80vw",
              borderRadius: "8px",
              fontSize: "20px",

            }}
          />
        </div>


      </div>
      <div className="frame-parent259">
        <button className="run-code-wrapper">
          <div className="run-code">Run code</div>
        </button>
        {currentStep < 9 && <button className="next-container" onClick={onNextClick}>
          <div className="next1">Next</div>
        </button>}
        {currentStep == 9 && <button className="run-code-wrapper">
          <div className="run-code">Submit</div>
        </button>}
      </div>
    </>

  )
}

export default Coding