import Image from 'next/image'
import { Education } from '@/types/pages/about-me'

export const EducationCard = ({
  title,
  description,
  url,
  image,
}: Education) => {
  return (
    <div className="flex items-center">
      <a href={url} rel="noreferrer" target="_blank">
        <figure className="rounded-xl overflow-hidden w-14 h-14">
          <Image src={image} alt="course academy logo" height={60} width={60} />
        </figure>
      </a>
      <div className="ml-4">
        <a href={url} rel="noreferrer" target="_blank">
          <h4 className="text-xl font-bold text-gray-700">{title}</h4>
        </a>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}
