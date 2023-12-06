import { memo, useMemo } from "react";
import "./WelcomeText.css";

const WelcomeText = memo(
  ({
    frameDivPosition,
    frameDivTop,
    frameDivLeft,
    welcomeToFulcrumColor,
    yourPathToColor,
    welcomeToFulcrum,
  }) => {
    const frameDivStyle = useMemo(() => {
      return {
        position: frameDivPosition,
        top: frameDivTop,
        left: frameDivLeft,
      };
    }, [frameDivPosition, frameDivTop, frameDivLeft]);

    const welcomeToFulcrumStyle = useMemo(() => {
      return {
        color: welcomeToFulcrumColor,
      };
    }, [welcomeToFulcrumColor]);

    const yourPathToStyle = useMemo(() => {
      return {
        color: yourPathToColor,
      };
    }, [yourPathToColor]);

    return (
      <div className="flex flex-col items-start justify-start gap-[var(--gap-9xs-login)] text-left text-[length:var(--h1-heavy-size-login)] text-[color:var(--black-login)]; font-family: var(--h1-heavy-login)" style={frameDivStyle}>
        <div className="relative capitalize" style={welcomeToFulcrumStyle}>
          {welcomeToFulcrum}
        </div>
        <div className="relative capitalize text-[length:var(--font-size-5xl-login)]" style={yourPathToStyle}>
          Your Path to Technical Excellence!
        </div>
      </div>
    );
  }
);

export default WelcomeText;
