import { FaChartPie, FaChartBar, FaChartLine } from "react-icons/fa";

import { Tab, Tabs } from "./Tabs";
import EventsPieChart from "./charts/EventsPieChart";
import SourceIPBarChart from "./charts/SourceIPBarChart";
import EventsTimeLineChart from "./charts/EventsTimeLineChart";

const MyTabs = () => {
  const tabsData = [
    {
      name: "Pie",
      Icon: <FaChartPie />,
    },
    {
      name: "Bar",
      Icon: <FaChartBar />,
    },
    {
      name: "Line",
      Icon: <FaChartLine />,
    },
  ];

  return (
    <Tabs>
      <div className="pie-chart-Analysis">
        <h3>Charts Analysis</h3>
        <div>
          {tabsData.map((tab, index) => (
            <Tab index={index} key={index}>
              <span>{tab.Icon}</span>
              <h2>{tab.name}</h2>
            </Tab>
          ))}
        </div>
      </div>
      <EventsPieChart />
      <SourceIPBarChart />
      <EventsTimeLineChart />
    </Tabs>
  );
};

export default MyTabs;
