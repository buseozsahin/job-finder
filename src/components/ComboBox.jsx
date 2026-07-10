import { useState, useEffect } from "react";

export default function ComboBox({ 
  onItemSelect,
  fetchItems,
  placeholder,
  itemKey = "id",
  itemLabel = "label",
  multiSelect = false,
}) {
  const [userQuery, setUserQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filteredItem, setFilteredItem] = useState([]);

  function handleInputChange(e) {
    setUserQuery(e.target.value)
    setIsDropdownOpen(true)
  }

  function handleSelectedItem(item) {
    if (multiSelect) {
      setUserQuery("")
      onItemSelect(item)
    } else {
      setSelectedItem(item)
      setUserQuery(item[itemLabel])
      setIsDropdownOpen(false)
      onItemSelect(item)
    }
  }

  function handleClickOutside() {
    setIsDropdownOpen(false)
  }

  useEffect(() => {
    fetchItems(userQuery).then(results => {
      setFilteredItem(results)
    })
  },[userQuery])

  return(
    <div className="relative w-full" onBlur={handleClickOutside}>
      <input 
        type="text"
        value={userQuery}
        onFocus={handleInputChange}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg p-3 outline-none"
      />

      {isDropdownOpen && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-md mt-1 z-10">
          {filteredItem.map(item => (
            <li
              key={item[itemKey]}
              onMouseDown={() => handleSelectedItem(item, itemLabel)}
              className="p-3 hover:bg-gray-100 cursor-pointer"
            >
              {item[itemLabel]}
            </li>
          ))}
        </ul>
      )}
    </div>    
  )
}