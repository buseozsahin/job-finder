import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import GetStartedPage from "./pages/GetStartedPage";
import BrowseJobs from "./pages/BrowseJobs";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import Today from "./pages/Today";
import Browse from "./pages/Browse";
import Saved from "./pages/Saved";
import History from "./pages/History";
import Preferences from "./pages/Preferences";
import SetupProfile from "./pages/SetupProfile"


function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  return (
    <div className="flex flex-col w-full items-center">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <div className="w-[1200px] h-[900px] bg-white">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/browseJobs" element={<BrowseJobs/>}/>
          <Route path="/howItWorks" element={<HowItWorks/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/today" element={<Today/>}/>
          <Route path="/browse" element={<Browse/>}/>
          <Route path="/saved" element={<Saved/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/preferences" element={<Preferences/>}/>
          <Route path="/getStarted" element={<GetStartedPage setIsLoggedIn={setIsLoggedIn} setIsNewUser={setIsNewUser}/>}/>
          <Route path="/setupProfile" element={<SetupProfile setIsNewUser={setIsNewUser}/>}/>
        </Routes>
      </div>
    </div>
  )
}
export default App