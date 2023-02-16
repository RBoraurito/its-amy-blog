import React, { Fragment } from 'react'
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import content from '@/content/layout/base.md'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Locales } from '@/values/global'
import { LayoutContent } from '@/types/layout'

export const Header = () => {
  const router = useRouter()
  const attributes = content.attributes as LayoutContent
  const locale = router.locale as Locales

  return (
    <Popover as="header" className="relative z-10">
      <div className="bg-gray-50">
        <nav
          className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-8 xl:px-8"
          aria-label="Global"
        >
          <div className="flex w-full items-center justify-between lg:w-auto">
            <Link href="/">
              <span className="sr-only">{attributes[locale].title}</span>
              <Image
                className="h-8 w-8 sm:w-12 sm:h-12 object-cover rounded-full border-primary-600 border-2"
                src={attributes.en.mainImage}
                width={40}
                height={40}
                alt=""
              />
            </Link>
            <div className="-mr-2 flex items-center lg:hidden">
              <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-grape-500">
                <span className="sr-only">
                  {locale === Locales.en ? 'Open main menu' : 'Abrir menú'}
                </span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="hidden space-x-10 lg:ml-10 lg:flex">
            {attributes[locale].links.map((item) => (
              item.isExternal ? (
                <a
                  key={item.text}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-gray-500 hover:text-gray-600"
                >
                  {item.text}
                </a>
                ) : (
                <Link
                  key={item.text}
                  href={item.link}
                  className="text-base font-medium text-gray-500 hover:text-gray-600"
                >
                  {item.text}
                </Link>
              )
            ))}
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {attributes[locale].cta.isExternal ? (
              <a
                href={attributes[locale].cta.link}
                className="text-primary-900 rounded-md border border-transparent bg-primary-400 py-2 px-6 text-base font-medium text-grape-600 shadow-md hover:bg-primary-500 hover:text-zinc-50"
              >
                {attributes[locale].cta.text}
              </a>
            ) : (
              <Link
                href={attributes[locale].cta.link}
                className="text-primary-900 rounded-md border border-transparent bg-primary-400 py-2 px-6 text-base font-medium text-grape-600 shadow-md hover:bg-primary-500 hover:text-zinc-50"
              >
                {attributes[locale].cta.text}
              </Link>
            )}
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top transform p-2 transition lg:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <Image
                  className="h-8 w-8 rounded-full object-cover border-primary-600 border-2"
                  src={attributes.en.mainImage}
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grape-500">
                  <span className="sr-only">
                    {locale === Locales.en ? 'Close menu' : 'Cerrar menú'}
                  </span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="space-y-1 px-2">
                {attributes[locale].links.map((item) => (
                  item.isExternal ? (
                    <a
                      key={item.text}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <Link
                      key={item.text}
                      href={item.link}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      {item.text}
                    </Link>
                  )
                ))}
              </div>
              <div className="mt-6 px-5">
                {attributes[locale].cta.isExternal ? (
                  <a
                    href={attributes[locale].cta.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-md border border-transparent bg-primary-500 py-2 px-4 text-center font-medium text-white shadow hover:bg-primary-600"
                  >
                    {attributes[locale].cta.text}
                  </a>
                ) : (
                  <Link
                    href={attributes[locale].cta.link}
                    className="block w-full rounded-md border border-transparent bg-primary-500 py-2 px-4 text-center font-medium text-white shadow hover:bg-primary-600"
                  >
                    {attributes[locale].cta.text}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
