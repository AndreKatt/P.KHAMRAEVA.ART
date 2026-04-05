import {Title as TitleComponent} from '../Title/Title'
import type {FC} from 'react'
import type {IHelpInfoItemProps} from './types'

import styles from './styles.module.scss'

export const HelpInfoItem: FC<IHelpInfoItemProps> = ({
  Title,
  Description,
}) => {
  return (
    <div className={styles.helpInfoItem}>
      <TitleComponent
        Text={Title}
        className={styles.helpInfoTitle}
      />
      {Description}
    </div>
  )
}
