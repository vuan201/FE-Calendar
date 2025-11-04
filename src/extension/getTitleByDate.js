import moment from "moment";
import "moment/locale/vi";
import { Views } from "react-big-calendar";

// Thiết lập locale tiếng Việt cho moment
moment.locale("vi");

// --- Logic hiển thị tiêu đề tùy chỉnh ---
const getTitleByDate = (date, view) => {
  try {
    const currentMoment = moment(date); // Chuyển đổi date thành đối tượng Moment
    switch (view) {
      case Views.DAY:
        // Chế độ ngày: hiển thị ngày, tháng, năm chi tiết
        return currentMoment.format("dddd, [Ngày] DD MMMM [Năm] YYYY");
      case Views.WEEK:
      case Views.WORK_WEEK: {
        return `Tuần ${currentMoment.week()} năm ${currentMoment.year()}`;
      }
      case Views.MONTH:
        // Chế độ tháng: chỉ cần hiện tháng
        return currentMoment.format("MMMM [Năm] YYYY");
      default:
        return `Năm ${currentMoment.year()}`;
    }
  } catch (err) {
    return null;
  }
};

export default getTitleByDate;
