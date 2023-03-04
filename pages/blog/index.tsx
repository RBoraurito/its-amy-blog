import { BlogCard } from '@/components/cards/Blog'
import { getAllArticles } from '@/lib/getArticles'
import { BlogPostWithSlug } from '@/types/pages/post'
import { Locales } from '@/values/global'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps<{
  posts: BlogPostWithSlug[]
  locale: Locales
}> = async ({ locale }) => {
  const posts = await getAllArticles()

  return {
    props: {
      posts,
      locale: locale as Locales,
    },
  }
}

export default function BlogHome({
  posts,
  locale,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl">
            {locale === 'es'
              ? 'Información del Sector e Historias de Éxito'
              : 'Industry Insights and Client Success Stories'}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-400">
            {locale === 'es'
              ? 'Descubre cómo ayudamos a empresas como la tuya a prosperar'
              : 'Discover how we help businesses like yours thrive'}
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (
              <BlogCard
                key={post[locale].title}
                slug={post.slug}
                {...post[locale]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
