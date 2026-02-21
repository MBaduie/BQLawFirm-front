import { Outlet } from "react-router";
const AuthLayout = () => {
  return (
    <div className="flex text-center h-dvh">
      <div className="w-1/3 bg-stone-100 linear align-center justify-center flex flex-col">
        <h1 className="text-2xl sm:text-3xl font-semibold  mt-20">
          إيـــاد البكري وأثير قربان للمحاماة والاستشارات القانونية
        </h1>
      </div>
      <div className="w-2/3 mt-10">
        تسجيل الدخول
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
