import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../router/RoutePaths.jsx";
import Box from "./Box.jsx";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate();

  return (
    <Box role="alert">
      {import.meta.env.DEV && (
        <div className="">
          <p>DEV ONLY!</p>
          <p>Đã xảy ra lỗi:</p>
          <pre>{error.message}</pre>
          <button onClick={resetErrorBoundary}>Thử lại</button>
        </div>
      )}
      <div className="mb-4 mt-16 flex w-full flex-col items-center justify-center space-y-16">
        <div>
          <a
            onClick={() => {
              resetErrorBoundary();
              navigate(RoutePaths.HOME);
            }}
          >
            Trang chủ
          </a>
        </div>
        <div>Đã xảy ra lỗi. Vui lòng liên hệ bộ phận hỗ trợ!</div>
      </div>
    </Box>
  );
};

export default ErrorFallback;
