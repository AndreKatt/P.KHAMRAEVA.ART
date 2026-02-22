import {Footer} from "../../Components/Footer/Footer"
import {Authors} from "../../Components/Authors/Authors"
import {ProjectTitle} from "../../Components/ProjectTitle/ProjectTitle"
import {Gallery} from "../../Components/Gallery/Gallery"
import {authors, footerIcons, galleryImages} from "./constants"

import styles from "./styles.module.scss"
import { VideoPreview } from "../../Components/VideoPreview/VideoPreview"

export const Metamorphosis = () => {
  return (
    <div
      className={styles.contentContainer}
    >
      <div>
        <div
          className={styles.projectInfoContainer}
        >
          <div
            className={styles.projectTitleWrapper}
          >
            <ProjectTitle
              Title={'МЕТАМОРФОЗЫ\nПЕТЕРБУРГСКОГО ДОМА'}
              Description={'ПОБЕДИТЕЛЬ ВСЕРОССИЙСКОГО МЕДИА-КОНКУРСА\n«СТРАНА СВЕТА 2025». МАППИНГ-ШОУ.'}
            />
          </div>
          <VideoPreview
            ImageSrc="/Images/Metamorphosis/StranaSveta-1440.webp"
            ImageSrcSet={`
              /Images/Metamorphosis/StranaSveta-900.webp 900w,
              /Images/Metamorphosis/StranaSveta-1440.webp 1440w,
              /Images/Metamorphosis/StranaSveta-1920.webp 1920w
            `}
          />
        </div>
        <div
          className={styles.projectDescription}
        >
          Петербург — город, чей образ неотделим от русской литературы. Наш медиапроект предлагает взглянуть на знакомую архитектуру через призму знаковых текстов Пушкина, Гоголя и Достоевского.
          <br />
          <br />
          В основе шоу — история одного дома как метафоры всего города. С помощью технологий видеомэппинга здание проживает свою судьбу на глазах у зрителей: от возведения и пышного расцвета до периода упадка и, наконец, превращения в пространство, населённое литературными призраками.
        </div>
      </div>

      <div
        className={styles.imagePreviewHorizontalWrapper}
      >
        <img
          src="/Images/Metamorphosis/MednyiVsadnik-1440.webp"
          srcSet={`
            /Images/Metamorphosis/MednyiVsadnik-900.webp 900w,
            /Images/Metamorphosis/MednyiVsadnik-1440.webp 1440w,
            /Images/Metamorphosis/MednyiVsadnik-1920.webp 1920w
          `}
          sizes="100vw"
          loading="lazy"
          className={styles.imagePreviewHorizontal}
        />
      </div>
      
      <div>
        «Нашей задачей было не просто проиллюстрировать сюжеты, а изменить само восприятие архитектуры. Фасад становится сценой, а здание — главным героем. Самым сложным было уместить эту масштабную историю в 2,5 минуты, не потеряв её глубины».
        <br />
        <br />
        Нарратив строится вокруг пяти фаз трансформации дома, в которые вплетены отсылки к классическим произведениям и музыкальные темы Чайковского и Шостаковича.
      </div>

      <div
        className={styles.galleryWrapper}
      >
        <Gallery Images={galleryImages} />
      </div>

      <div
        className={styles.textContainer}
      >
        <div
          className={styles.text}
        >
          Это иммерсивный медиа-спектакль, где видеографика, классическая музыка и литературные аллюзии соединяются в целостное высказывание о прошлом, настоящем и вечной духе Петербурга.
        </div>
        <div
          className={styles.textWithFrame}
        >
          Проект «АРХИТЕКТУРА КАК ВОПЛОЩЕНИЕ ЛИТЕРАТУРНОГО МИФА. МЕТАМОРФОЗЫ ПЕТЕРБУРГСКОГО ДОМА» реализован в рамках всероссийского конкурса «Страна Света» — масштабного проекта, выявляющего лучшие работы в области светодизайна, архитектурного освещения и медиа-искусства.
        </div>

        <Authors
          Items={authors}
          ProjectName="«Метаморфозы Петербургского Дома»"
        />
      </div>

      <Footer Icons={footerIcons}/>
    </div>
  )
}
