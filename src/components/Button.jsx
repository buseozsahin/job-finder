function Button({
  label, 
  icon,
  variant = "outlined", 
  color = "#2D5A50", 
  textColor= "#ffffff", 
  className= "",
  onClick,
  disabled= false
  
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-2 px-[12px] py-[6px] text-xs rounded-lg cursor-pointer transition-colors duration-200 ${
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
      {icon}
      {label}
    </button>
  );
}

export default Button;