import type {FC} from 'react'

import styles from './styles.module.scss'
import type { IHelpInfoItemProps } from './types'

export const HelpInfoItem: FC<IHelpInfoItemProps> = ({
  Title,
  Description,
}) => {
  return (
    <div className={styles.helpInfoItem}>
      <div className={styles.helpInfoTitle}>
        {Title}
      </div>
      {Description}
    </div>
  )
}
