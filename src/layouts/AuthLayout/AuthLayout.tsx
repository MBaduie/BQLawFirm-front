import Login from "../../pages/auth/login/Login";
const AuthLayout = () => {
  return (
    <div className=" container flex justify-between">
      <Login />
      <div className="flex text-center h-dvh">
        <div className="w-1/3 bg-stone-100 linear align-center justify-center flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-semibold  mt-20">
            إيـــاد البكري وأثير قربان للمحاماة والاستشارات القانونية
          </h1>
        </div>
        <div className="w-2/3 mt-10">تسجيل الدخول</div>
      </div>
    </div>
  );
};
export default AuthLayout;
