import { BlogCard } from '@/components/cards/Blog'
import { TextDescCard } from '@/components/cards/TextDesc'
import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { getAllArticles } from '@/lib/getArticles'
import { Homepage, HomepageData } from '@/types/pages/home'
import { BlogPostWithSlug } from '@/types/pages/post'
import { ServicePage, ServicePageData } from '@/types/pages/services'
import { Locales } from '@/values/global'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

export const getStaticProps: GetStaticProps<{
  meta: Pick<Homepage, 'metaTitle' | 'metaDescription' | 'metaImage'>
  hero: Pick<
    Homepage,
    'heroTitle' | 'heroText' | 'heroImage' | 'heroMainCta' | 'heroSideCta'
  >
  services: Pick<ServicePage, 'serviceTitle' | 'serviceText' | 'services'>
  posts: BlogPostWithSlug[]
  locale: Locales
}> = async ({ locale }) => {
  const { attributes } = await import('@/content/pages/home.md')
  const { attributes: attrsServices } = await import(
    '@/content/pages/services.md'
  )
  const homeData = (attributes as HomepageData)[locale as Locales]
  const servicesData = (attrsServices as ServicePageData)[locale as Locales]
  const posts = await getAllArticles()

  return {
    props: {
      meta: {
        metaTitle: homeData.metaTitle,
        metaDescription: homeData.metaDescription,
        metaImage: homeData.metaImage,
      },
      hero: {
        heroTitle: homeData.heroTitle,
        heroText: homeData.heroText,
        heroImage: homeData.heroImage,
        heroMainCta: homeData.heroMainCta,
        heroSideCta: homeData.heroSideCta,
      },
      services: {
        serviceTitle: servicesData.serviceTitle,
        serviceText: servicesData.serviceText,
        services: servicesData.services,
      },
      posts,
      locale: locale as Locales,
    },
  }
}

export default function Home({
  meta,
  hero,
  services,
  posts,
  locale,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{meta.metaTitle}</title>
        <meta name="description" content={meta.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:image" content={meta.metaImage} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={hero.heroTitle}
        description={hero.heroText}
        image={hero.heroImage}
        mainCta={hero.heroMainCta}
        sideCta={hero.heroSideCta}
      />
      <Container.inner
        className="py-8 sm:py-12 lg:py-16"
        as="section"
        id="services"
      >
        <>
          <h2 className="font-title font-bold text-primary-700 text-2xl sm:text-3xl lg:text-4xl mb-2">
            {services.serviceTitle}
          </h2>
          <h4 className="text-lg font-light font-title text-gray-500">
            {services.serviceText}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-8 sm:mb-12 lg:mb-20">
            {services.services.map((service) => (
              <TextDescCard
                key={service.title}
                title={service.title}
                description={service.text}
              />
            ))}
          </div>
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
          <div className="mt-16 grid lg:grid-cols-2 gap-20 lg:mt-20 lg:gap-20">
            {posts.map((post) => (
              <BlogCard
                key={post[locale].title}
                slug={post.slug}
                {...post[locale]}
              />
            ))}
          </div>
        </>
      </Container.inner>
    </>
  )
}
