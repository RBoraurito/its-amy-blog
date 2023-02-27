import { Container } from '@/components/Container'
import content from '@/content/pages/about-me.md'
import { AboutMePage } from '@/types/pages/about-me'
import { Locales } from '@/values/global'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { marked } from 'marked'
import Image from 'next/image'
import { TextDescCard } from '@/components/cards/TextDesc'
import { EducationCard } from '@/components/cards/Education'

const AboutMe = () => {
  const router = useRouter()
  const locale = router.locale as Locales
  const attributes = content.attributes as AboutMePage
  const localAttributes = attributes[locale]

  return (
    <>
      <Head>
        <title>{localAttributes.metaTitle}</title>
        <meta name="description" content={localAttributes.metaDescription} />
        <meta name="og:image" content={localAttributes.metaImage} />
      </Head>
      <Container.inner className="py-8 sm:py-12 lg:py-20">
        <>
          <section className="grid sm:grid-cols-4 lg:grid-cols-5 gap-8 mb-8 sm:mb-12 lg:mb-16">
            <div className="content sm:col-span-2 lg:col-span-3">
              <h1 className="font-title font-bold text-primary-700 text-3xl sm:text-4xl lg:text-5xl mb-6">
                {localAttributes.title}
              </h1>
              <div
                className="prose prose-p:text-gray-600 prose-p:mb-2"
                dangerouslySetInnerHTML={{
                  __html: marked.parse(localAttributes.firstParagraph),
                }}
              ></div>
            </div>
            <div className="col-span-2">
              <figure className="max-w-lg mx-auto px-3 sm:px-0">
                <Image
                  className="w-full rounded-2xl rotate-3"
                  src={attributes.en.firstImage}
                  alt="Virtual assistant using a computer"
                  width={500}
                  height={600}
                />
              </figure>
            </div>
          </section>
          <section className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-title font-bold text-primary-700 text-2xl sm:text-3xl lg:text-4xl mb-2">
              {localAttributes.skillsTitle}
            </h2>
            <h4 className="text-lg font-light font-title text-gray-500">
              {localAttributes.skillsSubtitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {localAttributes.skills.map((skill) => (
                <TextDescCard key={skill.title} {...skill} />
              ))}
            </div>
          </section>
          <section className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-title font-bold text-primary-700 text-2xl sm:text-3xl lg:text-4xl mb-2">
              {localAttributes.educationTitle}
            </h2>
            <h4 className="text-lg font-light font-title text-gray-500 mb-6">
              {localAttributes.educationTitle}
            </h4>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
              {localAttributes.education?.map((education) => (
                <EducationCard {...education} key={education.title} />
              ))}
            </div>
          </section>
        </>
      </Container.inner>
    </>
  )
}

export default AboutMe
