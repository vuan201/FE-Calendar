import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router.jsx";
import { Loading } from "./components";
import { Container, Content } from "rsuite";
import { CustomHeader, CustomSidebar } from "./layout/index.jsx";

export const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading name="suspense" />}>
      <Container className="h-full">
        <CustomSidebar />
        <Container>
          <CustomHeader />
          <Content>
            <Router />
          </Content>
        </Container>
      </Container>
    </Suspense>
  </BrowserRouter>
);
