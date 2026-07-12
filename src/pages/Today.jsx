import JobCard from "../components/JobCard";
import JobCardsDisplay from "../components/JobCardsDisplay";

function Today(){
  return(
    <div className="pl-20">
      <div>
        <h1 className="text-[52px] text-[#1a2e2a] font-semibold"> 
          Good Morning,  
          <span className="text-[52px] text-[#2D5A4F] font-semibold"> Alex</span>.
          </h1>

          <p className="text-sm text-gray-500 mb-4">Three new roles that fit, ranked by how well we think they match your profile.</p>
      </div>
      <JobCardsDisplay></JobCardsDisplay>
    </div>
  );
}
export default Today;