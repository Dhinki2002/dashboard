import { Link } from "react-router-dom";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PurpleBox from "./PurpleBox";
import CantileverLogo from "./CantileverLogo";
import "./SignUpAsIndividual3.css";
import Select from "react-select";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const skillOptions = [
  { value: "skill1", label: "Skill 1" },
  { value: "skill2", label: "Skill 2" },
  { value: "skill3", label: "Skill 3" },
];
const roleOptions = [
  { value: "Role1", label: "Role1" },
  { value: "Role2", label: "Role2" },
  { value: "Role3", label: "Role3" },
];
const dreamOptions = [
  { value: "Dream1", label: "Dream1" },
  { value: "Dream2", label: "Dream2" },
  { value: "Dream3", label: "Dream3" },
];

const SignUpAsIndividual3 = () => {
  const [selectedDream, setDream] = useState([]);
  const [selectedRoles, setRoles] = useState([]);
  const [selectedSkill, setSkills] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userData);

  const onFrameButtonClick = useCallback(() => {
    
    const payload = {
      selectedSkill: selectedSkill,
      selectedRoles: selectedRoles,
      selectedDream: selectedDream,
    };
    dispatch({ type: "UPDATE_INSTITUTE1", payload: payload });
    dispatch({ type: "INC_COUNTER2" });
    console.log(data);
    console.log(payload);
  }, [selectedSkill, selectedRoles, selectedDream]);

  const handleSkillChange = (selectedOptions) => {
    setSkills(selectedOptions);
  };

  const handleRoleChange = (selectedOptions) => {
    setRoles(selectedOptions);
  };

  const handleDreamChange = (selectedOptions) => {
    setDream(selectedOptions);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      display: "none", 
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#3366ff", 
      color: "#fff", 
      borderRadius: "4px", 
    }),
    multiValueLabel: (provided) => ({
      ...provided,
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      display: "none", 
    }),
  };
  return (
    <div className="sign-up-as-individual3-login">
      <CantileverLogo
        cantileverlogoblack2="/1644088580619-cantileverlogoblack-2@2x.png"
        cantileverlogoblack2IconPosition="absolute"
        cantileverlogoblack2IconTop="94px"
        cantileverlogoblack2IconLeft="84px"
      />
      <div className="your-profile-is-almost-ready-group-login">
        <div className="enter-your-skills-login">Your profile is almost ready!</div>
        <div className="just-a-few1-login">
          Just a few more questions, and we are good to go.
        </div>
      </div>
      <div className="frame-parent48-login">
        <div className="frame-wrapper33-login">
          <div className="enter-your-skills-parent-login">
            <div className="enter-your-skills-login">Enter your skills</div>
            <div>
              <Select
                className="frame-select1-login"
                isMulti
                options={skillOptions}
                value={selectedSkill}
                onChange={handleSkillChange}
                
              />

              <div
                className="selected-skills-container-login"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "var(--gap-xs)",
                }}
              >
                {selectedSkill.map((option) => (
                  <div
                    key={option.value}
                    style={{
                      width: "7.24vw",
                      borderRadius: "0.6vw",
                      border: "0.07vw solid var(--purple)",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      padding: "0.2vw ,0.2vw",
                      marginTop: "0.8vw",
                      fontSize: "var(--font-size-sm)",
                      color: "var(--purple)",
                    }}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper33-login">
          <div className="enter-your-skills-parent-login">
            <div className="enter-your-skills-login">Choose your target role</div>
            <div>
              <Select
                className="frame-select1-login"
                isMulti
                options={roleOptions}
                value={selectedRoles}
                onChange={handleRoleChange}
                closeMenuOnSelect={false}
              />
              <div
                className="selected-skills-container-login"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "var(--gap-xs)",
                }}
              >
                {selectedRoles.map((option) => (
                  <div
                    key={option.value}
                    style={{
                      width: "7.24vw",
                      borderRadius: "0.6vw",
                      border: "0.07vw solid var(--purple)",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      padding: "0.2vw ,0.2vw",
                      marginTop: "0.8vw",
                      fontSize: "var(--font-size-sm)",
                      color: "var(--purple)",
                    }}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper33-login">
          <div className="enter-your-skills-parent-login">
            <div className="enter-your-skills-login">Choose your dream companies</div>
            <div>
              <Select
                className="frame-select1-login"
                isMulti
                options={dreamOptions}
                value={selectedDream}
                onChange={handleDreamChange}
                closeMenuOnSelect={false}
              />
              <div
                className="selected-skills-container-login"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "var(--gap-xs)",
                }}
              >
                {selectedDream.map((option) => (
                  <div
                    key={option.value}
                    style={{
                      width: "7.24vw",
                      borderRadius: "0.6vw",
                      border: "0.07vw solid var(--purple)",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      padding: "0.2vw ,0.2vw",
                      marginTop: "0.8vw",
                      fontSize: "var(--font-size-sm)",
                      color: "var(--purple)",
                    }}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent49-login">
        <button className="frame-wrapper36-login" onClick={onFrameButtonClick}>
          <div className="next-container-login">
            <div className="next1-login">Next</div>
          </div>
        </button>
        <Link className="already-have-an-container9-login" to="/login">
          <span>{`Already have an account? `}</span>
          <span className="sign-in9-login">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpAsIndividual3;
