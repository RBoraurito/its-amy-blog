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
}

interface Skill {
  title: string
  description: string
}
