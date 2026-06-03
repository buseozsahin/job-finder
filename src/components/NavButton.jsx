function NavButton({label, variant = "outlined", onClick}) {
  return(
    <button 
      onClick={onClick}
      className={`px-[12px] py-[6px] text-sm ${variant === "filled" 
        ? "text-white rounded-lg bg-[#1a2e2a] hover:bg-[#243f3a] cursor-pointer"
        : "font-normal text-gray-500 hover:text-gray-900 cursor-pointer"
      }`}
      >
      {label}
    </button>
  );
}

export default NavButton;