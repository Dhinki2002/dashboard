import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/TestScreenCode/TestScreenCode.css"
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp"; // Import the C++ mode
import "ace-builds/src-noconflict/mode-java"; // Import the Java mode
import "ace-builds/src-noconflict/mode-python"; // Import the Python mode
import "ace-builds/src-noconflict/theme-github"; // Import the Monokai theme


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
            <div className="test-cases-parent">
              <div className="code-snippet">Test cases</div>
              <div className="sub-task-parent">
                <div className="sub-task">Sub-Task</div>
                <div className="div188">
                  <p className="p">1</p>
                  <p className="p">2</p>
                  <p className="p">3</p>
                  <p className="p">4</p>
                  <p className="p">5</p>
                </div>
                <div className="div189">
                  <p className="p">1</p>
                  <p className="p">2</p>
                  <p className="p">3</p>
                  <p className="p">4</p>
                  <p className="p">5</p>
                </div>
                <div className="task">Task</div>
                <div className="result">Result</div>
                <div className="line-parent12">
                  <div className="frame-child190" />
                  <div className="frame-child190" />
                </div>
              </div>
            </div>
          </div>
  )
}

export default Coding