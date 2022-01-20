import stls from '@/styles/components/icons/IconDoc.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconDocProps = TypeClassNames

const IconDoc = ({ classNames }: TypeIconDocProps) => {
    return (
        <div
            className={cn(stls.container, getClassNames({ classNames })) || undefined}
            aria-hidden={'true'}>
            <svg viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H15C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V8L10 1Z" stroke={colors.gamma} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 1V8H17" stroke={colors.gamma} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    )
}

export default IconDoc