import { useCallback, useMemo, useState } from "react";
import { Calendar, dayjsLocalizer, Views } from "react-big-calendar";
import dayjs from "dayjs";
import PagePreviousIcon from "@rsuite/icons/PagePrevious";
import PageNextIcon from "@rsuite/icons/PageNext";
import { Button, ButtonGroup, DatePicker, IconButton, Modal, Placeholder } from "rsuite";
import { Box, CustomButton } from "../../components";
import { getTitleByDate } from "../../extension";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CustomizeCalendar.css";

import "dayjs/locale/vi";
const localizer = dayjsLocalizer(dayjs);

const CustomizedCalendar = () => {
  const [modelOpen, setModelOpen] = useState(false);

  const [view, setView] = useState(Views.MONTH);

  const [date, setDate] = useState(new dayjs());

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
      start: new Date(2025, 6, 8, 9, 0, 0),
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

  const subtractBtn = useCallback(() => {
    if (view === Views.DAY) setDate(dayjs(date).subtract(1, "day"));
    if (view === Views.WEEK) setDate(dayjs(date).subtract(1, "week"));
    if (view === Views.MONTH) setDate(dayjs(date).subtract(1, "month"));
  }, [date, view]);

  const nextBtn = useCallback(() => {
    if (view === Views.DAY) setDate(dayjs(date).add(1, "day"));
    if (view === Views.WEEK) setDate(dayjs(date).add(1, "week"));
    if (view === Views.MONTH) setDate(dayjs(date).add(1, "month"));
  }, [date, view]);

  return (
    <div>
       <Modal size={"sm"} open={modelOpen} onClose={() => setModelOpen(false)}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Placeholder.Paragraph rows={10} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModelOpen(false)} appearance="subtle">
            Hủy
          </Button>
          <Button onClick={() => setModelOpen(false)} appearance="primary">
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>

      <Box className={"flex justify-between items-center gap-4"}>
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
        <div>
          <DatePicker
            format="dd.MM.yyyy"
            onChange={(value) => setDate(dayjs(value))}
          />
        </div>
        <div className="flex gap-2 justify-center items-center">
          <Button
            color="yellow"
            appearance="ghost"
            onClick={() => setDate(dayjs())}
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
            className={
              "bg-bg-basic min-w-72 text-center border border-custom-yellow-500 text-custom-yellow-500"
            }
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
          <CustomButton onClick={() => setModelOpen(true)}>Thêm sự kiện</CustomButton>
        </div>
      </Box>
      <Box padding={false}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ minHeight: 900, padding: 0 }}
          defaultView={view}
          date={date}
          onNavigate={setDate}
          view={view}
          onView={setView}
          messages={messages}
          toolbar={false}
        />
      </Box>
    </div>
  );
};

export default CustomizedCalendar;
