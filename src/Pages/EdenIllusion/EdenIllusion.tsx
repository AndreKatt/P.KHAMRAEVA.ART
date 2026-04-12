import {Authors} from "../../Components/Authors/Authors.tsx"
import {Footer} from "../../Components/Footer/Footer.tsx"
import {Gallery} from "../../Components/Gallery/Gallery.tsx"
import {ProjectPreview} from "../../Components/ProjectPreview/ProjectPreview.tsx"
import {Image} from '../../Components/Image/Image.tsx'
import {VideoPreview} from "../../Modules/VideoPreview/VideoPreview.tsx"
import {ProjectTitleMobile} from "../../Modules/ProjectTitleMobile/ProjectTitleMobile.tsx"
import {ContainerFullWidth} from "../../Components/ContainerFullWidth/ContainerFullWidth.tsx"
import {useIsMobile} from "../../utils/useIsMobile.ts"
import {
  authors,
  footerIcons,
  galleryImages,
  videoPreviewImages,
  previewProps,
  videoPreviewProps,
} from "./constants.ts"

import styles from "./styles.module.scss"

export function Component() {
  const isMobile = useIsMobile()
  
  const $titleMobile = isMobile ? (
    <ProjectTitleMobile
      Title={previewProps.Title}
      Description={previewProps.Description}
    />
  ) : null

  return (
    <>
      <div>
        {$titleMobile}
        <ProjectPreview
          {...previewProps}
          Title={isMobile ? undefined : previewProps.Title}
          Description={isMobile ? undefined : previewProps.Description}
          className={styles.projectPreview}
          ClassNameImage={styles.projectPreviewImage}
        />
      </div>

      <div>
        Перформанс «Eden Illusion» — это размышление о трансформации образа рая в современной культуре: от древнего сакрального символа к утопической мечте о будущем.
        <br />
        <br />
        Полнокупольная проекция окружает зрителя, погружая в живую, изменчивую среду. Она становится окном в «разум» машины: подобно нейросети, анализируя историю культуры, она генерирует образ идеального сада — Эдема. Однако за этой совершенной иллюзией скрывается приближающаяся катастрофа. Зритель становится свидетелем метаморфозы: лавровый лес растворяется в цифровых абстракциях, а сакральная тишина природы сменяется ритмичным гулом алгоритмов.
      </div>

      <ContainerFullWidth className={styles.videoPreviewContainer}>
        {videoPreviewImages.map((image, idx) => (
          <Image
            IsLazy
            key={idx}
            className={styles.videoPreviewImage}
            {...image}
          />
        ))}
      </ContainerFullWidth>

      Пространство сада наполняют живые голоса хора. Их музыкальная партия, отсылающая к традициям античной мистерии, создает напряженный диалог между архаичным ритуалом и актуальным медиаискусством.
      <br />
      <br />
      Доживем ли мы до будущего, в котором человечество предпочтет укрыться от реальных проблем в цифровом мире, как в убежище? Может ли цифровая иллюзия стать для человека новой средой обитания — в той же степени, что некогда были природа и материальная цивилизация?

      <VideoPreview {...videoPreviewProps}/>

      <div className={styles.textContainer}>
        «Eden Illusion» — это художественное высказывание о выборе, стоящем перед человеком сегодня. Спектакль не предлагает готовых ответов, но создает целостный опыт, позволяющий прочувствовать парадокс цифрового рая: его совершенную красоту и глубокую оторванность от действительности. Проект представляет собой новый формат синтеза технологий, классической музыкальной традиции и актуального философского поиска.
      </div>

      <Gallery Images={galleryImages}/>

      <Authors
        Items={authors}
        ProjectName="«Eden Illusion»"
      />
      <Footer Icons={footerIcons}/>
    </>
  )
}
