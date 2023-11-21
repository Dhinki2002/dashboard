import React from 'react'
import "../../pages/TestScreenObjective/TestScreenObjective.css"
import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Objective = () => {
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
                Q.1 Select one of the options from below.
              </div>
              <div className="frame-parent249">
                <div className="frame-wrapper93">
                  <div className="ellipse-parent5">
                    <input className="ellipse-input" type="radio" name="option" />
                    <div className="multiple-choice-questions">Option 1</div>
                  </div>
                </div>
                <div className="frame-wrapper93">
                  <div className="ellipse-parent5">
                    <input className="ellipse-input" type="radio" name="option" />
                    <div className="multiple-choice-questions">Option 2</div>
                  </div>
                </div>
                <div className="frame-wrapper93">
                  <div className="ellipse-parent5">
                    <input className="ellipse-input" type="radio" name="option" />
                    <div className="multiple-choice-questions">Option 3</div>
                  </div>
                </div>
                <div className="frame-wrapper93">
                  <div className="ellipse-parent5">
                    <input className="ellipse-input" type="radio" name="option" />
                    <div className="multiple-choice-questions">Option 4</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="frame-parent250">
            <button className="submit-wrapper" onClick={onFrameButton1Click}>
              <div className="submit">Submit</div>
            </button>
            <button className="next-wrapper" onClick={onFrameButton2Click}>
              <div className="next">Next</div>
            </button>
          </div>

        </div>
  )
}

export default Objective