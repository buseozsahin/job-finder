export default function Chip({
  label,
  selectable,
  selected,
  onToggle,
}) {

  return (
    <button
      onClick={onToggle}
      disabled={!selectable}
      className={`px-3 py-1 rounded-full text-sm mt-2 mr-2 ${
        !selectable
        ? "bg-[#f5f0e8] text-gray-500 cursor-default"
        : selected
          ? "bg-[#1a2e2a] text-white cursor-pointer"
          : "bg-[#f5f0e8] text-gray-500 cursor-pointer"
      }`}
    >
      {label}
    </button>
  )
}