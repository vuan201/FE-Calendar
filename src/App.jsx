import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router.jsx";
import { Loading } from "./components";
import { Container, Content } from "rsuite";
import { CustomHeader, CustomSidebar } from "./layout/index.jsx";

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
