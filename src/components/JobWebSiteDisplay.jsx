import { company } from "../service/mockData";
import ChipDisplay from "./ChipDisplay";

function JobWebSiteDisplay({ selectedCompanies, setSelectedCompanies }) {
  const companyLabels = company.map((c) => c.label)

  const toggleCompany = (label) => {
    if (selectedCompanies.includes(label)) {
      setSelectedCompanies(selectedCompanies.filter((c) => c !== label))
    } else {
      setSelectedCompanies([...selectedCompanies, label])
    }
  }

  return (
    <ChipDisplay
      items={companyLabels}
      selectedItems={selectedCompanies}
      onToggleItem={toggleCompany}
    ></ChipDisplay>
  )
}

export default JobWebSiteDisplay;