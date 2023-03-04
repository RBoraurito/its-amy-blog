import { BlogPostWithSlug } from '@/types/pages/post'
import glob from 'fast-glob'
import * as path from 'path'
export async function importArticle(
  articleFilename: string
): Promise<BlogPostWithSlug> {
  let { attributes: article } = await import(
    `../content/pages/blog/${articleFilename}`
  )

  return {
    slug: articleFilename.replace(/(\/index)?\.md$/, ''),
    ...article,
  }
}

export async function getAllArticles(): Promise<BlogPostWithSlug[]> {
  let articleFilenames = await glob('*.md', {
    cwd: path.join(process.cwd(), 'content/pages/blog'),
  })

  let articles: BlogPostWithSlug[] = await Promise.all(
    articleFilenames.map(importArticle)
  )

  return articles.sort(
    (a, z) =>
      new Date(z.publishDate).getDate() - new Date(a.publishDate).getDate()
  )
}

export async function getAllArticleFilenames(): Promise<string[]> {
  let articleFilenames = await glob('*.md', {
    cwd: path.join(process.cwd(), 'content/pages/blog'),
  })

  return articleFilenames.map((filename) => filename.replace(/\.md$/, ''))
}
