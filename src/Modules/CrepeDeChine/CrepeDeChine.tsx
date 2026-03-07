import {Authors} from "../../Components/Authors/Authors"
import {Container} from "../../Components/Container/Container"
import {VideoPreview} from "../../Components/VideoPreview/VideoPreview"
import {imagesBasePath as path} from "../EdenIllusion/constants"
import {authors, imagesBasePath} from "./constants"

import styles from './styles.module.scss'

export const CrepeDeChine = () => {
  return (
    <Container>
      <VideoPreview
        ImageSrc={`${path}/EdenIllusion-1440.webp`}
        ImageSrcSet={`
          ${path}/EdenIllusion-900.webp 900w,
          ${path}/EdenIllusion-1440.webp 1440w,
          ${path}/EdenIllusion-1920.webp 1920w
        `}
        Title='СИНИЙ КРЕПДЕШИН'
        Description='ЭКСПЕРИМЕНТАЛЬНЫЙ СПЕКТАКЛЬ-ТРАГИФАРС'
      />

      <div>
        «Синий крепдешин» — экспериментальный спектакль трагифарс, исследующий феномен семейной травмы и экзистенциального поиска.
        <br />
        <br />
        Шесть новелл раскрывают парадокс: попытки вырваться из-под гнета родовых сценариев приводят к роковому повторению их паттернов. Центральный конфликт — борьба социальных масок с глубинным «Я» — воплощён в архетипах рода, которые примеряет на себя героиня.
      </div>

      <VideoPreview
        WhithoutPlayButton
        WhithoutGradient
        ImageSrc={`${imagesBasePath}/Photo-1440.webp`}
        ImageSrcSet={`
          ${imagesBasePath}/Photo-900.webp 900w,
          ${imagesBasePath}/Photo-1440.webp 1440w,
          ${imagesBasePath}/Photo-1920.webp 1920w
        `}
      />

      <div>
        Это художественный эксперимент, где личная история семьи автора обретает универсальность. Спектакль напоминает причудливый сон, где реальность сплетается с метафорой, а драма соседствует с абсурдом. Пронзительные монологи сменяются гротескной клоунадой, а за внешним смехом таится боль. Внезапные сценические метаморфозы усиливают ощущение сна, в котором переплетаются прошлое, настоящее и будущее, а социальные роли обретают гиперболизированные, почти гротескные формы.
        <br />
        Этот жанровый вихрь становится выражением внутреннего хаоса героини.
      </div>

      <div>КАРТИНКА</div>

      <div>
        Завершая повествование, спектакль не предлагает простых ответов, а оставляет зрителя в пространстве глубокого размышления. Трагедия героини ставит перед нами зеркало, отражающее мучительные вопросы: возможно ли преодолеть экзистенциальную пустоту и способен ли кто-то извне её заполнить?
        <br />
        Есть ли шанс разорвать порочный круг травм, уходящих корнями в прошлое, или же они навсегда держат личность в своих тенетах?
      </div>

      <div className={styles.authorsContainer}>
        <Authors
          ProjectName="Синий крепдешин"
          Items={authors}
        />
        <div className={styles.authorsText}>
          ТЕКСТЫ : ПОЛИНА ХАМРАЕВА, ЕКАТЕРИНА ХАМРАЕВА, ТАТЬЯНА ДРОЗД, ИНГМАР БЕРГМАН, ЛЮДМИЛА ПЕТРУШЕВСКАЯ          
        </div>
      </div>

      <div className={styles.footer}>
        <div>
          Станьте нашим партнером. Мы ищем  тех, кто готов поддержать спектакль и дать ему новую жизнь на сцене.
        </div>
        <div>
          <div>
            узнать подробнее о проекте / смотреть фргамент спекталкля
          </div>
        </div>
      </div>
    </Container>
  )
}