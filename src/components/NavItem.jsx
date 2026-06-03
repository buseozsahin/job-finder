import { Link } from "react-router-dom"; 

function NavItem({label, to}) {
  return(
    <Link 
      className={'text-sm font-normal text-gray-500 cursor-pointer hover:text-gray-900'}
      to="/"
      >
      {label}
    </Link>
  );
}

export default NavItem;
