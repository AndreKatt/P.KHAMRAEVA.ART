import {ContainerFullWidth} from '../../Components/ContainerFullWidth/ContainerFullWidth'
import {ProjectTitle} from '../../Components/ProjectTitle/ProjectTitle'

import type {FC} from 'react'
import type {IProjectTitleProps} from '../../Components/ProjectTitle/types'

import styles from './styles.module.scss'

export const ProjectTitleMobile: FC<IProjectTitleProps> = ({
  Title,
  Description,
}) => {
  return (
    <ContainerFullWidth>
      <ProjectTitle
        Title={Title}
        Description={Description}
        className={styles.titleMobile}
      />
    </ContainerFullWidth>
  )
}
