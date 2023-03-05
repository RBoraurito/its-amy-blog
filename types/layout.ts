export interface LayoutContent {
  en: LocaleLayoutContent
  es: Omit<LocaleLayoutContent, 'mainImage'>
}

interface LocaleLayoutContent {
  hireMeLink: string
  mainImage: string
  title: string
  cta: {
    text: string
    link: string
    isExternal: boolean
  }
  links: {
    text: string
    link: string
    isExternal: boolean
    isOnFooter: boolean
  }[]
}
