import { useNavigate } from "react-router-dom"; 
import RoleComboBox from "../components/RoleComboBox";
import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";

function SetupProfile({ setIsNewUser }) {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [selectedRole, setSelectedRole] = useState(null)
  const [selectedSkills, setSelectedSkills] = useState([])
  const [currentStep, setCurrentStep] = useState(1)

  function handleFinish() {
    setIsNewUser(false);
    navigate("/today");
  }

  function handleContinue() {
    if (currentStep < 4) setCurrentStep(prev => prev + 1)
  }

  function handleBack() {
    if (currentStep > 1) setCurrentStep(prev => prev - 1)
  }

  return(
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-6 pt-8">

      <ProgressBar currentStep={currentStep} totalSteps={4}/>

        <h1 className="text-[48px] text-[#1a2e2a] font-bold leading-tight">
          Who you are?
        </h1>

        <label className="text-sm text-left text-gray-600 block mb-2">
          Your name:
        </label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full border border-gray-300 rounded-lg p-3 outline-none mb-4 mt-1"
        />

        <label className="text-sm text-left text-gray-600 block mb-2">
          Your title:
        </label>

        <RoleComboBox onRoleSelect={(role) => setSelectedRole(role)}/>

        <div className="flex justify-between mt-12">
          <Button 
            variant="filled"
            label="Back" 
            onClick={handleBack}
          />
          <Button 
            label="Continue" 
            variant="filled" 
            disabled={!name || !selectedRole}
            onClick={handleContinue}
          />
        </div>

      </div>
    </div>

  );
}
export default SetupProfile;