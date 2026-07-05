import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Button from "../components/Button";

function GetStartedPage({setIsLoggedIn, setIsNewUser}){
  const navigate = useNavigate();
  const[email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

    function validate() {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email.";
    }
    
    if (!password.trim()) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Password is required.";
    } else if (confirmPassword != password) {
      newErrors.confirmPassword = "Passwords do not macth. Try again!";
    }

    return newErrors;
  }

  function handleLogin() {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsNewUser(true);
    setIsLoggedIn(true);
    navigate("/setupProfile");
  }

  return(
    <div className="min-h-screen flex flex-col items-center justufy-center">
      <div className="w-full text-center max-w-lg mb-8">
        <h1 className="text-[48px] text-[#1a2e2a] font-bold">
          Create your account
        </h1>
        <p className="text-gray-900 text-sm mt-1">
          14 days of Pro, free. No card.
        </p>
      </div>

      <div className="w-full max-w-sm flex flex-col gap-3">
        <Button
          className="w-full py-[14px] border border-[#d6d0c0] rounded-xl"
          variant="filled"
          label="G Continue with Google"
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
          <label className="text-sm text-gray-900 text-left">Email</label>
          <input
            className={`w-full py-[11px] px-4 border rounded-lg outline-none border-[#d6d0c0] ${errors.email ? "border-red-400" : "border=[#d6d0c0]"}`}
            type="email"
            placeholder="you@work.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}

          <label className="text-sm  text-gray-900 text-left">Password</label>
          <input
            className={`w-full py-[11px] px-4 border rounded-lg outline-none border-[#d6d0c0] ${errors.email ? "border-red-400" : "border=[#d6d0c0]"}`}
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}

          <label className="text-sm  text-gray-900 text-left">Confirm Password</label>
          <input
            className={`w-full py-[11px] px-4 border rounded-lg outline-none border-[#d6d0c0] ${errors.email ? "border-red-400" : "border=[#d6d0c0]"}`}
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
          )}

        </div>

        <Button
          className="w-full py-[14px] px-4 rounded-lg mt-1"
          variant="filled"
          label="Create account"
          onClick={handleLogin}
        />

        <p className="text-sm text-gray-500 text-center mt-2">
          Already have an account?{" "}
          <span
            className="text-[#1a2e2a] font-medium cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Log in
          </span>
        </p>

      </div>
    </div>
  )
}
export default GetStartedPage;