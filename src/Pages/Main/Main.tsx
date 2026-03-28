import {Image} from "../../Components/Image/Image";
import { Gallery } from "../../Components/Gallery/Gallery";
import { VideoPreview } from "../../Components/VideoPreview/VideoPreview";
import { galleryItems, videoProps } from "./constants";
import { useIsMobile } from "../../utils/useIsMobile";
import { useNavigateCustom } from "../../utils/useNavigate";
import PolinaImage_900 from "../../assets/Images/PolinaMobile-900.webp"
import PolinaImage_1440 from "../../assets/Images/Polina-1440.webp"
import PolinaImage_1920 from "../../assets/Images/Polina-1920.webp"
import ArrowOpenIcon from "../../assets/Icons/ArrowOpen.svg"

import styles from "./styles.module.scss"

export const MainPage = () => {
  const navigate = useNavigateCustom()
  const isMobile = useIsMobile()

  const $description = isMobile ? <DescriptionMobile /> : <DescriptionDesk />

  const $textMobile = isMobile ? (
    <>
      · Победитель Всероссийского конкурса «Страна Света»-2025
      <br />
      · Автор мультимедийных спектаклей:
      <br />
      «Eden Illusion», «ZAVIST», «Синий Крепдешин»
      <br />
      · Автор фиджитал-выставки «Город Сад»
      <br />
      · Участник ART Russia 2024
      <br />
      · Художник-постановщик сериала
      <br />
      «Родные люди» (Wink), фильма «Ярче 2» (ВК)
      <br />
      · Участник коллабораций с крупными  брендами (ВКонтакте,
      <br />
      Сбер) и арт-институциями (ЦСИ «Марс», Beinopen)
      <br />
      <br />
      Международная практика:
      <br />
      <br />
      · Арт-директор продакшена Dev-VP (Эстония, 2023)
      <br />
      · Стажировка на киностудиях:
      <br />
      «Silvercup» (Нью-Йорк, США, 2016)
      <br />
      «Broadway Stages» (Нью-Йорк, США, 2016) 
    </>
  ) : null

  const $image = isMobile ? (
    <Image
      Src={PolinaImage_900}
      className={styles.polinaImage}
    />
  ) : (
    <Image
      Src={PolinaImage_1440}
      SrcSet={`
        ${PolinaImage_900} 900w,
        ${PolinaImage_1440} 1440w,
        ${PolinaImage_1920} 1920w,
      `}
      className={styles.polinaImage}
    />
  )

  return (
    <>
      <div className={styles.content}>
        {$image}
        {$description}
      </div>
      {$textMobile}
      <div>
        Моя специализация — полный цикл: от концепции и эскиза до реализации в формате спектакля, тотальной инсталляции или выставки.
        <br />
        В основе практики — синтез классического искусства и новых медиа.
        <br />
        <br />
        Меня увлекает не отдельный жанр, а сама мультижанровость, идея тотального произведения искусства, где свет, звук, пространство и изображение подчинены единой драматургической цели. Медиаискусство и театр стали для меня тем инструментом, который позволяет работать с крупным масштабом, создавая многосложный иммерсивный опыт.
        <br />
        <br />
        Мой творческий путь прошел от изобразительного искусства и кинематографа (где я работала художником как на камерных, так и на масштабных проектах) до фиджитал выставок с тотальными инсталляциями и режиссуры в театре.
      </div>
      <Gallery Images={galleryItems} />

      <div
        className={styles.projectsButtonContainer}
        onClick={() => navigate('projects')}
      >
        <div className={styles.projectsButtonBorder}/>

        <div className={styles.projectsButtonContent}>
          <ArrowOpenIcon className={styles.projectsButtonIconLeft}/>
          <div className={styles.projectsButtonText}>
            СМОТРЕТЬ ПРОЕКТЫ
          </div>
          <ArrowOpenIcon className={styles.projectsButtonIconRight}/>
        </div>

        <div className={styles.projectsButtonBorder}/>
      </div>

      <div>
        <div className={styles.projectsVideoPreviewBorder}/>
        <VideoPreview
          {...videoProps}
          Title={!isMobile && videoProps.Title}
        />
        <div className={styles.projectsVideoPreviewBorder}/>
      </div>
    </>
  )
}

const DescriptionDesk = () => (
  <div className={styles.descriptionDesk}>
    Я - режиссер, художник, арт директор.
    <br />
    Создаю миры на стыке кино, театра
    <br />
    и иммерсивного искусства. В основе
    <br />
    практики - синтез классического
    <br />
    искусства и новых медиа.
    <br />
    <br />

    • Победитель Всероссийского конкурса
    <br />
    «Страна Света»-2025 (автор маппинг-шоу
    <br />
    «Метаморфозы петербургского дома» на
    <br />
    фасаде Гвардейского корпуса Эрмитажа)
    <br />
    <br />
    • Автор мультимедийных спектаклей:
    <br />
    «Синий Крепдешин»; «Eden Illusion»;«Zavist»
    <br />
    <br />
    • Художник-постановщик
    <br />
    фиджитал-выставки «Город Сад»
    <br />
    • Участник ART Russia Fair 2024
    <br />
    <br />
    • Художник-постановщик сериалов
    <br />
    и фильмов, рекламы и клипов
    <br />
    (Wink, BK, JETLAG, СБЕР, 1 канал)
    <br />
    <br />
    • Участник кинофестивалей
    <br />
    (Baku International Film Festival,«Сталкер»)
    <br />
    <br />
    • Сотрудничество с арт-институциями
    <br />
    <br />
    (Эрмитаж, ЦСИ «Марс», Beinopen, Планетарий 1)
    <br />
    <br />
    • Арт-директор продакшена Dev-VP (Эстония, 2023)
    <br />
    • Стажировка на киностудиях:
    <br />
      Silvercup» (Нью-Йорк, США, 2016)
      <br />
      Broadway Stages» (Нью-йорк, США, 2016)
  </div>
)

const DescriptionMobile = () => (
  <div className={styles.descriptionMobile}>
    Я – режиссер, художник, арт
    <br />
    директор.
    <br />
    <br />
    Создаю миры на стыке кино,
    <br />
    театра и иммерсивного
    <br />
    искусства. В основе
    <br />
    практики — синтез
    <br />
    классического искусства и
    <br />
    новых медиа.
  </div>
)