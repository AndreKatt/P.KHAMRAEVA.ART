import { Authors } from "../../Components/Authors/Authors.tsx"
import {Footer} from "../../Components/Footer/Footer.tsx"
import {Gallery} from "../../Components/Gallery/Gallery.tsx"
import {ProjectTitle} from "../../Components/ProjectTitle/ProjectTitle.tsx"
import { VideoPreview } from "../../Components/VideoPreview/VideoPreview.tsx"
import {authors, footerIcons, galleryImages, imagesBasePath} from "./constants.ts"

import styles from "./styles.module.scss"

export const EdenIllusion = () => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.projectInfoContainer}>
        <div className={styles.projectTitleWrapper}>
          <ProjectTitle
            Title='EDEN ILLUSION'
            Description='МУЛЬТИМЕДИЙНЫЙ СПЕКТАКЛЬ '
          />
        </div>
        <VideoPreview
          ImageSrc={`${imagesBasePath}EdenIllusion-1440.webp`}
          ImageSrcSet={`
            ${imagesBasePath}EdenIllusion-900.webp 900w,
            ${imagesBasePath}EdenIllusion-1440.webp 1440w,
            ${imagesBasePath}EdenIllusion-1920.webp 1920w
          `}
          WhithoutPlayButton
        />
      </div>

      <div>
        Перформанс «Eden Illusion» — это размышление о трансформации образа рая в современной культуре: от древнего сакрального символа к утопической мечте о будущем.
        <br />
        <br />
        Полнокупольная проекция окружает зрителя, погружая в живую, изменчивую среду. Она становится окном в «разум» машины: подобно нейросети, анализируя историю культуры, она генерирует образ идеального сада — Эдема. Однако за этой совершенной иллюзией скрывается приближающаяся катастрофа. Зритель становится свидетелем метаморфозы: лавровый лес растворяется в цифровых абстракциях, а сакральная тишина природы сменяется ритмичным гулом алгоритмов.
      </div>

      <div>3 ВИДЕО</div>

      <div>
        <div className={styles.textContainer}>
          Пространство сада наполняют живые голоса хора. Их музыкальная партия, отсылающая к традициям античной мистерии, создает напряженный диалог между архаичным ритуалом и актуальным медиаискусством.
          <br />
          <br />
          Доживем ли мы до будущего, в котором человечество предпочтет укрыться от реальных проблем в цифровом мире, как в убежище? Может ли цифровая иллюзия стать для человека новой средой обитания — в той же степени, что некогда были природа и материальная цивилизация?
        </div>

        <div className={styles.projectInfoContainer}>
          <VideoPreview
            ImageSrc={`${imagesBasePath}Photo-1440.webp`}
            ImageSrcSet={`
              ${imagesBasePath}Photo-900.webp 900w,
              ${imagesBasePath}Photo-1440.webp 1440w,
              ${imagesBasePath}Photo-1920.webp 1920w
            `}
          />
        </div>
        <div className={styles.textContainer}>
          «Eden Illusion» — это художественное высказывание о выборе, стоящем перед человеком сегодня. Спектакль не предлагает готовых ответов, но создает целостный опыт, позволяющий прочувствовать парадокс цифрового рая: его совершенную красоту и глубокую оторванность от действительности. Проект представляет собой новый формат синтеза технологий, классической музыкальной традиции и актуального философского поиска.
        </div>
      </div>

      <div className={styles.galleryWrapper}>
        <Gallery Images={galleryImages}/>
      </div>

      <Authors
        Items={authors}
        ProjectName="«Eden Illusion»"
      />

      <Footer Icons={footerIcons}/>
    </div>
  )
}
