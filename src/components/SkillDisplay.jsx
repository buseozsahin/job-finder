import { useState, useEffect } from "react";
import { fetchSkilsForRoles } from "../service/apiService"
import Chip from "./Chip";
import ChipDisplay from "./ChipDisplay";

function SkillDisplay({ roleId, selectedUserSkills, setSelectedUserSkills }) {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    if(!roleId) return;

    const loadSkills = async () => {
      const data = await fetchSkilsForRoles(roleId)
      setSkills(data)
    }

    loadSkills()
  }, [roleId])

  const toggleSkill = (skill) => {
    if (selectedUserSkills.includes(skill)) {
      setSelectedUserSkills(
        selectedUserSkills.filter((s) => s !== skill)
      )
    } else {
      setSelectedUserSkills([...selectedUserSkills,skill])
    }
  }

  return(
    <div>
      <ChipDisplay
        items={skills}
        selectedItems={selectedUserSkills}
        onToggleItem={toggleSkill}
      />
    </div>
  )
}
export default SkillDisplay;