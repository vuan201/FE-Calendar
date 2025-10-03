import { useCallback, useMemo, useState } from "react";
import { Calendar, dayjsLocalizer, Views } from "react-big-calendar";
import dayjs from "dayjs";
import PagePreviousIcon from "@rsuite/icons/PagePrevious";
import PageNextIcon from "@rsuite/icons/PageNext";
import {
  Button,
  ButtonGroup,
  DatePicker,
  DateRangePicker,
  IconButton,
  SelectPicker,
  Text,
} from "rsuite";
import { Box, CustomButton } from "../../components";
import { getTitleByDate } from "../../extension";
import { useForm, Controller } from "react-hook-form";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CustomizeCalendar.css";

import "dayjs/locale/vi";
import CustomModal from "../../components/CustomModal";
import Form from "rsuite/Form";
import {
  PRIOLITY,
  RECURRENCE_RULE,
  EVENT_TYPE,
  ViewOptions,
  Messages,
} from "../../constant";

const localizer = dayjsLocalizer(dayjs);

const CustomizedCalendar = () => {
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
  const [modelOpen, setModelOpen] = useState(false);

  const [view, setView] = useState(Views.MONTH);

  const [date, setDate] = useState(new dayjs());

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: DefaultData,
  });
  const onSubmit = (data) => {
    console.log(data);
    // setDefaultValue(data);
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
      <CustomModal
        title={"Tạo sự kiện"}
        isOpen={modelOpen}
        onClose={() => setModelOpen(false)}
        onSave={handleSubmit(onSubmit)}
      >
        <Form fluid>
          <Form.Group controlId="title">
            <Form.ControlLabel>Tiêu đề</Form.ControlLabel>
            <Controller
              name="title"
              control={control}
              rules={{ required: "Vui lòng nhập tiêu đề" }}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  value={field.value ?? ""}
                  onChange={(v) => field.onChange(v)}
                  placeholder="Tiêu đề"
                />
              )}
            />
            {errors.title && <Text color="red">{errors.title.message}</Text>}
          </Form.Group>

          <Form.Group controlId="description">
            <Form.ControlLabel>Mô tả</Form.ControlLabel>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  value={field.value ?? ""}
                  onChange={(v) => field.onChange(v)}
                  placeholder="Mô tả"
                />
              )}
            />
            {errors.description && (
              <Text color="red">{errors.description.message}</Text>
            )}
          </Form.Group>

          <Form.Group controlId="priority">
            <Form.ControlLabel>Mức độ quan trọng</Form.ControlLabel>
            <Controller
              name="priority"
              control={control}
              rules={{ required: "Vui lòng chọn mức độ quan trọng" }}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  accepter={SelectPicker}
                  data={PRIOLITY}
                  block
                  value={field.value ?? null}
                  onChange={(v) => field.onChange(v)}
                />
              )}
            />
            {errors.priority && (
              <Text color="red">{errors.priority.message}</Text>
            )}
          </Form.Group>

          <Form.Group controlId="eventType">
            <Form.ControlLabel>Thể loại sự kiện</Form.ControlLabel>
            <Controller
              name="eventType"
              control={control}
              rules={{ required: "Vui lòng chọn thể loại sự kiện" }}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  accepter={SelectPicker}
                  data={EVENT_TYPE}
                  block
                  value={field.value ?? null}
                  onChange={(v) => field.onChange(v)}
                />
              )}
            />
            {errors.eventType && (
              <Text color="red">{errors.eventType.message}</Text>
            )}
          </Form.Group>

          <Form.Group controlId="recurrenceRule">
            <Form.ControlLabel>Lặp lại</Form.ControlLabel>
            <Controller
              name="recurrenceRule"
              control={control}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  accepter={SelectPicker}
                  data={RECURRENCE_RULE}
                  block
                  value={field.value ?? null}
                  onChange={(v) => field.onChange(v)}
                />
              )}
            />
            {errors.recurrenceRule && (
              <Text color="red">{errors.recurrenceRule.message}</Text>
            )}
          </Form.Group>

          <Form.Group controlId="startTime">
            <Form.ControlLabel>Khoảng thời gian</Form.ControlLabel>
            <Controller
              name="dateRange"
              control={control}
              rules={{ required: "Vui lòng chọn thời gian" }}
              render={({ field }) => (
                <DateRangePicker
                  {...field}
                  placement="topStart"
                  block
                  format="MM/dd/yyyy HH:mm"
                  // đảm bảo luôn controlled: nếu field.value undefined thì dùng default from form
                  value={
                    field.value ?? [DefaultData.startTime, DefaultData.endTime]
                  }
                  onChange={(value) => {
                    field.onChange(value);
                    if (value && Array.isArray(value)) {
                      const [start, end] = value;
                      setValue("startTime", start, { shouldValidate: true });
                      setValue("endTime", end, { shouldValidate: true });
                    } else {
                      setValue("startTime", null);
                      setValue("endTime", null);
                    }
                  }}
                />
              )}
            />
            {errors.dateRange && (
              <Text color="red">{errors.dateRange.message}</Text>
            )}
          </Form.Group>
        </Form>
      </CustomModal>

      <Box className={"flex justify-between items-center gap-4"}>
        <ButtonGroup>
          {ViewOptions.map((option) => (
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
          <CustomButton onClick={() => setModelOpen(true)}>
            Thêm sự kiện
          </CustomButton>
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
          messages={Messages}
          toolbar={false}
        />
      </Box>
    </div>
  );
};

export default CustomizedCalendar;
