import React from 'react'
import "./ConfidenceMeter.css"
import GaugeChart from 'react-gauge-chart'

const ConfidenceMeter = () => {
    return (
        <div className="confidence-meter-parent">
            {/* <div className="my-interview-score">Confidence Meter</div>
           
              <img className="circle-icon" alt="" src="/circle.svg" />
              <img className="mask-group-child" alt="" src="/ellipse-59.svg" />
              <div className="unit-score-parent">
                <div className="unit-score">Unit Score</div>
                <div className="div90">92</div>
              </div>
            </div> */}
            <div className="my-interview-score">Confidence Meter</div>
            <div className="mask-group">
            <GaugeChart id="gauge-chart5"
                nrOfLevels={420}
                arcsLength={[0.5, 0.15, 0.15, 0.2]}
                colors={['var(--danger)', 'var(--incomplete)', 'var(--yellow)', 'var(--color-mediumseagreen']}
                percent={0.6}
                arcPadding={0.05}
                textColor='#5c5c5c'
                arcWidth={0.15}
                needleColor='var(--icon-grey)'
                needleBaseColor='var(--icon-grey)'
                formatTextValue={(value)=>'Unit Score'+': '+value}
                marginInPercent={0.01}
                cornerRadius={10}
            />
            </div>

        </div>
    )
}

export default ConfidenceMeter