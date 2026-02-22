import { createPortal } from 'react-dom'
import classNames from 'classnames'
import ArrowLeftIcon from '../../../assets/Icons/ArrowLeft.svg'
import ArrowRightIcon from '../../../assets/Icons/ArrowRight.svg'
import CrossIcon from '../../../assets/Icons/Cross.svg'

import type { FC } from 'react'
import type { IPreviewProps } from './types.ts'

import styles from "./styles.module.scss"

export const Preview: FC<IPreviewProps> = ({
  Image,
  OnClose,
  ArrowLeft,
  ArrowRight,
}) => {
  return createPortal(
    <div className={styles.previewWrapper}>
      <div
        onClick={OnClose}
        className={styles.previewClose}
      >
        <CrossIcon />
      </div>

      <div
        onClick={ArrowLeft.OnClick}
        className={classNames(styles.previewArrowLeft, {
          [styles.disabled]: ArrowLeft.IsDisabled,
        })}
      >
        <ArrowLeftIcon />
      </div>
      <img
        src={Image.Src}
        srcSet={Image.SrcSet}
        sizes="100vw"
        loading="lazy"
        className={styles.image}
      />
      <div
        onClick={ArrowRight.OnClick}
        className={classNames(styles.previewArrowRight, {
          [styles.disabled]: ArrowRight.IsDisabled,
        })}
      >
        <ArrowRightIcon />
      </div>
    </div>,
    document.body,
  )
}
