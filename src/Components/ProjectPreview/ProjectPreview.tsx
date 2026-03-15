import classNames from 'classnames'
import {ProjectTitle} from '../ProjectTitle/ProjectTitle.tsx'
import {Image} from '../Image/Image.tsx'

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
  children,
}) => {
  const $title = Title ? (
    <div className={styles.projectPreviewTitleWrapper}>
      <ProjectTitle
        Title={Title}
        Description={Description}
      />
    </div>
  ) : null

  return (
    <div
      className={styles.projectPreviewContainer}
      onClick={OnClick}
    >
      {$title}
      <div className={classNames(styles.projectPreviewImageContainer, {
        [styles.gradient]: WhithGradient,
      })}>
        {children}
        <Image
          IsLazy
          Src={ImageSrc}
          SrcSet={ImageSrcSet}
        />
      </div>
    </div>
  )
}

