import PropTypes from "prop-types";
import CustomModal from "../../components/CustomModal";
import {
  DatePicker,
  FlexboxGrid,
  Form,
  SelectPicker,
  Text,
  TimeRangePicker,
} from "rsuite";
import { Controller, useForm } from "react-hook-form";
import { EVENT_TYPE, PRIOLITY, RECURRENCE_RULE } from "../../constant";
import { combineDateAndTime } from "../../extension";

const SaveModal = ({ defaultData, modelOpen, setModelOpen }) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: defaultData,
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  // Hàm chặn ngày trong quá khứ
  const disablePastDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
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

        <FlexboxGrid>
          <FlexboxGrid.Item colspan={12}>
            <Form.Group>
              <Form.ControlLabel>Ngày diễn ra</Form.ControlLabel>
              <Controller
                name="dateRange"
                control={control}
                rules={{ required: "Vui lòng chọn thời gian" }}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    placement="topStart"
                    block
                    format="MM/dd/yyyy"
                    shouldDisableDate={disablePastDate}
                    onChange={(value) => {
                      field.onChange(value);
                      if (value) {
                        setValue("startTime", value, { shouldValidate: true });
                        setValue("endTime", value, { shouldValidate: true });
                      } else {
                        setValue("startTime", null);
                        setValue("endTime", null);
                      }
                    }}
                  />
                )}
              />
            </Form.Group>
          </FlexboxGrid.Item>

          <FlexboxGrid.Item colspan={12}>
            <Form.Group>
              <Form.ControlLabel>Khoảng thời gian</Form.ControlLabel>
              <Controller
                name="timeRange"
                control={control}
                rules={{ required: "Vui lòng chọn thời gian" }}
                render={({ field }) => (
                  <TimeRangePicker
                    {...field}
                    placement="topStart"
                    block
                    format="HH:mm"
                    value={[defaultData.startTime, defaultData.endTime]}
                    onChange={(value) => {
                      field.onChange(value);
                      if (value) {
                        const [start, end] = value;
                        setValue(
                          "startTime",
                          combineDateAndTime(defaultData.startTime, start),
                          { shouldValidate: true }
                        );
                        setValue(
                          "endTime",
                          combineDateAndTime(defaultData.endTime, end),
                          { shouldValidate: true }
                        );
                      } else {
                        setValue("startTime", null);
                        setValue("endTime", null);
                      }
                    }}
                  />
                )}
              />
            </Form.Group>
          </FlexboxGrid.Item>
        </FlexboxGrid>

        {errors.dateRange && (
          <Text color="red">{errors.dateRange.message}</Text>
        )}
      </Form>
    </CustomModal>
  );
};

SaveModal.propTypes = {
  defaultData: PropTypes.object,
  modelOpen: PropTypes.bool,
  setModelOpen: PropTypes.func,
};

export default SaveModal;
