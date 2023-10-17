import { useCallback } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "./ResumePersonalInfo2.css";

const ResumePersonalInfo2 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/resume-personal-info");
  }, [navigate]);

  const counter=2;

  return (
    <div className="resume-personal-info2">
      <Navbar counter={counter}/>
      <Header />
      <div className="resume-personal-info2-child" />
      <div className="image-102-parent">
        <img className="image-102-icon" alt="" src="/image-102@2x.png" />
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
          <button className="download-now-wrapper">
            <div className="download-now">Download now</div>
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
                <div className="resume">15%</div>
              </div>
              <div className="resume-score">Resume score</div>
            </div>
            <div className="rectangle-wrapper11">
              <div className="frame-child78" />
            </div>
          </div>
          <div className="frame-parent114" style={{ overflow: "auto", maxHeight: "40vw" }}>
            <div className="personal-details-parent">
              <div className="resume">Personal details</div>
              <div className="frame-parent115">
                <button className="frame-parent116">
                  <div className="profile-image-parent">
                    <div className="profile-image">Profile Image</div>
                    <div className="add-your-image">Add your image</div>
                  </div>
                  <div className="frame-wrapper52">
                    <div className="ellipse-parent1">
                      <div className="frame-child79" />
                      <img
                        className="images-5-icon"
                        alt=""
                        src="/images-51@2x.png"
                      />
                    </div>
                  </div>
                </button>
                <div className="frame-parent117">
                  <div className="first-name-parent">
                    <div className="first-name">First Name</div>
                    <input
                      className="frame-child80"
                      placeholder="Enter your first name"
                      type="text"
                    />
                  </div>
                  <div className="first-name-parent">
                    <div className="first-name">Last Name</div>
                    <input
                      className="frame-child80"
                      placeholder="Enter your last name"
                      type="text"
                    />
                  </div>
                </div>
                <div className="first-name-parent">
                  <div className="first-name">Email id</div>
                  <input
                    className="frame-child82"
                    placeholder="Enter Institute’s email id"
                    type="email"
                  />
                </div>
                <div className="first-name-parent">
                  <div className="first-name">Contact no.</div>
                  <input
                    className="frame-child83"
                    placeholder="Enter your contact no."
                    type="tel"
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
              <textarea
                className="frame-child84"
                placeholder="e.g. Creative designer"
              />
            </div>
            <div className="personal-details-parent">
              <div className="profile-image-parent">
                <div className="resume">Education</div>
                <div className="a-short-description">
                  Mention your work experience
                </div>
              </div>
              <div className="frame-parent115">
                <div className="frame-parent121">
                  <div className="first-name-parent">
                    <div className="first-name">School</div>
                    <input
                      className="frame-child85"
                      placeholder="Enter your school"
                      type="text"
                    />
                  </div>
                  <div className="first-name-parent">
                    <div className="first-name">Degree</div>
                    <input
                      className="frame-child85"
                      placeholder="Enter your school"
                      type="text"
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
                    />
                  </div>
                  <div className="first-name-parent">
                    <div className="first-name">End date</div>
                    <input
                      className="frame-child85"
                      placeholder="Enter your school"
                      type="date"
                    />
                  </div>
                </div>
                <div className="frame-parent123">
                  <div className="first-name-parent">
                    <div className="first-name">Description</div>
                    <textarea
                      className="frame-child89"
                      placeholder="e.g. Enter description"
                    />
                  </div>
                  <button className="icbaseline-plus-parent2">
                    <img
                      className="lucidelayout-template-icon"
                      alt=""
                      src="/icbaselineplus3.svg"
                    />
                    <div className="add-education">Add education</div>
                  </button>
                </div>
              </div>
            </div>
            <div className="personal-details-parent">
              <div className="profile-image-parent">
                <div className="resume">Work Experience</div>
                <div className="a-short-description">
                  Mention your work experience
                </div>
              </div>
              <div className="frame-parent115">
                <div className="frame-parent121">
                  <div className="first-name-parent">
                    <div className="first-name">Job Profile</div>
                    <input
                      className="frame-child85"
                      placeholder="Enter your school"
                      type="text"
                    />
                  </div>
                  <div className="first-name-parent">
                    <div className="first-name">Company</div>
                    <input
                      className="frame-child85"
                      placeholder="Enter your school"
                      type="text"
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
                    />
                  </div>
                  <div className="first-name-parent">
                    <div className="first-name">End date</div>
                    <input
                      className="frame-child85"
                      placeholder="Enter your school"
                      type="date"
                    />
                  </div>
                </div>
                <div className="frame-parent123">
                  <div className="first-name-parent">
                    <div className="first-name">Description</div>
                    <textarea
                      className="frame-child89"
                      placeholder="e.g. Enter description"
                    />
                  </div>
                  <button className="icbaseline-plus-parent2">
                    <img
                      className="lucidelayout-template-icon"
                      alt=""
                      src="/icbaselineplus3.svg"
                    />
                    <div className="add-education">Add education</div>
                  </button>
                </div>
              </div>
            </div>
            <div className="personal-details-parent">
              <div className="profile-image-parent">
                <div className="resume">{`Website & Social links`}</div>
                <div className="a-short-description">
                  You can add your portfolio links
                </div>
              </div>
              <div className="frame-wrapper53">
                <div className="frame-parent123">
                  <div className="frame-parent121">
                    <div className="first-name-parent">
                      <div className="first-name">Label</div>
                      <input
                        className="frame-child85"
                        placeholder="Enter your school"
                        type="text"
                      />
                    </div>
                    <div className="first-name-parent">
                      <div className="first-name">Link</div>
                      <input
                        className="frame-child85"
                        placeholder="Enter your school"
                        type="text"
                      />
                    </div>
                  </div>
                  <button className="icbaseline-plus-parent2">
                    <img
                      className="lucidelayout-template-icon"
                      alt=""
                      src="/icbaselineplus3.svg"
                    />
                    <div className="add-education">Add more link</div>
                  </button>
                </div>
              </div>
            </div>
            <div className="personal-details-parent">
              <div className="profile-image-parent">
                <div className="resume">Skills</div>
                <div className="a-short-description">
                  You can add your skills
                </div>
              </div>
              <div className="frame-wrapper54">
                <div className="frame-parent123">
                  <div className="frame-parent134">
                    <div className="frame-wrapper55">
                      <div className="icbaseline-plus-parent5">
                        <img
                          className="icbaseline-plus-icon7"
                          alt=""
                          src="/icbaselineplus4.svg"
                        />
                        <div className="teamwork-skill-wrapper">
                          <div className="first-name">Teamwork skill</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-wrapper55">
                      <div className="icbaseline-plus-parent5">
                        <img
                          className="icbaseline-plus-icon7"
                          alt=""
                          src="/icbaselineplus4.svg"
                        />
                        <div className="teamwork-skill-wrapper">
                          <div className="first-name">Teamwork skill</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-wrapper55">
                      <div className="icbaseline-plus-parent5">
                        <img
                          className="icbaseline-plus-icon7"
                          alt=""
                          src="/icbaselineplus4.svg"
                        />
                        <div className="teamwork-skill-wrapper">
                          <div className="first-name">Teamwork skill</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-wrapper55">
                      <div className="icbaseline-plus-parent5">
                        <img
                          className="icbaseline-plus-icon7"
                          alt=""
                          src="/icbaselineplus4.svg"
                        />
                        <div className="teamwork-skill-wrapper">
                          <div className="first-name">Teamwork skill</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-wrapper55">
                      <div className="icbaseline-plus-parent5">
                        <img
                          className="icbaseline-plus-icon7"
                          alt=""
                          src="/icbaselineplus4.svg"
                        />
                        <div className="teamwork-skill-wrapper">
                          <div className="first-name">Teamwork skill</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-wrapper55">
                      <div className="icbaseline-plus-parent5">
                        <img
                          className="icbaseline-plus-icon7"
                          alt=""
                          src="/icbaselineplus4.svg"
                        />
                        <div className="teamwork-skill-wrapper">
                          <div className="first-name">Teamwork skill</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="icbaseline-plus-parent2">
                    <img
                      className="lucidelayout-template-icon"
                      alt=""
                      src="/icbaselineplus3.svg"
                    />
                    <div className="add-education">Add more skills</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePersonalInfo2;
