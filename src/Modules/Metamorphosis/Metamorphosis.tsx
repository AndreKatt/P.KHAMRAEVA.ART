import {Footer} from "../../Components/Footer/Footer.tsx"
import {Authors} from "../../Components/Authors/Authors.tsx"
import {Gallery} from "../../Components/Gallery/Gallery.tsx"
import {VideoPreview} from "../../Components/VideoPreview/VideoPreview.tsx"
import {authors, footerIcons, galleryImages, imagesBasePath} from "./constants.ts"
import {Container} from "../../Components/Container/Container.tsx"

import styles from "./styles.module.scss"

export const Metamorphosis = () => {
  return (
    <Container>
      <div>
        <VideoPreview
          ImageSrc={`${imagesBasePath}/StranaSveta-1440.webp`}
          ImageSrcSet={`
            ${imagesBasePath}/StranaSveta-900.webp 900w,
            ${imagesBasePath}/StranaSveta-1440.webp 1440w,
            ${imagesBasePath}/StranaSveta-1920.webp 1920w
          `}
          Title={'МЕТАМОРФОЗЫ\nПЕТЕРБУРГСКОГО ДОМА'}
          Description={'ПОБЕДИТЕЛЬ ВСЕРОССИЙСКОГО МЕДИА-КОНКУРСА\n«СТРАНА СВЕТА 2025». МАППИНГ-ШОУ.'}
        />
        <div className={styles.projectDescription}>
          Петербург — город, чей образ неотделим от русской литературы. Наш медиапроект предлагает взглянуть на знакомую архитектуру через призму знаковых текстов Пушкина, Гоголя и Достоевского.
          <br />
          <br />
          В основе шоу — история одного дома как метафоры всего города. С помощью технологий видеомэппинга здание проживает свою судьбу на глазах у зрителей: от возведения и пышного расцвета до периода упадка и, наконец, превращения в пространство, населённое литературными призраками.
        </div>
      </div>

      <div className={styles.imagePreviewHorizontalWrapper}>
        <img
          src={`${imagesBasePath}/MednyiVsadnik-1440.webp`}
          srcSet={`
            ${imagesBasePath}/MednyiVsadnik-900.webp 900w,
            ${imagesBasePath}/MednyiVsadnik-1440.webp 1440w,
            ${imagesBasePath}/MednyiVsadnik-1920.webp 1920w
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
    </Container>
  )
}
