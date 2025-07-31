import { LoginForm } from "@/components/login";

const Login = () => {
  console.log("Next.js process.version:", process.version);
  return (
    <div
      data-lk-theme="default"
      className="flex items-center flex-col justify-center bg-[var(--lk-bg)] min-w-screen min-h-screen"
    >
      <h1 className="font-bold text-3xl text-center text-white mb-5">Login to continue</h1>
      <LoginForm />
    </div>
  );
};
export default Login;
