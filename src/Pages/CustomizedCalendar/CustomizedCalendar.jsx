import { useCallback, useMemo, useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import PagePreviousIcon from "@rsuite/icons/PagePrevious";
import PageNextIcon from "@rsuite/icons/PageNext";
import { Avatar, Button, IconButton, InputPicker } from "rsuite";
import { Box, CustomButton } from "../../components";
import { getTitleByDate } from "../../extension";
import {
  PRIOLITY,
  RECURRENCE_RULE,
  EVENT_TYPE,
  ViewOptions,
  Messages,
} from "../../constant";
import SaveModal from "./SaveModal";
// import PlusIcon from "@rsuite/icons/Plus";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CustomizeCalendar.css";

import moment from "moment";
import "moment/dist/locale/vi.js";
import { selectedTime, setSelectedTime } from "../../app/redux";
import { useDispatch, useSelector } from "react-redux";

moment.locale("vi");
const CustomizedCalendar = () => {
  const views = {
    [Views.MONTH]: true,
    [Views.WEEK]: true,
    [Views.WORK_WEEK]: true,
    [Views.DAY]: true,
    [Views.AGENDA]: true,
  };

  const DefaultData = {
    id: 0,
    title: "",
    description: "",
    priority: PRIOLITY[0].value,
    eventType: EVENT_TYPE[0].value,
    recurrenceRule: RECURRENCE_RULE[0].value,
    startTime: new Date(2025, 6, 8, 9, 0, 0),
    endTime: new Date(2025, 6, 8, 10, 30, 0),
    dateRange: null,
  };

  const dispatch = useDispatch();

  const [modelOpen, setModelOpen] = useState(false);

  const [view, setView] = useState(Views.MONTH);
  const time = useSelector(selectedTime);
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
    {
      id: 4,
      title: "Event hiện tại 1",
      start: new Date(),
      end: new moment().add(5, "hour").toDate(),
    },
    {
      id: 5,
      title: "Event hiện tại 2",
      start: new moment().add(1, "day").toDate(),
      end: new moment().add(2, "day").toDate(),
    },
    {
      id: 6,
      title: "Event hiện tại 3",
      start: new Date(),
      end: new moment().add(2, "day").toDate(),
    },
    {
      id: 7,
      title: "Event hiện tại 4",
      start: new moment().add(1, "day").toDate(),
      end: new moment().add(1, "day").add(1, "hour").toDate(),
    },
  ];

  const title = useMemo(() => {
    return getTitleByDate(time, view);
  }, [view, time]);

  const subtractBtn = useCallback(() => {
    if (view === Views.DAY)
      dispatch(setSelectedTime(moment(time).subtract(1, "day").toDate()));
    if (view === Views.WEEK)
      dispatch(setSelectedTime(moment(time).subtract(1, "week").toDate()));
    if (view === Views.MONTH)
      dispatch(setSelectedTime(moment(time).subtract(1, "month").toDate()));
  }, [time, view, dispatch]);

  const nextBtn = useCallback(() => {
    if (view === Views.DAY)
      dispatch(setSelectedTime(moment(time).add(1, "day").toDate()));
    if (view === Views.WEEK)
      dispatch(setSelectedTime(moment(time).add(1, "week").toDate()));
    if (view === Views.MONTH)
      dispatch(setSelectedTime(moment(time).add(1, "month").toDate()));
  }, [time, view, dispatch]);

  return (
    <div>
      <SaveModal
        defaultData={DefaultData}
        modelOpen={modelOpen}
        setModelOpen={setModelOpen}
      />

      <Box className={"flex justify-between items-center gap-4"}>
        <div className="flex gap-2 justify-center items-center">
          <Button
            color="yellow"
            appearance="ghost"
            onClick={() => dispatch(setSelectedTime())(moment())}
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
        <div className="flex gap-2 justify-end items-center">
          <CustomButton onClick={() => setModelOpen(true)}>
            Thêm sự kiện
          </CustomButton>
          <InputPicker
            data={ViewOptions}
            defaultValue={view}
            cleanable={false}
            style={{ width: 160 }}
            onChange={(value) => setView(value)}
          />
          <Avatar size="sm" circle />
        </div>
      </Box>
      <Box padding={false}>
        <Calendar
          localizer={momentLocalizer(moment)}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ minHeight: 900, padding: 0 }}
          defaultView={view}
          date={time}
          onNavigate={(data) => dispatch(setSelectedTime(data))}
          view={view}
          onView={setView}
          views={views}
          messages={Messages}
          toolbar={false}
        />
      </Box>
    </div>
  );
};

export default CustomizedCalendar;
