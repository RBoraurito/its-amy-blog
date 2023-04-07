import Image from 'next/image'
import Link from 'next/link'

interface WorkExampleCardProps {
  image: string
  title: string
  description: string
  url: string
  isExternal: boolean
}

export const WorkExampleCard = ({
  image,
  title,
  description,
  url,
  isExternal,
}: WorkExampleCardProps) => {
  return (
    <div className="flex flex-col items-start">
      <div className="relative w-full">
        <Image
          src={image}
          width={640}
          height={640}
          alt=""
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        {isExternal ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </a>
        ) : (
          <Link href={url}>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </Link>
        )}
      </div>
      <div className="max-w-xl">
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-primary-800 group-hover:text-gray-600">
            {isExternal ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            ) : (
              <Link href={url}>{title}</Link>
            )}
          </h3>
          <p className="mt-4 text-sm leading-6 text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  )
}
