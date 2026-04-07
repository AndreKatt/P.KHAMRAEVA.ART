import {Authors} from "../../Components/Authors/Authors.tsx"
import {Footer} from "../../Components/Footer/Footer.tsx"
import {Gallery} from "../../Components/Gallery/Gallery.tsx"
import {ProjectTitle} from "../../Components/ProjectTitle/ProjectTitle.tsx"
import {Image} from '../../Components/Image/Image.tsx'
import {ProjectPreview} from "../../Components/ProjectPreview/ProjectPreview.tsx"
import {useIsMobile} from "../../utils/useIsMobile.ts"
import {
  imagesBasePath,
  galleryImages,
  authors,
  footerIcons,
  previewProps,
  titleDescription,
} from "./constants.ts"

import styles from './styles.module.scss'

export function Component() {
  const isMobile = useIsMobile()

  const $cover = isMobile ? (
    <div className={styles.titleWrapper}>
      <ProjectTitle
        Title={(
          <div className={styles.title}>
            ФИДЖИТАЛ ВЫСТАВКА «ГОРОД&nbsp;САД»
          </div>
        )}
      />
      <ProjectPreview {...previewProps}/>
    </div>
  ) : (
    <>
      <div className={styles.titleWrapper}>
        <ProjectTitle
          Title='ФИДЖИТАЛ ВЫСТАВКА «ГОРОД&nbsp;САД»'
          Description={titleDescription}
        />
      </div>
      <ProjectPreview {...previewProps}/>
    </>
  )

  return (
    <>
      {$cover}
      {isMobile && titleDescription}

      <div>
        ИНСТАЛЛЯЦИЯ КОНСТРУКТОР: «ТРАНСФОРМАТОР» и «ГОРКИ»
        <br />
        <br />
        Светящаяся изнутри арочная конструкция создает архитектуру цивилизации Города Сада. В основу концепта легла идея детского конструктора. Инсталляция предлагает зрителю сыграть умозрительную игру воспоминаний:
        банная уточка стала элементом декора , а лейки из сада бабушки - превратились в капитель напоминающую цветок, водоналивные барьеры стоявшие на дороге - потеряли свою прежнюю форму и стали архитектурным паттерном.
      </div>

      <div className={styles.content}>
        <div className={styles.descriptionBlock}>
          <div className={styles.descriptionText}>
            ИНСТАЛЛЯЦИЯ «ПОЛИХРОМИК»
            <br />
            <br />
            Световая инсталляция-конструктор, основанная на эффекте полихромии. Многолистники преломляют свет и пространство вокруг, создавая эффект цветного пространственного калейдоскопа, который искажает реальность на глазах у зрителя.
            <br />
            <br />
            Ключевое свойство «Полихромика» — масштабируемость. Объект может расти от камерного до гигантского, становясь прототипом тотальной свето-цветовой инсталляции. В логике «Города Сада» он работает как линза, фокусирующая тему телесного и цифрового восприятия: если «Живот Сада» предлагает тактильный вход в виртуальность, то «Полихромик» исследует чистую оптику, превращая физику света в инструмент изменения реальности.
          </div>
          <Image
            IsLazy
            Src={`${imagesBasePath}/PhotoEllips-1440.webp`}
            SrcSet={`
              ${imagesBasePath}/PhotoEllips-900.webp 900w,
              ${imagesBasePath}/PhotoEllips-1440.webp 1440w,
              ${imagesBasePath}/PhotoEllips-1920.webp 1920w
            `}
            Sizes="50vw"
            className={styles.descriptionImage}
          />
        </div>
        <ProjectPreview
          ImageSrc={`${imagesBasePath}/Installation-1440.webp`}
          ImageSrcSet={`
            ${imagesBasePath}/Installation-900.webp 900w,
            ${imagesBasePath}/Installation-1440.webp 1440w,
            ${imagesBasePath}/Installation-1920.webp 1920w
          `}
        />
        <div className={styles.descriptionTextWrapper}>
          ТОТАЛЬНАЯ ИНСТАЛЛЯЦИЯ «ЖИВОТ САДА»
          <br />
          <br />
          Масштабный синтетический объект, где телесная материальность вступает в диалог с цифровой средой. Пространственный каркас формирует абрис гигантского антропоморфного тела, оболочка которого создана из 500 уникальных тканевых элементов — подушек. что акцентирует тактильный, «мягкий» характер объекта. Его абстрактная форма отсылает к архаическим образам существа-вместилища. Вход в виртуальную реальность расположен прямо в центре, в «чреве» мягкой скульптуры. Надевание VR-шлема превращается в символический портал из реального мира в цифровой. Технология становится проводником для внутреннего изменения, отсылая к библейскому мифу об Ионе — истории о временной смерти в теле кита и духовном перерождении.
        </div>
      </div>

      <Gallery Images={galleryImages} />

      <div className={styles.textWithFrame}>
        «Город Сад: Мультивселенные» – Три зала с тотальными инсталляциями погружают зрителя в визуальную историю рассказывающуюся от объекта к объекту. В первом зале происходит создание вселенной и рождение героев. Второй зал — VR-игра, где зрители спасают мир. Третий — VR-мастерская от VK, где каждый может создать собственную вселенную в приложении Open Brush.
        <br />
        <br />
        Проект участник всероссийской ярмарки современного искусства Art Russia Fair 2024.
      </div>

      <Authors
        ProjectName="«Город Сад»"
        Items={authors}
      />
      <Footer Icons={footerIcons}/>
    </>
  )
}
