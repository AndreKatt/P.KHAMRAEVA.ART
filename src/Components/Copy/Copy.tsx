import { useRef, useState } from 'react'
import classNames from 'classnames'

import type { FC, PropsWithChildren } from 'react'

import styles from './styles.module.scss'

const TOOLTIP_TEXT = 'Скопировано!'

export const Copy: FC<PropsWithChildren<{
  Text?: string;
  Timeout?: number;
}>> = ({
  Text = TOOLTIP_TEXT,
  Timeout = 3000,
  children,
}) => {
  const [isShowTooltip, setIsShowTooltip] = useState(false);
  const refTargetElement = useRef<HTMLDivElement | null>(null);

  const onClickRef = () => {
    if (!refTargetElement.current) {
      return;
    }
    navigator.clipboard.writeText(refTargetElement.current.textContent)
  
    setIsShowTooltip(true)

    setTimeout(() => {
      setIsShowTooltip(false)
    }, Timeout)
  }

  const $content = (
    <div
      ref={refTargetElement}
      className={styles.content}
    >
      {children}
    </div>
  )

  const $tooltip = (
    <div
      className={classNames(styles.tooltip, {
        [styles.hidden]: !isShowTooltip,
      })}
        >
      {Text}
    </div>
  )
  
  return (
    <div
      onClick={onClickRef}
      className={styles.tooltipWrapper}
    >
      {$content}
      {$tooltip}
    </div>
  )
}
