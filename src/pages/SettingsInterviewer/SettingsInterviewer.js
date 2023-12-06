import { useCallback } from "react";
import InterviewerNavbar from '../../components/InterviewerNavbar/InterviewerNavbar.js';
import Header from '../../components/Header/Header.js';
import InterviewerSettingsPane from '../../components/InterviewerSettingsPane/InterviewerSettingsPane.js';
import { useNavigate, Link } from "react-router-dom";
// import "../Settings/Settings.css";
import { useState } from "react";
import { Helmet } from "react-helmet";

const InterviewerSettings = () => {
  const counter = 2;
  const settingsCounter = 0;

  const navigate = useNavigate();

  const [name, setName] = useState("Priyanshu Gupta");
  const [email, setEmail] = useState("87priyanshugupta@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("7727042145");
  const [collegeName, setcollegeName] = useState("Indian Institute of Technology");
  const [year, setYear] = useState("2025");
  const [targetRoles, setTargetRoles] = useState("SDE-1");
  const [editMode, setEditMode] = useState(false);
  const [skills, setSkills] = useState(["Machine learning"]);
  const [newSkill, setNewSkill] = useState("");

  
  const handleAddSkill = () => {
    setSkills([...skills, newSkill]);

    setNewSkill("");
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleEditClick = () => {
    setEditMode(!editMode);
  };


  return (
    <div className="relative bg-[color:var(--color-ghostwhite-100)] w-full h-[64.95vw] overflow-hidden text-left text-[length:var(--font-size-5xl)] text-[color:var(--black)]">
      <Helmet>
        <title>Settings Individual</title>
        <meta name="desc" content="Settings Individual" />
      </Helmet>
      <InterviewerNavbar counter={counter} />
      <Header />
      <div className="absolute bg-[color:var(--white)] rounded-[var(--br-base)] w-[76.59vw] h-[48.54vw] overflow-hidden left-[21.03vw] top-[14.29vw] ">
        <InterviewerSettingsPane settingsCounter={settingsCounter} />
        <div className="absolute tracking-[-0.02em] leading-[2.78vw] font-[bold] left-[19.18vw] top-[2.12vw]">My Profile</div>
        <div className="flex items-start justify-start  absolute flex-row gap-[var(--gap-118xl)] text-[length:var(--font-size-lg)] left-[19.71vw] top-[7.01vw]">
          <div className="flex flex-col items-start justify-start gap-[var(--gap-xl)]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold] ">Name</div>
              {editMode ? (
                <input
                  className="relative tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] w-[12vw] font-[light] rounded-[0.8vw] "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <div className="relative tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] w-[12vw] font-[light] rounded-[0.8vw] ">{name}</div>
              )}
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold] ">Email address</div>
              {editMode ? (
                <input
                  className="relative tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] w-[12vw] font-[light] rounded-[0.8vw] "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <div className="relative tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] w-[12vw] font-[light] rounded-[0.8vw] ">{email}</div>
              )}
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold] ">Phone number</div>
              {editMode ? (
                <input
                  className="relative tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] w-[12vw] font-[light] rounded-[0.8vw] "
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              ) : (
                <div className="relative tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] w-[12vw] font-[light] rounded-[0.8vw] ">{phoneNumber}</div>
              )}
            </div>
            <div className="w-[20.04vw] flex flex-col items-start justify-start">
              <div className="w-[20.04vw] flex flex-row items-start justify-between">
                <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold] ">Password</div>
                <Link
                  to="/"
                  className="underline relative text-[length:var(--font-size-sm)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)]"
                  onClick={() => navigate("/")}
                >
                  Change Password
                </Link>
              </div>
              <div className="relative w-[20.04vw] h-[2.78vw] mt-[-0.26vw] text-[length:var(--font-size-17xl)] text-[color:var(--icon-grey)]">
                <div className="absolute top-[-0.26vw] tracking-[-0.02em] leading-[2.78vw] left-0">..............</div>
                <img
                  className="absolute w-[1.32vw] h-[1.32vw] overflow-hidden left-[18.19vw] top-[0.73vw]"
                  alt=""
                  src="/carbonviewoff.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold] ">College Name</div>
              {editMode ? (
                <input
                  className="relative tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] w-[12vw] font-[light] rounded-[0.8vw] "
                  value={collegeName}
                  onChange={(e) => setcollegeName(e.target.value)}
                />
              ) : (
                <div className="relative tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] w-[12vw] font-[light] rounded-[0.8vw] ">{collegeName}</div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[var(--gap-xl)]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold] ">Graduation year</div>
              {editMode ? (
                <input
                  className="relative tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] w-[12vw] font-[light] rounded-[0.8vw] "
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              ) : (
                <div className="relative tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] w-[12vw] font-[light] rounded-[0.8vw] ">{year}</div>
              )}
            </div>
            <div className="flex items-start justify-start  flex-col gap-[var(--gap-9xs)]">
              <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold] ">Skills</div>
              <div className="flex items-start justify-start  w-[20.24vw] flex-row flex-wrap gap-[var(--gap-xs)] text-[length:var(--font-size-sm)] text-[color:var(--purple)]">
                {skills.map((skill, index) => (
                  <div key={index} className="rounded-[var(--br-5xl)] border-[color:var(--purple)] overflow-hidden flex flex-row items-end justify-center pt-[var(--padding-6xs)] pr-[var(--padding-2xs)] pb-[var(--padding-6xs)] pl-[var(--padding-2xs)] border-[0.07vw] border-solid">
                    <div className="relative inline-block w-[7.21vw] h-[0.99vw] shrink-0 font-[light]">{skill}</div>
                    {editMode && (
                      <img
                        className="ml-[0.2vw] mb-[0.15vw]"
                        alt=""
                        src="/vector100.svg"
                        onClick={() => handleDeleteSkill(index)}
                      />
                    )}
                  </div>
                ))}
                {editMode && (
                  <input
                    className="relative tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] w-[12vw] font-[light] rounded-[0.8vw] "
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleAddSkill();
                      }
                    }}
                    placeholder="Enter Skill then press Enter"
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold] ">Target Role</div>
              {editMode ? (
                <input
                  className="relative tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] w-[12vw] font-[light] rounded-[0.8vw] "
                  value={targetRoles}
                  onChange={(e) => setTargetRoles(e.target.value)}
                />
              ) : (
                <div className="relative tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] w-[12vw] font-[light] rounded-[0.8vw] ">{targetRoles}</div>
              )}
            </div>
            <div className="flex items-start justify-start  w-[20.24vw] flex-col gap-[var(--gap-5xs)]">
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold] ">Delete your acccount</div>
                <div className="relative text-[length:var(--font-size-base)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] mt-[-0.26vw] ">
                  This will permanently delete your account.
                </div>
              </div>
              <button className="cursor-pointer pt-[var(--padding-4xs)] pr-[var(--padding-xs)] pb-[var(--padding-4xs)] pl-[var(--padding-xs)] bg-[color:var(--color-crimson-200)] rounded-[var(--br-5xs)] flex-row border-0  flex items-start justify-start">
                <div className="relative text-[length:var(--font-size-base)] text-[color:var(--danger)] text-left ">Delete Account</div>
              </button>
            </div>
          </div>
        </div>
        <button className="absolute bg-[color:var(--white)] cursor-pointer pt-[var(--padding-9xs)] pr-[var(--padding-base)] pb-[var(--padding-9xs)] pl-[var(--padding-base)] rounded-[var(--br-xs)] shadow-[-0.13vw_-0.13vw_0.13vw_rgba(0,0,0,0.08),0.13vw_0.13vw_0.13vw_rgba(0,0,0,0.08)] flex flex-row items-start justify-start border-0 left-[68.85vw] top-[1.85vw] " onClick={handleEditClick}>
          <div className="flex flex-row items-center justify-start gap-[var(--gap-5xs)]">
            <img className="relative w-[1.06vw] h-[1.06vw] overflow-hidden shrink-0" alt="" src="/tableredit1.svg" />
            <div className="relative text-[length:var(--font-size-base)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] text-left">Edit</div>
          </div>
        </button>
      </div>
      <div className="absolute text-[length:var(--font-size-9xl)] tracking-[-0.02em] leading-[2.78vw] font-[bold] left-[21.03vw] top-[10.45vw]">Settings</div>
    </div>
  );
};

export default InterviewerSettings;