function NavButton({
  label, 
  variant = "outlined", 
  color = "#1a2e2a", 
  textColor="#ffffff", 
  className="",
  onClick,
  
}) {
  return (
    <button
      onClick={onClick}
      className={`px-[12px] py-[6px] text-sm rounded-lg cursor-pointer transition-colors duration-200 ${
        variant === "filled"
          ? ""
          : "font-normal text-gray-500 hover:text-gray-900"
      } ${className}`}
      style={
        variant === "filled"
          ? { backgroundColor: color, color: textColor }
          : {}
      }
    >
      {label}
    </button>
  );
}

export default NavButton;