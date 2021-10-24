import stls from '@/styles/components/layout/Header.module.sass'
import Link from 'next/link'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import { routeLegal } from '@/data/routes'
import { Wrapper } from '@/components/layout'
import { HeaderTop, Logo } from '@/components/general'
import { BtnVisualAccessibility } from '@/components/btns'

type HeaderType = {
  classNames?: string[]
}

const Header = ({ classNames = [] }: HeaderType) => {
  const container = getClassNames({ classNames })
  return (
    <div className={classnames([stls.container], container)}>
      <HeaderTop />
      <Wrapper>
        <div className={stls.content}>
          <Logo />
        </div>
      </Wrapper>
    </div>
  )
}

export default Header
