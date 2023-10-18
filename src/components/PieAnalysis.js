import React from 'react'
import "./PieAnalysis.css"
import { Doughnut } from 'react-chartjs-2';
const PieAnalysis = () => {
    const data = {
        labels: ['One', 'Two', 'Three','Four'],
        datasets: [
            {
                data: [10, 15, 20,10],
                backgroundColor: ['#E38627', '#C13C37', '#6A2135','#C13C37'],
                hoverBackgroundColor: ['#FFA726', '#FF6384', '#36A2EB','#C13C37'],
                borderWidth: 0, // Set the border width to 0 for a donut chart
            },
        ],
    };

    const options = {
        cutout: '70%',
        legend: {
            display: false, // Hide the legend
          },
          plugins: {
            datalabels: {
              display: false, // Hide the labels on the chart
            },
          }, // Adjust this value to control the size of the hole in the donut
    };

    return (
        <div className="job-wise-analysis-parent">
            <div className="students-average-growth">Job-wise analysis</div>
            <div className="chart-2-parent">
                <div style={{ width: '300px', height: '150px', marginLeft: '-45px' }}>
                    <Doughnut data={data} options={options} /></div>
                <div className="legend-label-2-parent">
                    <div className="legend-label-2">
                        <div className="legend-indicator-1" />
                        <div className="product-design">SDE 1</div>
                    </div>
                    <div className="legend-label-2">
                        <div className="legend-indicator-11" />
                        <div className="product-design">Product design</div>
                    </div>
                    <div className="legend-label-2">
                        <div className="legend-indicator-12" />
                        <div className="product-design">Product design</div>
                    </div>
                    <div className="legend-label-2">
                        <div className="legend-indicator-13" />
                        <div className="product-design">Data Analyst</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PieAnalysis