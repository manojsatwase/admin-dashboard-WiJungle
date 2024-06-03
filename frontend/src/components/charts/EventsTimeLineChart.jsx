import React from 'react'
import { TabContent } from '../Tabs'
import { LineChart } from '../Chart'
import { months } from '../../utils/constants'
import { lineChartData } from '../../utils/chartData'

const EventsTimelineChart = () => {
  
  return (
    <TabContent index={2}>     
       <section className='line-charts'>
           <div>
           <LineChart
        // pass months
            data={lineChartData.datasets.data}
            backgroundColor={"hsla(0, 80%, 40%, 0.4)"}
            borderColor={"hsl(0, 80%, 40%)"}
            label="Event Time Line"
            labels={months.slice(0,[lineChartData?.datasets?.data?.length])}
        />
        <h2>Event Time Line</h2>
        </div>
       </section>
   </TabContent>
  )
}

export default EventsTimelineChart