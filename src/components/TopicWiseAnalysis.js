import React from 'react'
import "./TopicWiseAnalysis.css";

export const TopicWiseAnalysis = () => {
    const data = [72, 65, 22, 54, 56, 32]
  return (
    <div className="frame-parent202">
    <div className="topic-wise-analysis-wrapper1">
      <div className="topic-wise-analysis3">Topic-wise Analysis</div>
    </div>
    <div className="frame-parent203">
      <div className="parent22">
        <div className="topic-wise-analysis3">#</div>
        <div className="parent23">
          <div className="topic-wise-analysis3">01</div>
          <div className="topic-wise-analysis3">02</div>
          <div className="topic-wise-analysis3">03</div>
          <div className="topic-wise-analysis3">05</div>
          <div className="topic-wise-analysis3">06</div>
          <div className="topic-wise-analysis3">07</div>
        </div>
      </div>
      <div className="parent22">
        <div className="topic-wise-analysis3">Topic</div>
        <div className="parent23">
          <div className="topic-wise-analysis3">Data Structures</div>
          <div className="topic-wise-analysis3">Databases</div>
          <div className="topic-wise-analysis3">Testing</div>
          <div className="topic-wise-analysis3">Debugging</div>
          <div className="topic-wise-analysis3">Coding languages</div>
          <div className="topic-wise-analysis3">Source Control</div>
        </div>
      </div>
      <div className="proficiency-parent1">
        <div className="topic-wise-analysis3">Proficiency</div>
        <div className="frame-parent204">
          {data.map((value, index) => (
            <div className="rectangle-wrapper30" key={index}>
              <div
                style={{
                  width: `${value}%`,
                  backgroundColor:
                    value < 33
                      ? "var(--danger)"
                      : value >= 33 && value <= 66
                        ? "var(--incomplete)"
                        : "var(--color-mediumseagreen)",
                }}
                className={`frame-child${147}`}
              />
            </div>
          ))}
        </div>

      </div>
      <div className="parent22">
        <div className="topic-wise-analysis3">Last score</div>
        <div className="parent23">
          {data.map((item, index) => (
            <div className="topic-wise-analysis3" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="line-parent9">
      <div className="frame-child153" />
      <div className="frame-child153" />
      <div className="frame-child153" />
      <div className="frame-child153" />
      <div className="frame-child153" />
      <div className="frame-child153" />
      <div className="frame-child153" />
      <div className="frame-child153" />
    </div>
    <div className="view-more-parent4">
      <div className="topic-wise-analysis3">View more</div>
      <img
        className="riarrow-drop-down-line-icon6"
        alt=""
        src="/riarrowdropdownline.svg"
      />
    </div>
  </div>
  )
}
