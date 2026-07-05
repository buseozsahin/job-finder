export const roles = [
  { id: "frontend-engineer", label: "Frontend Engineer" },
  { id: "backend-engineer", label: "Backend Engineer"},
  { id: "fullstack-engineer", label: "Full Stack Engineer"},
  { id: "ios-engineer", label: "iOS Engineer"},
  { id: "android-engineer", label: "Android Engineer" },
  { id: "data-scientist", label: "Data Scientist" },
  { id: "ux-designer", label: "UX Designer" },
  { id: "devops-engineer", label: "DevOps Engineer" },
]

export const skillsMap = {
  "frontend-engineer" : ["React", "TypeScript", "CSS", "Next.js", "Python", "Node.js", "Tailwind", "Bootstrap", "Swift", "Kubernetes", "Postgres" ],
  "backend-engineer" : ["AWS", "Java", "Python", "SQL", "Docker", "Git", "Ruby", "JavaScript", "Go", "MongoDB", "Kafka", "Rest APIs", "Azure", "GraphQL"],
  "fullstack-engineer" : ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Redux", "API", "Axios", "PostgreSQL", "MySQL"],
  "ios-engineer" : ["Swift", "SwiftUI", "Xcode", "Core Data", "UIKit"],
  "android-engineer" : ["Kotlin", "Java", "Jetpack Compose", "Android SDK", "Firebase"],
  "data-scientist" : ["Python", "Pandas", "PyTorch", "SQL", "Machine Learning", "Spark"],
  "ux-designer" : ["Figma", "User Research", "Prototyping", "Design Systems", "Accessibility"],
  "devops-engineer" : ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Linux"]
}