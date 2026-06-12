import logo from "../assets/logo.png";

function LogoWithName ({onClick}) {
  return(
    <div onClick={onClick} className="flex items-center cursor-pointer">

      <img className="w-[34px] h-[34px] rounded-full"
      src={logo}
      alt="logo" />

      <h1 className="p-[5px] font-bold text-xl text-[#1a2e2a]">Beacon</h1>

    </div>
  )
}

export default LogoWithName;