import classNames from "classnames"
import {useLocation} from "react-router-dom"
import {useNavigateCustom} from "../../../utils/useNavigate"
import {useDrawerContext} from "../../../utils/useDrawerContext"
import {routes} from "../../../assets"
import OpenIcon from '../../../assets/Icons/ArrowOpen.svg'

import type {FC} from "react"
import type {IHeaderItems} from "./types"

import styles from '../styles.module.scss'

export const HeaderItems: FC<IHeaderItems> = ({
  IsOpenContacts,
  OnToggleOpenContacts,
}) => {
  const navigate = useNavigateCustom();
  const {pathname} = useLocation();
  const {
    IsOpen,
    SetIsOpenDrawer,
  } = useDrawerContext()

  const {
    MAIN,
    PROJECTS,
    CREPE_DE_CHINE,
    BIO,
  } = routes

  const isMainPage = pathname === '/'

  const onCloseDrawer = () => {
    if (IsOpen) {
      SetIsOpenDrawer(false)
    }
  }

  return (
    <>
      <div className={styles.headerMenuContainer}>
        <div
          className={classNames(styles.headerMenuItem, {
            [styles.active]: isMainPage
          })}
          onClick={() => {
            navigate(MAIN)
            onCloseDrawer()
          }}
        >
          ГЛАВНАЯ
        </div>

        <div
          className={classNames(styles.headerMenuItem, {
            [styles.active]: pathname === `/${PROJECTS}`
          })}
          onClick={() => {
            navigate(PROJECTS)
            onCloseDrawer()
          }}
        >
          ПРОЕКТЫ
        </div>

        <div
          className={classNames(styles.headerMenuItem, {
            [styles.active]: pathname.includes(CREPE_DE_CHINE)
          })}
          onClick={() => {
            navigate(CREPE_DE_CHINE)
            onCloseDrawer()
          }}
        >
          АКТУАЛЬНОЕ
        </div>

        <div
          className={classNames(styles.headerMenuItem, {
            [styles.active]: pathname.includes(BIO)
          })}
          onClick={() => {
            navigate(BIO)
            onCloseDrawer()
          }}
        >
          БИО
        </div>
      </div>

      <div
        className={classNames(
          styles.headerMenuItem,
          styles.contactsButtonContainer,
          {[styles.active]: IsOpenContacts}
        )}
        onClick={OnToggleOpenContacts}
      >
        <div className={styles.contactsButton}>
          КОНТАКТЫ
        </div>
        <OpenIcon
          className={classNames(styles.contactsIcon, {
            [styles.open]: IsOpenContacts
          })}
        />
      </div>
    </>
  )
};