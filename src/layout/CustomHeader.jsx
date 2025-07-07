import { Header, Breadcrumb } from "rsuite";

const CustomHeader = () => {
  return (
    <Header className="page-header">
      <Breadcrumb>
        {/* <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="##">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item active>Overview</Breadcrumb.Item> */}
      </Breadcrumb>
    </Header>
  );
};

export default CustomHeader;
