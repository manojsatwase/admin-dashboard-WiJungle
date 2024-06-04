import React from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'
import DashboardNav from './dashboardComponents/dashboardNav'
import { widgetData } from '../../utils/widgetData';
import WidgetComponent from './dashboardComponents/WidgetComponent';
import PieChartsAnalysis from '../charts/PieChartsAnalysis';
import { useTheme } from '../../components/context/ThemeContext';
import useRedirectToDashboard from '../../hooks/useRedirectToDashboard';

const Dashboard = () => {
  const {theme} = useTheme();
  useRedirectToDashboard();
  return (
    <div className='admin-container'>
    <AdminSidebar />
      <main className='dashboard'>
      <DashboardNav />
      <section className="widget-container">
       <WidgetComponent widgetData={widgetData} />
      </section>
      <main className={theme === 'dark' ? 'chart-container dark':'chart-container'}>
        <PieChartsAnalysis/>
     </main>

   </main>
   </div>
  )
}


export default Dashboard
