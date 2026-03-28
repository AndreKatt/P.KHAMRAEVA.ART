import {Footer} from "../../Components/Footer/Footer.tsx"
import {Authors} from "../../Components/Authors/Authors.tsx"
import {Gallery} from "../../Components/Gallery/Gallery.tsx"
import {Image} from '../../Components/Image/Image.tsx'
import {VideoPreview} from "../../Components/VideoPreview/VideoPreview.tsx"
import {ContainerFullWidth} from "../../Components/ContainerFullWidth/ContainerFullWidth.tsx"
import {
  authors,
  imagesBasePath,
  footerIcons,
  galleryImages,
  videoPreviewProps,
  videoId,
} from "./constants.ts"

import styles from "./styles.module.scss"

export function Component() {
  return (
    <>
      <div>
        <VideoPreview
          VideoId={videoId}
          {...videoPreviewProps}
        />

        <div className={styles.projectDescription}>
          Петербург — город, чей образ неотделим от русской литературы. Наш медиапроект предлагает взглянуть на знакомую архитектуру через призму знаковых текстов Пушкина, Гоголя и Достоевского.
          <br />
          <br />
          В основе шоу — история одного дома как метафоры всего города. С помощью технологий видеомэппинга здание проживает свою судьбу на глазах у зрителей: от возведения и пышного расцвета до периода упадка и, наконец, превращения в пространство, населённое литературными призраками.
        </div>
      </div>

      <ContainerFullWidth className={styles.imagePreviewHorizontalWrapper}>
        <Image
          IsLazy
          Src={`${imagesBasePath}/MednyiVsadnik-1440.webp`}
          SrcSet={`
            ${imagesBasePath}/MednyiVsadnik-900.webp 900w,
            ${imagesBasePath}/MednyiVsadnik-1440.webp 1440w,
            ${imagesBasePath}/MednyiVsadnik-1920.webp 1920w
          `}
          className={styles.imagePreviewHorizontal}
        />
      </ContainerFullWidth>
      
      <div>
        «Нашей задачей было не просто проиллюстрировать сюжеты, а изменить само восприятие архитектуры. Фасад становится сценой, а здание — главным героем. Самым сложным было уместить эту масштабную историю в 2,5 минуты, не потеряв её глубины».
        <br />
        <br />
        Нарратив строится вокруг пяти фаз трансформации дома, в которые вплетены отсылки к классическим произведениям и музыкальные темы Чайковского и Шостаковича.
      </div>

      <Gallery Images={galleryImages} />

      <div className={styles.textContainer}>
        <div className={styles.text}>
          Это иммерсивный медиа-спектакль, где видеографика, классическая музыка и литературные аллюзии соединяются в целостное высказывание о прошлом, настоящем и вечной духе Петербурга.
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