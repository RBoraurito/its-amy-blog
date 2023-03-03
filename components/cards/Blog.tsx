import { displayFormat } from '@/lib/dateFormat'
import { BlogPost } from '@/types/pages/post'
import { Locales } from '@/values/global'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface BlogCardProps extends BlogPost {
  slug: string
}

export const BlogCard = ({
  title,
  featuredImage,
  description,
  publishDate,
  tag,
  slug,
}: BlogCardProps) => {
  const query = new URLSearchParams({ tag })
  const { locale } = useRouter()

  return (
    <article
      key={title}
      className="relative isolate flex flex-col gap-8 lg:flex-row"
    >
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
        <Image
          src={featuredImage}
          alt=""
          width={640}
          height={360}
          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div>
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={publishDate} className="text-gray-500">
            {displayFormat(new Date(publishDate), locale as Locales)}
          </time>
          <Link
            href={`/blog?${query.toString()}`}
            className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
          >
            {tag}
          </Link>
        </div>
        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link href={`/blog/${slug}`}>
              <span className="absolute inset-0" />
              {title}
            </Link>
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-600">{description}</p>
        </div>
      </div>
    </article>
  )
}
