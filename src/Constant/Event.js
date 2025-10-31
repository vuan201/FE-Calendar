export const PRIOLITY = Object.freeze([
  { value: 0, label: "Không quan trọng" },
  { value: 1, label: "mặc định" },
  { value: 2, label: "quan trọng" },
  { value: 3, label: "khẩn cấp" },
]);

export const EVENT_TYPE = Object.freeze([
  { value: 0, label: "cuộc họp" },
  { value: 1, label: "công việc cần làm" },
  { value: 2, label: "nhắc nhở" },
  { value: 3, label: "sinh nhật" },
  { value: 4, label: "ngày lễ" },
  { value: 5, label: "công tác" },
  { value: 6, label: "cá nhân" },
  { value: 7, label: "khác" },
]);

export const RECURRENCE_RULE = Object.freeze([
  { value: 0, label: "không lặp" },
  { value: 1, label: "ngày" },
  { value: 2, label: "tuần" },
  { value: 3, label: "tháng" },
  { value: 4, label: "năm" },
  { value: 5, label: "tùy chỉnh" },
]);
