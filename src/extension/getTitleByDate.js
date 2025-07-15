import dayjs from "dayjs";

// --- Logic hiển thị tiêu đề tùy chỉnh ---
const getTitleByDate = (date, view) => {
  try {
    const currentDayJs = dayjs(date); // Chuyển đổi date thành đối tượng Day.js
    switch (view) {
      case "day":
        // Chế độ ngày: hiển thị ngày, tháng, năm chi tiết
        return currentDayJs.format("dddd, [Ngày] DD MMMM [Năm] YYYY");
      case "week": {
        var result = `Tuần ${currentDayJs.week()} `;
        const startOfWeek = currentDayJs.startOf("week"); // Lấy ngày đầu tuần
        const endOfWeek = currentDayJs.endOf("week"); // Lấy ngày cuối tuần

        const startMonth = startOfWeek.format("MM"); // Tháng của ngày đầu tuần
        const endMonth = endOfWeek.format("MM"); // Tháng của ngày cuối tuần

        const startYear = startOfWeek.year(); // Năm của ngày đầu tuần
        const endYear = endOfWeek.year(); // Năm của ngày cuối tuần

        if (startYear === endYear) {
          if (startMonth === endMonth) {
            result += `Từ ${startOfWeek.format("DD")} - ${endOfWeek.format("DD")} tháng ${startMonth} năm ${startYear}`;
          } else {
            result += `từ ${startOfWeek.format("DD")}/${startMonth} - ${endOfWeek.format("DD")}/${endMonth} năm ${startYear}`;
          }
        } else {
          result += `từ ${startOfWeek.format("DD")}/${startMonth}/${startYear} - ${endOfWeek.format("DD")}/${endMonth}/${endYear}`;
        }

        return result;
      }
      case "month":
        // Chế độ tháng: chỉ cần hiện tháng
        return currentDayJs.format("MMMM [Năm] YYYY");
      default:
        return currentDayJs;
    }
  } catch (err) {
    return null;
  }
};

export default getTitleByDate;
