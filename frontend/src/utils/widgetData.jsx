import { FaRegRectangleList } from "react-icons/fa6";
import { MdNotInterested } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { PiCircleHalfFill } from "react-icons/pi";

export const widgetData = [
    {
        heading: "Total Bookings",
        bookings:"501 Bookings",
        color: "rgb(107,19,10)",
        Icon:FaRegRectangleList
    },
    {
        "heading": "Bookings Utilized",
        "bookings":"501 Bookings",
        "color": "rgb(246, 166, 104)",
        Icon:AiOutlineFileDone
    },
    {
       "heading": "Bookings Cancelled",
       "bookings":"0 Bookings",
       "color": "rgb(235, 93, 80)",
        Icon:MdNotInterested
    },
    {
      "heading": "Utilization",
      "bookings":"100%",
      "color": "rgb(123, 184, 150)",
        Icon:PiCircleHalfFill
    }
  ];