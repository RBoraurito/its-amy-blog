declare module '*.md' {
  import React from 'react'
  const react: React.VFC
  const attributes: unknown
  export { attributes, react }
}

interface WithChildren<C> {
  children: C
}

interface MetaData {
  metaTitle: string
  metaDescription: string
  metaImage: string
}

interface CTA {
  text: string
  url: string
  isExternal: boolean
}
