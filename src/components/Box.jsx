import clsx from "clsx";

function Box({
  children,
  className,
  padding = true,
  margin = true,
  radius = true,
  border = true,
  ...props
}) {
  return (
    <div
      className={clsx(
        "bg-bg-box overflow-hidden",
        className,
        {
          "shadow-md shadow-shadow-subtle border-border border-1": border,
          "m-4": margin,
          "rounded-lg": radius,
          "p-3": padding,
        }
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Box;
