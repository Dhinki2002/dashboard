import "./TestRemarksPopUp.css";

const TestRemarksPopUp = ({ onClose }) => {
  return (
    <div className="testremarkspopup">
      <div className="frame-parent49">
        <div className="frame-parent50">
          <div className="remarks-parent">
            <div className="remarks">Remarks</div>
            <div className="kindly-give-remarks">
              Kindly give remarks for the interview
            </div>
          </div>
          <div className="frame-wrapper23">
            <div className="frame-wrapper24">
              <div className="overall-impression-parent">
                <div className="overall-impression">Overall Impression</div>
                <textarea
                  className="frame-textarea"
                  placeholder="How was the overall impression?"
                />
              </div>
            </div>
          </div>
          <div className="frame-wrapper23">
            <div className="frame-wrapper24">
              <div className="overall-impression-parent">
                <div className="overall-impression">Overall Impression</div>
                <textarea
                  className="frame-textarea"
                  placeholder="How was the overall impression?"
                />
              </div>
            </div>
          </div>
          <div className="frame-wrapper23">
            <div className="frame-wrapper24">
              <div className="overall-impression-parent">
                <div className="overall-impression">Overall Impression</div>
                <textarea
                  className="frame-textarea"
                  placeholder="How was the overall impression?"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper24">
          <button className="submit-remarks-wrapper" onClick={onClose}>
            <div className="submit-remarks">Submit remarks</div>
          </button>
        </div>
      </div>
      <button className="basilcross-outline7" onClick={onClose}>
        <img className="vector-icon15" alt="" src="/vector3.svg" />
      </button>
    </div>
  );
};

export default TestRemarksPopUp;
