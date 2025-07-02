import vi from 'date-fns/locale/vi'; // Sử dụng locale tiếng Việt từ date-fns

const DateTimeFormats = {
  sunday: 'CN',
  monday: 'T2',
  tuesday: 'T3',
  wednesday: 'T4',
  thursday: 'T5',
  friday: 'T6',
  saturday: 'T7',
  ok: 'OK',
  today: 'Hôm nay',
  yesterday: 'Hôm qua',
  now: 'Bây giờ',
  hours: 'Giờ',
  minutes: 'Phút',
  seconds: 'Giây',
  /**
   * Định dạng chuỗi dựa trên Unicode Technical Standard #35:
   * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
   **/
  formattedMonthPattern: 'MMM', // Ví dụ: Thg 1, Thg 2
  formattedDayPattern: 'dd MMM', // Ví dụ: 01 Thg 1
  shortDateFormat: 'dd/MM/yyyy', // Ví dụ: 27/06/2025
  shortTimeFormat: 'HH:mm', // Ví dụ: 13:58
  dateLocale: vi // Sử dụng locale tiếng Việt của date-fns
};

const Combobox = {
  noResultsText: 'Không tìm thấy kết quả',
  placeholder: 'Chọn',
  searchPlaceholder: 'Tìm kiếm',
  checkAll: 'Tất cả'
};

const CreatableComboBox = {
  ...Combobox,
  newItem: 'Mục mới',
  createOption: 'Tạo tùy chọn "{0}"'
};

const locale = {
  code: 'vi-VN', // Mã ngôn ngữ chuẩn cho tiếng Việt
  common: {
    loading: 'Đang tải...',
    emptyMessage: 'Không có dữ liệu',
    remove: 'Xóa',
    clear: 'Xóa'
  },
  Plaintext: {
    unfilled: 'Chưa điền',
    notSelected: 'Chưa chọn',
    notUploaded: 'Chưa tải lên'
  },
  Pagination: {
    more: 'Thêm',
    prev: 'Trước',
    next: 'Tiếp',
    first: 'Đầu tiên',
    last: 'Cuối cùng',
    limit: '{0} / trang',
    total: 'Tổng số dòng: {0}',
    skip: 'Đi đến {0}'
  },
  DateTimeFormats,
  Calendar: DateTimeFormats,
  DatePicker: DateTimeFormats,
  DateRangePicker: {
    ...DateTimeFormats,
    last7Days: '7 Ngày qua'
  },
  Combobox,
  InputPicker: CreatableComboBox,
  TagPicker: CreatableComboBox,
  Uploader: {
    inited: 'Khởi tạo',
    progress: 'Đang tải lên',
    error: 'Lỗi',
    complete: 'Hoàn thành',
    emptyFile: 'Trống',
    upload: 'Tải lên',
    removeFile: 'Xóa tập tin'
  },
  CloseButton: {
    closeLabel: 'Đóng'
  },
  Breadcrumb: {
    expandText: 'Hiện đường dẫn'
  },
  Toggle: {
    on: 'Bật',
    off: 'Tắt'
  }
};

export default locale; // Xuất locale để có thể import và sử dụng

// Cách sử dụng trong component chính của bạn
/*
import { CustomProvider } from 'rsuite';
import App from './App'; // Giả sử component gốc của bạn là App
import locale from './your-locale-file'; // Đường dẫn đến file locale bạn vừa tạo

function Root() {
  return (
    <CustomProvider locale={locale}>
      <App />
    </CustomProvider>
  );
}

export default Root;
*/