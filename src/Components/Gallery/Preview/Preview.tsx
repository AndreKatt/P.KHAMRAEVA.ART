import {createPortal} from 'react-dom'
import {Image as ImageComponent} from '../../Image/Image.tsx'
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
        <CrossIcon className={styles.previewCloseIcon}/>
      </div>

      <div
        onClick={ArrowLeft.OnClick}
        className={classNames(styles.previewArrowLeft, {
          [styles.disabled]: ArrowLeft.IsDisabled,
        })}
      >
        <ArrowLeftIcon className={styles.previewArrowLeftIcon}/>
      </div>
      <ImageComponent
        IsLazy
        className={styles.image}
        {...Image}
      />
      <div
        onClick={ArrowRight.OnClick}
        className={classNames(styles.previewArrowRight, {
          [styles.disabled]: ArrowRight.IsDisabled,
        })}
      >
        <ArrowRightIcon className={styles.previewArrowRightIcon}/>
      </div>
    </div>,
    document.body,
  )
}
