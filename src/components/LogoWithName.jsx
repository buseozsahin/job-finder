import logo from "../assets/logo.png";

function LogoWithName ({onClick}) {
  return(
    <div onClick={onClick} className="flex items-center cursor-pointer">

      <img className="w-[24px] h-[24px] rounded-full"
      src={logo}
      alt="logo" />

      <h1 className="p-[5px] font-bold font-size-[19.68-px]">Job Finder</h1>

    </div>
  )
}

export default LogoWithName;