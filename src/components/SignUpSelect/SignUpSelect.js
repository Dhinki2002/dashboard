import { memo } from "react";
import "./SignUpSelect.css";

const SignUpSelect = memo(() => {
  return (
    <button className="frame-parent52-login">
      <div className="material-symbolsperson-outlin-parent-login">
        <img
          className="material-symbolsperson-outlin-icon-login"
          alt=""
          src="/materialsymbolspersonoutline.svg"
        />
        <div className="as-an-individual-login">As an Individual</div>
      </div>
      <img
        className="teenyiconstick-circle-solid2-login"
        alt=""
        src="/teenyiconstickcirclesolid.svg"
      />
    </button>
  );
});

export default SignUpSelect;
