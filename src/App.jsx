import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router.jsx";
import { Loading } from "./components";
import { Container, Content } from "rsuite";
import { CustomHeader, CustomSidebar } from "./layout/index.jsx";
import { useSelector } from "react-redux";
import { selectMaxWidthSizebar, selectMinWidthSizebar, selectSidebarExpand } from "./app/redux";
import moment from "moment";
import "moment/locale/vi";

moment.locale("vi");

export const App = () => {
  const expand = useSelector(selectSidebarExpand);
  const maxWidth = useSelector(selectMaxWidthSizebar)
  const minWidth = useSelector(selectMinWidthSizebar)

  return (
    <div className="app min-h-screen flex flex-col">
      <BrowserRouter>
        <Suspense fallback={<Loading name="suspense" />}>
          <Container className="">
            <CustomSidebar />
            <Container style={{ marginLeft: expand ? maxWidth : minWidth , transition: 'all .3s ease-in-out' }}>
              <div className="px-2 sm:px-3 md:px-4 lg:px-5">
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
};
