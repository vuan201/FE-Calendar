import { useState } from "react";
import { Sidebar, Sidenav, Nav } from "rsuite";
import { Icon } from "@rsuite/icons";
import { useNavigate } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { MdEvent } from "react-icons/md";

import { RoutePaths } from "../general/RoutePaths";
import Brand from "../components/Brand";

const WebSidebar = () => {
  const navigate = useNavigate();

  const [expand, setExpand] = useState(true);
  return (
    <Sidebar
      style={{ display: "flex", flexDirection: "column" }}
      width={expand ? 260 : 56}
      collapsible
      appearance="subtle"
    >
      <Sidenav.Header>
        <Brand expand={expand} onChange={() => setExpand(!expand)}/>
      </Sidenav.Header>
      <Sidenav expanded={expand} defaultOpenKeys={["3"]} appearance="subtle">
        <Sidenav.Body>
          <Nav defaultActiveKey="1">
            <Nav.Item eventKey="1" onClick={() => navigate(RoutePaths.HOME)} icon={<Icon as={FaHome} />}>
              Trang chủ
            </Nav.Item>
            <Nav.Item eventKey="2" onClick={() => navigate(RoutePaths.CALENDAR)} icon={<Icon as={CiCalendarDate} />}>
              Lịch
            </Nav.Item>
            <Nav.Item eventKey="3" onClick={() => navigate(RoutePaths.EVENT)} icon={<Icon as={MdEvent} />}>
              Sự kiện
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </Sidebar>
  );
};

export default WebSidebar;
