import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  title: string
  description: string
  image: string
  mainCta: CTA
  sideCta: CTA
}

export const Hero = ({
  title,
  description,
  image,
  mainCta,
  sideCta,
}: HeroProps) => {
  return (
    <div className="relative bg-white">
      <div className="mx-auto container lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="lg:mt-24 text-3xl font-bold tracking-tight text-primary-800 sm:mt-10 sm:text-4xl">
              {title}
            </h1>
            <p className="mt-6 text-md leading-7 text-gray-500">
              {description}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              {mainCta.isExternal ? (
                <a
                  href={mainCta.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="rounded-md bg-primary-400 px-3.5 py-2.5 text-sm font-semibold text-primary-700 shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
                >
                  {mainCta.text}
                </a>
              ) : (
                <Link
                  href={mainCta.url}
                  className="rounded-md bg-primary-400 px-3.5 py-2.5 text-sm font-semibold text-primary-700 shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
                >
                  {mainCta.text}
                </Link>
              )}
              {sideCta.isExternal ? (
                <a
                  href={sideCta.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {sideCta.text} <span aria-hidden="true">→</span>
                </a>
              ) : (
                <Link
                  href={sideCta.url}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {sideCta.text} <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src={image}
            alt=""
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  )
}
