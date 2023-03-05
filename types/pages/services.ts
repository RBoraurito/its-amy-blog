export interface ServicePage extends MetaData {
  heroTitle: string
  heroText: string
  heroImage: string
  heroMainCta: CTA
  heroSideCta: CTA
  serviceTitle: string
  serviceText: string
  services: Service[]
  exampleWorkTitle: string
  exampleWorkText: string
  exampleWorks: ExampleWork[]
}

export interface Service {
  title: string
  text: string
}

export interface ExampleWork {
  title: string
  description: string
  image: string
  url: string
  isExternal: boolean
}

export interface ServicePageData {
  es: ServicePage
  en: ServicePage
}
