import LogoWithName from "./LogoWithName";
import NavItem from "./NavItem";
import Button from "./Button";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 flex w-full justify-center h-[58.5px] border-b border-b-[#ece4d6]">
      <div className="w-[1200px] bg-[#faf8f4]/40 backdrop-blur-md flex h-full items-center">
        <div className="flex-1 flex h-full items-center gap-12 ml-4">
          <LogoWithName onClick={() => navigate("/")}/>
          <div className="flex items-center gap-6">
            {isLoggedIn ? (
              <>
                <NavItem label="Today" isActive={location.pathname === "/today"} onClick={() => navigate("/today")}/>
                <NavItem label="Browse" isActive={location.pathname === "/browse"} onClick={() => navigate("/browse")}/>
                <NavItem label="Saved" isActive={location.pathname === "/saved"} onClick={() => navigate("/saved")}/>
                <NavItem label="History" isActive={location.pathname === "/history"} onClick={() => navigate("/history")}/>
                <NavItem label="Preferences" isActive={location.pathname === "/preferences"} onClick={() => navigate("/preferences")}/>
              </>
            ) : (
              <>
                <NavItem label="Browse jobs" isActive={location.pathname === "/browseJobs"} onClick={() => navigate("/browseJobs")}/>
                <NavItem label="How it works" isActive={location.pathname === "/howItWorks"} onClick={() => navigate("/howItWorks")}/>
                <NavItem label="Pricing" isActive={location.pathname === "/pricing"} onClick={() => navigate("/pricing")}/>
              </>
            )}
          </div>
        </div>
        <div className="flex-1 justify-end flex items-center gap-3">
          {isLoggedIn ? (
            <Button label="Sign out" onClick={() => {
              setIsLoggedIn(false);
              navigate("/");
            }}/>
          ) : (
            <>
              <Button label="Log in" onClick={() => navigate("/login")}/>
              <Button label="Get Started" onClick={() => navigate("/getStarted")} variant="filled"/>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
export default Navbar;