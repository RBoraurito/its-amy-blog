import { Locales } from '@/values/global'
import { format } from 'date-fns'
import { es, enUS } from 'date-fns/locale'

export const displayFormat = (date: Date, locale: Locales) => {
  return format(date, 'LLL  dd, yyyy', { locale: locale === 'es' ? es : enUS })
}
