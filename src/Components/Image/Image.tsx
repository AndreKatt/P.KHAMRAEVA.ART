import type {FC} from 'react'
import type {IImageProps} from './types'

export const Image: FC<IImageProps> = ({
  Src,
  SrcSet,
  IsLazy = false,
  Sizes = "100vw",
  className,
}) => {
  return (
    <img
      src={Src}
      srcSet={SrcSet}
      sizes={Sizes}
      loading={IsLazy ? 'lazy' : 'eager'}
      className={className}
    />
  )
}
