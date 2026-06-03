import { useState } from "react"
import Navbar from "./components/Navbar"

function App() {
  const[screen, setscreen] = useState("HOME");
  return (
    <div className="flex flex-col w-full items-center">

      <Navbar onLoginClick={() => setscreen("LOGIN")}
        onGetStartedClick={() => setscreen("GET STARTED")}
      />

      <h1 className="bg-[#ffffff] w-[1200px] h-[900px]">BUSE</h1>
    </div>

  )
}

export default App
