function combineDateAndTime(date1, date2) {
  if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
    throw new Error("Cả hai tham số phải là đối tượng Date hợp lệ");
  }

  return new Date(
    date1.getFullYear(), // Năm từ date1
    date1.getMonth(), // Tháng từ date1 (0–11)
    date1.getDate(), // Ngày từ date1
    date2.getHours(), // Giờ từ date2
    date2.getMinutes(), // Phút từ date2
    date2.getSeconds(), // Giây từ date2
    date2.getMilliseconds() // Mili-giây từ date2 (tùy chọn)
  );
}
export default combineDateAndTime;
