import React from 'react'
import "../../pages/TestScreenObjective/TestScreenObjective.css"
import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Objective = ({ currentQuestion, currentStep, onNextClick, onPrevClick }) => {
  const navigate = useNavigate();
  const onFrameButton1Click = useCallback(() => {
    navigate("/test-summary");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/test-screen-code");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/test-screen-code");
  }, [navigate]);
  return (
    <div className="frame-parent248">
      <div className="multiple-choice-questions-parent">

        <div className="q1-select-one-of-the-options-parent">
          <div className="multiple-choice-questions">
            Select one of the options from below.
          </div>
          <div className="frame-parent249">
            {currentQuestion['answers'].slice(0, 4).map((obj, index) => (
              <div className="frame-wrapper93" key={index}>
                <div className="ellipse-parent5">
                  <input
                    className="ellipse-input"
                    type="radio"
                    name="option"
                    value={obj['answer']}
                  />
                  <div className="multiple-choice-questions">{obj['answer']}</div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
      <div className="frame-parent250">
      <button className="next-wrapper" onClick={onPrevClick}>
          <div className="next">Prev</div>
        </button>
        {currentStep<9&&<button className="next-wrapper" onClick={onNextClick}>
          <div className="next">Next</div>
        </button>}
        {currentStep==9&&<button className="submit-wrapper" onClick={onFrameButton1Click}>
          <div className="submit">Submit</div>
        </button>}
      </div>

    </div>
  )
}

export default Objective