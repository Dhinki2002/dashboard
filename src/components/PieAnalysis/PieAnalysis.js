import React from 'react'
// import "./PieAnalysis.css"
import { Doughnut } from 'react-chartjs-2';
const PieAnalysis = () => {
    const data = {
        labels: ['One', 'Two', 'Three','Four'],
        datasets: [
            {
                data: [10, 15, 20,10],
                backgroundColor: ['#E38627', '#C13C37', '#6A2135','#C13C37'],
                hoverBackgroundColor: ['#FFA726', '#FF6384', '#36A2EB','#C13C37'],
                borderWidth: 0, 
            },
        ],
    };

    const options = {
        cutout: '70%',
        legend: {
            display: false, 
          },
          plugins: {
            datalabels: {
              display: false, 
            },
          }, 
    };

    return (
        <div className="relative rounded-[var(--br-base)] bg-[color:var(--white)] w-[34.33vw] h-[21.63vw] overflow-hidden shrink-0">
            <div className="absolute tracking-[-0.02em] leading-[2.78vw] font-[bold] left-[1.32vw] top-[1.32vw]">Job-wise analysis</div>
            <div className="absolute left-[calc(50%_-_13.81vw)] flex flex-row items-center justify-start gap-[0.5vw] text-[length:var(--font-size-base)] text-[color:var(--light-base-chart-title)] top-[5.48vw]">
                <div style={{ width: '300px', height: '150px', marginLeft: '-45px' }}>
                    <Doughnut data={data} options={options} /></div>
                <div className="flex flex-col items-start justify-start gap-[var(--gap-xl)]">
                    <div className="flex flex-row items-center justify-start gap-[var(--gap-5xs)]">
                        <div className="relative rounded-[var(--br-81xl)] bg-[color:var(--incomplete)] w-[0.86vw] h-[0.86vw]" />
                        <div className="relative tracking-[0.01vw] leading-[1.06vw]">SDE 1</div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[var(--gap-5xs)]">
                        <div className="relative rounded-[var(--br-81xl)] bg-[color:var(--color-mediumseagreen)] w-[0.86vw] h-[0.86vw]" />
                        <div className="relative tracking-[0.01vw] leading-[1.06vw]">Product design</div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[var(--gap-5xs)]">
                        <div className="relative rounded-[var(--br-81xl)] bg-[color:var(--yellow)] w-[0.86vw] h-[0.86vw]" />
                        <div className="relative tracking-[0.01vw] leading-[1.06vw]">Product design</div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[var(--gap-5xs)]">
                        <div className="relative rounded-[var(--br-81xl)] bg-[color:var(--yellow)] w-[0.86vw] h-[0.86vw] bg-[color:var(--purple)]" />
                        <div className="relative tracking-[0.01vw] leading-[1.06vw]">Data Analyst</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PieAnalysis