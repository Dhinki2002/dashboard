import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AddDreamCompanyPopup.css";

const AddDreamCompanyPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  const onFrameContainer9Click = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  return (
    <div className="adddreamcompanypopup">
      <img
        className="basilcross-outline-icon"
        alt=""
        src="/basilcrossoutline.svg"
        onClick={onClose}
      />
      <div className="frame-parent225">
        <div className="frame-parent226">
          <div className="add-your-dream-company-parent">
            <div className="add-your-dream">Add your dream company</div>
            <div className="fill-in-the2">
              Fill in the details to prepare for your dream company
            </div>
          </div>
          <div className="frame-parent227">
            <div className="frame-parent228">
              <div className="dream-company-container">
                <div className="preparation-status">Dream company</div>
                <input
                  className="frame-child170"
                  placeholder="Enter your dream company"
                  type="text"
                />
              </div>
              <div className="dream-company-container">
                <div className="preparation-status">Job Profile</div>
                <input
                  className="frame-child170"
                  placeholder="Enter the job"
                  type="text"
                />
              </div>
            </div>
            <div className="frame-parent228">
              <div className="dream-company-container">
                <div className="preparation-status">Select interview date</div>
                <input
                  className="frame-child172"
                  placeholder="Select date"
                  type="date"
                />
              </div>
              <div className="dream-company-container">
                <div className="preparation-status">Preparation status</div>
                <input
                  className="frame-child170"
                  placeholder="How prepared are you?"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <button className="frame-wrapper89" onClick={onFrameButtonClick}>
          <div
            className="pay-for-company-wrapper"
            onClick={onFrameContainer9Click}
          >
            <div className="pay-for-company">Pay for company</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AddDreamCompanyPopup;
