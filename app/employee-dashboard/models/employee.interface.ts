export interface Skill {
  name: string,
  yearsExperience: number
}

export interface Employee {
  id: number,
  fullname: string,
  checkedIn: boolean,
  startDate: number | null,
  skills: Skill[]
}