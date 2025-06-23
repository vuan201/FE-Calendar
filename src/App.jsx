import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./general/Router.jsx";
import { Loading } from "./components/Loading.jsx";
import { Container, Content } from "rsuite";
import WebHeader from "./Layout/Header.jsx";
import WebSidebar from "./Layout/WebSidebar.jsx";
export const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading name="suspense" />}>
      <Container>
        <WebSidebar />
        <Container>
          <WebHeader />
          <Content>
            <Router />
          </Content>
        </Container>
      </Container>
    </Suspense>
  </BrowserRouter>
);
