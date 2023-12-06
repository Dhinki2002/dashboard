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
      <div className="flex flex-col items-start justify-start absolute rounded-[var(--br-7xs)] bg-[color:var(--white)] h-[50.59vw] overflow-auto box-border gap-[var(--gap-9xl)] shadow-[-2px_0_rgba(0,0,0,0.15)] px-[2.5vw] py-[1.92vw] left-[45.66vw] top-[0vw]">

        <div className="flex flex-row justify-start items-center gap-[34.33vw] mt-[2vw]">
          <select className="flex flex-row items-center justify-start w-[6.94vw] h-[2.5vw] bg-[color:var(--color-dodgerblue)] rounded-[0.5vw] border-[#605BFF]" onChange={handleLanguageChange}>
            <option value="c_cpp">C++</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="c">C</option>
          </select>
          <div className="flex flex-row justify-start items-start gap-[var(--gap-xl)]">
            <button className="cursor-pointer bg-transparent relative w-[1.59vw] h-[1.59vw] overflow-hidden shrink-0 p-0 border-0" onClick={() => setUserCode("int main() {\n//write your  Cpp code here\n\n\n\n\n \n\n\n\n\n\n\nreturn 0;\n}")}>
              <img className="absolute h-[66.67%] w-[66.63%] max-w-full overflow-hidden max-h-full left-[16.71%] right-[16.67%] inset-y-[16.67%]" alt="" src="/vector26.svg" />
            </button>
            <button className="cursor-pointer bg-transparent relative w-[1.59vw] h-[1.59vw] overflow-hidden shrink-0 p-0 border-0">
              <img className="absolute h-[66.67%] w-[66.63%] max-w-full overflow-hidden max-h-full left-[16.71%] right-[16.67%] inset-y-[16.67%]" alt="" src="/vector27.svg" />
            </button>
          </div>
        </div>
        <div className="max-h-[70vw] overflow-auto rounded-[0.5vw]">
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
      <div className="cursor-pointer flex flex-row bg-transparent absolute items-start justify-start gap-[var(--gap-base)] p-0 border-0 left-[47.97vw] top-[40.66vw]">
        <button className="rounded-[var(--br-5xs)] bg-[color:var(--purple)] border-[color:var(--purple)] box-border w-[22.49vw] h-[3.57vw] overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[var(--padding-xl)] pr-[var(--padding-101xl)] pb-[var(--padding-xl)] pl-[var(--padding-101xl)] border-[0.07vw] border-solid">
          <div className="relative text-[length:var(--font-size-lg)] text-[color:var(--white)] text-left; font-family: var(--font-avenir-lt-std)">Run code</div>
        </button>
        {currentStep < 9 && <button className="cursor-pointer flex flex-row border-[color:var(--purple)] pt-[var(--padding-xl)] pr-[var(--padding-101xl)] pb-[var(--padding-xl)] pl-[var(--padding-101xl)] bg-[color:var(--color-dodgerblue)] rounded-[var(--br-5xs)] box-border w-[22.49vw] h-[3.57vw] overflow-hidden shrink-0 items-center justify-center border-[0.07vw] border-solid" onClick={onNextClick}>
          <div className="relative text-[length:var(--font-size-lg)] text-[color:var(--purple)] text-left; font-family: var(--font-avenir-lt-std)">Next</div>
        </button>}
        {currentStep == 9 && <button className="rounded-[var(--br-5xs)] bg-[color:var(--purple)] border-[color:var(--purple)] box-border w-[22.49vw] h-[3.57vw] overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[var(--padding-xl)] pr-[var(--padding-101xl)] pb-[var(--padding-xl)] pl-[var(--padding-101xl)] border-[0.07vw] border-solid">
          <div className="relative text-[length:var(--font-size-lg)] text-[color:var(--white)] text-left; font-family: var(--font-avenir-lt-std)">Submit</div>
        </button>}
      </div>
    </>

  )
}

export default Coding