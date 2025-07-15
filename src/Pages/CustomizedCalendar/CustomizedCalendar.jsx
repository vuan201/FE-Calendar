import { useCallback, useMemo, useState } from "react";
import { Calendar, dayjsLocalizer, Views } from "react-big-calendar";
import dayjs from "dayjs";
import PagePreviousIcon from "@rsuite/icons/PagePrevious";
import PageNextIcon from "@rsuite/icons/PageNext";
import { Button, ButtonGroup, DatePicker, IconButton } from "rsuite";
import Box from "../../components/Box";
import { getTitleByDate } from "../../extension";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CustomizeCalendar.css";

import "dayjs/locale/vi"; // Import locale tiếng Việt cho Day.js
const localizer = dayjsLocalizer(dayjs);

const CustomizedCalendar = () => {
  const [view, setView] = useState(Views.MONTH);

  const [date, setDate] = useState(new dayjs().toDate()); // Đặt ngày hiện tại để khớp với ảnh chụp màn hình

  const viewOptions = [
    { label: "Tháng", value: Views.MONTH },
    { label: "Tuần", value: Views.WEEK },
    { label: "Ngày", value: Views.DAY },
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

  const title = useMemo(() => {
    return getTitleByDate(date, view);
  }, [view, date]);

  const nextBtn = useCallback(() => {
    if (view === Views.DAY) setDate(dayjs(date).add(1, "day"));
    if (view === Views.WEEK) setDate(dayjs(date).add(1, "week"));
    if (view === Views.MONTH) setDate(dayjs(date).add(1, "month"));
  }, [date, view]);

  const subtractBtn = useCallback(() => {
    if (view === Views.DAY) setDate(date.subtract(1, "day"));
    if (view === Views.WEEK) setDate(date.subtract(1, "week"));
    if (view === Views.MONTH) setDate(date.subtract(1, "month"));
  }, [date, view]);

  return (
    <div>
      <Box className={"flex justify-between items-center gap-4"}>
        <div>
           <DatePicker format="dd.MM.yyyy" />
        </div>
        <div></div>
        <div className="flex gap-2 justify-center items-center">
          <Button
            color="yellow"
            appearance="ghost"
            onClick={() => setDate(dayjs().toDate())}
          >
            Hôm nay
          </Button>
          <IconButton
            color="yellow"
            appearance="ghost"
            onClick={subtractBtn}
            icon={<PagePreviousIcon />}
          />
          <Box
            className={"bg-bg-basic min-w-72 text-center border border-accent"}
            background={true}
            margin={false}
            border={false}
          >
            {title}
          </Box>
          <IconButton
            color="yellow"
            appearance="ghost"
            onClick={nextBtn}
            icon={<PageNextIcon />}
          />
        </div>
        <div>
          <ButtonGroup>
            {viewOptions.map((option) => (
              <Button
                key={option.value}
                color="yellow"
                appearance="ghost"
                onClick={() => setView(option.value)}
                active={view === option.value}
              >
                {option.label}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </Box>

      <Box padding={false}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ minHeight: 900, padding: 0 }} // Chiều cao của lịch
          defaultView={view} // Chế độ xem mặc định là tháng
          date={date} // Đặt ngày hiện tại
          onNavigate={setDate} // Xử lý khi điều hướng lịch
          view={view} // Sử dụng chế độ xem đã chọn
          onView={setView}
          // Các props khác có thể thêm vào
          messages={messages}
          toolbar={false} // Không hiển thị thanh công cụ
        />
      </Box>
    </div>
  );
};

export default CustomizedCalendar;
