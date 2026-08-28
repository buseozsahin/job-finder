import Chip from "./Chip"
import Button from "./Button"
import CompanyLogo from "../assets/companyLogo.png"
import { useNavigate } from "react-router-dom"

export default function JobCard ({
  id,
  title,
  companyName,
  location,
  remote,
  skills,
  salaryMin,
  salaryMax,
  companyLogo,
  postedDate,
}) {

  const navigate = useNavigate();

  function handleViewRoleClick() {
    navigate(`/detailedJob/${id}`)
  }

  return (
    <div className="w-[690px] h-[290px] rounded-xl border border-[#d6d0c0] bg-[#faf8f4] pl-15 py-4 mb-4">
      <div className="flex items-start gap-3">
          <div className="w-[52px] h-[52px] ml-4">
            {companyLogo ? (
              <img src={companyLogo} alt={companyName} className="w-full h-full rounded-lg object-cover border border-[#D6D0C0]" />
            ) : (
              <img src={CompanyLogo} alt="Company Logo Placeholder" className="w-full h-full rounded-lg object-cover border border-[#d6d0c0]" />
            )}
          </div>

          <div className="">
            <h1 className="text-xl font-semibold text-[#1a2e2a]">{title}</h1>

            <p className="text-[#4A5A55] text-sm mt-1 pl-2">
              {companyName} . {location} . {remote} . {" "}
              <span className="text-gray-900 text-sm">
                ${salaryMin / 1000}k - ${salaryMax / 1000}k
              </span>
            </p>
          </div>
      </div>

      <div className="flex flex-wrap pl-20">
        {skills.map((skill) => 
            <Chip
              key={skill}
              label={skill}
              selectable={false}
            />
          )}

        <hr className="border-t border-dashed border-gray-300 my-2 w-[450px]" />
      </div>

      <div className="text-xs text-[#4A5A55] mt-2 ml-22 space-y-2 mb-6">
        <span className="block">WHY IT FITS YOU</span>
        <p>Coming Soon!</p>
        <p>Coming Soon!</p>
        <p>Coming Soon!</p>    
      </div>

      <div className="flex items-center pl-20 mt-4 gap-4 mt-auto">
        <Button
          label="View role"
          variant="filled"
          onClick={handleViewRoleClick}
        />

        <Button
          label="Save"
        />
      </div>
    </div>
  )
}