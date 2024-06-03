import React from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'
import DashboardNav from './dashboardComponents/dashboardNav'
import { widgetData } from '../../utils/widgetData';
import WidgeComponent from './dashboardComponents/WidgeComponent';
import PieChartsAnalysis from '../charts/PieChartsAnalysis';
import { useTheme } from '../../components/context/ThemeContext';

const Dashboard = () => {
  const {theme} = useTheme();
  return (
    <div className='admin-container'>
    <AdminSidebar />
      <main className='dashboard'>
      <DashboardNav />
      <section className="widget-container">
       <WidgeComponent widgetData={widgetData} />
      </section>
      <main className={theme === 'dark' ? 'chart-container dark':'chart-container'}>
        <PieChartsAnalysis/>
     </main>

   </main>
   </div>
  )
}


export default Dashboard