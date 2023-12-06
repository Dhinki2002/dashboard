import { useState, useCallback } from "react";
import LogoutPopup from "../LogoutPopup/LogoutPopup.js";
import PortalPopup from "../PortalPopup/PortalPopup.js";
import { useNavigate } from "react-router-dom";
import "./AdminNavbar.css";

const AdminNavbar = ({counter}) => {
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/admintest");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/dashboardadmin");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/adminsettings");
  }, [navigate]);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  const onFrameButton4Click = useCallback(() => {
    navigate("/adminsettings2");
  }, [navigate]);

  return (
    <>
      <div className="absolute bg-[color:var(--white)] w-[19.18vw] h-[64.95vw] overflow-hidden text-left text-[length:var(--font-size-xl)] text-[color:var(--color-gray-500)] left-0 top-0; font-family: var(--font-avenir-lt-std)">
        <img
          className="absolute left-[calc(50%_-_7.21vw)] w-[11.77vw] h-[2.45vw] object-cover top-[2.91vw]"
          alt=""
          src="/1644088580619-cantileverlogoblack-2@2x.png"
        />
        <div className="absolute flex flex-col items-start justify-start left-0 top-[8.53vw]">
          <button className="cursor-pointer bg-transparent relative rounded-[0_var(--br-5xs)_var(--br-5xs)_0] w-[19.18vw] h-[4.03vw] overflow-hidden shrink-0 p-0 border-0" onClick={onFrameButtonClick}>
            <div className="absolute top-[calc(50%_-_0.79vw)] flex flex-row items-center justify-start gap-[var(--gap-base)] left-[2.91vw]">
            <svg width="20" fill="none" height="21" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.86922 6.61758L1.55255 7.38841L1.45838 7.40758C1.31583 7.44542 1.18588 7.52042 1.08179 7.62491C0.977707 7.72941 0.903219 7.85965 0.865934 8.00235C0.82865 8.14505 0.829905 8.29509 0.869572 8.43714C0.909239 8.57919 0.985896 8.70817 1.09172 8.81091L4.94338 12.5601L4.03505 17.8559L4.02422 17.9476C4.01549 18.095 4.0461 18.2421 4.11292 18.3738C4.17974 18.5055 4.28037 18.6171 4.4045 18.6972C4.52862 18.7772 4.67179 18.8228 4.81934 18.8293C4.96689 18.8358 5.11352 18.803 5.24422 18.7342L9.99922 16.2342L14.7434 18.7342L14.8267 18.7726C14.9643 18.8268 15.1138 18.8434 15.2598 18.8207C15.4059 18.7981 15.5434 18.7369 15.658 18.6436C15.7727 18.5503 15.8605 18.4282 15.9124 18.2898C15.9643 18.1513 15.9785 18.0016 15.9534 17.8559L15.0442 12.5601L18.8975 8.81008L18.9625 8.73925C19.0554 8.62488 19.1163 8.48796 19.139 8.34241C19.1617 8.19686 19.1454 8.04789 19.0918 7.91069C19.0382 7.77348 18.9492 7.65294 18.8338 7.56134C18.7184 7.46974 18.5808 7.41036 18.435 7.38925L13.1184 6.61758L10.7417 1.80091C10.6729 1.66136 10.5665 1.54384 10.4344 1.46167C10.3023 1.37949 10.1498 1.33594 9.99422 1.33594C9.83864 1.33594 9.68616 1.37949 9.55406 1.46167C9.42195 1.54384 9.31549 1.66136 9.24672 1.80091L6.86922 6.61758Z" stroke={counter===0?"#605BFF":"#8D8D8D"} stroke-width="1.8"/>
</svg>
              <div className={counter===0 ? "relative text-[length:var(--font-size-xl)] text-[color:var(--purple)] text-left font-[bold]; font-family: var(--font-avenir-lt-std)": "relative text-[length:var(--font-size-xl)] text-[color:var(--icon-grey)] text-left; font-family: var(--font-avenir-lt-std)"}>Home</div>
            </div>
            {counter===0&&<div className="absolute top-[calc(50%_-_1.69vw)] left-[calc(50%_-_8.8vw)] rounded-[var(--br-9xs)] bg-[color:var(--purple)] w-[17.59vw] h-[3.44vw] opacity-10" />}
          </button>
          <button className="cursor-pointer bg-transparent relative rounded-[0_var(--br-5xs)_var(--br-5xs)_0] w-[19.18vw] h-[4.03vw] overflow-hidden shrink-0 p-0 border-0" onClick={onFrameButton1Click}>
            <div className="absolute top-[calc(50%_-_0.79vw)] flex flex-row items-center justify-start gap-[var(--gap-base)] left-[2.91vw]">
            <svg width="21" fill="#8d8d8d"height="26" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
              <rect width="11" height="12" fill={counter===1?"#605BFF":"#8d8d8d"} x="3" y="4"/>
  <path
    fill="white"
    stroke={counter===1?"#605BFF":"#8d8d8d"}
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M16.25 5.91667C15.9185 5.91667 15.6005 6.04836 15.3661 6.28278C15.1317 6.5172 15 6.83515 15 7.16667V8H17.5V7.16667C17.5 6.83515 17.3683 6.5172 17.1339 6.28278C16.8995 6.04836 16.5815 5.91667 16.25 5.91667ZM17.5 8.83333H15V15.7083L16.25 17.5833L17.5 15.7083V8.83333ZM2.5 4.25V16.75C2.5 17.0815 2.6317 17.3995 2.86612 17.6339C3.10054 17.8683 3.41848 18 3.75 18H12.9167C13.2482 18 13.5661 17.8683 13.8005 17.6339C14.035 17.3995 14.1667 17.0815 14.1667 16.75V4.25C14.1667 3.91848 14.035 3.60054 13.8005 3.36612C13.5661 3.1317 13.2482 3 12.9167 3H3.75C3.41848 3 3.10054 3.1317 2.86612 3.36612C2.6317 3.60054 2.5 3.91848 2.5 4.25ZM8.33333 6.75C8.33333 6.63949 8.37723 6.53351 8.45537 6.45537C8.53351 6.37723 8.63949 6.33333 8.75 6.33333H12.0833C12.1938 6.33333 12.2998 6.37723 12.378 6.45537C12.4561 6.53351 12.5 6.63949 12.5 6.75C12.5 6.86051 12.4561 6.96649 12.378 7.04463C12.2998 7.12277 12.1938 7.16667 12.0833 7.16667H8.75C8.63949 7.16667 8.53351 7.12277 8.45537 7.04463C8.37723 6.96649 8.33333 6.86051 8.33333 6.75ZM8.75 8C8.63949 8 8.53351 8.0439 8.45537 8.12204C8.37723 8.20018 8.33333 8.30616 8.33333 8.41667C8.33333 8.52717 8.37723 8.63315 8.45537 8.71129C8.53351 8.78943 8.63949 8.83333 8.75 8.83333H12.0833C12.1938 8.83333 12.2998 8.78943 12.378 8.71129C12.4561 8.63315 12.5 8.52717 12.5 8.41667C12.5 8.30616 12.4561 8.20018 12.378 8.12204C12.2998 8.0439 12.1938 8 12.0833 8H8.75ZM8.33333 12.1667C8.33333 12.0562 8.37723 11.9502 8.45537 11.872C8.53351 11.7939 8.63949 11.75 8.75 11.75H12.0833C12.1938 11.75 12.2998 11.7939 12.378 11.872C12.4561 11.9502 12.5 12.0562 12.5 12.1667C12.5 12.2772 12.4561 12.3832 12.378 12.4613C12.2998 12.5394 12.1938 12.5833 12.0833 12.5833H8.75C8.63949 12.5833 8.53351 12.5394 8.45537 12.4613C8.37723 12.3832 8.33333 12.2772 8.33333 12.1667ZM8.75 13.4167C8.63949 13.4167 8.53351 13.4606 8.45537 13.5387C8.37723 13.6168 8.33333 13.7228 8.33333 13.8333C8.33333 13.9438 8.37723 14.0498 8.45537 14.128C8.53351 14.2061 8.63949 14.25 8.75 14.25H12.0833C12.1938 14.25 12.2998 14.2061 12.378 14.128C12.4561 14.0498 12.5 13.9438 12.5 13.8333C12.5 13.7228 12.4561 13.6168 12.378 13.5387C12.2998 13.4606 12.1938 13.4167 12.0833 13.4167H8.75ZM5 12.1667V13.4167H6.25V12.1667H5ZM4.58333 11.3333H6.66667C6.77717 11.3333 6.88315 11.3772 6.96129 11.4554C7.03943 11.5335 7.08333 11.6395 7.08333 11.75V13.8333C7.08333 13.9438 7.03943 14.0498 6.96129 14.128C6.88315 14.2061 6.77717 14.25 6.66667 14.25H4.58333C4.47283 14.25 4.36685 14.2061 4.28871 14.128C4.21057 14.0498 4.16667 13.9438 4.16667 13.8333V11.75C4.16667 11.6395 4.21057 11.5335 4.28871 11.4554C4.36685 11.3772 4.47283 11.3333 4.58333 11.3333ZM7.37792 7.04458C7.45382 6.966 7.49581 6.86075 7.49486 6.7515C7.49392 6.64225 7.45009 6.53775 7.37284 6.46049C7.29559 6.38324 7.19108 6.33942 7.08183 6.33847C6.97258 6.33752 6.86733 6.37952 6.78875 6.45542L5.41667 7.8275L4.87792 7.28875C4.79933 7.21285 4.69408 7.17085 4.58483 7.1718C4.47558 7.17275 4.37108 7.21657 4.29383 7.29383C4.21657 7.37108 4.17275 7.47558 4.1718 7.58483C4.17085 7.69408 4.21285 7.79933 4.28875 7.87792L5.41667 9.00583L7.37792 7.04458Z"
    stroke-width="0.6"
  />
</svg>


              <div className={counter===1 ? "relative text-[length:var(--font-size-xl)] text-[color:var(--purple)] text-left font-[bold]; font-family: var(--font-avenir-lt-std)": "relative text-[length:var(--font-size-xl)] text-[color:var(--icon-grey)] text-left; font-family: var(--font-avenir-lt-std)"}>Tests</div>
            </div>
            {counter===1&&<div className="absolute top-[calc(50%_-_1.69vw)] left-[calc(50%_-_8.8vw)] rounded-[var(--br-9xs)] bg-[color:var(--purple)] w-[17.59vw] h-[3.44vw] opacity-10" />}
          </button>
          <button className="cursor-pointer bg-transparent relative rounded-[0_var(--br-5xs)_var(--br-5xs)_0] w-[19.18vw] h-[4.03vw] overflow-hidden shrink-0 p-0 border-0" onClick={onFrameButton2Click}>
            <div className="absolute top-[calc(50%_-_0.79vw)] flex flex-row items-center justify-start gap-[var(--gap-base)] left-[2.91vw]">
            <svg width="20" height="21" viewBox="0 0 20 21" fill={counter===2?"#605BFF":"#8d8d8d"} xmlns="http://www.w3.org/2000/svg">
<path d="M18.2755 12.6608L16.9627 11.5983C17.0249 11.2378 17.0569 10.8696 17.0569 10.5015C17.0569 10.1334 17.0249 9.76533 16.9627 9.40481L18.2755 8.34224C18.3745 8.26199 18.4454 8.1551 18.4787 8.0358C18.512 7.91649 18.5061 7.79041 18.4619 7.67433L18.4439 7.625C18.0825 6.66873 17.5413 5.78226 16.8465 5.00841L16.8104 4.96857C16.7261 4.87474 16.6138 4.80729 16.4882 4.77512C16.3626 4.74294 16.2297 4.74754 16.1069 4.78831L14.4775 5.33667C13.8762 4.8699 13.2048 4.50179 12.4792 4.24374L12.1646 2.6309C12.1408 2.50955 12.0787 2.3979 11.9863 2.3108C11.8939 2.2237 11.7758 2.16526 11.6475 2.14326L11.5934 2.13377C10.5492 1.95541 9.45084 1.95541 8.40663 2.13377L8.35251 2.14326C8.22423 2.16526 8.10606 2.2237 8.0137 2.3108C7.92134 2.3979 7.85916 2.50955 7.83542 2.6309L7.51875 4.25133C6.799 4.50944 6.12874 4.87735 5.53455 5.34047L3.89307 4.78831C3.77034 4.74721 3.63731 4.74245 3.51165 4.77465C3.386 4.80684 3.27366 4.87448 3.18958 4.96857L3.1535 5.00841C2.45953 5.78281 1.91844 6.66913 1.55612 7.625L1.53808 7.67433C1.44789 7.91152 1.52205 8.17716 1.72448 8.34224L3.05329 9.4162C2.99116 9.77292 2.9611 10.1372 2.9611 10.4996C2.9611 10.864 2.99116 11.2283 3.05329 11.5831L1.72448 12.657C1.62546 12.7373 1.55459 12.8442 1.5213 12.9635C1.488 13.0828 1.49386 13.2089 1.53808 13.3249L1.55612 13.3743C1.91889 14.3306 2.45603 15.2129 3.1535 15.9909L3.18958 16.0307C3.27387 16.1245 3.38621 16.192 3.51179 16.2242C3.63737 16.2563 3.7703 16.2517 3.89307 16.211L5.53455 15.6588C6.13181 16.1237 6.79922 16.4918 7.51875 16.748L7.83542 18.3684C7.85916 18.4897 7.92134 18.6014 8.0137 18.6885C8.10606 18.7756 8.22423 18.834 8.35251 18.856L8.40663 18.8655C9.46043 19.0448 10.5396 19.0448 11.5934 18.8655L11.6475 18.856C11.7758 18.834 11.8939 18.7756 11.9863 18.6885C12.0787 18.6014 12.1408 18.4897 12.1646 18.3684L12.4792 16.7555C13.2045 16.4982 13.8797 16.1289 14.4775 15.6626L16.1069 16.211C16.2297 16.2521 16.3627 16.2568 16.4883 16.2246C16.614 16.1924 16.7263 16.1248 16.8104 16.0307L16.8465 15.9909C17.544 15.211 18.0811 14.3306 18.4439 13.3743L18.4619 13.3249C18.5521 13.0916 18.4779 12.8259 18.2755 12.6608ZM15.5397 9.62871C15.5898 9.91523 15.6159 10.2093 15.6159 10.5034C15.6159 10.7975 15.5898 11.0916 15.5397 11.3782L15.4074 12.139L16.9046 13.3515C16.6777 13.8465 16.3912 14.3151 16.0508 14.748L14.1909 14.1238L13.5615 14.6133C13.0825 14.9852 12.5494 15.2774 11.9722 15.4824L11.2086 15.7537L10.8498 17.5942C10.2837 17.6549 9.71225 17.6549 9.14619 17.5942L8.78743 15.7499L8.02983 15.4748C7.45862 15.2698 6.9275 14.9776 6.45249 14.6076L5.82316 14.1162L3.95119 14.7461C3.61047 14.3116 3.32587 13.843 3.09739 13.3496L4.61059 12.1258L4.48031 11.3668C4.43221 11.0841 4.40616 10.7918 4.40616 10.5034C4.40616 10.2131 4.43021 9.92282 4.48031 9.64009L4.61059 8.88111L3.09739 7.65726C3.32387 7.16202 3.61047 6.69525 3.95119 6.26073L5.82316 6.89069L6.45249 6.39925C6.9275 6.02924 7.45862 5.73703 8.02983 5.53211L8.78944 5.26077L9.1482 3.41645C9.71139 3.35573 10.2866 3.35573 10.8518 3.41645L11.2106 5.25698L11.9742 5.52831C12.5494 5.73324 13.0845 6.02545 13.5635 6.39735L14.1929 6.88689L16.0528 6.26263C16.3935 6.69715 16.6781 7.16582 16.9066 7.65915L15.4095 8.87163L15.5397 9.62871ZM10.002 6.97417C8.05388 6.97417 6.47454 8.46937 6.47454 10.3137C6.47454 12.158 8.05388 13.6532 10.002 13.6532C11.9501 13.6532 13.5295 12.158 13.5295 10.3137C13.5295 8.46937 11.9501 6.97417 10.002 6.97417ZM11.5894 11.8165C11.3812 12.0141 11.1337 12.1709 10.8613 12.2777C10.5889 12.3845 10.2969 12.4393 10.002 12.4388C9.40274 12.4388 8.83954 12.2168 8.41464 11.8165C8.20585 11.6194 8.04028 11.3851 7.92746 11.1272C7.81464 10.8693 7.75679 10.5928 7.75725 10.3137C7.75725 9.74635 7.99175 9.21317 8.41464 8.81091C8.83954 8.40865 9.40274 8.18854 10.002 8.18854C10.6013 8.18854 11.1645 8.40865 11.5894 8.81091C11.7982 9.00801 11.9637 9.24225 12.0766 9.50016C12.1894 9.75806 12.2472 10.0345 12.2468 10.3137C12.2468 10.881 12.0123 11.4142 11.5894 11.8165Z" stroke={counter===2?"#605BFF":"#8D8D8D"} stroke-width="0.2"/>
</svg>
              <div className={counter===2 ? "relative text-[length:var(--font-size-xl)] text-[color:var(--purple)] text-left font-[bold]; font-family: var(--font-avenir-lt-std)": "relative text-[length:var(--font-size-xl)] text-[color:var(--icon-grey)] text-left; font-family: var(--font-avenir-lt-std)"}>Settings</div>
            </div>
            {counter===2&&<div className="absolute top-[calc(50%_-_1.69vw)] left-[calc(50%_-_8.8vw)] rounded-[var(--br-9xs)] bg-[color:var(--purple)] w-[17.59vw] h-[3.44vw] opacity-10" />}
          </button>
        </div>
        <button className="cursor-pointer bg-transparent absolute rounded-[0_var(--br-5xs)_var(--br-5xs)_0] w-[19.18vw] h-[4.03vw] overflow-hidden p-0 border-0 left-0 bottom-[2.65vw]" onClick={openLogoutPopup}>
          <div className="absolute top-[calc(50%_-_0.79vw)] flex flex-row items-center justify-start gap-[var(--gap-base)] left-[2.91vw]">
            <img
              className="relative w-[1.32vw] h-[1.32vw] overflow-hidden shrink-0"
              alt=""
              src="/mdilogout.svg"
            />
            <div className="relative text-[length:var(--font-size-xl)] text-[color:var(--icon-grey)] text-left; font-family: var(--font-avenir-lt-std)">Log out</div>
          </div>
        </button>
        <div className="absolute w-[14.68vw] h-[10.52vw] left-[2.25vw] top-[44.58vw]">
          <img className="absolute w-[14.68vw] h-[10.65vw] left-0 top-0" alt="" src="/frame-11471.svg" />
          <div className="absolute top-[calc(50%_-_3.67vw)] flex flex-col items-center justify-start gap-[var(--gap-lgi)] left-[1.32vw]">
            <div className="flex flex-col items-center justify-start gap-[var(--gap-5xs)]">
              <div className="relative font-[bold]">Upgrade to Pro</div>
              <div className="relative text-[length:var(--font-size-sm)]">
                Get exclusive dashboard
              </div>
            </div>
            <button
              className="cursor-pointer pt-[var(--padding-xs)] pr-[var(--padding-21xl)] pb-[var(--padding-xs)] pl-[var(--padding-21xl)] bg-[color:var(--purple)] rounded-[var(--br-5xs)] overflow-hidden flex flex-row items-center justify-center border-0"
              onClick={onFrameButton4Click}
            >
              <div className="relative text-[1.05vw] text-[color:var(--white)] text-left; font-family: var(--font-avenir-lt-std)">Upgrade Now</div>
            </button>
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
    </>
  );
};

export default AdminNavbar;
