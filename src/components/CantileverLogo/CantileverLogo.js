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
        className="absolute w-[12.51vw] h-[2.63vw] object-cover left-[4.8vw] top-[5.38vw]"
        alt=""
        src={cantileverlogoblack2}
        style={cantileverlogoblack2IconStyle}
      />
    );
  }
);

export default CantileverLogo;
