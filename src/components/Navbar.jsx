import LogoWithName from "./LogoWithName";
import NavItem from "./NavItem";
import NavButton from "./NavButton";

function Navbar({onLoginClick, onGetStartedClick}) {
  return (
  
    <header className="sticky top-0 z-50 flex w-full justify-center h-[58.5px] border-b border-b-[#ece4d6]">
      <div className="w-[1200px] bg-[#faf8f4]/40 backdrop-blur-md flex h-full items-center">

        <div className="flex-1 flex h-full items-center gap-12 ml-4">
          <LogoWithName/>
          <div className="flex items-center gap-6">
            <NavItem label="Browse jobs"/>
            <NavItem label="How it works"/>
            <NavItem label="Pricing"/>
          </div>
        </div>


        <div className="flex-1 justify-end flex items-center gap-3 ">
          <NavButton label="Log In" onClick={onLoginClick}/>
          <NavButton label="Get Started" onClick={onGetStartedClick} variant="filled"/>
        </div>
      </div>

    </header>
  )
}

export default Navbar;