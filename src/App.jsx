import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router.jsx";
import { Loading } from "./components";
import { Container, Content } from "rsuite";
import { CustomHeader, CustomSidebar } from "./layout/index.jsx";
import dayjs, { localeData } from "dayjs";
import weekday from "dayjs/plugin/weekday"; // Plugin để lấy thứ trong tuần
import isBetween from "dayjs/plugin/isBetween"; // Plugin để kiểm tra khoảng thời gian
import weekOfYear from "dayjs/plugin/weekOfYear"; // Plugin để lấy số tuần trong năm

// Kích hoạt plugin localeData cho Day.js
dayjs.extend(localeData);

// Đặt ngôn ngữ mặc định cho Day.js là tiếng Việt
dayjs.locale("vi");
dayjs.extend(weekday);
dayjs.extend(isBetween);
dayjs.extend(weekOfYear); // Thêm plugin weekOfYear

export const App = () => (
  <div className="app min-h-screen flex flex-col">
    <BrowserRouter>
      <Suspense fallback={<Loading name="suspense" />}>
        <Container className="h-full">
          <CustomSidebar />
          <Container>
            <div className="px-2 sm:px-4 md:px-8 lg:px-12">
              <div className="mx-auto ">
                <CustomHeader />
                <Content>
                  <Router />
                </Content>
              </div>
            </div>
          </Container>
        </Container>
      </Suspense>
    </BrowserRouter>
  </div>
);
