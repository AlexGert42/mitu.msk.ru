import stls from '@/styles/components/promo/GeneralNavPromoTablet.module.sass'
import { TypeClassNames, TypeLinksHeaderPromo } from '@/types/index'
import Link from 'next/link'
import { useContext } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { ContextCategoryContext } from '@/context/index'

type TypeGeneralNavPromoTabletProps = TypeClassNames & {
  links: TypeLinksHeaderPromo
}

const GeneralNavPromoTablet = ({
  classNames,
  links
}: TypeGeneralNavPromoTabletProps) => {
  const { setCategory } = useContext(ContextCategoryContext)

  return (
    <nav
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <ul className={stls.links}>
        {links?.map(({ href, val, payload }, idx) => (
          <li key={(val || '') + idx} className={stls.linkItem}>
            <a
              href={href}
              className={stls.link}
              onClick={() => setCategory({ payload: payload || null })}>
              {val}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default GeneralNavPromoTablet
