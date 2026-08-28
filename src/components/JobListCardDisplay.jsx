import { useState, useEffect } from "react";
import JobListCard from "./JobListCard";
import { fetchJobs } from "../service/apiService";


function JobListCardDisplay() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const loadJobs = async() => {
      const data = await fetchJobs()
      setJobs(data)
    }
    loadJobs()
  }, [])

  return(
    <div className="flex flex-col gap-2">
      {jobs.map((job) => (
        <JobListCard
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

export default JobListCardDisplay;
    