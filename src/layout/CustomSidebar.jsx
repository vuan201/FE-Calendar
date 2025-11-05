import { Calendar, Sidebar, Sidenav } from "rsuite";

import { useDispatch, useSelector } from "react-redux";
import {
  selectSidebarExpand,
  changeSidebarState,
  selectMaxWidthSizebar,
  selectMinWidthSizebar,
  setSelectedTime,
} from "../app/redux";

import { Brand } from "../components";
import { BackgroundColor } from "../constant";

const CustomSidebar = () => {
  const dispatch = useDispatch();

  const expand = useSelector(selectSidebarExpand);
  const maxWidth = useSelector(selectMaxWidthSizebar);
  const minWidth = useSelector(selectMinWidthSizebar);

  return (
    <div className="fixed left-0 top-0 h-screen z-10">
      <Sidebar
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          transition: "width 0.3s ease",
        }}
        width={expand ? maxWidth : minWidth}
        collapsible
        className={BackgroundColor.Sidebar}
      >
        <Sidenav.Header className="text-2xl">
          <Brand
            expand={expand}
            onChange={() => dispatch(changeSidebarState(expand))}
          />
        </Sidenav.Header>
        <Sidenav expanded={expand} appearance="subtle">
          <Sidenav.Body>
            {expand && (
              <Calendar
                compact
                isoWeek={true}
                onChange={(data) => {
                  dispatch(setSelectedTime(data))
                }}
              />
            )}
          </Sidenav.Body>
        </Sidenav>
      </Sidebar>
    </div>
  );
};

export default CustomSidebar;
