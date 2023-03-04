import { Container } from '@/components/Container'
import { displayFormat } from '@/lib/dateFormat'
import { getAllArticleFilenames, importArticle } from '@/lib/getArticles'
import { BlogPost } from '@/types/pages/post'
import { Locales } from '@/values/global'
import { marked } from 'marked'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next/types'

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllArticleFilenames()
  const paths = posts.map((post) => ({
    params: {
      slug: post,
    },
    locale: 'en',
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{
  post: BlogPost
  locale: Locales
}> = async ({ params, locale }) => {
  const post = (await importArticle((params?.slug as string) + '.md'))[
    locale as Locales
  ]
  return {
    props: {
      post,
      locale: locale as Locales,
    },
  }
}

export default function BlogPostPage({
  post,
  locale,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const query = new URLSearchParams({ tag: post.tag })

  return (
    <>
      <Head>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="og:image" content={post.metaImage} />
      </Head>
      <Container.inner as="section" className="pt-10 sm:pt-16">
        <>
          <Link href={`/blog?${query.toString()}`}>
            <p className="text-center text-lg text-gray-400 underline decoration-primary-600 decoration-2 underline-offset-4 mb-2">
              {post.tag}
            </p>
          </Link>
          <h1 className="text-4xl text-primary-800 font-bold text-center mb-3">
            {post.title}
          </h1>
          <time
            dateTime={post.publishDate}
            className="text-center text-gray-400 mx-auto inline-block w-full mb-8"
          >
            {displayFormat(new Date(post.publishDate), locale)}
          </time>
          <figure className="max-h-80 mb-12">
            <Image
              src={post.featuredImage}
              alt=""
              width={1200}
              height={320}
              className="object-cover max-h-80"
            />
          </figure>
        </>
      </Container.inner>
      <Container.inner as="section" className="pb-10 sm:pb-16">
        <div
          className="prose mx-auto prose-p:text-gray-400 prose-headings:text-primary-800"
          dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }}
        ></div>
      </Container.inner>
    </>
  )
}
