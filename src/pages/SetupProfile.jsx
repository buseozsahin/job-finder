import { useNavigate } from "react-router-dom";
import ComboBox from "../components/ComboBox"; 
import { fetchItems } from "../service/apiService";
import { fetchStates } from "../service/apiService";
import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import SkillDisplay from "../components/SkillDisplay";
import SenioritySelector from "../components/SenioritySelector";
import WorkStyleSelector from "../components/WorkStyleSelector";
import SliderBar from "../components/SliderBar"
import MultiSelectComboBox from "../components/MultiSelectComboBox";
import { usStates } from "../service/mockData";
import Chip from "../components/Chip";
import JobWebSiteDisplay from"../components/JobWebSiteDisplay";

function SetupProfile({ setIsNewUser }) {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [selectedRole, setSelectedRole] = useState(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedUserSkills, setSelectedUserSkills] = useState([]);
  const [selectedSeniority, setSelectedSeniority] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [salary, setSalary] = useState(0);
  const [selectedState, setSelectedState] = useState([]);
  const [selectedWebSite, setSelectedWebSite] = useState([]);

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

        {currentStep === 1 && (
          <>
            <h1 className="text-[48px] text-[#1a2e2a] text-left font-bold leading-tight mb-4">
              Who you are?
            </h1>

            <label className="text-sm text-left text-gray-500 block mb-2">
              Your name:
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none mb-4 mt-1"
            />

            <label className="text-sm text-left text-gray-500 block mb-2">
              Most recent role:
            </label>

            <ComboBox
              fetchItems={fetchItems}
              onItemSelect={(role) => setSelectedRole(role)}
              placeholder="Search for a role.."
            />

              {selectedRole && (
                <p className="text-left text-sm text-[#2d5a50] mt-2 ">
                  Your role is {selectedRole.label}
                </p>
              )}
          </>
        )}

        {currentStep === 2 && (
          <>
            <h1 className="text-[48px] text-[#1a2e2a] text-left font-bold leading-tight mb-4">
              Skills & role
            </h1>

            <label className="text-sm text-left text-gray-500 block">
              Based on {selectedRole.label} role, we selected some common skills
            </label>

            <label className="text-sm text-left text-[#2d5a50] block mt-5">
              Please select your skills:
            </label>

            <SkillDisplay
              roleId={selectedRole.id}
              selectedUserSkills={selectedUserSkills}
              setSelectedUserSkills={setSelectedUserSkills}
            />

            <label className="text-sm text-left text-[#2d5a50] block mt-5">
              Please select seniority:
            </label>

            <SenioritySelector
              selectedSeniority={selectedSeniority}
              setSelectedSeniority={setSelectedSeniority}
            />         
          </>
        )}

        {currentStep === 3 && (
          <>
            <h1 className="text-[48px] text-[#1a2e2a] text-left font-bold leading-tight mb-4">
              Where & how
            </h1>

            <label className="text-sm text-left text-[#2d5a50] block mb-2">
              Locations you'd consider: 
            </label>
            
            <MultiSelectComboBox
              fetchItems={fetchStates}
              selectedItems={selectedState}
              onSelectionChange={(state => setSelectedState(state))}
              placeholder="Search for a state..."
            ></MultiSelectComboBox>

            <label className="text-sm text-left text-[#2d5a50] block mt-5">
              Remote Preference:
            </label>

            <WorkStyleSelector
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />  

            <label className="text-sm text-left text-[#2d5a50] block mt-5">
              Minimum total comp: ${salary/1000}k
            </label>

            <SliderBar
              min={20000}
              max={300000}
              step={1000}
              value={salary}
              setValue={setSalary}
            ></SliderBar>
          </>
        )}

        {currentStep === 4 && (
          <>
            <h1 className="text-[48px] text-[#1a2e2a] text-left font-bold leading-tight mb-4">
              Sources to watch
            </h1>

            <label className="text-sm text-left text-[#2d5a50] block mt-5">
              Job boards to watch:
            </label>

            <JobWebSiteDisplay
              selectedCompanies={selectedWebSite}
              setSelectedCompanies={setSelectedWebSite}
            />
          </>
        )}

        <div className="flex justify-between mt-12">
          <Button 
            variant="filled"
            label="Back" 
            onClick={handleBack}
          />
          {currentStep <= 3 && (
            <Button 
              label="Continue" 
              variant="filled" 
              disabled={!name || !selectedRole}
              onClick={handleContinue}
              color={!name || !selectedRole ? "#b4c7be" : "#1a2e2a"}
            />
          )}

          {currentStep === 4 && (
            <Button 
              label="Finish setup" 
              variant="filled" 
              disabled={!name || !selectedRole}
              onClick={handleFinish}
              color={!name || !selectedRole ? "#b4c7be" : "#34685c"}
            />
          )}
        </div>
      </div>
    </div>

  );
}
export default SetupProfile;