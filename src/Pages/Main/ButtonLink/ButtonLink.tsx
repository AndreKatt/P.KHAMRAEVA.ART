import ArrowOpenIcon from "../../../assets/Icons/ArrowOpen.svg"

import type {FC} from "react"

import styles from "./styles.module.scss"

export const ButtonLink: FC<{
  Title: string;
  OnClick?: VoidFunction;
  IconClassName?: string;
}> = ({Title, OnClick, IconClassName}) => (
  <div
    className={styles.projectsButton}
    onClick={OnClick}
  >
    <div className={styles.projectsButtonText}>
      {Title}
    </div>
    <ArrowOpenIcon className={IconClassName}/>
  </div>
)
