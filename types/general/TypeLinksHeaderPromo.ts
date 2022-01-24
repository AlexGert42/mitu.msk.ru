import { TypeAnchor, TypeProgramCategory } from '@/types/index'

type TypeLinksHeaderPromo =
  | {
      readonly href?: TypeAnchor
      readonly val?: string
      readonly payload?: string
    }[]
  | null

export default TypeLinksHeaderPromo
