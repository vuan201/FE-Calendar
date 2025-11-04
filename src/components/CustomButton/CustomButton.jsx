import "./customButton.css";
import PropTypes from "prop-types";

const CustomButton = ({ children, icon, ...props }) => {
  return (
    <button className="custom-btn px-3 py-2" {...props}>
      {icon ?? ""}
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.any,
};

export default CustomButton;
