import { useCallback, useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import Header from "../../components/Header/Header.js";
import { useNavigate } from "react-router-dom";
import "./ResumePersonalInfo2.css";
import { Helmet } from "react-helmet";
import { useDropzone } from "react-dropzone";
import Resume from "../../components/Resume/Resume.js";
import html2pdf from "html2pdf.js";
import { AiTextBox } from "../../components/AiTextBox/AiTextBox.js";
import Temp from "../../components/Resume/Temp.js";
import Temp2 from "../../components/Resume/Temp2.js";

const ResumePersonalInfo2 = () => {
    const recognition = useRef(null)
    const [inputValues, setInputValues] = useState(Array.from({ length: 19 }, () => []));
    const [noEducation, setNoEducation] = useState(1);
    const [noWork, setNoWork] = useState(1);
    const [noWebsites, setNoWebsites] = useState(1);
    const [noSkills, setNoSkills] = useState(1);
    const [isListening, setIsListening] = useState(false);
    const [totalFields, setTotalFields] = useState(19);
    const [filledFields, setFilledFields] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [imageSrc, setImageSrc] = useState("/images-51@2x.png");
    const [voiceVal, setVoiceVal] = useState(0);
    const [voiceIndex, setVoiceIndex] = useState(0);

    useEffect(() => {
        const wsr = new window.webkitSpeechRecognition();
        wsr.lang = "en-US"
        wsr.onstart = () => {
            setIsListening(true); // Set the state to indicate recognition is active
        };
        wsr.onresult = (event) => {
            const voiceInput = event.results[0][0].transcript; // Get the recognized transcript
            const updatedValues = [...inputValues];

            if (updatedValues[voiceVal][voiceIndex] === undefined) {
                updatedValues[voiceVal][voiceIndex] = " " + voiceInput + ".";
            } else {
                updatedValues[voiceVal][voiceIndex] += " " + voiceInput + "."; // Append the voice input to the value at this index
            }
            console.log(voiceInput)

            setInputValues(updatedValues);

            let id = `${voiceIndex}-${voiceVal}`;

            const textArea = document.getElementById(id); // Replace 'yourTextAreaId' with the actual ID of your textarea
            if (textArea === undefined) {
                textArea.value = voiceInput;
            } else {
                textArea.value += " " + voiceInput + ".";
            }
        };
        wsr.onend = () => {
            setIsListening(false);
            // Set the state back to indicate recognition has ended
        };
        recognition.current = wsr
    }, [])
    const navigate = useNavigate();
    const name = "Kyle ";

    const params = new URLSearchParams(location.search);
    const id = params.get("id");

    const onFrameButtonClick = useCallback(() => {
        navigate("/resume-personal-info");
    }, [navigate]);

    const counter = 2;

    
    const handleInputChange = (event, index, val) => {
        const { value } = event.target;
        const updatedValues = [...inputValues];
        updatedValues[val][index] = value;
        setInputValues(updatedValues);
    };
    const handleCustomInputChange = (value, index, val) => {
        const updatedValues = [...inputValues];
        updatedValues[val][index] = value;
        setInputValues(updatedValues);
    };

    const handleVoiceInput = (index, val) => {
        if (!recognition.current) return
        setVoiceVal(val)
        setVoiceIndex(index)
        if (isListening) {
            recognition.current.stop(); // Start speech recognition
        } else {
            recognition.current.start();
        }
    };

    const handleEducationChange = () => {
        if (noEducation <= 3) {
            setNoEducation((prev) => prev + 1);
            setTotalFields((prev) => prev + 5);
        }
    };

    const handleWorkChange = () => {
        if (noWork <= 3) {
            setNoWork((prev) => prev + 1);
            setTotalFields((prev) => prev + 5);
        }
    };

    const handleWebsiteChange = () => {
        if (noWebsites <= 3) {
            setNoWebsites((prev) => prev + 1);
            setTotalFields((prev) => prev + 2);
        }
    };
    const handleSkillsChange = () => {
        if (noSkills <= 4) {
            setNoSkills((prev) => prev + 1);
            setTotalFields((prev) => prev + 5);
        }
    };

    
    useEffect(() => {
        let count = 0;
        inputValues.forEach((innerArray) => {
            innerArray.forEach((value) => {
                if (value.trim() !== "") {
                    count++;
                }
            });
        });
        setFilledFields(count);
    }, [inputValues]);

    useEffect(() => {
        setPercentage(Math.floor((filledFields / totalFields) * 100));
    }, [filledFields, totalFields]);

    
    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];

        const reader = new FileReader();
        reader.onload = () => {
            setImageSrc(reader.result);
        };
        reader.readAsDataURL(file);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: "image/*" });
    

    const handleDownloadPDF = () => {
        const pageContent = document.querySelector(".rela-block.page").outerHTML; // Select the specific div and get its HTML content
        const htmlWithStyles = `
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="ResumePersonalInfo2.css"> <!-- Include the CSS file -->
      </head>
      <body>
        ${pageContent}
      </body>
    </html>
  `;

        html2pdf().from(htmlWithStyles).save(); // Generate the PDF with the included styling and save it
    };
    return (
      <div className="resume-personal-info2">
        <Helmet>
          <title>Resume Personal Info2</title>
          <meta name="desc" content="Resume Personal Info2" />
        </Helmet>
        <Navbar counter={counter} />
        <Header />
        <div className="resume-personal-info2-child" />
        <div className="image-102-parent">
          <div className="image-102-icon">
            {/* <Resume template={id} values={inputValues} img={imageSrc} /> */}
            {/* <Temp template={id} values={inputValues} img={imageSrc} /> */}
            <Temp2  template={id} values={inputValues} img={imageSrc} />
          </div>
          <div className="frame-parent110">
            <button
              className="lucidelayout-template-parent"
              onClick={onFrameButtonClick}
            >
              <img
                className="lucidelayout-template-icon"
                alt=""
                src="/lucidelayouttemplate.svg"
              />
              <div className="select-template">Select template</div>
            </button>
            <button
              className="download-now-wrapper"
              onClick={handleDownloadPDF}
            >
              <div className="download-now">Add</div>
            </button>
          </div>
        </div>
        <div className="resumeinfocompo">
          <div className="resume-wrapper">
            <div className="resume">Resume</div>
          </div>
          <div className="frame-parent111">
            <div className="frame-parent112">
              <div className="frame-parent113">
                <div className="wrapper">
                  <div className="resume">{percentage}%</div>
                </div>
                <div className="resume-score">Resume score</div>
              </div>
              <div
                className="rectangle-wrapper11"
                style={{ width: `${0.3757 * percentage}vw` }}
              >
                <div className="frame-child78" />
              </div>
            </div>
            <div
              className="frame-parent114"
              style={{ overflow: "auto", height: "40vw" }}
            >
              <div className="personal-details-parent">
                <div className="resume">Personal details</div>
                <div className="frame-parent115">
                  <div className="frame-parent116" {...getRootProps()}>
                    <div className="profile-image-parent">
                      <div className="profile-image">Profile Image</div>
                      <input {...getInputProps()} />
                      <div className="add-your-image">Add your image</div>
                    </div>
                    <div className="frame-wrapper52">
                      <img className="ellipse-parent1" alt="" src={imageSrc} />
                    </div>
                  </div>
                  <div className="frame-parent117">
                    <div className="first-name-parent">
                      <div className="first-name">First Name</div>
                      <input
                        className="frame-child80"
                        placeholder="Enter your first name"
                        type="text"
                        onChange={(e) => handleInputChange(e, 0, 0)}
                      />
                    </div>
                    <div className="first-name-parent">
                      <div className="first-name">Last Name</div>
                      <input
                        className="frame-child80"
                        placeholder="Enter your last name"
                        type="text"
                        onChange={(e) => handleInputChange(e, 0, 1)}
                      />
                    </div>
                  </div>
                  <div className="first-name-parent">
                    <div className="first-name">Email id</div>
                    <input
                      className="frame-child82"
                      placeholder="Enter Institute’s email id"
                      type="email"
                      onChange={(e) => handleInputChange(e, 0, 2)}
                    />
                  </div>
                  <div className="first-name-parent">
                    <div className="first-name">Contact no.</div>
                    <input
                      className="frame-child83"
                      placeholder="Enter your contact no."
                      type="tel"
                      onChange={(e) => handleInputChange(e, 0, 3)}
                    />
                  </div>
                </div>
              </div>
              <div className="personal-details-parent">
                <div className="profile-image-parent">
                  <div className="resume">Professional Summary</div>
                  <div className="a-short-description">
                    A short description about yourself
                  </div>
                </div>
                <AiTextBox
                  containerStyle={{ width: "210%" }}
                  placeholder="E.g. Creative designer"
                  tag="professional-summary"
                  afterAction={{
                    type: "questions",
                    tag: "professional-questions",
                  }}
                  onTextChanged={(val) => handleCustomInputChange(val, 0, 4)}
                />
                {/* <textarea id="0-4" className="frame-child84" placeholder="e.g. Creative designer" onChange={(e) => handleInputChange(e, 0, 4)} /> */}
                {/* <div>
                                <div>
                                    <button className={`${isListening ? "active-mic" : "mic-img"}`} onClick={() => handleVoiceInput(0, 4)}>
                                        <img src="./microphone.svg" alt="joker" style={{ width: "20px", height: "20px" }} />
                                    </button>
                                </div>
                            </div> */}
              </div>
              <div className="personal-details-parent">
                <div className="profile-image-parent">
                  <div className="resume">Education</div>
                  <div className="a-short-description">
                    Mention your work experience
                  </div>
                </div>
                {Array.from({ length: noEducation }).map((_, index) => (
                  <div className="frame-parent115" key={index}>
                    <div className="frame-parent121">
                      <div className="first-name-parent">
                        <div className="first-name">Degree</div>
                        <input
                          className="frame-child85"
                          placeholder="Enter your degree"
                          type="text"
                          onChange={(e) => handleInputChange(e, index, 6)}
                        />
                      </div>
                      <div className="first-name-parent">
                        <div className="first-name">School</div>
                        <input
                          className="frame-child85"
                          placeholder="Enter your school"
                          type="text"
                          onChange={(e) => handleInputChange(e, index, 5)}
                        />
                      </div>
                    </div>
                    <div className="frame-parent121">
                      <div className="first-name-parent">
                        <div className="first-name">Start date*</div>
                        <input
                          className="frame-child85"
                          placeholder="Enter your school"
                          type="date"
                          onChange={(e) => handleInputChange(e, index, 7)}
                        />
                      </div>
                      <div className="first-name-parent">
                        <div className="first-name">End date</div>
                        <input
                          className="frame-child85"
                          placeholder="Enter your school"
                          type="date"
                          onChange={(e) => handleInputChange(e, index, 8)}
                        />
                      </div>
                    </div>
                    <div className="frame-parent123">
                      <div className="first-name-parent">
                        <div className="first-name">Description</div>
                        <AiTextBox
                          containerStyle={{
                            width: "240%",
                            backgroundColor: "#EFF2F9",
                            borderRadius: "4px",
                          }}
                          placeholder="Mention your academic accomplishments here..."
                          tag="educational-summary"
                          afterAction={{
                            type: "questions",
                            tag: "educational-questions",
                          }}
                          onTextChanged={(val) =>
                            handleCustomInputChange(val, index, 9)
                          }
                        />
                        {/* <textarea id={`${index}-9`} className="frame-child89" placeholder="e.g. Enter description" onChange={(e) => handleInputChange(e, index, 9)} />
                                            <div>
                                                <button className={`${isListening ? "active-mic" : "mic-img"}`} onClick={() => handleVoiceInput(index, 9)}>
                                                    <img src="./microphone.svg" alt="joker" style={{ width: "20px", height: "20px" }} />
                                                </button>
                                            </div> */}
                      </div>
                    </div>
                  </div>
                ))}
                {noEducation <= 3 && (
                  <button
                    className="icbaseline-plus-parent2"
                    onClick={handleEducationChange}
                  >
                    <img
                      className="lucidelayout-template-icon"
                      alt=""
                      src="/icbaselineplus3.svg"
                    />
                    <div className="add-education">Add education</div>
                  </button>
                )}
              </div>
              <div className="personal-details-parent">
                <div className="profile-image-parent">
                  <div className="resume">Work Experience</div>
                  <div className="a-short-description">
                    Mention your work experience
                  </div>
                </div>
                {Array.from({ length: noWork }).map((_, index) => (
                  <div className="frame-parent115 " key={index}>
                    <div className="frame-parent121">
                      <div className="first-name-parent">
                        <div className="first-name">Company</div>
                        <input
                          className="frame-child85"
                          placeholder="Enter company"
                          type="text"
                          onChange={(e) => handleInputChange(e, index, 11)}
                        />
                      </div>
                      <div className="first-name-parent">
                        <div className="first-name">Job Profile</div>
                        <input
                          className="frame-child85"
                          placeholder="Enter job profile"
                          type="text"
                          onChange={(e) => handleInputChange(e, index, 10)}
                        />
                      </div>
                    </div>
                    <div className="frame-parent121">
                      <div className="first-name-parent">
                        <div className="first-name">Start date*</div>
                        <input
                          className="frame-child85"
                          placeholder="Enter your school"
                          type="date"
                          onChange={(e) => handleInputChange(e, index, 12)}
                        />
                      </div>
                      <div className="first-name-parent">
                        <div className="first-name">End date</div>
                        <input
                          className="frame-child85"
                          placeholder="Enter your school"
                          type="date"
                          onChange={(e) => handleInputChange(e, index, 13)}
                        />
                      </div>
                    </div>
                    <div className="frame-parent123">
                      <div className="first-name-parent">
                        <div className="first-name">Description</div>
                        <div>
                          <AiTextBox
                            containerStyle={{
                              width: "240%",
                              backgroundColor: "#EFF2F9",
                              borderRadius: "4px",
                            }}
                            placeholder="Mention your achievements here..."
                            tag="work-summary"
                            afterAction={{
                              type: "questions",
                              tag: "work-questions",
                            }}
                            onTextChanged={(val) =>
                              handleCustomInputChange(val, index, 14)
                            }
                          />
                          {/* <textarea id={`${index}-14`} className="frame-child89" placeholder="e.g. Enter description" onChange={(e) => handleInputChange(e, index, 14)} />
                                                <div>
                                                    <button className={`${isListening ? "active-mic" : "mic-img"}`} onClick={() => handleVoiceInput(index, 14)}>
                                                        <img src="./microphone.svg" alt="joker" style={{ width: "20px", height: "20px" }} />
                                                    </button>
                                                </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {noWork <= 3 && (
                  <button
                    className="icbaseline-plus-parent2"
                    onClick={handleWorkChange}
                  >
                    <img
                      className="lucidelayout-template-icon"
                      alt=""
                      src="/icbaselineplus3.svg"
                    />
                    <div className="add-education">Add Experience</div>
                  </button>
                )}
              </div>
              <div className="personal-details-parent">
                <div className="profile-image-parent">
                  <div className="resume">{`Website & Social links`}</div>
                  <div className="a-short-description">
                    You can add your portfolio links
                  </div>
                </div>
                {Array.from({ length: noWebsites }).map((_, index) => (
                  <div className="frame-wrapper53" key={index}>
                    <div className="frame-parent123">
                      <div className="frame-parent121">
                        <div className="first-name-parent">
                          <div className="first-name">Label</div>
                          <input
                            className="frame-child85"
                            placeholder="Enter label"
                            type="text"
                            onChange={(e) => handleInputChange(e, index, 15)}
                          />
                        </div>
                        <div className="first-name-parent">
                          <div className="first-name">Link</div>
                          <input
                            className="frame-child85"
                            placeholder="Enter link"
                            type="text"
                            onChange={(e) => handleInputChange(e, index, 16)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {noWebsites <= 3 && (
                <button
                  className="icbaseline-plus-parent2"
                  onClick={handleWebsiteChange}
                >
                  <img
                    className="lucidelayout-template-icon"
                    alt=""
                    src="/icbaselineplus3.svg"
                  />
                  <div className="add-education">Add link</div>
                </button>
              )}
              <div className="personal-details-parent">
                <div className="profile-image-parent">
                  <div className="resume">{`Skills`}</div>
                  <div className="a-short-description">
                    You can add your skills here
                  </div>
                </div>
                {Array.from({ length: noSkills }).map((_, index) => (
                  <div className="frame-wrapper53" key={index}>
                    <div className="frame-parent123">
                      <div className="frame-parent121">
                        <div className="first-name-parent">
                          <div className="first-name">Skill</div>
                          <input
                            className="frame-child85"
                            placeholder="Enter your skill"
                            type="text"
                            onChange={(e) => handleInputChange(e, index, 17)}
                          />
                        </div>
                        <div className="first-name-parent">
                          <div className="first-name">Skill</div>
                          <input
                            className="frame-child85"
                            placeholder="Enter your skill"
                            type="text"
                            onChange={(e) => handleInputChange(e, index, 18)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {noSkills <= 4 && (
                <button
                  className="icbaseline-plus-parent2"
                  onClick={handleSkillsChange}
                >
                  <img
                    className="lucidelayout-template-icon"
                    alt=""
                    src="/icbaselineplus3.svg"
                  />
                  <div className="add-education">Add Skill</div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ResumePersonalInfo2;
