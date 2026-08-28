import { useEffect, useState } from "react";
import Button from "./Button"
import { useParams, useNavigate } from "react-router-dom";
import { fetchJobs } from "../service/apiService";
import backArrow from "../assets/backArrow.png";
import CompanyLogo from"../assets/companyLogo.png";
import Chip from"../components/Chip";


export default function DetailedJobCard() {
  const { jobId } = useParams()
  const navigate = useNavigate()
  const [job, setJob] = useState(null)

  const monoFont = "'JetBrains Mono', 'SF Mono', Menlo, monospace"

  useEffect(() => {
    const loadJob = async() =>{
      const allJobs = await fetchJobs()
      const found = allJobs.find((j) => j.id === jobId)
      setJob(found)
    }
    loadJob()
  }, [jobId])

    function timeAgo(dateString) {
    const posted = new Date(dateString);
    const now = new Date();
    const diffMs = now - posted;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    if (diffHours < 1) return "just now";
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);

    return `${diffDays}d ago`;
  }

  function handleBackToToday() {
    navigate("/today")
  }
   if (!job) return <p>Loading...</p>;

  return (
    <div className="pt-4 pl-40 flex gap-5">

      <div className="w-[690px]">
        <Button
          className="mb-4 !text-[#4a5a55] text-xs"
          icon={<img src={backArrow} className="w-4 h-4" />}
          label="Back to today"
          onClick={handleBackToToday}
        />

        <div className="flex items-start gap-3">
          <div className="w-[52px] h-[52px] ml-4">
            {job.companyLogo ? (
              <img
                src={job.companyLogo}
                alt={job.company}
                className="w-full h-full rounded-lg object-cover border border-[#d6d0c0]"
              />
            ) : (
              <img
                src={CompanyLogo}
                alt="Company Logo Placeholder"
                className="w-full h-full rounded-lg object-cover border border-[#d6d0c0]"
              />
            )}
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#1a2e2a]">{job.title}</h1>
            <p className="text-gray-600 text-sm mt-1 pl-2">
              {job.company} · {job.location}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap pl-20">
          {job.skills.map((skill) => (
            <Chip key={skill} label={skill} selectable={false} />
          ))}
        </div>

        <div className="m-4 text-sm text-gray-800 leading-relaxed">
          <p className="text-xs text-[#8A9590] uppercase font-semibold">overview</p>
          <p className="mt-2">{job.overview}</p>

          <p className="text-xs text-[#8A9590] uppercase mt-8 font-semibold">requirements</p>
          <ul>
            {job.requirements.map((req) => (
              <li key={req} className="flex items-start gap-2 mt-2 text-[#4a5a55]">
                <span>◆</span>
                <p>{req}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-5">

        <div className="w-[300px] border border-[#D6D0C0] rounded-xl bg-[#faf8f4] p-5">
          <div className="flex items-center justify-between">
            <p
              className="uppercase text-xs text-[#8A9590]"
              style={{ fontFamily: monoFont }}
            >
              Your Match
            </p>
  
          </div>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span>✓</span>
              <span>Coming soon</span>
            </li>
            <li className="flex items-start gap-2">
              <span>✓</span>
              <span>Coming soon</span>
            </li>
            <li className="flex items-start gap-2">
              <span>✓</span>
              <span>Coming soon</span>
            </li>
          </ul>
        </div>

        <div className="w-[300px] border border-[#D6D0C0] rounded-xl bg-[#faf8f4] p-5">
          <div className="flex justify-between items-center text-sm">
            <p className="text-[#8A9590]">Compensation</p>
            <p className="text-gray-700">
              ${job.salaryMin / 1000}k – ${job.salaryMax / 1000}k
            </p>
          </div>
          <hr className="border-t border-[#D6D0C0] my-3" />
          <div className="flex justify-between items-center text-sm">
            <p className="text-[#8A9590]">Type</p>
            <p className="text-gray-700">{job.remote}</p>
          </div>
          <hr className="border-t border-[#D6D0C0] my-3" />
          <div className="flex justify-between items-center text-sm">
            <p className="text-[#8A9590]">Posted</p>
            <p className="text-gray-700">{timeAgo(job.postedDate)}</p>
          </div>
          <hr className="border-t border-[#D6D0C0] my-3" />
          <div className="flex justify-between items-center text-sm">
            <p className="text-[#8A9590]">Source</p>
            <p className="text-gray-700">Company careers page</p>
          </div>

          <Button
            label="Apply on Company careers page"
            variant="filled"
            className="w-full mt-4 justify-center"
          />
          <Button
            label="Save for later"
            className="w-full mt-2 justify-center"
          />
        </div>
      </div>
    </div>
  );
}