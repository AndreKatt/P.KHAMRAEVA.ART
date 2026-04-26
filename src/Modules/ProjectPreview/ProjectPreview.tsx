import classNames from 'classnames'
import {ProjectTitle} from '../../Components/ProjectTitle/ProjectTitle.tsx'
import {Image} from '../../Components/Image/Image.tsx'
import {ContainerFullWidth} from '../../Components/ContainerFullWidth/ContainerFullWidth.tsx'

import type {FC, PropsWithChildren} from 'react'
import type {IProjectPreviewProps} from './types.ts'

import styles from "./styles.module.scss"

export const ProjectPreview: FC<PropsWithChildren<IProjectPreviewProps>> = ({
  ImageSrc,
  ImageSrcSet,
  Title,
  Description,
  WhithGradient,
  OnClick,
  ClassNameImage,
  className,
  children,
}) => {
  const $title = (
    <div className={styles.projectPreviewTitleWrapper}>
      <ProjectTitle
        Title={Title}
        Description={Description}
      />
    </div>
  )

  return (
    <ContainerFullWidth
      className={classNames(styles.projectPreviewContainer, className)}
      onClick={OnClick}
    >
      {$title}
      <div className={classNames(styles.projectPreviewImageContainer, {
        [styles.gradient]: WhithGradient,
      })}>
        {children}
        <Image
          Src={ImageSrc}
          SrcSet={ImageSrcSet}
          className={ClassNameImage}
        />
      </div>
    </ContainerFullWidth>
  )
}

