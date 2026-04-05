import {useNavigateCustom} from "../../../utils/useNavigate"
import ArrowOpenIcon from "../../../assets/Icons/ArrowOpen.svg"

import type {FC} from "react"

import styles from "./styles.module.scss"

export const ButtonLink: FC<{
  Title: string,
  Link: string,
}> = ({Title, Link}) => {
  const navigate = useNavigateCustom()

  return (
    <div
      className={styles.projectsButton}
      onClick={() => navigate(Link)}
    >
      <ArrowOpenIcon className={styles.projectsButtonIconLeft}/>
      <div className={styles.projectsButtonText}>
        {Title}
      </div>
      <ArrowOpenIcon className={styles.projectsButtonIconRight}/>
    </div>
  )
}
