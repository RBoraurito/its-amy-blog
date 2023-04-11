import { BlogCard } from '@/components/cards/Blog'
import { getAllArticles } from '@/lib/getArticles'
import { BlogPostWithSlug } from '@/types/pages/post'
import { Locales } from '@/values/global'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import MetaImg from '@/img/blog-meta.jpg'
import Head from 'next/head'

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
    <>
      <Head>
        <title>
          {locale === 'es'
            ? 'Blog de Amy Calderon - Consejos e ideas para aumentar la productividad y la organización'
            : "Amy Calderon's Blog Posts - Tips and Insights for Productivity and Organization"}
        </title>
        <meta
          name="description"
          content={
            locale === 'es'
              ? 'Echa un vistazo a los artículos del blog de Amy Calderon y descubre útiles consejos e ideas para mejorar tus habilidades de productividad y organización. Desde la gestión del tiempo hasta la organización de tu espacio de trabajo, estos artículos te ayudarán a convertirte en un asistente virtual más eficiente y efectivo.'
              : "Browse through Amy Calderon's blog posts and learn useful tips and insights on how to enhance your productivity and organization skills. From managing your time to organizing your workspace, these articles will help you become a more efficient and effective virtual assistant."
          }
        />
        <meta name="og:image" content={MetaImg.src} />
      </Head>
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
    </>
  )
}
