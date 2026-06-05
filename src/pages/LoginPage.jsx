import Button from "../components/Button";
import GetStartedPage from "./GetStartedPage";
function LoginPage({onScreenChange}){
  return(
    <div className="min-h-screen flex flex-col items-center justify-center">

      <div className="w-full max-w-sm text-center mb-8">
        <h1 className="text-[48px] text-[#1a2e2a] font-bold text leading-tight">
          Welcome Back
          </h1>
        <p className="text-gray-900 text-sm mt-1">
          Log in to see today's three.
        </p>
      </div>

      <div className="w-full max-w-sm flex flex-col gap-3">
        <Button 
          className="w-full py-[14px] border border-[#d6d0c0] rounded-xl"
          variant="filled"
          label= "G Continue with Google"
          color="#faf8f4"
          textColor="#1a2e2a"
          />
        <Button
          className="w-full py-[14px] border border-[#d6d0c0] rounded-xl"
          variant="filled"
          label= "⌘ Continue with GitHub"
          color="#faf8f4"
          textColor="#1a2e2a"
        />

          <div className="flex items-center my-2">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-900">Email</label>
        <input
          className="w-full py-[11px] px-4 border border-[#d6d0c0] rounded-lx outline-none"
          type="email"
          placeholder="you@work.com"
        />

        <label className="text-sm text-gray-900">Password</label>
        <input
          className="w-full py-[11px] px-4 border border-[#d6d0c0] rounded-lg outline-none"
          type="password"
          placeholder="••••••••"
        />


      </div>

        <Button
          className="w-full py-[14px] px-4 rounded-lx mt-1"
          variant="filled" 
          label="Log in"
        />

        <p className="text-sm text-gray-500 text-center mt-2">
          New here?{" "}
          <span 
            className="text-[#1a2e2a] font-medium cursor-pointer"
            onClick={() => onScreenChange("getStarted")}
            >
            Create an account
          </span>
        </p>

      </div>

    </div>
  );
}
export default LoginPage;