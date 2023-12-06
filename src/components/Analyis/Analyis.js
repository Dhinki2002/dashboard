import React from 'react'
import "./Analyis.css";

const Analyis2 = () => {
  return (
            <div>
            <div className="flex flex-col items-start justify-start absolute left-[1.32vw] top-[1.32vw]">
              <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold]">Students Performance</div>
            </div>
            <div className="flex items-start justify-start absolute left-[calc(50%_-_36.18vw)] flex-row gap-[6.94vw] text-[length:var(--font-size-base)] text-[color:var(--icon-grey)] max-h-80 overflow-auto top-[5.03vw]">
              <div className="flex flex-col items-start justify-start gap-[var(--gap-11xs)]">
                <div className="relative tracking-[-0.02em] leading-[2.78vw]">#</div>
                <div className="flex flex-col items-start justify-start gap-[var(--gap-11xs)] gap-[var(--gap-5xs)] text-[color:var(--color-darkslategray-200)]">
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">01</div>
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">02</div>
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">03</div>
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">05</div>
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">06</div>
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">07</div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[var(--gap-11xs)]">
                <div className="relative tracking-[-0.02em] leading-[2.78vw]">Name</div>
                <div className="flex flex-col items-start justify-start gap-[var(--gap-11xs)] gap-[var(--gap-5xs)] text-[color:var(--color-darkslategray-200)]">
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">Priyanshu Gupta</div>
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">Prakriti Aggarwal</div>
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">Ayanshu Gupta</div>
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">Priyanshu Gupta</div>
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">Prakhar Khatri</div>
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">Om Mishra</div>
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">Om Mishra</div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[var(--gap-mini)]">
                <div className="w-[7.14vw] flex flex-row items-start justify-start relative gap-[var(--gap-3xs)]">
                  <div className="relative tracking-[-0.02em] leading-[2.78vw] z-0">Performance</div>
                  <img className="absolute w-[1.06vw] h-[1.06vw] overflow-hidden shrink-0 z-[1] m-0 left-[6.15vw] top-[0.79vw]" alt="" src="/bxsort.svg" />
                </div>
                <div className="flex flex-col items-start justify-start gap-[2.98vw]">
                  <div className="rounded-[var(--br-9xs)] h-[0.4vw] relative bg-[color:var(--color-gainsboro-300)] w-[10.85vw]">
                    <div className="rounded-[var(--br-9xs)] h-[0.4vw] absolute bg-[color:var(--color-mediumseagreen)] w-[9.33vw] left-0 top-0" />
                  </div>
                  <div className="rounded-[var(--br-9xs)] h-[0.4vw] relative bg-[color:var(--color-gainsboro-300)] w-[10.85vw]">
                    <div className="absolute rounded-[var(--br-9xs)] bg-[color:var(--color-mediumseagreen)] w-[8.99vw] h-[0.4vw] left-0 top-0" />
                  </div>
                  <div className="rounded-[var(--br-9xs)] h-[0.4vw] relative bg-[color:var(--color-gainsboro-300)] w-[10.85vw]">
                    <div className="absolute rounded-[var(--br-9xs)] bg-[color:var(--color-mediumseagreen)] w-[8.99vw] h-[0.4vw] left-0 top-0 bg-[color:var(--incomplete)] w-[7.14vw]" />
                  </div>
                  <div className="rounded-[var(--br-9xs)] h-[0.4vw] relative bg-[color:var(--color-gainsboro-300)] w-[10.85vw]">
                    <div className="absolute rounded-[var(--br-9xs)] bg-[color:var(--color-mediumseagreen)] w-[8.99vw] h-[0.4vw] left-0 top-0 bg-[color:var(--incomplete)] w-[7.14vw]" />
                  </div>
                  <div className="rounded-[var(--br-9xs)] h-[0.4vw] relative bg-[color:var(--color-gainsboro-300)] w-[10.85vw]">
                    <div className="absolute rounded-[var(--br-9xs)] bg-[color:var(--color-mediumseagreen)] w-[8.99vw] h-[0.4vw] left-0 top-0 bg-[color:var(--incomplete)] w-[7.14vw] w-[6.68vw]" />
                  </div>
                  <div className="rounded-[var(--br-9xs)] h-[0.4vw] relative bg-[color:var(--color-gainsboro-300)] w-[10.85vw]">
                    <div className="absolute rounded-[var(--br-9xs)] bg-[color:var(--color-mediumseagreen)] w-[8.99vw] h-[0.4vw] left-0 top-0 bg-[color:var(--incomplete)] w-[7.14vw] w-[6.68vw] bg-[color:var(--danger)] w-[5.29vw]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[var(--gap-11xs)]">
                <div className="relative tracking-[-0.02em] leading-[2.78vw]">Average score</div>
                <div className="flex flex-col items-start justify-start gap-[var(--gap-11xs)] gap-[var(--gap-5xs)] text-[color:var(--color-darkslategray-200)]">
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">72</div>
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">65</div>
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">22</div>
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">54</div>
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">56</div>
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">32</div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[var(--gap-11xs)]">
                <div className="flex flex-row items-center justify-start gap-[var(--gap-11xs)]">
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">Last score</div>
                  <img className="relative w-[1.06vw] h-[1.06vw] overflow-hidden shrink-0" alt="" src="/bxsort.svg" />
                </div>
                <div className="flex flex-col items-start justify-start gap-[var(--gap-11xs)] gap-[var(--gap-5xs)] text-[color:var(--color-darkslategray-200)]">
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">72</div>
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">65</div>
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">22</div>
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">54</div>
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">56</div>
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">32</div>
                </div>
              </div>
              <div className="flex items-start justify-start flex-col gap-[var(--gap-11xs)] text-[length:var(--font-size-sm)] text-[color:var(--danger)]">
                <div className="w-[4.7vw] h-[2.78vw] relative" />
                <div className="flex flex-col items-start justify-start gap-[var(--gap-mini)]">
                  <div className="rounded-[var(--br-5xs)] bg-[color:var(--color-crimson-200)] flex-row pt-[var(--padding-4xs)] pr-[var(--padding-xs)] pb-[var(--padding-4xs)] pl-[var(--padding-xs)] flex items-start justify-start">
                    <div className="relative">Remove</div>
                  </div>
                  <div className="rounded-[var(--br-5xs)] bg-[color:var(--color-crimson-200)] flex-row pt-[var(--padding-4xs)] pr-[var(--padding-xs)] pb-[var(--padding-4xs)] pl-[var(--padding-xs)] flex items-start justify-start">
                    <div className="relative">Remove</div>
                  </div>
                  <div className="rounded-[var(--br-5xs)] bg-[color:var(--color-crimson-200)] flex-row pt-[var(--padding-4xs)] pr-[var(--padding-xs)] pb-[var(--padding-4xs)] pl-[var(--padding-xs)] flex items-start justify-start">
                    <div className="relative">Remove</div>
                  </div>
                  <div className="rounded-[var(--br-5xs)] bg-[color:var(--color-crimson-200)] flex-row pt-[var(--padding-4xs)] pr-[var(--padding-xs)] pb-[var(--padding-4xs)] pl-[var(--padding-xs)] flex items-start justify-start">
                    <div className="relative">Remove</div>
                  </div>
                  <div className="rounded-[var(--br-5xs)] bg-[color:var(--color-crimson-200)] flex-row pt-[var(--padding-4xs)] pr-[var(--padding-xs)] pb-[var(--padding-4xs)] pl-[var(--padding-xs)] flex items-start justify-start">
                    <div className="relative">Remove</div>
                  </div>
                  <div className="rounded-[var(--br-5xs)] bg-[color:var(--color-crimson-200)] flex-row pt-[var(--padding-4xs)] pr-[var(--padding-xs)] pb-[var(--padding-4xs)] pl-[var(--padding-xs)] flex items-start justify-start">
                    <div className="relative">Remove</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
         
  )
}

export default Analyis2