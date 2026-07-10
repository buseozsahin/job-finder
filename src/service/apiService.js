import { roles, skillsMap, usStates } from "./mockData.js"

export async function fetchItems(query) {
  const filtered = roles.filter(item => 
    item.label.toLowerCase().includes(query.toLowerCase())
  )
  return filtered
}

export async function fetchSkilsForRoles(itemId) {
  return skillsMap[itemId]
}

export async function fetchStates(query) {
  const filtered = usStates.filter(item => 
    item.label.toLowerCase().includes(query.toLowerCase())
  )
  return filtered
}