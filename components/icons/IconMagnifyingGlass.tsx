import stls from '@/styles/components/icons/IconMagnifyingGlass.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { colors } from '@/config/index'

type TypeIconMagnifyingGlassProps = TypeClassNames

const IconMagnifyingGlass = ({ classNames }: TypeIconMagnifyingGlassProps) => {
  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <svg viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Лупа</title>
        <path
          d='M32.4002 25.3832L28.9502 21.8498C28.2081 21.1444 27.272 20.677 26.2622 20.5077C25.2524 20.3384 24.2151 20.475 23.2835 20.8998L21.7835 19.3998C23.5511 17.038 24.3584 14.0943 24.0428 11.1612C23.7272 8.22815 22.3121 5.52353 20.0826 3.59182C17.853 1.66011 14.9744 0.644749 12.0263 0.750128C9.07817 0.855508 6.27943 2.0738 4.19346 4.15977C2.1075 6.24573 0.889199 9.04448 0.78382 11.9926C0.678441 14.9407 1.6938 17.8193 3.62551 20.0489C5.55722 22.2784 8.26184 23.6935 11.1949 24.0091C14.128 24.3247 17.0717 23.5174 19.4335 21.7498L20.9168 23.2332C20.442 24.1659 20.2718 25.2241 20.4303 26.2587C20.5888 27.2932 21.0679 28.252 21.8002 28.9998L25.3335 32.5332C26.271 33.4695 27.5418 33.9954 28.8668 33.9954C30.1919 33.9954 31.4627 33.4695 32.4002 32.5332C32.8764 32.0675 33.2548 31.5114 33.5131 30.8975C33.7715 30.2836 33.9046 29.6242 33.9046 28.9582C33.9046 28.2921 33.7715 27.6328 33.5131 27.0188C33.2548 26.4049 32.8764 25.8488 32.4002 25.3832V25.3832ZM18.2668 18.3165C17.1006 19.4798 15.6157 20.2714 13.9997 20.5912C12.3838 20.9111 10.7093 20.7448 9.18785 20.1135C7.66636 19.4821 6.36611 18.414 5.45137 17.0441C4.53662 15.6741 4.04841 14.0638 4.04841 12.4165C4.04841 10.7692 4.53662 9.15888 5.45137 7.78893C6.36611 6.41897 7.66636 5.35086 9.18785 4.71951C10.7093 4.08816 12.3838 3.9219 13.9997 4.24174C15.6157 4.56158 17.1006 5.35316 18.2668 6.51649C19.0429 7.29058 19.6586 8.21018 20.0787 9.22259C20.4988 10.235 20.7151 11.3204 20.7151 12.4165C20.7151 13.5126 20.4988 14.598 20.0787 15.6104C19.6586 16.6228 19.0429 17.5424 18.2668 18.3165V18.3165ZM30.0502 30.0998C29.8952 30.256 29.7109 30.38 29.5078 30.4646C29.3047 30.5493 29.0869 30.5928 28.8668 30.5928C28.6468 30.5928 28.429 30.5493 28.2259 30.4646C28.0228 30.38 27.8385 30.256 27.6835 30.0998L24.1502 26.5665C23.994 26.4116 23.87 26.2272 23.7854 26.0241C23.7007 25.821 23.6572 25.6032 23.6572 25.3832C23.6572 25.1631 23.7007 24.9453 23.7854 24.7422C23.87 24.5391 23.994 24.3548 24.1502 24.1998C24.3051 24.0436 24.4895 23.9196 24.6926 23.835C24.8957 23.7504 25.1135 23.7068 25.3335 23.7068C25.5535 23.7068 25.7714 23.7504 25.9745 23.835C26.1776 23.9196 26.3619 24.0436 26.5168 24.1998L30.0502 27.7332C30.2064 27.8881 30.3304 28.0724 30.415 28.2755C30.4996 28.4786 30.5432 28.6965 30.5432 28.9165C30.5432 29.1365 30.4996 29.3543 30.415 29.5574C30.3304 29.7605 30.2064 29.9449 30.0502 30.0998V30.0998Z'
          fill={colors.delta}
        />
      </svg>
    </div>
  )
}

export default IconMagnifyingGlass
