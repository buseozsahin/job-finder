import { useNavigate } from "react-router-dom";
import Chip from "./Chip";
import CompanyLogo from"../assets/companyLogo.png";
<assets />

export default function JobListCard ({
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

  const navigate = useNavigate()

  function handleCardClick() {
    navigate(`/detailedJob/${id}`)
  }

  return (

    <div 
    onClick={handleCardClick}
    className="w-full h-[100px] rounded-xl border border-[#d6d0c0] bg-[#F5F0E8] hover:bg-[#faf8f4] hover:border-[#938F86] transition-colors duration-200">

      <div className="flex items-center gap-3">
          <div className=" w-[40px] h-[40px] ml-4 mt-2">
            {companyLogo ? (
              <img src={companyLogo} alt={companyName} className="w-full h-full rounded-lg object-cover border border-[#D6D0C0]" />
            ) : (
              <img src={CompanyLogo} alt="Company Logo Placeholder" className="w-full h-full rounded-lg object-cover border border-[#d6d0c0]" />
            )}
          </div>

          <div className="flex flex-col mt-1">
            <h1 className="text-lg text-[#1a2e2a] ml-2">{title}</h1>

            <p className="text-[#4A5A55] text-xs mt-1 pl-2">
              {companyName} . {location} . {remote} . {" "}
              <span className="text-gray-900 text-xs">
                ${salaryMin / 1000}k - ${salaryMax / 1000}k
              </span>
            </p>
            
            <div>
              {skills.map((skill) =>
                <Chip
                  key={skill}
                  label={skill}
                  selectable={false}
                  className="!bg-[#F5F0E8] !border-[#E6E1D3] !text-[#4A5A55]"
                />
              )}
            </div>

          </div>
      </div>

    </div>
  )
}