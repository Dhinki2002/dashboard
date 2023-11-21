import { memo, useMemo } from "react";
import "./CantileverLogo.css";

const CantileverLogo = memo(
  ({
    cantileverlogoblack2,
    cantileverlogoblack2IconPosition,
    cantileverlogoblack2IconTop,
    cantileverlogoblack2IconLeft,
  }) => {
    const cantileverlogoblack2IconStyle = useMemo(() => {
      return {
        position: cantileverlogoblack2IconPosition,
        top: cantileverlogoblack2IconTop,
        left: cantileverlogoblack2IconLeft,
      };
    }, [
      cantileverlogoblack2IconPosition,
      cantileverlogoblack2IconTop,
      cantileverlogoblack2IconLeft,
    ]);

    return (
      <img
        className="cantileverlogoblack-2-icon-login"
        alt=""
        src={cantileverlogoblack2}
        style={cantileverlogoblack2IconStyle}
      />
    );
  }
);

export default CantileverLogo;
