import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components";

const Layout = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};

export default Layout;
