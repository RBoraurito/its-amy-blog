export interface BlogPost extends MetaData {
  featuredImage: string
  title: string
  description: string
  publishDate: string
  content: string
  tag: string
}

export interface BlogPostWithSlug extends BlogPost {
  slug: string
  en: BlogPost
  es: BlogPost
}
