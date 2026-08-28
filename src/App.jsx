import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import GetStartedPage from "./pages/GetStartedPage";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import Today from "./pages/Today";
import Browse from "./pages/Browse";
import Saved from "./pages/Saved";
import Preferences from "./pages/Preferences";
import SetupProfile from "./pages/SetupProfile"
import DetailedJob from "./pages/DetailedJob";


function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  return (
    <div className="flex flex-col w-full items-center">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <div className="w-[1200px] bg-[#faf8f4] pt-2">
        <Routes>
          <Route path="/"element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/browseJobs" element={<Browse/>}/>
          <Route path="/howItWorks" element={<HowItWorks/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/today" element={<Today/>}/>
          <Route path="/browse" element={<Browse/>}/>
          <Route path="/saved" element={<Saved/>}/>
          <Route path="/preferences" element={<Preferences/>}/>
          <Route path="/getStarted" element={<GetStartedPage setIsLoggedIn={setIsLoggedIn} setIsNewUser={setIsNewUser}/>}/>
          <Route path="/setupProfile" element={<SetupProfile setIsNewUser={setIsNewUser}/>}/>
          <Route path="/detailedJob/:jobId" element={<DetailedJob/>}/>
        </Routes>
      </div>
    </div>
  )
}
export default App