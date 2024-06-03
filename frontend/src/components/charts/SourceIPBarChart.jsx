import { barChartData } from '../../utils/chartData';
import {BarChart} from '../Chart';
import { TabContent } from '../Tabs';

const SourceIPBarChart = () => {

  return (
   <TabContent index={1}>     
       <section className='bar-charts'>
           <div>
             <BarChart
                   data_1={barChartData.datasets.data}
                   labels={barChartData.labels} 
                   title_1="Source IP Counts"
                   bgColor_1="hsl(260,50%,30%)"
                   horizontal={false} // Set to true if you want a horizontal bar chart
               />
            </div>
            <div>
             <BarChart
                   data_1={barChartData.datasets.data}
                   labels={barChartData.labels} 
                   title_1="Source IP Counts"
                   bgColor_1="hsl(260,50%,30%)"
                   horizontal={true} // Set to true if you want a horizontal bar chart
               />
            </div>
       </section>
   </TabContent>
  )
}

export default SourceIPBarChart

