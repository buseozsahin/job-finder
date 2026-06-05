import { useState } from "react"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import GetStartedPage from "./pages/GetStartedPage";
import BrowseJobs from "./pages/BrowseJobs";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";

function App() {
  const[screen, setScreen] = useState("home");
  return (
    <div className="flex flex-col w-full items-center">
      <Navbar onScreenChange={(value) => setScreen(value)}/>

      <div className="bg-[#ffffff] w-[1200px] h-[900px]">
        {screen === "home" && <HomePage/>}
        {screen === "login" && <LoginPage/>}
        {screen === "getStarted" && <GetStartedPage/>}
        {screen === "browseJobs" && <BrowseJobs/>}
        {screen === "howItWorks" && <HowItWorks/>}
        {screen === "pricing" && <Pricing/>}
      </div>
    </div>

  )
}

export default App
