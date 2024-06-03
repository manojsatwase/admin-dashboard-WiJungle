import { FaChartColumn } from "react-icons/fa6";
import { RiDashboardFill, RiTruckFill, RiHistoryFill } from 'react-icons/ri';
import { MdContentPasteSearch } from "react-icons/md";
import { LuPenSquare } from "react-icons/lu";
import { IoArchiveOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const dashboardLinks = [
   { url: '/admin/dashboard', text: 'Dashboard', Icon: RiDashboardFill },
   { url: '/admin/analytics', text: 'Analytics', Icon: FaChartColumn }, // Correct import
   { url: '/admin/rate-request', text: 'Rate Request', Icon: MdContentPasteSearch },
   { url: '/admin/quote', text: 'Quote', Icon: LuPenSquare },
   { url: '/admin/shipments', text: 'Shipments', Icon: RiTruckFill },
   { url: '/admin/user-list', text: 'User List', Icon: FaRegUserCircle },
   { url: '/admin/archive', text: 'Archive', Icon: IoArchiveOutline },
   { url: '/admin/history', text: 'History', Icon: RiHistoryFill },
];

export const linksData = [
    {links: dashboardLinks },
  ];