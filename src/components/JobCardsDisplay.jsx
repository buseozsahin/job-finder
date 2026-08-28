import { useState, useEffect } from "react";
import { fetchJobs } from "../service/apiService";
import JobCard from "./JobCard";

function JobCardsDisplay() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const loadJobs = async () => {
      const data = await fetchJobs()
      setJobs(data)
    } 
    loadJobs()
  }, [])

  return(
    <div>
      {jobs.map((job) => (
      <JobCard
        key={job.id}
        id={job.id}
        title={job.title}
        companyName={job.company}
        location={job.location}
        remote={job.remote}
        salaryMin={job.salaryMin}
        salaryMax={job.salaryMax}
        skills={job.skills}
        postedDate={job.postedDate}
      />
    ))}
    </div>
  )
} 

export default JobCardsDisplay;