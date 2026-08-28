import Button from "../components/Button";
import JobCard from "../components/JobCard";
import JobCardsDisplay from "../components/JobCardsDisplay";
import backArrow from "../assets/backArrow.png";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Today(){
  const now = new Date();
  const navigate = useNavigate()

  const monoFont = "'JetBrains Mono', 'SF Mono', Menlo, monospace"

  const dateString = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const timeString = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  function getGreeting() {
    const hour = now.getHours()
    if (hour < 12) {
      return "Good Morning"
    } else if (hour < 17) {
      return "Good Afternoon"
    } else {
      return "Good Night"
    }
  }

  function handleManageSources(){
    navigate("/preferences")
  }

  return(

    <div className="pl-40">
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wide mt-8"
        style={{ fontFamily: monoFont }}>
          {dateString} · {timeString}
        </p>

        <h1 className="text-[44px] text-[#1a2e2a] font-semibold"> 
          {getGreeting()} 
          <span className="text-[44px] text-[#2D5A4F] font-semibold"> USER</span>.
          </h1>

          <p className="text-sm text-gray-500 mb-4">Three new roles that fit, ranked by how well we think they match your profile.</p>
      </div>

      <div className="flex gap-5 mt-[32px]">
        <JobCardsDisplay/>

        <div className="flex flex-col gap-5">
          <div className="w-[300px] h-[209px] border border-[#D6D0C0] rounded-xl bg-[#faf8f4]">

            <p className="uppercase m-6 text-xs text-[#8A9590]" 
            style={{ fontFamily: monoFont}}>This Week</p>

            <div className="flex flex-col text-xs text-gray-700 px-6 gap-2">

              <div className="flex justify-between items-center">
                <p>Matches seen</p>
                <span className="text-lg font-semibold">0</span>
              </div>
              
                <hr className="border-t border-[#D6D0C0] w-[250px]" />

              <div className="flex justify-between items-center">
                <p>Saved</p>
                <span className="text-lg font-semibold">0</span>
              </div>
              
              <hr className="border-t border-[#D6D0C0] w-[250px]" />

              <div className="flex justify-between items-center">
                <p>History</p>
                <span className="text-lg font-semibold">0</span>
              </div>

            </div>
          </div>

          <div className="w-[300px] h-[190px] border border-[#2D5A4F40] bg-[#2D5A4F14] rounded-xl">

            <p className="uppercase mt-5 ml-6 mb-4 text-xs text-[#8A9590]" 
            style={{ fontFamily: monoFont}}>Sources Active</p>

            <div className="flex flex-col gap-2 justify-between text-xs text-gray-700 ml-6">
              <p>Job web site</p>
              <p>Job web site</p>
              <p>Job web site</p>
              <p>Job web site</p>
            </div>

            <Button
              className="mt-3 !text-[#2d5a4f] text-xs"
              icon={<img src={backArrow} className="w-4 h-4"/>}
              label="Manage sources"
              onClick={handleManageSources}
            />

          </div>
        </div>

      </div>
    </div>


  );
}
export default Today;