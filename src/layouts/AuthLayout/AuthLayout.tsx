import { Outlet } from "react-router";
const AuthLayout = () => {
  return (
    <div className="flex justify-between">
      <div>img</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
