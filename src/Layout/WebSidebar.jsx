import { Sidebar, Sidenav, Nav } from "rsuite";
import { Icon } from "@rsuite/icons";
import { FaHome } from "react-icons/fa";
import NavToggle from "../components/NavToggle";
import Brand from "../components/Brand";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../general/RoutePaths";

const WebSidebar = () => {
  const navigate = useNavigate();

  const [expand, setExpand] = useState(true);
  return (
    <Sidebar
      style={{ display: "flex", flexDirection: "column" }}
      width={expand ? 260 : 56}
      collapsible
    >
      <Sidenav.Header>
        <Brand expand={expand} />
      </Sidenav.Header>
      <Sidenav expanded={expand} defaultOpenKeys={["3"]} appearance="subtle">
        <Sidenav.Body>
          <Nav defaultActiveKey="1">
            <Nav.Item eventKey="1" onClick={() => navigate(RoutePaths.HOME)} icon={<Icon as={FaHome} />}>
              Trang chủ
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
      <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
    </Sidebar>
  );
};

export default WebSidebar;
