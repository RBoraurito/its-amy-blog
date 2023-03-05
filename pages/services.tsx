import { Hero } from '@/components/Hero'
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'

import { attributes } from '@/content/pages/services.md'
import { ServicePage, ServicePageData } from '@/types/pages/services'
import { Locales } from '@/values/global'
import { TextDescCard } from '@/components/cards/TextDesc'
import { Container } from '@/components/Container'
import { WorkExampleCard } from '@/components/cards/WorkExample'

export const getStaticProps: GetStaticProps<{
  data: ServicePage
}> = async ({ locale }) => {
  const data = attributes as ServicePageData
  const localeData = data[locale as Locales]

  return {
    props: {
      data: localeData,
    },
  }
}

const ServicesPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Hero
        title={data.heroTitle}
        description={data.heroText}
        image={data.heroImage}
        mainCta={data.heroMainCta}
        sideCta={data.heroSideCta}
      />
      <Container.inner
        className="py-8 sm:py-12 lg:py-16"
        as="section"
        id="services"
      >
        <>
          <h2 className="font-title font-bold text-primary-700 text-2xl sm:text-3xl lg:text-4xl mb-2">
            {data.serviceTitle}
          </h2>
          <h4 className="text-lg font-light font-title text-gray-500">
            {data.serviceText}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {data.services.map((service) => (
              <TextDescCard
                key={service.title}
                title={service.title}
                description={service.text}
              />
            ))}
          </div>
        </>
      </Container.inner>
      <Container.inner className="py-8 sm:py-12 lg:py-16" as="section">
        <>
          <h2 className="font-title font-bold text-primary-700 text-2xl sm:text-3xl lg:text-4xl mb-2">
            {data.exampleWorkTitle}
          </h2>
          <h4 className="text-lg font-light font-title text-gray-500">
            {data.exampleWorkText}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {data.exampleWorks.map((exampleWork) => (
              <WorkExampleCard
                key={exampleWork.title}
                title={exampleWork.title}
                description={exampleWork.description}
                image={exampleWork.image}
                url={exampleWork.url}
                isExternal={exampleWork.isExternal}
              />
            ))}
          </div>
        </>
      </Container.inner>
    </>
  )
}

export default ServicesPage
