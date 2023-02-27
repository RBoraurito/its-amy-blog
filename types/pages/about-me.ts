export interface AboutMePage {
  en: LocatedContent
  es: Omit<LocatedContent, 'firstImage'>
}

interface LocatedContent extends MetaData {
  title: string
  firstParagraph: string
  firstImage: string
  skillsTitle: string
  skillsSubtitle: string
  skills: Skill[]
  educationTitle: string
  educationSubtitle: string
  education: Education[]
}

interface Skill {
  title: string
  description: string
}

export interface Education {
  title: string
  description: string
  url: string
  image: string
}
