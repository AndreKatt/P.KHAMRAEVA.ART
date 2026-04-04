import { ContainerFullWidth } from "../../Components/ContainerFullWidth/ContainerFullWidth";
import { ProjectItem } from "../../Modules/ProjectItem/ProjectItem";
import { previewItems } from "./constants.tsx";

import styles from './styles.module.scss'

export function Component() {
  return (
    <ContainerFullWidth className={styles.projectsContainer}>
      {previewItems.map(item => (
        <ProjectItem
          key={item.Link}
          {...item}
        />
      ))}
    </ContainerFullWidth>
  )
}