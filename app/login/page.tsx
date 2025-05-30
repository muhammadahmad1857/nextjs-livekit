import { LoginForm } from "@/components/login";

const Login = () => {
  return (
    <div
      data-lk-theme="default"
      className="flex items-center flex-col justify-center bg-[var(--lk-bg)] min-w-screen min-h-screen"
    >
      <h1 className="font-bold text-3xl text-center text-white">Login to continue</h1>
      <LoginForm />
    </div>
  );
};
export default Login;
