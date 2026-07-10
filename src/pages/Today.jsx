import JobCard from "../components/JobCard";

function Today(){
  return(
    <div className="flex-start">
      <JobCard
        title="Staff Software Engineer, Platform"
        companyName="Linear"
        location="America"
        remote="Remote"
        salaryMin={210000}
        salaryMax={280000}
        skills={["TypeScript", "Postgres", "Distrinuted Systems", "Node.js"]}
        companyLogo={null}
      />

          <JobCard
        title="title"
        companyName="companyName"
        location="location"
        remote="remote"
        salaryMin={100000}
        salaryMax={150000}
        skills={["skill1", "skill2", "skill3"]}
        companyLogo={null}
      />

          <JobCard
        title="title"
        companyName="companyName"
        location="location"
        remote="remote"
        salaryMin={100000}
        salaryMax={150000}
        skills={["skill1", "skill2", "skill3"]}
        companyLogo={null}
      />
    </div>
    
  );
}
export default Today;