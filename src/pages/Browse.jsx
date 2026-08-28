import JobListCard from "../components/JobListCard";
import companyLogo from "../assets/companyLogo.png";
import JobListCardDisplay from "../components/JobListCardDisplay";

function Browse(){
  return(
    <div className="pl-5 flex flex-col gap-4">
      <div>
        <h1 className="text-[44px] text-[#1a2e2a] font-semibold">
          Browse jobs</h1>
      </div>
      <JobListCardDisplay/>
    </div>

  );
}
export default Browse;