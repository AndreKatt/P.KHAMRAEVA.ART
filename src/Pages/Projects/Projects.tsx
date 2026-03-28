import { Preview } from "./Preview/Preview";
import { previewItems } from "./constants";

import styles from './styles.module.scss'

export function Component() {
  return (
    <div className={styles.projectsContainer}>
      {previewItems.map(item => (
        <Preview
          key={item.Link}
          {...item}
        />
      ))}
    </div>
  )
}