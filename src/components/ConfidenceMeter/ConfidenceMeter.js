import React from 'react'
// import "./ConfidenceMeter.css"
import GaugeChart from 'react-gauge-chart'

const ConfidenceMeter = () => {
    return (
        <div className="relative rounded-[var(--br-base)] bg-[color:var(--white)] shadow-[-0.07vw_-0.07vw_0.26vw_rgba(0,0,0,0.1),0.07vw_0.07vw_0.26vw_rgba(0,0,0,0.1)] border-[color:var(--white)] box-border w-[25.26vw] h-[17.5vw] overflow-hidden shrink-0 text-[color:var(--color-darkslategray-200)] border-[0.07vw] border-solid">
            <div className="absolute tracking-[-0.02em] leading-[2.78vw] font-[bold] left-[1.32vw] top-[1.32vw]">Confidence Meter</div>
            <div className="absolute w-[20.09vw] h-[10.71vw] text-center text-[0.86vw] text-[#89a382] left-[2.58vw] top-[5.29vw]">
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