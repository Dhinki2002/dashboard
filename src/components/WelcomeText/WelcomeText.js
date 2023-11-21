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
      <div className="welcome-to-fulcrum-parent-login" style={frameDivStyle}>
        <div className="welcome-to-fulcrum-login" style={welcomeToFulcrumStyle}>
          {welcomeToFulcrum}
        </div>
        <div className="your-path-to-login" style={yourPathToStyle}>
          Your Path to Technical Excellence!
        </div>
      </div>
    );
  }
);

export default WelcomeText;
