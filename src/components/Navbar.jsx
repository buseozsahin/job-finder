import LogoWithName from "./LogoWithName";
import NavItem from "./NavItem";
import Button from "./Button";
import { useState } from "react";


function Navbar({onScreenChange, isLoggedIn}) {
  const [active, setActive] = useState(null);

  const handleNav = (screen) => {
    setActive(screen);
    onScreenChange(screen);
  };

  return (
  
    <header className="sticky top-0 z-50 flex w-full justify-center h-[58.5px] border-b border-b-[#ece4d6]">
      <div className="w-[1200px] bg-[#faf8f4]/40 backdrop-blur-md flex h-full items-center">

        <div className="flex-1 flex h-full items-center gap-12 ml-4">
          <LogoWithName
            onClick={() => onScreenChange("home")}
            />
          <div className="flex items-center gap-6">

            {isLoggedIn ? (
               <>
                <NavItem 
                  label="Today" 
                  isActive={active === "today"}
                  onClick={() => handleNav("today")}/>
                <NavItem 
                  label="Browse" 
                  isActive={active === "browse"}
                  onClick={() => handleNav("browse")}/>
                <NavItem 
                  label="Saved" 
                  isActive={active === "saved"}
                  onClick={() => handleNav("saved")}/>
                <NavItem 
                  label="History" 
                  isActive={active === "history"}
                  onClick={() => handleNav("history")}/>
                <NavItem 
                  label="Preferences" 
                  isActive={active === "preferences"}
                  onClick={() => handleNav("preferences")}/>
              </>

            ): (
              <>
                <NavItem 
                label="Browse jobs" 
                isActive={active === "browseJobs"}
                onClick={() => handleNav("browseJobs")}/>
              <NavItem 
                label="How it works" 
                isActive={active === "howItWorks"}
                onClick={() => handleNav("howItWorks")}/>
              <NavItem 
                label="Pricing" 
                isActive={active === "pricing"}
                onClick={() => handleNav("pricing")}/>
              </>
            )}

          </div>
        </div>


        <div className="flex-1 justify-end flex items-center gap-3 ">
          <Button 
            label="Log In" 
            onClick={() => handleNav("login")}/>
          <Button 
            label="Get Started" 
            onClick={() => handleNav("getStarted")} 
            variant="filled"/>
        </div>
      </div>

    </header>
  )
}

export default Navbar;