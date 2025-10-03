import { Views } from "react-big-calendar";

 export const ViewOptions = [
    { label: "Tháng", value: Views.MONTH },
    { label: "Tuần", value: Views.WEEK },
    { label: "Ngày", value: Views.DAY },
  ];

  export const Messages = {
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