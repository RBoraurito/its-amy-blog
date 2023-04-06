import { Locales } from '@/values/global'
import { useRouter } from 'next/router'
import content from '@/content/layout/base.md'
import { LayoutContent } from '@/types/layout'
import Link from 'next/link'

export const Footer = () => {
  const router = useRouter()
  const locale = router.locale as Locales
  const attributes = content.attributes as LayoutContent

  return (
    <footer className="bg-white border-t-2 border-primary-600">
      <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {attributes[locale].links.map(
            (item) =>
              item.isOnFooter &&
              (item.isExternal ? (
                <div key={item.text} className="pb-6">
                  <a
                    href={item.link}
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {item.text}
                  </a>
                </div>
              ) : (
                <div key={item.text} className="pb-6">
                  <Link
                    href={item.link}
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {item.text}
                  </Link>
                </div>
              ))
          )}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} Amy Calderon.{' '}
          {locale === Locales.en
            ? 'All rights reserved'
            : 'Todos los derechos reservados'}
          .
        </p>
      </div>
    </footer>
  )
}
