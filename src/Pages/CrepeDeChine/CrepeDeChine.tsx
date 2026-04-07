import {useState} from "react"
import classNames from "classnames"
import {Image} from "../../Components/Image/Image"
import {ContainerFullWidth} from "../../Components/ContainerFullWidth/ContainerFullWidth"
import {HelpInfoItem} from "./HelpInfoItem/HelpInfoItem"
import {VideoPreview} from "../../Modules/VideoPreview/VideoPreview"
import {Gallery} from "../../Components/Gallery/Gallery"
import {Title} from "./Title/Title"
import {ProjectPreview} from "../../Components/ProjectPreview/ProjectPreview"
import {AuthorItem} from "./AuthorItem/AuthorItem"
import {ButtonLink} from "../Main/ButtonLink/ButtonLink"
import {useIsMobile} from "../../utils/useIsMobile"
import {
  authorBlockProps,
  authorItems,
  authorText,
  crepeImageProps,
  endImageProps,
  endText,
  galleryImages,
  guideBlockProps,
  guideText,
  helpInfoItems,
  imagesBasePath,
  mediaBlockProps,
  oneActressBlockProps,
  oneActressText,
  scenographyBlockProps,
  videoPreviewAuditoriumProps,
  videoPreviewProps,
} from "./constants"

import styles from './styles.module.scss'

