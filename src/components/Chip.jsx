export default function Chip({
  label,
  selectable,
  selected,
  onToggle,
  className="",
}) {

  return (
    <button
      onClick={onToggle}
      disabled={!selectable}
      className={`px-3 py-1 rounded-full text-xs mt-2 mr-2 ${
        !selectable
        ? "bg-[#2D5A4F14] text-[#2D5A4F] cursor-default border border-[#2D5A4F40]"
        : selected
          ? "bg-[#1a2e2a] text-white cursor-pointer border border-[#1a2e2a]"
          : "bg-[#f5f0e8] text-gray-500 cursor-pointer border border-[#c1bbad]"
      } ${className}`}
    >
      {label}
    </button>
  )
}