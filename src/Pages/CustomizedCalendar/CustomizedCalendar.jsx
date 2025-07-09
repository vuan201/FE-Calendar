import { useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CustomizeCalendar.css";

import dayjs from "dayjs";
import "dayjs/locale/vi"; // Import locale tiếng Việt cho Day.js

// Import plugin localeData. Đây là plugin quan trọng mà react-big-calendar cần để đọc các định dạng ngày tháng từ Day.js
import localeData from "dayjs/plugin/localeData";

// Kích hoạt plugin localeData cho Day.js
dayjs.extend(localeData);

// Đặt ngôn ngữ mặc định cho Day.js là tiếng Việt
dayjs.locale("vi");

const localizer = dayjsLocalizer(dayjs);

const CustomizedCalendar = () => {
  // const [myEventsList, setMyEventsList] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date(2025, 6, 8)); // Đặt ngày hiện tại để khớp với ảnh chụp màn hình
  // Dữ liệu sự kiện mẫu
  const events = [
    {
      id: 0,
      title: "Họp nhóm",
      start: new Date(2025, 6, 8, 9, 0, 0), // Tháng 7, ngày 8, 9:00 AM
      end: new Date(2025, 6, 8, 10, 30, 0),
    },
    {
      id: 1,
      title: "Dự án A - Hạn chót",
      start: new Date(2025, 6, 10, 14, 0, 0),
      end: new Date(2025, 6, 10, 15, 0, 0),
    },
    {
      id: 2,
      title: "Ăn trưa với khách hàng",
      start: new Date(2025, 6, 12, 12, 0, 0),
      end: new Date(2025, 6, 12, 13, 0, 0),
    },
    {
      id: 3,
      title: "Ngày nghỉ lễ",
      start: new Date(2025, 6, 15, 0, 0, 0),
      end: new Date(2025, 6, 15, 23, 59, 59),
      allDay: true,
    },
  ];

  const messages = {
    date: "Ngày",
    time: "Giờ",
    event: "Sự kiện",
    allDay: "Cả ngày",
    week: "Tuần",
    work_week: "Tuần làm việc",
    day: "Ngày",
    month: "Tháng",
    previous: "Trước",
    next: "Tiếp",
    yesterday: "Hôm qua",
    tomorrow: "Ngày mai",
    today: "Hôm nay",
    agenda: "Lịch trình",
    noEventsInRange: "Không có sự kiện nào trong khoảng thời gian này.",
    showMore: (total) => `+${total} sự kiện khác`,
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800 }} // Chiều cao của lịch
        defaultView="month" // Chế độ xem mặc định là tháng
        date={currentDate} // Đặt ngày hiện tại
        onNavigate={setCurrentDate} // Xử lý khi điều hướng lịch
        toolbar={true} // Hiển thị thanh công cụ
        // Các props khác có thể thêm vào
        messages={messages}
      />
    </div>
  );
};

export default CustomizedCalendar;
