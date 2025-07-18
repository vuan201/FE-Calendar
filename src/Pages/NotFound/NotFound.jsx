import { RoutePaths } from '../../router/RoutePaths.jsx';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <h3 className="px-3 py-2 text-base font-medium">
        Trang không tồn tại!
      </h3>
      <button onClick={() => navigate(RoutePaths.HOME)} type="button">
        Về trang chủ
      </button>
    </div>
  );
};

export default NotFound;