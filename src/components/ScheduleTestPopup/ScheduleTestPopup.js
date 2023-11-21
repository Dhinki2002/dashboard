import "./ScheduleTestPopup.css";

const ScheduleTestPopup = ({ onClose }) => {
  return (
    <div className="scheduletestpopup">
      <div className="frame-parent29">
        <div className="frame-parent30">
          <div className="add-new-test-parent">
            <div className="add-new-test">Add new test</div>
            <div className="fill-in-the">
              Fill in the details to add a new test
            </div>
          </div>
          <div className="frame-parent31">
            <div className="frame-parent32">
              <div className="company-group">
                <div className="level">Company</div>
                <input
                  className="frame-child4"
                  placeholder="Enter the name of company"
                  type="text"
                />
              </div>
              <div className="company-group">
                <div className="level">Level</div>
                <input
                  className="frame-child4"
                  placeholder="Choose level of test"
                  type="text"
                />
              </div>
            </div>
            <div className="frame-parent32">
              <div className="company-group">
                <div className="level">No. of questions</div>
                <input
                  className="frame-child4"
                  placeholder="Enter no. of questions"
                  type="text"
                />
              </div>
              <div className="company-group">
                <div className="level">Time limit</div>
                <input
                  className="frame-child4"
                  placeholder="Enter time limit"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="frame-parent34">
            <div className="enter-topic-tags-parent">
              <div className="level">Enter topic tags</div>
              <input
                className="frame-child8"
                placeholder="Enter topics to be assesed"
                type="text"
              />
            </div>
            <div className="frame-parent35">
              <div className="machine-learning-parent">
                <div className="machine-learning3">Machine learning</div>
                <button className="system-uiconscross">
                  <img className="vector-icon8" alt="" src="/vector6.svg" />
                </button>
              </div>
              <div className="machine-learning-parent">
                <div className="machine-learning3">Machine learning</div>
                <button className="system-uiconscross">
                  <img className="vector-icon8" alt="" src="/vector6.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="frame-wrapper22">
          <div className="add-test-wrapper" onClick={onClose}>
            <div className="add-test">Add test</div>
          </div>
        </button>
      </div>
      <button className="basilcross-outline6" onClick={onClose}>
        <img className="vector-icon10" alt="" src="/vector.svg" />
      </button>
    </div>
  );
};

export default ScheduleTestPopup;
