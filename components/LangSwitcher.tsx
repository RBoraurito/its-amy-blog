import { EnIcon } from '@/icons/EnIcon'
import { EsIcon } from '@/icons/EsIcon'
import clsx from 'clsx'
import { useRouter } from 'next/router'

interface LangSwitcherProps {
  classname?: string
}

export const LangSwitcher = ({ classname }: LangSwitcherProps) => {
  const router = useRouter()
  const { locale } = router

  return (
    <button
      onClick={() =>
        router.push(router.asPath, router.asPath, {
          locale: locale === 'en' ? 'es' : 'en',
        })
      }
      className={clsx(classname, 'w-12 h-12')}
    >
      {locale === 'en' ? (
        <EsIcon height="48px" width="48px" />
      ) : (
        <EnIcon height="48px" width="48px" />
      )}
    </button>
  )
}
