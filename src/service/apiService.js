import { roles, skillsMap } from "./mockData.js"

export async function fetchRoles(query) {
  const filtered = roles.filter(role => 
    role.label.toLowerCase().includes(query.toLowerCase())
  )
  return filtered
}

export async function fetchSkilsForRoles(roleId) {
  return skillsMap[roleId]
}