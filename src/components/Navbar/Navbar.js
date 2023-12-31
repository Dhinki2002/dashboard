import { useState, useCallback } from "react";
import LogoutPopup from "../LogoutPopup/LogoutPopup.js";
import PortalPopup from "../PortalPopup/PortalPopup.js";
import ReferPopup from "../ReferPopup/ReferPopup.js";
import { useNavigate } from "react-router-dom";
// import "./Navbar.css";


const Navbar = ({ counter }) => {
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const [isReferPopupOpen, setReferPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/go-score-dashboardindividual");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/interviews-dashboardindividual");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/resume-dashboardindividual");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/dream-company-dashboardindividual");
  }, [navigate]);

  const onFrameButton4Click = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  const openReferPopup = useCallback(() => {
    setReferPopupOpen(true);
  }, []);

  const closeReferPopup = useCallback(() => {
    setReferPopupOpen(false);
  }, []);

  const onFrameButton7Click = useCallback(() => {
    navigate("/settings2");
  }, [navigate]);

  return (
    <>
      <div className="absolute bg-[color:var(--white)] w-[19.18vw] h-[64.95vw] overflow-hidden text-left text-[length:var(--font-size-xl)] text-[color:var(--black)] left-0 top-0 ">
        <img
          className="absolute left-[calc(50%_-_7.21vw)] w-[11.77vw] h-[2.45vw] object-cover top-[2.91vw]"
          alt=""
          src="/1644088580619-cantileverlogoblack-2@2x.png"
        />
        <div className="absolute flex flex-col items-start justify-start left-0 top-[8.53vw]">
          <button className={counter === 0 ? "relative overflow-hidden shrink-0 cursor-pointer bg-[#efefff] rounded-[0_var(--br-5xs)_var(--br-5xs)_0] w-[19.18vw] h-[4.03vw] p-0 border-0" : "relative overflow-hidden shrink-0 cursor-pointer bg-transparent rounded-[0_var(--br-5xs)_var(--br-5xs)_0] w-[19.18vw] h-[4.03vw] p-0 border-0 "} onClick={onFrameButtonClick}>
            <div className="absolute top-[calc(50%_-_0.79vw)] flex flex-row items-center justify-start gap-[var(--gap-base)] left-[2.91vw]">

              <svg width="1.388vw" fill="none" height="1.388vw" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.86922 6.61758L1.55255 7.38841L1.45838 7.40758C1.31583 7.44542 1.18588 7.52042 1.08179 7.62491C0.977707 7.72941 0.903219 7.85965 0.865934 8.00235C0.82865 8.14505 0.829905 8.29509 0.869572 8.43714C0.909239 8.57919 0.985896 8.70817 1.09172 8.81091L4.94338 12.5601L4.03505 17.8559L4.02422 17.9476C4.01549 18.095 4.0461 18.2421 4.11292 18.3738C4.17974 18.5055 4.28037 18.6171 4.4045 18.6972C4.52862 18.7772 4.67179 18.8228 4.81934 18.8293C4.96689 18.8358 5.11352 18.803 5.24422 18.7342L9.99922 16.2342L14.7434 18.7342L14.8267 18.7726C14.9643 18.8268 15.1138 18.8434 15.2598 18.8207C15.4059 18.7981 15.5434 18.7369 15.658 18.6436C15.7727 18.5503 15.8605 18.4282 15.9124 18.2898C15.9643 18.1513 15.9785 18.0016 15.9534 17.8559L15.0442 12.5601L18.8975 8.81008L18.9625 8.73925C19.0554 8.62488 19.1163 8.48796 19.139 8.34241C19.1617 8.19686 19.1454 8.04789 19.0918 7.91069C19.0382 7.77348 18.9492 7.65294 18.8338 7.56134C18.7184 7.46974 18.5808 7.41036 18.435 7.38925L13.1184 6.61758L10.7417 1.80091C10.6729 1.66136 10.5665 1.54384 10.4344 1.46167C10.3023 1.37949 10.1498 1.33594 9.99422 1.33594C9.83864 1.33594 9.68616 1.37949 9.55406 1.46167C9.42195 1.54384 9.31549 1.66136 9.24672 1.80091L6.86922 6.61758Z" stroke={counter === 0 ? "#605BFF" : "#8D8D8D"} stroke-width="1.8" />
              </svg>



              <div className={counter === 0 ? "relative text-[length:var(--font-size-xl)] text-[color:var(--purple)] text-left font-[bold]" : "relative text-[length:var(--font-size-xl)] text-[color:var(--icon-grey)] text-left"}>My Go Score</div>
            </div>
            <img className="absolute top-[calc(50%_-_1.69vw)] left-[calc(50%_-_8.8vw)] rounded-[var(--br-9xs)] w-[17.59vw] h-[3.44vw] opacity-10" alt="" src="/rectangle-11701.svg" />
          </button>
          <button className={counter === 1 ? "relative overflow-hidden shrink-0 cursor-pointer bg-[#efefff] rounded-[0_var(--br-5xs)_var(--br-5xs)_0] w-[19.18vw] h-[4.03vw] p-0 border-0" : "relative overflow-hidden shrink-0 cursor-pointer bg-transparent rounded-[0_var(--br-5xs)_var(--br-5xs)_0] w-[19.18vw] h-[4.03vw] p-0 border-0 "} onClick={onFrameButton1Click}>
            <div className="absolute top-[calc(50%_-_0.79vw)] flex flex-row items-center justify-start gap-[var(--gap-base)] left-[2.91vw]">
              <svg width="1.388vw" height="1.388vw" viewBox="0 0 21 21" fill={counter === 1 ? "#605BFF" : "#8d8d8d"} xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3_71)">
                  <path d="M2.98911 7.08317C2.98928 6.27335 3.19879 5.47732 3.5973 4.77233C3.99581 4.06735 4.56979 3.47735 5.26354 3.05959C5.95729 2.64183 6.74725 2.41049 7.55676 2.38804C8.36627 2.36558 9.16784 2.55276 9.88369 2.93142C10.5995 3.31008 11.2053 3.86735 11.6423 4.54916C12.0793 5.23097 12.3326 6.01416 12.3777 6.82273C12.4227 7.6313 12.258 8.43778 11.8995 9.16393C11.541 9.89007 11.0009 10.5112 10.3315 10.9671C11.7729 11.4957 13.0232 12.4437 13.9213 13.6889C14.8194 14.9341 15.3244 16.4196 15.3711 17.9541C15.3691 18.1196 15.3033 18.2779 15.1873 18.3959C15.0714 18.514 14.9143 18.5827 14.7489 18.5876C14.5835 18.5926 14.4226 18.5335 14.2998 18.4226C14.177 18.3117 14.1018 18.1576 14.0899 17.9926C14.039 16.3282 13.3421 14.749 12.1468 13.5897C10.9515 12.4304 9.35176 11.782 7.6866 11.782C6.02145 11.782 4.42172 12.4304 3.22643 13.5897C2.03113 14.749 1.33421 16.3282 1.28334 17.9926C1.27479 18.1599 1.20107 18.3171 1.07797 18.4307C0.954866 18.5443 0.792179 18.6051 0.624759 18.6002C0.457338 18.5953 0.2985 18.525 0.182273 18.4044C0.0660458 18.2838 0.00167414 18.1225 0.00294825 17.955C0.0495442 16.4203 0.554404 14.9346 1.45254 13.6892C2.35068 12.4439 3.60099 11.4958 5.04253 10.9671C4.40945 10.5363 3.89137 9.95712 3.53345 9.28015C3.17554 8.60318 2.98866 7.84893 2.98911 7.08317ZM7.68703 3.6665C6.78087 3.6665 5.91183 4.02647 5.27108 4.66722C4.63033 5.30797 4.27036 6.17701 4.27036 7.08317C4.27036 7.98932 4.63033 8.85837 5.27108 9.49912C5.91183 10.1399 6.78087 10.4998 7.68703 10.4998C8.59319 10.4998 9.46223 10.1399 10.103 9.49912C10.7437 8.85837 11.1037 7.98932 11.1037 7.08317C11.1037 6.17701 10.7437 5.30797 10.103 4.66722C9.46223 4.02647 8.59319 3.6665 7.68703 3.6665ZM14.7681 7.08317C14.6417 7.08317 14.5187 7.09171 14.3974 7.10879C14.3127 7.12396 14.2258 7.12191 14.1419 7.10277C14.0581 7.08363 13.9789 7.04779 13.9092 6.9974C13.8395 6.947 13.7806 6.88308 13.7361 6.80944C13.6916 6.7358 13.6624 6.65396 13.6503 6.5688C13.6381 6.48363 13.6432 6.39689 13.6653 6.31374C13.6874 6.23059 13.726 6.15274 13.7788 6.08484C13.8316 6.01694 13.8976 5.96037 13.9728 5.91851C14.0479 5.87665 14.1307 5.85036 14.2163 5.84121C15.0658 5.71838 15.9321 5.88152 16.6787 6.30496C17.4254 6.72839 18.0101 7.38808 18.3407 8.1802C18.6714 8.97232 18.7293 9.8519 18.5053 10.6805C18.2813 11.5091 17.7881 12.2398 17.1034 12.7574C18.1099 13.2081 18.9645 13.9404 19.5641 14.866C20.1637 15.7916 20.4826 16.871 20.4824 17.9738C20.4824 18.1437 20.415 18.3066 20.2948 18.4268C20.1747 18.5469 20.0117 18.6144 19.8418 18.6144C19.6719 18.6144 19.509 18.5469 19.3888 18.4268C19.2687 18.3066 19.2012 18.1437 19.2012 17.9738C19.2011 17.0207 18.894 16.0929 18.3254 15.328C17.7567 14.5631 16.9569 14.0016 16.0442 13.7269L15.5881 13.5902V12.1586L15.9383 11.9801C16.4574 11.7171 16.8728 11.2869 17.1173 10.7589C17.3618 10.2308 17.4213 9.63574 17.286 9.06975C17.1508 8.50376 16.8287 7.99987 16.3719 7.63942C15.915 7.27898 15.35 7.08301 14.7681 7.08317Z" stroke={counter === 1 ? "#605BFF" : "#8D8D8D"} stroke-width="0.2" />
                </g>
                <defs>
                  <clipPath id="clip0_3_71">
                    <rect width="6.388vw" height="5.388vw" fill="white" transform="translate(0 0.25)" />
                  </clipPath>
                </defs>
              </svg>

              <div className={counter === 1 ? "relative text-[length:var(--font-size-xl)] text-[color:var(--purple)] text-left font-[bold]" : "relative text-[length:var(--font-size-xl)] text-[color:var(--icon-grey)] text-left"}>Interviews</div>
            </div>
          </button>
          <button className={counter === 2 ? "relative overflow-hidden shrink-0 cursor-pointer bg-[#efefff] rounded-[0_var(--br-5xs)_var(--br-5xs)_0] w-[19.18vw] h-[4.03vw] p-0 border-0" : "relative overflow-hidden shrink-0 cursor-pointer bg-transparent rounded-[0_var(--br-5xs)_var(--br-5xs)_0] w-[19.18vw] h-[4.03vw] p-0 border-0 "} onClick={onFrameButton2Click}>
            <div className="absolute top-[calc(50%_-_0.79vw)] flex flex-row items-center justify-start gap-[var(--gap-base)] left-[2.91vw]">
              <svg width="1.388vw" height="1.388vw" viewBox="0 0 20 21" fill={counter === 2 ? "#605BFF" : "#8d8d8d"} xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0674 9.48734C14.0674 9.28143 13.9817 9.08395 13.8291 8.93834C13.6766 8.79274 13.4697 8.71094 13.254 8.71094H6.74697C6.53125 8.71094 6.32437 8.79274 6.17183 8.93834C6.01929 9.08395 5.93359 9.28143 5.93359 9.48734C5.93359 9.69326 6.01929 9.89074 6.17183 10.0363C6.32437 10.182 6.53125 10.2638 6.74697 10.2638H13.254C13.4697 10.2638 13.6766 10.182 13.8291 10.0363C13.9817 9.89074 14.0674 9.69326 14.0674 9.48734ZM14.0674 13.6282C14.0674 13.4223 13.9817 13.2248 13.8291 13.0792C13.6766 12.9336 13.4697 12.8518 13.254 12.8518H6.74697C6.53125 12.8518 6.32437 12.9336 6.17183 13.0792C6.01929 13.2248 5.93359 13.4223 5.93359 13.6282C5.93359 13.8341 6.01929 14.0316 6.17183 14.1772C6.32437 14.3228 6.53125 14.4046 6.74697 14.4046H13.254C13.4697 14.4046 13.6766 14.3228 13.8291 14.1772C13.9817 14.0316 14.0674 13.8341 14.0674 13.6282Z" stroke={counter === 2 ? "#605BFF" : "#8D8D8D"} stroke-width="0.2" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.16129 1.125C4.45547 1.125 3.77856 1.40359 3.27947 1.89948C2.78038 2.39537 2.5 3.06794 2.5 3.76923V17.2308C2.5 17.9321 2.78038 18.6046 3.27947 19.1005C3.77856 19.5964 4.45547 19.875 5.16129 19.875H14.8387C15.5445 19.875 16.2214 19.5964 16.7205 19.1005C17.2196 18.6046 17.5 17.9321 17.5 17.2308V6.62308C17.5 6.25673 17.38 5.90096 17.1574 5.60865L14.2561 1.79327C14.0983 1.58569 13.8941 1.41731 13.6597 1.30135C13.4253 1.1854 13.167 1.12504 12.9052 1.125H5.16129ZM3.95161 3.76923C3.95161 3.10577 4.49355 2.56731 5.16129 2.56731H12.1774V6.79519C12.1774 7.19327 12.5026 7.51635 12.9032 7.51635H16.0484V17.2308C16.0484 17.8942 15.5065 18.4327 14.8387 18.4327H5.16129C4.49355 18.4327 3.95161 17.8942 3.95161 17.2308V3.76923Z" stroke={counter === 2 ? "#605BFF" : "#8D8D8D"} stroke-width="0.2" />
              </svg>

              <div className={counter === 2 ? "relative text-[length:var(--font-size-xl)] text-[color:var(--purple)] text-left font-[bold]" : "relative text-[length:var(--font-size-xl)] text-[color:var(--icon-grey)] text-left"}>Resume</div>
            </div>
          </button>
          <button className={counter === 3 ? "relative overflow-hidden shrink-0 cursor-pointer bg-[#efefff] rounded-[0_var(--br-5xs)_var(--br-5xs)_0] w-[19.18vw] h-[4.03vw] p-0 border-0" : "relative overflow-hidden shrink-0 cursor-pointer bg-transparent rounded-[0_var(--br-5xs)_var(--br-5xs)_0] w-[19.18vw] h-[4.03vw] p-0 border-0 "} onClick={onFrameButton3Click}>
            <div className="absolute top-[calc(50%_-_0.79vw)] flex flex-row items-center justify-start gap-[var(--gap-base)] left-[2.91vw]">
              <svg width="1.388vw" height="1.388vw" viewBox="0 0 20 21" fill={counter === 3 ? "#605BFF" : "#8d8d8d"} xmlns="http://www.w3.org/2000/svg">
                <path d="M15.25 14.0417H13.5V15.9861H15.25M15.25 10.1528H13.5V12.0972H15.25M17 17.9306H10V15.9861H11.75V14.0417H10V12.0972H11.75V10.1528H10V8.20833H17M8.25 6.26389H6.5V4.31944H8.25M8.25 10.1528H6.5V8.20833H8.25M8.25 14.0417H6.5V12.0972H8.25M8.25 17.9306H6.5V15.9861H8.25M4.75 6.26389H3V4.31944H4.75M4.75 10.1528H3V8.20833H4.75M4.75 14.0417H3V12.0972H4.75M4.75 17.9306H3V15.9861H4.75M10 6.26389V2.375H1.25V19.875H18.75V6.26389H10Z" stroke={counter === 3 ? "#605BFF" : "#8D8D8D"} stroke-width="0.2" />
              </svg>

              <div className={counter === 3 ? "relative text-[length:var(--font-size-xl)] text-[color:var(--purple)] text-left font-[bold]" : "relative text-[length:var(--font-size-xl)] text-[color:var(--icon-grey)] text-left"}>Dream companies</div>
            </div>
          </button>
          <button className={counter === 4 ? "relative overflow-hidden shrink-0 cursor-pointer bg-[#efefff] rounded-[0_var(--br-5xs)_var(--br-5xs)_0] w-[19.18vw] h-[4.03vw] p-0 border-0" : "relative overflow-hidden shrink-0 cursor-pointer bg-transparent rounded-[0_var(--br-5xs)_var(--br-5xs)_0] w-[19.18vw] h-[4.03vw] p-0 border-0 "} onClick={onFrameButton4Click}>
            <div className="absolute top-[calc(50%_-_0.79vw)] flex flex-row items-center justify-start gap-[var(--gap-base)] left-[2.91vw]">
              <svg width="1.388vw" height="1.388vw" viewBox="0 0 20 21" fill={counter === 4 ? "#605BFF" : "#8d8d8d"} xmlns="http://www.w3.org/2000/svg">
                <path d="M18.2755 12.6608L16.9627 11.5983C17.0249 11.2378 17.0569 10.8696 17.0569 10.5015C17.0569 10.1334 17.0249 9.76533 16.9627 9.40481L18.2755 8.34224C18.3745 8.26199 18.4454 8.1551 18.4787 8.0358C18.512 7.91649 18.5061 7.79041 18.4619 7.67433L18.4439 7.625C18.0825 6.66873 17.5413 5.78226 16.8465 5.00841L16.8104 4.96857C16.7261 4.87474 16.6138 4.80729 16.4882 4.77512C16.3626 4.74294 16.2297 4.74754 16.1069 4.78831L14.4775 5.33667C13.8762 4.8699 13.2048 4.50179 12.4792 4.24374L12.1646 2.6309C12.1408 2.50955 12.0787 2.3979 11.9863 2.3108C11.8939 2.2237 11.7758 2.16526 11.6475 2.14326L11.5934 2.13377C10.5492 1.95541 9.45084 1.95541 8.40663 2.13377L8.35251 2.14326C8.22423 2.16526 8.10606 2.2237 8.0137 2.3108C7.92134 2.3979 7.85916 2.50955 7.83542 2.6309L7.51875 4.25133C6.799 4.50944 6.12874 4.87735 5.53455 5.34047L3.89307 4.78831C3.77034 4.74721 3.63731 4.74245 3.51165 4.77465C3.386 4.80684 3.27366 4.87448 3.18958 4.96857L3.1535 5.00841C2.45953 5.78281 1.91844 6.66913 1.55612 7.625L1.53808 7.67433C1.44789 7.91152 1.52205 8.17716 1.72448 8.34224L3.05329 9.4162C2.99116 9.77292 2.9611 10.1372 2.9611 10.4996C2.9611 10.864 2.99116 11.2283 3.05329 11.5831L1.72448 12.657C1.62546 12.7373 1.55459 12.8442 1.5213 12.9635C1.488 13.0828 1.49386 13.2089 1.53808 13.3249L1.55612 13.3743C1.91889 14.3306 2.45603 15.2129 3.1535 15.9909L3.18958 16.0307C3.27387 16.1245 3.38621 16.192 3.51179 16.2242C3.63737 16.2563 3.7703 16.2517 3.89307 16.211L5.53455 15.6588C6.13181 16.1237 6.79922 16.4918 7.51875 16.748L7.83542 18.3684C7.85916 18.4897 7.92134 18.6014 8.0137 18.6885C8.10606 18.7756 8.22423 18.834 8.35251 18.856L8.40663 18.8655C9.46043 19.0448 10.5396 19.0448 11.5934 18.8655L11.6475 18.856C11.7758 18.834 11.8939 18.7756 11.9863 18.6885C12.0787 18.6014 12.1408 18.4897 12.1646 18.3684L12.4792 16.7555C13.2045 16.4982 13.8797 16.1289 14.4775 15.6626L16.1069 16.211C16.2297 16.2521 16.3627 16.2568 16.4883 16.2246C16.614 16.1924 16.7263 16.1248 16.8104 16.0307L16.8465 15.9909C17.544 15.211 18.0811 14.3306 18.4439 13.3743L18.4619 13.3249C18.5521 13.0916 18.4779 12.8259 18.2755 12.6608ZM15.5397 9.62871C15.5898 9.91523 15.6159 10.2093 15.6159 10.5034C15.6159 10.7975 15.5898 11.0916 15.5397 11.3782L15.4074 12.139L16.9046 13.3515C16.6777 13.8465 16.3912 14.3151 16.0508 14.748L14.1909 14.1238L13.5615 14.6133C13.0825 14.9852 12.5494 15.2774 11.9722 15.4824L11.2086 15.7537L10.8498 17.5942C10.2837 17.6549 9.71225 17.6549 9.14619 17.5942L8.78743 15.7499L8.02983 15.4748C7.45862 15.2698 6.9275 14.9776 6.45249 14.6076L5.82316 14.1162L3.95119 14.7461C3.61047 14.3116 3.32587 13.843 3.09739 13.3496L4.61059 12.1258L4.48031 11.3668C4.43221 11.0841 4.40616 10.7918 4.40616 10.5034C4.40616 10.2131 4.43021 9.92282 4.48031 9.64009L4.61059 8.88111L3.09739 7.65726C3.32387 7.16202 3.61047 6.69525 3.95119 6.26073L5.82316 6.89069L6.45249 6.39925C6.9275 6.02924 7.45862 5.73703 8.02983 5.53211L8.78944 5.26077L9.1482 3.41645C9.71139 3.35573 10.2866 3.35573 10.8518 3.41645L11.2106 5.25698L11.9742 5.52831C12.5494 5.73324 13.0845 6.02545 13.5635 6.39735L14.1929 6.88689L16.0528 6.26263C16.3935 6.69715 16.6781 7.16582 16.9066 7.65915L15.4095 8.87163L15.5397 9.62871ZM10.002 6.97417C8.05388 6.97417 6.47454 8.46937 6.47454 10.3137C6.47454 12.158 8.05388 13.6532 10.002 13.6532C11.9501 13.6532 13.5295 12.158 13.5295 10.3137C13.5295 8.46937 11.9501 6.97417 10.002 6.97417ZM11.5894 11.8165C11.3812 12.0141 11.1337 12.1709 10.8613 12.2777C10.5889 12.3845 10.2969 12.4393 10.002 12.4388C9.40274 12.4388 8.83954 12.2168 8.41464 11.8165C8.20585 11.6194 8.04028 11.3851 7.92746 11.1272C7.81464 10.8693 7.75679 10.5928 7.75725 10.3137C7.75725 9.74635 7.99175 9.21317 8.41464 8.81091C8.83954 8.40865 9.40274 8.18854 10.002 8.18854C10.6013 8.18854 11.1645 8.40865 11.5894 8.81091C11.7982 9.00801 11.9637 9.24225 12.0766 9.50016C12.1894 9.75806 12.2472 10.0345 12.2468 10.3137C12.2468 10.881 12.0123 11.4142 11.5894 11.8165Z" stroke={counter === 4 ? "#605BFF" : "#8D8D8D"} stroke-width="0.2" />
              </svg>

              <div className={counter === 4 ? "relative text-[length:var(--font-size-xl)] text-[color:var(--purple)] text-left font-[bold]" : "relative text-[length:var(--font-size-xl)] text-[color:var(--icon-grey)] text-left"}>Settings</div>
            </div>
          </button>
        </div>
        <button className="cursor-pointer bg-transparent absolute rounded-[0_var(--br-5xs)_var(--br-5xs)_0] w-[19.18vw] h-[4.03vw] overflow-hidden p-0 border-0 left-0 bottom-[2.65vw]" onClick={openLogoutPopup}>
          <div className="absolute top-[calc(50%_-_0.79vw)] flex flex-row items-center justify-start gap-[var(--gap-base)] left-[2.91vw]">
            <img className="relative w-[1.32vw] h-[1.32vw] overflow-hidden shrink-0" alt="" src="/mdilogout.svg" />
            <div className="relative text-[length:var(--font-size-xl)] text-[color:var(--icon-grey)] text-left">Log out</div>
          </div>
        </button>
        <div className="absolute flex flex-col items-start justify-start gap-[var(--gap-xl)] left-[2.25vw] top-[35.12vw]">
          <button className="flex flex-col items-start justify-start cursor-pointer pt-[var(--padding-base)] pr-[var(--padding-sm)] pb-[var(--padding-base)] pl-[var(--padding-sm)] bg-[color:var(--color-lavender)] rounded-[var(--br-xs)] w-[14.68vw] overflow-hidden box-border border-0 " onClick={openReferPopup}>
            <div className="flex flex-col items-start justify-start gap-[var(--gap-3xs)]  ">
              <img
                className="relative w-[2.12vw] h-[2.12vw] overflow-hidden shrink-0"
                alt=""
                src="/lauserfriends.svg"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative text-[length:var(--font-size-base)] tracking-[-0.02em] leading-[1.59vw] text-[color:var(--color-darkslategray-100)] text-left font-[bold]">Refer and earn</div>
                <div className="relative text-[length:var(--font-size-base)] tracking-[-0.02em] leading-[1.59vw] text-[color:var(--color-darkslategray-100)] text-left">Get upto 20% off for both</div>
              </div>
            </div>
          </button>
          <div className="relative w-[14.68vw] h-[10.52vw]">
            <img
              className="absolute w-[14.68vw] h-[10.65vw] left-0 top-0"
              alt=""
              src="/frame-1147.svg"
            />
            <div className="absolute top-[calc(50%_-_3.67vw)] flex flex-col items-center justify-start gap-[var(--gap-lgi)] left-[1.32vw]">
              <div className="flex flex-col items-center justify-start gap-[var(--gap-5xs)]">
                <div className="relative font-[bold]">Upgrade to Pro</div>
                <div className="relative text-[length:var(--font-size-sm)]">
                  Get exclusive dashboard
                </div>
              </div>
              <button
                className="cursor-pointer pt-[var(--padding-xs)] pr-[var(--padding-21xl)] pb-[var(--padding-xs)] pl-[var(--padding-21xl)] bg-[color:var(--purple)] rounded-[var(--br-5xs)] overflow-hidden flex flex-row items-center justify-center border-0"
                onClick={onFrameButton7Click}
              >
                <div className="relative text-[1.05vw] text-[color:var(--white)] text-left">Upgrade Now</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isLogoutPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogoutPopup}
        >
          <LogoutPopup onClose={closeLogoutPopup} />
        </PortalPopup>
      )}
      {isReferPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeReferPopup}
        >
          <ReferPopup onClose={closeReferPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Navbar;
