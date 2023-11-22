import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/TestScreenCode/TestScreenCode.css"
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp"; // Import the C++ mode
import "ace-builds/src-noconflict/mode-java"; // Import the Java mode
import "ace-builds/src-noconflict/mode-python"; // Import the Python mode
import "ace-builds/src-noconflict/theme-github"; // Import the Monokai theme
import "ace-builds/src-noconflict/theme-ambiance"


const Coding = () => {
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
    <>
    <div className="frame-parent257">
            
            <div className="frame-parent258">
              <select className="frame-child189" onChange={(e) => setMode(e.target.value)}>
                <option value="c_cpp">C++</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="c">C</option>
              </select>
              <div className="icoutline-refresh-parent">
                <button className="icoutline-refresh" onClick={() => setCode("#1 Write your code here")}>
                  <img className="vector-icon40" alt="" src="/vector26.svg" />
                </button>
                <button className="icoutline-refresh">
                  <img className="vector-icon40" alt="" src="/vector27.svg" />
                </button>
              </div>
            </div>
            <AceEditor
              mode="c_cpp" // Set the default mode to C++
              theme="github" // Use the Monokai theme
              value={code}
              onChange={(newCode) => setCode(newCode)}
              name="code-editor"
              editorProps={{ $blockScrolling: true }}
              style={{ width: "100%", maxWidth: "800px", borderRadius:"0.5vw",}}
            />
            
          </div>
          <button className="frame-parent259">
            <div className="run-code-wrapper">
              <div className="run-code">Run code</div>
            </div>
            <button className="next-container" onClick={onFrameButton1Click}>
              <div className="next1">Next</div>
            </button>
          </button>
          </>

  )
}

export default Coding