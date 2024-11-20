import { Navigate } from "react-router-dom";

function NotFound() {
  return <Navigate to={"/dogs"} />;
}

export default NotFound;
