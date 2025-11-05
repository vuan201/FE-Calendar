import { Calendar, Sidebar, Sidenav } from "rsuite";

import { useDispatch, useSelector } from "react-redux";
import {
  selectSidebarExpand,
  changeSidebarState,
  selectMaxWidthSizebar,
  selectMinWidthSizebar,
  setSelectedTime,
  setOpenModal,
  selectedTime,
} from "../app/redux";

import { Brand, CustomButton } from "../components";
import { BackgroundColor } from "../constant";
import PlusIcon from "@rsuite/icons/Plus";

const CustomSidebar = () => {
  const dispatch = useDispatch();

  const expand = useSelector(selectSidebarExpand);
  const maxWidth = useSelector(selectMaxWidthSizebar);
  const minWidth = useSelector(selectMinWidthSizebar);
  const time = useSelector(selectedTime)
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
        <Sidenav expanded={expand} appearance="subtle" className="px-2 mt-6">
          <Sidenav.Body>
            <CustomButton
              onClick={() => dispatch(setOpenModal(true))}
              icon={<PlusIcon />}
            >
              {expand ? "Thêm sự kiện" : ""}
            </CustomButton>

            {expand && (
              <Calendar
                compact
                isoWeek={true}
                value={time}
                onChange={(data) => {
                  dispatch(setSelectedTime(data));
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
