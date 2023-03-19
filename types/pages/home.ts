export interface Homepage extends MetaData {
  heroTitle: string
  heroText: string
  heroImage: string
  heroMainCta: CTA
  heroSideCta: CTA
}

export interface HomepageData {
  en: Homepage
  es: Homepage
}
