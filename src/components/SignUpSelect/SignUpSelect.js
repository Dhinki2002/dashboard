import { memo } from "react";
import "./SignUpSelect.css";

const SignUpSelect = memo(() => {
  return (
    <button className="cursor-pointer border-[color:var(--purple-login)] bg-[color:var(--purple-login)] relative rounded-[var(--br-xs-login)] box-border w-[14.91vw] h-[8.4vw] overflow-hidden shrink-0 p-0 border-[0.12vw] border-solid">
      <div className="absolute flex flex-col items-start justify-start gap-[var(--gap-base-login)] left-[1.2vw] top-[1.66vw]">
        <img
          className="relative w-[2.52vw] h-[2.52vw] overflow-hidden shrink-0"
          alt=""
          src="/materialsymbolspersonoutline.svg"
        />
        <div className="relative text-[length:var(--font-size-5xl-login)] text-[color:var(--color-white-login)] text-left; font-family: var(--h1-heavy-login)">As an Individual</div>
      </div>
      <img
        className="absolute w-[1.6vw] h-[1.6vw] overflow-hidden left-[12.39vw] top-[0.91vw]"
        alt=""
        src="/teenyiconstickcirclesolid.svg"
      />
    </button>
  );
});

export default SignUpSelect;
