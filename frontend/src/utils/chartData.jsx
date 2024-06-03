import { jsonData } from "../assets/jsonData";
import { countDestPorts, countEventTypes, countEventsOverTime, countSourceIPs } from "./data.js";

// Data for Pie Chart (Event Types)
const eventTypesData = countEventTypes(jsonData);
export const pieChartData = {
    labels: Object.keys(eventTypesData),
    datasets:  {
            data: Object.values(eventTypesData),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#DE5DFA'],
            borderWidth: 0,
        },
};


   // Data for Bar Chart (Source IP Addresses)
   const sourceIPData = countSourceIPs(jsonData);
   export const barChartData = {
       labels: Object.keys(sourceIPData),
       datasets:{
               label: 'Source IP Events',
               data: Object.values(sourceIPData),
               backgroundColor: '#2196F3',
               borderWidth: 1,
           },
       
   };


     // Data for Line Chart (Events Over Time)
   const eventsOverTimeData = countEventsOverTime(jsonData);
   export const lineChartData = {
         labels: Object.keys(eventsOverTimeData),
         datasets:
             {
                 label: 'Events Over Time',
                 data: Object.values(eventsOverTimeData),
                 backgroundColor: 'rgba(33, 150, 243, 0.2)',
                 borderColor: '#2196F3',
                 borderWidth: 1,
                 fill: true,
             },
     };



        // Data for Horizontal Bar Chart (Destination Ports)
    const destPortData = countDestPorts(jsonData);
    export const horizontalBarChartData = {
        labels: Object.keys(destPortData),
        datasets: [
            {
                label: 'Destination Port Events',
                data: Object.values(destPortData),
                backgroundColor: '#4CAF50',
                borderWidth: 1,
            },
        ],
    };
