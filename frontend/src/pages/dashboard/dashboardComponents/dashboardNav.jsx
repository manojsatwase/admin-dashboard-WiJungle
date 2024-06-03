import { FaRegBell } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { userImg } from "../../../utils/constants";
import useOnlineStatus from '../../../hooks/useOnlineStatus';
import { useTheme } from '../../../components/context/ThemeContext';

const DashboardNav = () => {
    const isOnline = useOnlineStatus();
    const {theme,toggleTheme} = useTheme();
   
  return (
    <div className="dashboard-nav">
        <h2>Dashboard</h2>
        <div className='notification'>
             <FaRegBell />
            <div className='notification-status'> 🔴</div>
        </div>
        <div className='dahsboard-user'>
         <div className='dahsboard-user-avatar'>
         <img src={userImg} alt="User" />
         <p className='online-status-indicator'>
            {isOnline ? "🟢" : " 🔴"}
         </p>
         </div>
           <div className='dahsboard-user-info'>
                 <h5>MS</h5>
                 <p>Admin</p>
           </div>
           <div className={theme ==='light' ? 'switch-mode light' :'switch-mode day'}
              onClick={toggleTheme}>
              <div className={theme === 'light' ? 'moon' : 'sun'}></div>
           </div>
           <div className='down-arrow-icon'>
              <FiChevronDown />
           </div>
        </div>
    </div>
  )
}

export default DashboardNav;
