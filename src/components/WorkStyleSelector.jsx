import Chip from "./Chip"

const locationOptions = [
  "Fully remote",
  "Hybrid",
  "On-site",
]

function WorkStyleSelector({ selectedLocation, setSelectedLocation }) {
  return(
    <div>
      {locationOptions.map((location) => (
        <Chip
          key={location}
          label={location}
          selectable={true}
          selected={selectedLocation === location}
          onToggle={() => setSelectedLocation(location)}
        />
      ))}
    </div>
  )
}

export default WorkStyleSelector;