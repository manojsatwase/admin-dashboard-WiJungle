import {DoughnutChart, PieChart} from '../../components/Chart';
import { pieChartData } from '../../utils/chartData';
import { TabContent } from '../Tabs';

const EventsPieChart = () => {
  return (
     <TabContent index={0}>      
         <section className='events-pie-chart'>
          <div className='pie-charts'>
          <div>
            <PieChart
                labels={pieChartData.labels}
                data={pieChartData.datasets.data}
                backgroundColor={pieChartData.datasets.backgroundColor}
            />
            </div>
            {/* <div>
            <PieChart
                labels={pieChartData.labels}
                data={pieChartData.datasets.data}
                backgroundColor={pieChartData.datasets.backgroundColor}
            />
            </div> */}
          </div>
            <h2 style={{textAlign:"center"}}>Event Types</h2>
        </section>
       
  </TabContent>
  )
}

export default EventsPieChart