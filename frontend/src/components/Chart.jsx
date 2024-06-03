import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    Filler

} from "chart.js";

import {Bar, Doughnut, Line, Pie } from 'react-chartjs-2'
import { months } from "../utils/constants";

ChartJS.register(
    CategoryScale,
    LinearScale, 
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    Filler
)

  //---------  Pie Chart -------------------------------

  export const PieChart = ({
    labels,
    data,
    backgroundColor,
}) => {

    // Data
    const pieChartData = {
        labels,
        datasets: [
            {
                data,
                backgroundColor,
                borderWidth: 0,
             
            }
        ]
    };

    // Options
    const pieChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        },
    };

    return <Pie data={pieChartData} options={pieChartOptions} />
}


export const BarChart = ({
    data_1 = [],
    labels = [],
    title_1 = 'Bar Chart',
    bgColor_1 = 'rgba(75, 192, 192, 0.2)',
    horizontal = false, // true : horizontal, false : vertical
}) => {
    const options = {
        responsive: true,
        indexAxis: horizontal ? 'y' : 'x', // horizontal ? 'y' : 'x'
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: title_1,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
    };

    const barData = {
        labels: labels.length ? labels : data_1.map((_, index) => `Label ${index + 1}`),
        datasets: [
            {
                label: title_1,
                data: data_1,
                backgroundColor: bgColor_1,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                barThickness: 'flex',
                barPercentage: 1,
                categoryPercentage: 0.5,
            },
        ],
    };

    return <Bar data={barData} options={options} />;
};

//----------- Doughnut Chart -----------------
export const DoughnutChart = ({ labels,data,backgroundColor,cutout,legends=true,offset }) => {

    const doughnutData = {
        labels,
        datasets:[
            {
                data,
                backgroundColor,
                borderWidth:0,
                offset
            }
        ]
      };
      
        // Options
      const doughnutOptions = {
        responsive:true,
        plugins:{
            legend:{
                display:legends,
                position:"bottom", // left right , top , bottom
                labels:{
                   padding:40,  
                }
            }
        },
        cutout
      }
       return <Doughnut data={doughnutData} options={doughnutOptions}  />
      };

      // Line Chart

export const LineChart = ({
    data,
    label,
    backgroundColor,
    borderColor,
    labels = [] // Default empty array if not provided
}) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    };

    const lineChartData = {
        labels,
        datasets: [
            {
                fill: true,
                label,
                data,
                backgroundColor,
                borderColor,
            }
        ]
    };

    return <Line options={options} data={lineChartData} />;
};