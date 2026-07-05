import { useEffect, useState } from "react"
import { fetchRoles } from "../service/apiService";


export default function RoleComboBox({ onRoleSelect}) {
  const [query, setQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [filteredRoles, setFilteredRoles] = useState([])

  function handleInputChange(e) {
    setQuery(e.target.value)
    setIsDropdownOpen(true)
  }

  function handleSelectRole(role) {
    setSelectedRole(role)
    setQuery(role.label)
    setIsDropdownOpen(false)
    onRoleSelect(role)
  }

  function handleClickOutside() {
    setIsDropdownOpen(false)
  }

  useEffect(() => {
    fetchRoles(query).then(results => {
      setFilteredRoles(results)
    })
  },[query])

  return(
    <div className="relative w-full" onBlur={handleClickOutside}>
      <input 
        type="text"
        value={query}
        onFocus={handleInputChange}
        onChange={handleInputChange}
        placeholder="Search for a role..."
        className="w-full border border-gray-300 rounded-lg p-3 outline-none"
      />

      {isDropdownOpen && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-md mt-1 z-10">
          {filteredRoles.map(role =>(
            <li 
              key={role.id} 
              onMouseDown={() => handleSelectRole(role)}
              className="p-3 hover:bg-gray-100 cursor-pointer"
            >
              {role.label}
            </li>
          ))}
        </ul>
      )
      }
    </div>
  )

}

