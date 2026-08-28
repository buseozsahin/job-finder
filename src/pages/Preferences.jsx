import Button from "../components/Button";

function Preferences(){
  return(
    <div className="w-[1000px] mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-[44px] text-[#1a2e2a] font-semibold">
            Preferences</h1>
          <p className="text-xs text-gray-500">Tune what we look for. Changes take effect with tomorrow's picks.</p>
        </div>

        <Button
          label={"Save Changes"}
          variant="filled"
        />
      </div>
    </div>
  );
}
export default Preferences;