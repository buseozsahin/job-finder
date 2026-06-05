
function NavItem({label, onClick, isActive}) {
  return(
    <span 
      onClick={onClick}
      className={`text-sm cursor-pointer ${isActive ? "font-semibold text-gray-900" : "font-normal text-gray-500"}`}
      >
      {label}
    </span>
  );
}

export default NavItem;
