import { Sidebar, Sidenav, Nav } from "rsuite";
import { Icon } from "@rsuite/icons";
import { useLocation, useNavigate } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { MdEvent } from "react-icons/md";
import clsx from "clsx";

import { useDispatch, useSelector } from "react-redux";
import { selectSidebarExpand, changeSidebarState } from "../app/redux";

import { RoutePaths } from "../router/RoutePaths";
import { Brand } from "../components";
import { BackgroundColor } from "../constant";
const CustomSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const expand = useSelector(selectSidebarExpand);

  const MenuItem = [
    { path: RoutePaths.HOME, name: "Trang chủ", icon: FaHome },
    { path: RoutePaths.CALENDAR, name: "Lịch", icon: CiCalendarDate },
    { path: RoutePaths.EVENT, name: "sự kiện", icon: MdEvent },
  ];

  return (
    <Sidebar
      style={{ display: "flex", flexDirection: "column" }}
      width={expand ? 180 : 56}
      collapsible
      className={clsx(BackgroundColor.Sidebar, "sticky top-0 text-2xl bg-box")}
    >
      <Sidenav.Header>
        <Brand
          expand={expand}
          onChange={() => dispatch(changeSidebarState(expand))}
        />
      </Sidenav.Header>
      <Sidenav expanded={expand} appearance="subtle">
        <Sidenav.Body>
          <Nav>
            {MenuItem.map((item, index) => (
              <Nav.Item
                key={item.path}
                eventKey={index}
                onClick={() => navigate(item.path)}
                icon={<Icon as={item.icon} />}
                active={item.path === location.pathname}
              >
                {item.name}
              </Nav.Item>
            ))}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </Sidebar>
  );
};

export default CustomSidebar;
