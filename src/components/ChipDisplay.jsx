import Chip from "./Chip";

function ChipDisplay({ items, selectedItems, onToggleItem }) {
  return(
    <div>
      {items.map((item) => (
        <Chip
          key={item}
          label={item}
          selectable={true}
          selected={selectedItems.includes(item)}
          onToggle={() => onToggleItem(item)}
        />
      ))}
    </div>
  )
}

export default ChipDisplay;