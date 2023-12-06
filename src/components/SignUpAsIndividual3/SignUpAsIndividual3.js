import { Link } from "react-router-dom";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CantileverLogo from "../CantileverLogo/CantileverLogo.js";
import "./SignUpAsIndividual3.css";
import Select from "react-select";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

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

  function transformToJson(input) {
    const transformed = {
      email: input.email || "",
      password: input.password || "",
      full_name: input.name || "",
    };

    return transformed;
  }

  const onFrameButtonClick = useCallback(() => {
    const payload = {
      selectedSkill: selectedSkill,
      selectedRoles: selectedRoles,
      selectedDream: selectedDream,
    };
    dispatch({ type: "UPDATE_INSTITUTE1", payload: payload });
    dispatch({ type: "INC_COUNTER2" });
   
    console.log(payload);
  }, [selectedSkill, selectedRoles, selectedDream]);

  const transformed = transformToJson(data);
  console.log(transformed);

  axios
    .post("http://localhost:8000/auth/register", transformed)
    .then((response) => {
      // Handle the response from the backend
      
    })
    .catch((error) => {
      // Handle any errors that occur during the request
      // console.error(error.response.data);
    }, [selectedSkill, selectedRoles, selectedDream]); // Add a comma here

  const handleSkillChange = (selectedOptions) => {
    setSkills(selectedOptions);
  } ;

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
    <div className="relative bg-[color:var(--color-white-login)] w-full h-[56.12vw] overflow-hidden text-left text-[length:var(--h1-heavy-size-login)] text-[color:var(--black-login)]; font-family: var(--h1-heavy-login)">
      <CantileverLogo
        cantileverlogoblack2="/1644088580619-cantileverlogoblack-2@2x.png"
        cantileverlogoblack2IconPosition="absolute"
        cantileverlogoblack2IconTop="94px"
        cantileverlogoblack2IconLeft="84px"
      />
      <div className="absolute flex flex-col items-start justify-start gap-[var(--gap-9xs-login)] text-[color:var(--color-gray-400-login)] left-[4.8vw] top-[11.43vw]">
        <div className="relative mb-[0.2vw]">
          Your profile is almost ready!
        </div>
        <div className="relative text-[length:var(--font-size-5xl-login)]">
          Just a few more questions, and we are good to go.
        </div>
      </div>
      <div className="text-[length:var(--body-heavy-size-login)] absolute flex flex-col items-start justify-start gap-[var(--gap-7xl-login)] left-[4.8vw] top-[16.91vw]">
        <div className="flex flex-col items-start justify-start">
          <div className="gap-[var(--gap-5xs-login)] flex flex-col items-start justify-start">
            <div className="relative mb-[0.2vw]">Enter your skills</div>
            <div>
              <Select
                className="rounded-[var(--br-xs-login)] border-[color:var(--color-gainsboro-300-login)] box-border w-[31.2vw] flex flex-row items-center justify-start pt-[var(--padding-base-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-base-login)] pl-[var(--padding-5xl-login)] border-[0.06vw] border-solid"
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
        <div className="flex flex-col items-start justify-start">
          <div className="gap-[var(--gap-5xs-login)] flex flex-col items-start justify-start">
            <div className="relative mb-[0.2vw]">
              Choose your target role
            </div>
            <div>
              <Select
                className="rounded-[var(--br-xs-login)] border-[color:var(--color-gainsboro-300-login)] box-border w-[31.2vw] flex flex-row items-center justify-start pt-[var(--padding-base-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-base-login)] pl-[var(--padding-5xl-login)] border-[0.06vw] border-solid"
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
        <div className="flex flex-col items-start justify-start">
          <div className="gap-[var(--gap-5xs-login)] flex flex-col items-start justify-start">
            <div className="relative mb-[0.2vw]">
              Choose your dream companies
            </div>
            <div>
              <Select
                className="rounded-[var(--br-xs-login)] border-[color:var(--color-gainsboro-300-login)] box-border w-[31.2vw] flex flex-row items-center justify-start pt-[var(--padding-base-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-base-login)] pl-[var(--padding-5xl-login)] border-[0.06vw] border-solid"
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
      <div className="absolute flex flex-col items-center justify-start gap-[var(--gap-33xl-login)] text-[length:var(--font-size-base-login)] left-[4.8vw] top-[46.8vw]">
        <button className="flex flex-row items-end justify-center cursor-pointer pt-[var(--padding-xl-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-xl-login)] pl-[var(--padding-5xl-login)] bg-[color:var(--purple-login)] rounded-[var(--br-xs-login)] w-[31.2vw] items-center justify-between box-border border-0" onClick={onFrameButtonClick}>
          <div className="flex flex-row items-end justify-center">
            <div className="text-[length:var(--body-heavy-size-login)] relative text-[color:var(--color-white-login)] text-left; font-family: var(--h1-heavy-login)">Next</div>
          </div>
        </button>
        <Link className="cursor-pointer no-underline relative text-inherit mt-[-2vw]" to="/login">
          <span>{`Already have an account? `}</span>
          <span className="text-[color:var(--purple-login)]">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpAsIndividual3;
