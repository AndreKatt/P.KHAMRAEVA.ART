import {ContainerFullWidth} from "../../Components/ContainerFullWidth/ContainerFullWidth";
import {ProjectItem} from "./ProjectItem/ProjectItem.tsx";
import {VideoPreview} from "../../Modules/VideoPreview/VideoPreview";
import {VideoBackground} from "../../Modules/VideoBackground/VideoBackground";
import {useNavigateCustom} from "../../utils/useNavigate";
import {useIsMobile} from "../../utils/useIsMobile.ts";
import {routes} from "../../assets";
import {
  projectItemsFirstRow,
  projectItemsSecondRow,
  videoCrepeProps,
  videoProps,
} from "./constants.tsx";

import styles from "./styles.module.scss"

export const MainPage = () => {
  const navigate = useNavigateCustom()
  const isMobile = useIsMobile()

  const $crepeTitle = isMobile ? null : (
    <ContainerFullWidth className={styles.videoPreviewCrepeTitleContainer}>
      <div className={styles.videoPreviewCrepeTitle}>
        СИНИЙ КРЕПДЕШИН
      </div>
      <div className={styles.videoPreviewCrepeDescription}>
        ЭКСПЕРИМЕНТАЛЬНЫЙ
        <br />
        СПЕКТАКЛЬ-ТРАГИФАРС
      </div>
    </ContainerFullWidth>
  ) 

  return (
    <>
      <VideoBackground {...videoProps}/>

      <div>
        Полина Хамраева — режиссер, художник, арт&nbsp;директор.
        <br />
        <br />
        Создаю проекты на стыке кино, театра и&nbsp;иммерсионного искусства.{' '}
        Мой профиль — полный цикл производства — от&nbsp;концепции и&nbsp;эскиза до&nbsp;реализации в&nbsp;формате спектакля, тотальной инсталляции или выставки.
        <br />
        <br />
        Основа практики — синтез классического искусства и&nbsp;новых медиа.{' '}
        В центре — идея тотального произведения искусства (Gesamtkunstwerk), где свет, звук, пространство и&nbsp;медиа служат единой драматургической цели.
      </div>

      <div>
        <ContainerFullWidth className={styles.projectsContainer}>
          <div className={styles.projectsContainerFirstRow}>
            {projectItemsFirstRow.map((project, index) => (
              <ProjectItem
                key={index}
                {...project}
                BorderRight={index < projectItemsFirstRow.length - 1}
              />
            ))}
          </div>
          <div className={styles.projectsContainerSecondRow}>
            {projectItemsSecondRow.map((project, index) => (
              <ProjectItem
                key={index}
                {...project}
                BorderRight={index < projectItemsSecondRow.length - 1}
              />
            ))}
          </div>
        </ContainerFullWidth>

        <div className={styles.videoPreviewCrepeContainer}>
          <VideoPreview
            {...videoCrepeProps}
            ClassNameImage={styles.videoPreviewCrepeImage}
            className={styles.videoPreviewCrepe}
          />
          {$crepeTitle}
        </div>
      </div>

      <div>
        «Синий крепдешин» — трагифарс в&nbsp;жанре автофикшн, похожий на&nbsp;причудливый сон. Сквозь шесть новелл спектакль вскрывает феномен семейной травмы и&nbsp;экзицистенциального поиска. Обнаружен парадокс - попытка вырваться из&nbsp;родовых сценариев оборачивается роковым повторением их&nbsp;паттернов.
        <br />
        Это художественный эксперимент, где&nbsp;личная история автора обретает универсальное звучание, а&nbsp;пронзительная драма сменяется гротескной клоунадой.
        <br />
        <br />
        Режиссёр Полина Хамраева исследует экзистенциальную пустоту: возможно&nbsp;ли разорвать порочный круг травм, уходящих корнями в&nbsp;прошлое, или&nbsp;они&nbsp;навсегда удерживают личность в&nbsp;своих тенетах?
      </div>
      
      <div className={styles.buttonWrapper}>
        <div
          onClick={() => navigate(routes.CREPE_DE_CHINE)}
          className={styles.button}
        >
          <div className={styles.buttonText}>
            ПОДРОБНЕЕ О ПРОЕКТЕ
          </div>
        </div>
      </div>
    </>
  )
}