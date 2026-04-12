import {Footer} from "../../Components/Footer/Footer.tsx"
import {Authors} from "../../Components/Authors/Authors.tsx"
import {Gallery} from "../../Components/Gallery/Gallery.tsx"
import {VideoPreview} from "../../Modules/VideoPreview/VideoPreview.tsx"
import {useIsMobile} from "../../utils/useIsMobile.ts"
import {ProjectTitleMobile} from "../../Modules/ProjectTitleMobile/ProjectTitleMobile.tsx"
import {
  authors,
  footerIcons,
  galleryImages,
  videoPreviewProps,
  videoMednyiPreviewProps,
} from "./constants.tsx"

import styles from "./styles.module.scss"

export function Component() {
  const isMobile = useIsMobile()

  const $titleMobile = isMobile ? (
    <ProjectTitleMobile
      Title={(
      <>
        МЕТАМОРФОЗЫ
        <br />
        ПЕТЕРБУРГСКОГО ДОМА
      </>
      )}
      Description={videoPreviewProps.Description}
    />
  ) : null

  return (
    <>
      <div>
        {$titleMobile}
        <VideoPreview
          {...videoPreviewProps}
          Title={isMobile ? undefined : videoPreviewProps.Title}
          Description={isMobile ? undefined : videoPreviewProps.Description}
        />

        <div className={styles.projectDescription}>
          Петербург&nbsp;— город величественной архитектуры и&nbsp;культуры.{' '}
          Но&nbsp;за&nbsp;красивыми фасадами прячется история, наполненная мистикой и&nbsp;тревожными мифами.{' '}
          Его&nbsp;уникальный образ был&nbsp;сформирован классической литературой. 
          <br />
          <br />
          Медиаспектакль изображает дух, скрывающийся за фасадом.
          <br />
          В основе шоу&nbsp;— история одного дома как&nbsp;аллегория всего&nbsp;города.{' '}
          С помощью технологий видеомаппинга метаморфозы, отражённые на&nbsp;фасаде деформируют{' '}
          и&nbsp;превращают здание в&nbsp;одушевлённого героя. Дом проживает свою трагическую судьбу на глазах у зрителей:{' '}
          от&nbsp;возведения и&nbsp;пышного расцвета до&nbsp;упадка и&nbsp;превращения в&nbsp;пристанище безутешных призраков, блуждающих по&nbsp;городу.
        </div>
      </div>

      <VideoPreview {...videoMednyiPreviewProps}/>
      
      <div>
        «Задачей было не&nbsp;просто проиллюстрировать известные сюжеты, а&nbsp;изменить само восприятие архитектуры.{' '}
        Дворцовая&nbsp;площадь становится сценой, а&nbsp;здание Гвардейского корпуса&nbsp;— главным героем.{' '}
        Самым сложным было уместить эту масштабную историю в&nbsp;2,5 минуты, не&nbsp;потеряв её&nbsp;глубины».{' '}
        <br />
        <br />
        Нарратив разворачивается вокруг пяти&nbsp;фаз трансформации дома,{' '}
        где образы знаковых произведений А.С.&nbsp;Пушкина, Н.В.&nbsp;Гоголя{' '}
        созвучны музыкальным&nbsp;композиция Чайковского и Шостаковича.
      </div>

      <Gallery Images={galleryImages} />

      <div className={styles.textContainer}>
        <div className={styles.text}>
          Это иммерсивный медиаспектакль, где видеографика, академическая&nbsp;музыка{' '}
          и&nbsp;литературные аллюзии соединяются в&nbsp;целостное высказывание&nbsp;о&nbsp;прошлом, настоящем и&nbsp;вечном&nbsp;духе Петербурга.{' '}
          Погружая зрителя в&nbsp;драматургию значимых для&nbsp;Петербурга классических произведений.
        </div>
        <div className={styles.textWithFrame}>
          Проект «АРХИТЕКТУРА КАК ВОПЛОЩЕНИЕ ЛИТЕРАТУРНОГО МИФА. МЕТАМОРФОЗЫ ПЕТЕРБУРГСКОГО ДОМА» реализован в рамках всероссийского конкурса «Страна Света» — масштабного проекта, выявляющего лучшие работы в области светодизайна, архитектурного освещения и медиа-искусства.
        </div>

        <Authors
          Items={authors}
          ProjectName="«Метаморфозы Петербургского Дома»"
        />
      </div>
      <Footer Icons={footerIcons}/>
    </>
  )
}