import Chip from "./Chip"
import Button from "./Button"
import CompanyLogo from "../assets/companyLogo.png"

export default function JobCard ({
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

  return (
    <div className="w-[690px] h-[290px] rounded-xl border border-[#d6d0c0] bg-[#fdfcf9] pl-20 py-4 mb-4">
      <div className="flex items-start gap-3">
          <div className="w-[52px] h-[52px] ml-4">
          {companyLogo ? (
            <img src={companyLogo} alt={companyName} className="w-full h-full rounded-lg object-cover border border-[#d6d0c0]" />
          ) : (
            <img src={CompanyLogo} alt="Company Logo Placeholder" className="w-full h-full rounded-lg object-cover border border-[#d6d0c0]" />
          )}
        </div>

        <div className="">
          <h1 className="text-xl font-bold text-[#1a2e2a]">{title}</h1>

          <p className="text-gray-600 text-sm mt-1 pl-2">
            {companyName} . {location} . {remote} . ${salaryMin / 1000}k - ${salaryMax /1000}k
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

      <div className="text-xs text-gray-500 mt-2 ml-22 space-y-2 mb-6">
        <span className="block">WHY IT FITS YOU</span>
        <p>Coming Soon!</p>
        <p>Coming Soon!</p>
        <p>Coming Soon!</p>    
      </div>

      <div className="flex items-center pl-20 mt-4 gap-4 mt-auto">
        <Button
          label="View role"
          variant="filled"
        />

        <Button
          label="Save"
        />

        <Button
          label="Skip"
        />
      </div>
    </div>
  )
}