import Chip from "./Chip"

const seniorityLevels = [
  "Intern",
  "Junior",
  "Mid",
  "Senior",
  "Staff",
  "Manager",
]

function SenioritySelector({ selectedSeniority, setSelectedSeniority }) {
  return(
    <div>
      {seniorityLevels.map((level) => (
        <Chip
          key={level}
          label={level}
          selectable={true}
          selected={selectedSeniority === level}
          onToggle={() => setSelectedSeniority(level)}
        />
      ))}
    </div>
  )
}

export default SenioritySelector;