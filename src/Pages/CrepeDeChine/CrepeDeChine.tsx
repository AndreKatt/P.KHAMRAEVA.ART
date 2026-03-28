import {Authors} from "../../Components/Authors/Authors"
import {ProjectPreview} from "../../Components/ProjectPreview/ProjectPreview"
import {authors, imagesBasePath} from "./constants"
import {Image} from "../../Components/Image/Image"
import {ContainerFullWidth} from "../../Components/ContainerFullWidth/ContainerFullWidth"

import styles from './styles.module.scss'

export function Component() {
  return (
    <>
      <ContainerFullWidth>
        <Image
          Src={`${imagesBasePath}/Cover-1440.webp`}
          SrcSet={`
            ${imagesBasePath}/Cover-900.webp 900w,
            ${imagesBasePath}/Cover-1440.webp 1440w,
            ${imagesBasePath}/Cover-1920.webp 1920w
            `}
          className={styles.coverImage}
        />
      </ContainerFullWidth>

      <div>
        «Синий крепдешин» — экспериментальный спектакль трагифарс, исследующий феномен семейной травмы и экзистенциального поиска.
        <br />
        <br />
        Шесть новелл раскрывают парадокс: попытки вырваться из-под гнета родовых сценариев приводят к роковому повторению их паттернов. Центральный конфликт — борьба социальных масок с глубинным «Я» — воплощён в архетипах рода, которые примеряет на себя героиня.
      </div>

      <ProjectPreview
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
          ТЕКСТЫ : ПОЛИНА ХАМРАЕВА, ЕКАТЕРИНА ХАМРАЕВА, ТАТЬЯНА ДРОЗД, ИНГМАР БЕРГМАН, ЛЮДМИЛА&nbsp;ПЕТРУШЕВСКАЯ          
        </div>
      </div>
    </>
  )
}