export function Component() {
  const isMobile = useIsMobile();
  const [isOpenHelpBlock, setIsOpenHelpBlock] = useState(false)

  const $textInfoBlock = (
    <ContainerFullWidth className={styles.textInfoBlock}>
      <Title
        Text='ВАЖНОЕ СООБЩЕНИЕ'
        className={styles.textInfoTitle}
      />
      Спектакль “Синий крепдешин” — это&nbsp;независимый проект,{' '}
      создаваемый вне&nbsp;государственных институций.{' '}
      Первый показ в&nbsp;Калуге собрал полный зал 400&nbsp;человек и&nbsp;доказал,{' '}
      что эта&nbsp;история нужна зрителям. Сейчас мы готовим новую редакцию спектакля:{' '}
      обновляем костюмы и&nbsp;декорации и&nbsp;ищем тех,{' '}
      кто поможет запустить спектакль в&nbsp;прокат на&nbsp;большой сцене в&nbsp;Москве и&nbsp;Санкт-Петербурге.
      <ContainerFullWidth className={styles.helpInfoContainer}>
        <ButtonLink
          Title="МЫ ИЩЕМ ПОДДЕРЖКУ"
          IconClassName={classNames(styles.helpInfoButtonIcon, {
            [styles.open]: isOpenHelpBlock
          })}
          OnClick={() => setIsOpenHelpBlock(!isOpenHelpBlock)}
        />
      </ContainerFullWidth>
      <ContainerFullWidth
        className={classNames(styles.helpInfoBlockFooter, {
          [styles.hidden]: !isOpenHelpBlock
        })}
      >
        <div className={styles.helpInfoBlock}>
          {helpInfoItems.map(item => (
            <HelpInfoItem
              key={item.Title}
              {...item}
            />
          ))}
        </div>
        <div className={styles.helpInfoFooter}>
          <div className={styles.helpInfoBlockFooterButton}>
            <div className={styles.helpInfoBlockFooterButtonText}>
              ПОДДЕРЖАТЬ ПРОЕКТ
            </div>
          </div>
          <div className={styles.helpInfoBlockFooterContacts}>
            Задать вопрос и&nbsp;обсудить условия:
            <div className={styles.helpInfoBlockFooterContactsItems}>
              <div className={styles.helpInfoBlockFooterContactsItem}>
                +79500148784
              </div>
              /
              <div className={styles.helpInfoBlockFooterContactsItem}>
                hamhamkham@icloud.com
              </div>
            </div>
          </div>
        </div>
      </ContainerFullWidth>
    </ContainerFullWidth>
  )

  const $oneActressBlock = isMobile ? (
    <>
      <Title Text={oneActressBlockProps.Title}/>
      <Image
        Src={oneActressBlockProps.ImageSrc}
        SrcSet={oneActressBlockProps.ImageSrcSet}
        className={styles.blockImage}
      />
      {oneActressText}
    </>
  ) : (
    <div className={styles.blockWrapper}>
      <ProjectPreview
        {...oneActressBlockProps}
        ClassNameImage={styles.oneActressBlockImage}
      />
      <div className={styles.blockActorName}>
        Светлана Никифорова
      </div>
    </div>
  )
  const $scenographyBlock = isMobile ? (
    <>
      <Title Text={scenographyBlockProps.Title}/>
      {scenographyBlockProps.Description}
      <ContainerFullWidth>
        <Image
          Src={scenographyBlockProps.ImageSrc}
          SrcSet={scenographyBlockProps.ImageSrcSet}
        />
      </ContainerFullWidth>
    </>
  ) : (
    <ProjectPreview {...scenographyBlockProps}/>
  )
  const $guideBlock = isMobile ? (
    <>
      <Title Text={guideBlockProps.Title}/>
      {guideText}
      <Image
        Src={guideBlockProps.ImageSrc}
        SrcSet={guideBlockProps.ImageSrcSet}
        className={styles.blockImage}
      />
    </>
  ) : (
    <div className={styles.blockWrapper}>
      <ProjectPreview
        {...guideBlockProps}
        ClassNameImage={styles.guideBlockImage}
      />
      <div className={styles.blockActorName}>
        Александр Казанцев
      </div>
    </div>
  )
  const $mediaBlock = isMobile ? (
    <>
      <Title Text={mediaBlockProps.Title}/>
      {mediaBlockProps.Description}
      <ContainerFullWidth>
        <Image
          Src={mediaBlockProps.ImageSrc}
          SrcSet={mediaBlockProps.ImageSrcSet}
        />
      </ContainerFullWidth>
    </>
  ) : (
    <ProjectPreview {...mediaBlockProps}/>
  )
  const $authorBlock = isMobile ? (
    <>
      <Image
        Src={authorBlockProps.ImageSrc}
        SrcSet={authorBlockProps.ImageSrcSet}
        className={styles.blockImage}
      />
      <Title Text={authorBlockProps.Title}/>
      {authorText}
    </>
  ) : (
    <div className={styles.blockWrapper}>
      <ProjectPreview
        {...authorBlockProps}
        ClassNameImage={styles.authorBlockImage}
      />
       <div className={styles.blockActorName}>
        Полина Хамраева
        <br />
        Автор спектакля, Режиссёр-постановщик
      </div>
    </div>
  )

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
        «Синий Крепдешин» — экспериментальный спектакль-трагифарс, созданный режиссёром-художником Полиной Хамраевой.
        <br />
        <br />
        Это спектакль - исследование феномена семейных травм и экзистенциального поиска. Через шесть новелл раскрывается парадокс: попытки вырваться из-под гнета родовых сценариев приводят к роковому повторению их паттернов. Травмы и одиночество передаются по наследству: от матери к дочери, от дочери к её детям.
        <br />
        <br />
        Осмысляя семейную историю не как факт частной жизни, но как социально значимое высказывание, автор интегрирует личную травму в широкий контекст культурного кода. Документальная основа здесь — материал для художественного эксперимента, где реальность переплетается с метафорой.
        <div className={styles.transparentText}>
          <br />
          <br />
          Длительность : 1 час 30 минут
          <br />
          <br />
          Тексты : Полина Хамраева, Екатерина Хамраева, Татьяна Дрозд, Ингмар Бергман, Людмила Петрушевская
        </div>
      </div>

      <VideoPreview {...videoPreviewProps}/>
      <div>
        Спектакль визуализирует сложную материю подсознания —{' '}
        где в шкафу плащи с брюками танцуют канкан.{' '}
        Мужской костюм протянув рукав, застенчиво приглашает на танец.{' '}
        Руки способны схватить за хвост самолет в котором улетел любимый,{' '}
        а телефонный звонок телепортирует в черную ночь, где ты ребенком остался один.{' '}
        Женщина рожает прямо на сцене. Крыса, живущая в шкафу примеряет шляпу и становится чемпионом в американском боксе,{' '}
        а бабушка в деменции становится все больше похожа на Алису в Стране чудес.
        <br />
        <br />
        Это не сон - это способ вспоминать. Попытка упорядочить хаос травмы.{' '}
        Облечь невыносимо ужасное чувство в метафору — значит лишить его части власти над собой.
      </div>

      {$oneActressBlock}
      {$scenographyBlock}
      {$guideBlock}
      {$mediaBlock}

      <Title Text="ТВОРЧЕСКИЙ МЕТОД"/>
      <div>
        Спектакль исследует восприятие реальности через призму детского сознания,{' '}
        где даже самые страшные психологические травмы обретают форму игры —{' '}
        как если бы ребенок нарисовал свой страх яркими красками, пытаясь сделать его менее пугающим.
      </div>

      <Gallery Images={galleryImages}/>

      <div>
        Спектакль напоминает причудливый сон, в котором драма соседствует с абсурдом.{' '}
        Пронзительные монологи сменяются гротескной клоунадой. а за внешним смехом таится внутренняя боль.
      </div>
      
      <ContainerFullWidth>
        <Image {...crepeImageProps}/>
      </ContainerFullWidth>

      <div>
        Эта попытка заглянуть в бездну внутреннего одиночества с вопросом о том,{' '}
        возможно ли преодолеть эту экзистенциальную пустоту,{' '}
        и способен ли кто-то извне ее заполнить и есть ли шанс разорвать порочный круг травм,{' '}
        уходящих корнями в прошлое, или же они навсегда держат в своих прочных тенетах, предопределяя будущее?
      </div>

      <VideoPreview
        {...videoPreviewAuditoriumProps}
        ClassNameImage={styles.videoPreviewAuditoriumImage}
      />

      <div className={styles.textBlockBoder}>
        <Title
          Text="АКТУАЛЬНОСТЬ"
          className={styles.textBlockBorderTitle}
        />
        Наш зритель — это люди 14–60 лет. Дети и родители.{' '}
        Те, кто пытается осознать свои страхи и боли. Этот спектакль поможет родственникам понять друг друга.{' '}
        Увидеть на сцене свою историю и перестать чувствовать себя одинокими.
        <br />
        Прожить то, что не прожито, и услышать честный разговор о том, о чем в семьях молчат поколениями.
        <br />
        <br />
        Тема сепарации, семейных травм и повторения родительских сценариев — вечная тема и главный общественный запрос последних лет.
        <br />
        Тысячи людей в России и мире приходят в терапию, пытаясь разорвать круг,{' '}
        в котором оказались не по своей воле. Автофикшен стал самым востребованным жанром.{' '}
        В момент, когда зрителю нужны поддержка и соучастие, мы предлагаем честные высказывания, созвучные личному опыту каждого.
        <br />
        <br />
        «Синий крепдешин» говорит о боли без жалости к себе, о травме — с юмором, о поиске себя — с надеждой.
      </div>

      {$textInfoBlock}

      {$authorBlock}

      <ContainerFullWidth className={styles.authorsBlock}>
        <Title
          Text="КОМАНДА"
          className={styles.authorsTitle}
        />
        <div className={styles.authorsContainer}>
          {authorItems.map(author => (
            <AuthorItem
              key={author.Name}
              {...author}
            />
          ))}
        </div>
      </ContainerFullWidth>

      <ContainerFullWidth className={styles.endContainer}>
        <Image
          {...endImageProps}
          className={styles.endImage}
        />
        {endText}
      </ContainerFullWidth>
    </>
  )
}