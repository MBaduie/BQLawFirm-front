import LoginForm from "../../../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className="container flex min-h-dvh justify-between">
      <div className="w-1/3">img</div>
      <div className="form w-2/3 text-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
