import "./customButton.css";

const CustomButton = ({
  children,
  ...props
}) => {
  return (
    <button className="custom-btn px-3 py-2" {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
