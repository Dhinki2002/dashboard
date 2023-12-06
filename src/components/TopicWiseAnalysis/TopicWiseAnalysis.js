import React from 'react'
// import "./TopicWiseAnalysis.css";

export const TopicWiseAnalysis = () => {
    const data = [72, 65, 22, 54, 56, 32, 80,98,11]
  return (
    <div className="relative rounded-[var(--br-base)] bg-[color:var(--white)] w-[50.93vw] overflow-auto h-[29vw] left-[21vw] top-[9.2vw]">
    <div className="absolute text-[color:var(--color-darkslategray-200)] font-[bold] left-[1.32vw] top-[1.32vw] flex flex-col items-start justify-start ">
      <div className="relative tracking-[-0.02em] leading-[2.78vw]">Topic-wise Analysis</div>
    </div>
    <div className="flex items-start justify-start absolute flex-row gap-[var(--gap-92xl)] text-[length:var(--font-size-base)] left-[1.85vw] top-[4.43vw]">
      <div className="flex flex-col items-start justify-start gap-[var(--gap-12xs)] ">
        <div className="relative tracking-[-0.02em] leading-[2.78vw]">#</div>
        <div className="flex flex-col items-start justify-start gap-[var(--gap-9xs)] text-[color:var(--color-darkslategray-200)] ">
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">01</div>
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">02</div>
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">03</div>
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">05</div>
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">06</div>
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">07</div>
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">07</div>
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">07</div>
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">07</div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[var(--gap-12xs)] ">
        <div className="relative tracking-[-0.02em] leading-[2.78vw]">Topic</div>
        <div className="flex flex-col items-start justify-start gap-[var(--gap-9xs)] text-[color:var(--color-darkslategray-200)] ">
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">Data Structures</div>
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">Databases</div>
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">Testing</div>
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">Debugging</div>
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">Coding languages</div>
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">Source Control</div>
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">Source Control</div>
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">Source Control</div>
           <div className="relative tracking-[-0.02em] leading-[2.78vw]">Source Control</div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[var(--gap-21xl)]  gap-[var(--gap-mini)] ">
        <div className="relative tracking-[-0.02em] leading-[2.78vw]">Proficiency</div>
        <div className="flex flex-col items-start justify-start gap-[var(--gap-21xl)]">
          {data.map((value, index) => (
            <div className="rounded-[var(--br-9xs)] h-[0.40vw]  rounded-[var(--br-9xs)] h-[0.4vw] relative bg-[color:var(--color-gainsboro-300)] w-[10.85vw]" key={index}>
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
                className={`rounded-[var(--br-9xs)] h-[0.40vw]  absolute bg-[color:var(--incomplete)] left-0 top-0 `}
              />
            </div>
          ))}
        </div>

      </div>
      <div className="flex flex-col items-start justify-start gap-[var(--gap-12xs)] ">
        <div className="relative tracking-[-0.02em] leading-[2.78vw]">Last score</div>
        <div className="flex flex-col items-start justify-start gap-[var(--gap-9xs)] text-[color:var(--color-darkslategray-200)] ">
          {data.map((item, index) => (
            <div className="relative tracking-[-0.02em] leading-[2.78vw]" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute flex flex-col items-start justify-start gap-[2.8vw] left-[1.32vw] top-[6.94vw]">
      <div className="relative border-t-[color:black] box-border w-[47.82vw] h-[0.07vw] opacity-[0.18] border-t-[0.07vw] border-solid" />
      <div className="relative border-t-[color:black] box-border w-[47.82vw] h-[0.07vw] opacity-[0.18] border-t-[0.07vw] border-solid" />
      <div className="relative border-t-[color:black] box-border w-[47.82vw] h-[0.07vw] opacity-[0.18] border-t-[0.07vw] border-solid" />
      <div className="relative border-t-[color:black] box-border w-[47.82vw] h-[0.07vw] opacity-[0.18] border-t-[0.07vw] border-solid" />
      <div className="relative border-t-[color:black] box-border w-[47.82vw] h-[0.07vw] opacity-[0.18] border-t-[0.07vw] border-solid" />
      <div className="relative border-t-[color:black] box-border w-[47.82vw] h-[0.07vw] opacity-[0.18] border-t-[0.07vw] border-solid" />
      <div className="relative border-t-[color:black] box-border w-[47.82vw] h-[0.07vw] opacity-[0.18] border-t-[0.07vw] border-solid" />
      <div className="relative border-t-[color:black] box-border w-[47.82vw] h-[0.07vw] opacity-[0.18] border-t-[0.07vw] border-solid" />
    </div>
  </div>
  )
}
