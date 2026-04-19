import {Title} from "./Title/Title"

import type {IGalleryProps} from "../../Components/Gallery/types"
import type {IImageProps} from "../../Components/Image/types"
import type {IProjectPreviewProps} from "../../Modules/ProjectPreview/types"
import type {IVideoPreviewProps} from "../../Modules/VideoPreview/types"
import type {IAuthorItemProps} from "./AuthorItem/types"
import type {IHelpInfoItemProps} from "./HelpInfoItem/types"
import type { IProjectTitleProps } from "../../Components/ProjectTitle/types"

import styles from './styles.module.scss'

export const imagesBasePath = "/Images/CrepeDeChine"

export const helpInfoItems: ReadonlyArray<IHelpInfoItemProps> = [
  {
    Title: 'ФИНАНСЫ',
    Description: (
      <>
        Для реализация проекта необходимо финансирвоание. Средства пойдутна создание костюмов, декораций, аренду оборудования и организацию спектакля (смета по запросу)
        <br />
        Вы можете стать нашим спонсором.
        <br />
        И поддержать любой суммой.
      </>
    ),
  },
  {
    Title: 'ИНФО',
    Description: (
      <>
        Станьте информационным партнёром.
        <br />
        Расскажите о нас своей аудитории: в СМИ, интернет-изданиях,
        тематических каналах, блогах, и в соцсетях, – там где могут найтись наши зрители.
      </>
    ),
  },
  {
    Title: 'ПАРТНЁРОВ',
    Description: (
      <>
        Мы заинтересованы в сотрудничестве: с театральными площадками, 
        студиями, брендами, студиями, мастерскими и специалистами. 
        Для реализации спектакля нам необходимы: площадка, репетиционные залы, костюмы, ткани.   
      </>
    ),
  },
]

const galleryImagesBasePath = `${imagesBasePath}/Gallery`
const galleryImagesName = [
  "Gallery1",
  "Gallery2",
  "Gallery3",
  "Gallery4",
  "Gallery5",
  "Gallery6",
  "Gallery7",
]
export const galleryImages: IGalleryProps["Images"] = galleryImagesName.map(name => (
  {
    Key: name,
    Src: `${galleryImagesBasePath}/${name}-1440.webp`,
    SrcSet: `
      ${galleryImagesBasePath}/${name}-900.webp 900w,
      ${galleryImagesBasePath}/${name}-1440.webp 1440w,
      ${galleryImagesBasePath}/${name}-1920.webp 1920w
    `,
  }
))

export const videoPreviewProps: IVideoPreviewProps = {
  ImageSrc: `${imagesBasePath}/VideoPreview-1440.webp`,
  ImageSrcSet: `
    ${imagesBasePath}/VideoPreview-900.webp 900w,
    ${imagesBasePath}/VideoPreview-1440.webp 1440w,
    ${imagesBasePath}/VideoPreview-1920.webp 1920w
  `,
  VideoId: 'uUwnQThsvarcprHomNff5H',
}

export const oneActressText = (
  <>
    Героиня примеряет на себя маски,
    перевоплощаясь в женщин одной семьи.
    Играя архетипы Дочери, Любовницы,
    Жены-матери и Старухи, она ищет себя.
    <br />
    <br />
    Но каждая маска — это дверь в травму.
    Вот она — дочь застрявшая в кругу вины
    перед пожилой беспомощной матерью.
    <br />
    <br />
    В следующее мгновение она — маленькая
    беззащитная девочка. Оставленная в темном
    необъятном космосе в бесконечно гнетущем
    чувстве ожидания. Это же чувство одиночества
    отражено в маске матери — женщины
    брошенной любимым мужем.
    Прекрасной, безупречной,
    но никому не нужной.
    <br />
    <br />
    Игра актрисы становится мостом между
    поколениями обнажая болезненную взаимосвязь.
    Но в конце все маски должны быть сняты и возникает
    вопрос: что скрывается за ними? Где проходит граница
    между «чужим» и «истинным» я?
  </>
)
export const oneActressBlockProps: IProjectPreviewProps = {
  ImageSrc: `${imagesBasePath}/Hands-1440.webp`,
  ImageSrcSet: `
    ${imagesBasePath}/Hands-900.webp 900w,
    ${imagesBasePath}/Hands-1440.webp 1440w,
    ${imagesBasePath}/Hands-1920.webp 1920w
  `,
  Title: (
    <Title
      Text={(
        <>
          ОДНА АКТРИСА —
          <br />
          ШЕСТЬ СУДЕБ
        </>
      )}
      className={styles.oneActressBlockTitle}
    />
  ),
  Description: (
    <div className={styles.oneActressBlockDescription}>
      Героиня примеряет на себя маски,
      <br />
      перевоплощаясь в женщин одной семьи.
      <br />
      Играя архетипы Дочери, Любовницы,
      <br />
      Жены-матери и Старухи, она ищет себя.
      <br />
      <br />
      Но каждая маска — это дверь в травму.
      <br />
      Вот она — дочь застрявшая в кругу вины
      <br />
      перед пожилой беспомощной матерью.
      <br />
      <br />
      В следующее мгновение она — маленькая
      <br />
      беззащитная девочка. Оставленная в темном
      <br />
      необъятном космосе в бесконечно гнетущем
      <br />
      чувстве ожидания. Это же чувство одиночества
      <br />
      отражено в маске матери — женщины
      <br />
      брошенной любимым мужем.
      <br />
      Прекрасной, безупречной,
      <br />
      но никому не нужной.
      <br />
      <br />
      Игра актрисы становится мостом между
      <br />
      поколениями обнажая болезненную взаимосвязь.
      <br />
      Но в конце все маски должны быть сняты и возникает
      <br />
      вопрос: что скрывается за ними? Где проходит граница
      <br />
      между «чужим» и «истинным» я?
    </div>
  ),
}

export const scenographyBlockProps: IProjectPreviewProps = {
  WhithGradient: true,
  ImageSrc: `${imagesBasePath}/Wardrobe-1440.webp`,
  ImageSrcSet: `
    ${imagesBasePath}/Wardrobe-900.webp 900w,
    ${imagesBasePath}/Wardrobe-1440.webp 1440w,
    ${imagesBasePath}/Wardrobe-1920.webp 1920w
  `,
  Title: (
    <Title
      Text='СЦЕНОГРАФИЯ'
      className={styles.scenographyBlockTitle}
    />
  ),
  Description: (
    <div className={styles.scenographyBlockDescription}>
      Сценография интегрированная в нарратив и в процессе повествования трансформируется в многогранные метафоры:
      <br />
      от ностальгического шкафа, хранящего «призраков» прошлого, до театрального гардероба. 2 ряда перемещающихся
      <br />
      в пространстве сцены - серой висящей одежды. Каждый костюм становится метафорой одиночества среди толпы,
      <br />
      а пустые силуэты — символом общества утраченной идентичности,
      <br />
      обреченного на внутреннюю опустошенность и отчуждение.
    </div>
  ),
}

export const guideText = (
  <>
    Он же шут, смерть, ангел.
    <br />
    <br />
    Голос правды и зеркало неудобных истин в мире,
    где принято молчать. Он заглядывает в глаза
    героини и зрителю, подсвечивая то что
    прячется в темных углах души.
    <br />
    <br />
    Разрушая четвертую стену, он впускает зрителя —
    в пространство где обитают страхи.
    Его главный инструмент — Свет.
    <br />
    <br />
    Этот свет — «светлячок» в черном пространстве
    детской травмы, символ надежды в одиноком
    космосе. Он — проводник на границе миров.
    <br />
    <br />
    Задача Проводника — не уничтожить тьму,
    а передать в руки инструмент, чтобы
    однажды героиня и зрители смогли сами
    осветить свой путь преодоления травмы
    <br />
    <br />
    Прошлое упрямо ходит по пятам, но когда в твоих
    руках свет, ты знаешь,что это всего лишь тени.
  </>
)
export const guideBlockProps: IProjectPreviewProps = {
  ImageSrc: `${imagesBasePath}/Guide-1440.webp`,
  ImageSrcSet: `
    ${imagesBasePath}/Guide-900.webp 900w,
    ${imagesBasePath}/Guide-1440.webp 1440w,
    ${imagesBasePath}/Guide-1920.webp 1920w
  `,
  Title: (
    <Title
      Text="ПРОВОДНИК"
      className={styles.guideBlockTitle}
    />
  ),
  Description: (
    <div className={styles.guideBlockDescription}>
      Он же шут, смерть, ангел.
      <br />
      <br />
      Голос правды и зеркало неудобных истин в мире,
      <br />
      где принято молчать. Он заглядывает в глаза
      <br />
      героини и зрителю, подсвечивая то что
      <br />
      прячется в темных углах души.
      <br />
      <br />
      Разрушая четвертую стену, он впускает зрителя —
      <br />
      в пространство где обитают страхи.
      <br />
      Его главный инструмент — Свет.
      <br />
      <br />
      Этот свет — «светлячок» в черном пространстве
      <br />
      детской травмы, символ надежды в одиноком
      <br />
      космосе. Он — проводник на границе миров.
      <br />
      <br />
      Задача Проводника — не уничтожить тьму,
      <br />
      а передать в руки инструмент, чтобы
      <br />
      однажды героиня и зрители смогли сами
      <br />
      осветить свой путь преодоления травмы
      <br />
      <br />
      Прошлое упрямо ходит по пятам, но когда в твоих
      <br />
      руках свет, ты знаешь,что это всего лишь тени.
    </div>
  ),
}

export const authorText = (
  <>
    «Синий Крепдешин»: Это исцеление травм через искусство
    <br />
    <br />
    Это произведение родилось из моих личных страхов и поисков.
    Мои сестры и мама поделились со мной своим опытом,
    и так появилась постановка о детстве, настоящем и будущем —
    искренняя, страшная, смешная и, надеюсь, исцеляющая.
    <br />
    <br />
    Оказалось, что ставить личный текст в разы сложнее,
    чем работать с укоренившейся в нас классикой.
    Невозможно дистанцироваться — только пропускать через себя то,
    на что не хочется смотреть и что больно вспоминать.     
    Остается одно - играть, плакать, смеяться
    и выходить из зала другим человеком!
    <br />
    <br />
    В трудное время воспоминания и страхи из детства
    возвращаются к нам. Но, может, они наш проводник,
    который научит нас чему-то, расскажет о нас.
    <br />
    <br />
    Я верю, что этот спектакль станет тем безопасным мостом
    на пути к преодолению детских травм и поможет каждому,
    кому когда-то было страшно и одиноко.
    <br />
    <br />
    Приглашаю зрителя в этот сюрреалистичный, страшный и
    смешной мир — чтобы в этой причудливой путанице
    образов каждый мог найти себя. Своего потерянного
    ребенка. Свою уходящую Бабушку. или Мать.
    Свою крысу в шляпе. Свою надежду.
  </>
)
export const authorBlockProps: IProjectPreviewProps = {
  ImageSrc: `${imagesBasePath}/Author-1440.webp`,
  ImageSrcSet: `
    ${imagesBasePath}/Author-900.webp 900w,
    ${imagesBasePath}/Author-1440.webp 1440w,
    ${imagesBasePath}/Author-1920.webp 1920w
  `,
  Title: (
    <Title
      Text="ОТ АВТОРА"
      className={styles.authorBlockTitle}
    />
  ),
  Description: (
    <div className={styles.authorBlockDescription}>
      «Синий Крепдешин»: Это исцеление травм через искусство
      <br />
      <br />
      Это произведение родилось из моих личных страхов и поисков.
      <br />
      Мои сестры и мама поделились со мной своим опытом,
      <br />
      и так появилась постановка о детстве, настоящем и будущем —
      <br />
      искренняя, страшная, смешная и, надеюсь, исцеляющая.
      <br />
      <br />
      Оказалось, что ставить личный текст в разы сложнее,
      <br />
      чем работать с укоренившейся в нас классикой.
      <br />
      Невозможно дистанцироваться — только пропускать через себя то,
      <br />
      на что не хочется смотреть и что больно вспоминать.      
      <br />
      Остается одно - играть, плакать, смеяться
      <br />
      и выходить из зала другим человеком!
      <br />
      <br />
      В трудное время воспоминания и страхи из детства
      <br />
      возвращаются к нам. Но, может, они наш проводник,
      <br />
      который научит нас чему-то, расскажет о нас.
      <br />
      <br />
      Я верю, что этот спектакль станет тем безопасным мостом
      <br />
      на пути к преодолению детских травм и поможет каждому,
      <br />
      кому когда-то было страшно и одиноко.
      <br />
      <br />
      Приглашаю зрителя в этот сюрреалистичный, страшный и
      <br />
      смешной мир — чтобы в этой причудливой путанице
      <br />
      образов каждый мог найти себя. Своего потерянного
      <br />
      ребенка. Свою уходящую Бабушку. или Мать.
      <br />
      Свою крысу в шляпе. Свою надежду.
    </div>
  ),
}

export const mediaBlockProps: IProjectPreviewProps = {
  ImageSrc: `${imagesBasePath}/Media-1440.webp`,
  ImageSrcSet: `
    ${imagesBasePath}/Media-900.webp 900w,
    ${imagesBasePath}/Media-1440.webp 1440w,
    ${imagesBasePath}/Media-1920.webp 1920w
  `,
  Title: (
    <Title
      Text='МЕДИА'
      className={styles.mediaBlockTitle}
    />
  ),
  Description: (
    <div className={styles.mediaBlockDescription}>
      Видеопроекция дополняет декорации и создает
      <br />
      более объемное изображение, глубоко
      <br />
      погружая зрителя в подсознание героини.
      <br />
      <br />
      Звуковая партитура, созданная специально
      <br />
      для спектакля, усиливает эффект погружения
      <br />
      и подчеркивает эмоциональное состояние.
      <br />
      <br />
      Вместе они образуют связь между реальностью
      <br />
      и сном, формируя многомерное пространство
      <br />
      памяти, раскрывая хрупкость психики,
      <br />
      запертой в лабиринте травм.
    </div>
  ),
}

export const stormBlockImageMobile: IImageProps = {
  Src: `${imagesBasePath}/StormMobile-900.webp`,
}
export const stormBlockImageDesk: IImageProps = {
  Src: `${imagesBasePath}/StormDesk-1440.webp`,
  SrcSet: `
    ${imagesBasePath}/StormDesk-1440.webp 1024w,
    ${imagesBasePath}/StormDesk-1920.webp 1920w
  `,
}
export const stormBlockTitle: IProjectTitleProps =  {
  Title: <Title Text='ЖАНРОВЫЙ ВИХРЬ'/>,
  Description: (
    <div className={styles.stormBlockDescription}>
      Спектакль балансирует на грани
      <br />
      реального и абсурдного, где сценическое
      <br />
      пространство подчиняется не логике,
      <br />
      а законам подсознания. Прошлое, настоящее
      <br />
      и будущее сплетаются в фантасмагорию,
      <br />
      а социальные роли обретают гротескные формы
      <br />
      <br />
      Смешение клоунады, драмы и фарса
      <br />
      становится метафорой внутреннего хаоса
      <br />
      героини: сцены внезапно сменяют друг
      <br />
      друга, то подчиняясь ожиданиям зрителей,
      <br />
      то вступая с ними в противоречие.
    </div>
  ),
}
export const stormBlockDescriptionMobile = (
  <>
    Спектакль балансирует на&nbsp;грани реального и&nbsp;абсурдного,{' '}
    где&nbsp;сценическое пространство подчиняется не&nbsp;логике,{' '}
    а&nbsp;законам подсознания. Прошлое, настоящее и&nbsp;будущее сплетаются{' '}
    в&nbsp;фантасмагорию, а&nbsp;социальные роли обретают гротескные формы.
    <br />
    <br />
    Смешение клоунады, драмы и&nbsp;фарса становится метафорой внутреннего&nbsp;хаоса героини:{' '}
    сцены внезапно сменяют друг&nbsp;друга, то&nbsp;подчиняясь ожиданиям зрителей, то&nbsp;вступая с&nbsp;ними в&nbsp;противоречие.
  </>
)
export const stormBlockDescriptionSecond = (
  <>
    «В шкаф заползает крыса»,
    <br />
    этот сюрреалистический образ становится
    <br />
    воплощением наступающей депрессии.
    <br />
    Крыса здесь - не просто грызун,
    <br />
    а паразит сознания, пожирающий
    <br />
    покой изнутри.
    <br />
    <br />
    Её появление в пыльном шкафу воспоминаний
    <br />
    символизирует внутренний распад:
    <br />
    депрессия больше не временный гость.
    <br />
    Крыса разрослась до столь чудовищных
    <br />
    размеров, что ее больше не спрятать в шкафу,
    <br />
    с этим придется либо смириться,
    <br />
    либо начать борьбу.
  </>
)

export const crepeImageProps: IImageProps = {
  Src: `${imagesBasePath}/CrepeDeChine-1440.webp`,
  SrcSet: `
    ${imagesBasePath}/CrepeDeChine-900.webp 900w,
    ${imagesBasePath}/CrepeDeChine-1440.webp 1440w,
    ${imagesBasePath}/CrepeDeChine-1920.webp 1920w
  `,
}

export const videoPreviewAuditoriumProps: IVideoPreviewProps = {
  WhithGradient: false,
  ImageSrc: `${imagesBasePath}/VideoPreviewAuditorium-1440.webp`,
  ImageSrcSet: `
    ${imagesBasePath}/VideoPreviewAuditorium-900.webp 900w,
    ${imagesBasePath}/VideoPreviewAuditorium-1440.webp 1440w,
    ${imagesBasePath}/VideoPreviewAuditorium-1920.webp 1920w
  `,
  VideoId: 'kmXWYFmPCLcWiSfGDp8Gkv',
}

export const endImageProps: IImageProps = {
  Src: `${imagesBasePath}/End-1440.webp`,
  SrcSet: `
    ${imagesBasePath}/End-900.webp 900w,
    ${imagesBasePath}/End-1440.webp 1440w,
    ${imagesBasePath}/End-1920.webp 1920w
  `,
}

export const endText = (
  <div className={styles.endText}>
    «- Вы постоянно начеку, обдумываете каждый жест.
    <br />
    Но между тем, кто вы в глазах других и кто вы насамом деле, —
      <br />
    целая пропасть. У вас кружится голова,
    <br />
    и вы мечтаете о разоблачении.… Вы играете жену,
    <br />
    друга, мать, возлюбленную, но какая роль хуже?
    <br />
    Какая вам доставляет больше мучений?
    <br />
    Может, роль актрисы, где следует изображать
    <br />
    заинтересованность? Ведь нужно железной рукой
    <br />
    собрать воедино все детали, создать из них единое целое.
    <br />
    <br />
    Когда же возникла трещина?
    <br />
    Когда вы потерпели неудачу?
    <br />
    Может, роль матери оказалась
    <br />
    вам не под силу?..
    <br />
    <br />
    Но “игра ” кончилась, и вам негде было укрыться,
    <br />
    нечем взбодрить себя. Все оправдания отпали.
    <br />
    И вы остались наедине с жаждой
    <br />
    правды и отвращением к себе.
    <br />
    <br />
    ...действительность сыграла с вами злую шутку.
    <br />
    Ваше прибежище не слишком-то надежно.
    <br />
    Жизнь все равно вас настигает. И заставляет реагировать.
    <br />
    Неважно — искренне или нет, правдиво или фальшиво.
    <br />
    Этому придают значение только в театре.
    <br />
    <br />
    Я понимаю и восхищаюсь вами.
    <br />
    И думаю, вы должны играть
    <br />
    свою роль до конца,
    <br />
    пока она вам не опротивеет.
    <br />
    Тогда вы расстанетесь с нею,
    <br />
    как расстались со всеми
    <br />
    прежними ролям»
    <br />
    <br />
    <br />
    <br />
    <br />
    Ингмар Бергман
  </div>
)

const authorsImagesBasePath = `${imagesBasePath}/Authors`
export const authorItems: ReadonlyArray<IAuthorItemProps> = [
  {
    Name: 'Дмитрий Сильницкий',
    Profession: 'Оператор / Медиа-художник',
    Description: (
      <>
        Профессиональный Оператор постановщик
        <br />
        коротких и полных метров (СПбГИКиТ).
        <br />
        Участник крупных кино-фестивалей РФ.
        <br />
        3D художник мультимедиа проектов.
      </>
    ),
    Src: `${authorsImagesBasePath}/DimaSil-1440.webp`,
    SrcSet: `
      ${authorsImagesBasePath}/DimaSil-900.webp 900w,
      ${authorsImagesBasePath}/DimaSil-1440.webp 1440w,
      ${authorsImagesBasePath}/DimaSil-1920.webp 1920w
    `,
  },
  {
    Name: 'Екатерина Андреева',
    Profession: 'Художник-постановщик / IT-артист',
    Description: (
      <>
        Работает с визуальной драматургией —
        <br />
        от сценического пространства
        <br />
        до цифровых интерфейсов.
      </>
    ),
    Src: `${authorsImagesBasePath}/Katya-1440.webp`,
    SrcSet: `
      ${authorsImagesBasePath}/Katya-900.webp 900w,
      ${authorsImagesBasePath}/Katya-1440.webp 1440w,
      ${authorsImagesBasePath}/Katya-1920.webp 1920w
    `,
  },
  {
    Name: 'Станислав Новиков',
    Profession: 'Художник по свету',
    Description: (
      <>
        Художник по свету в театре скороход и
        <br />
        новой Александринке, а так же на крупных
        <br />
        музыкальных и медиа фестивалях,
        <br />
        выставках, концертах.
      </>
    ),
    Src: `${authorsImagesBasePath}/Slava-1440.webp`,
    SrcSet: `
      ${authorsImagesBasePath}/Slava-900.webp 900w,
      ${authorsImagesBasePath}/Slava-1440.webp 1440w,
      ${authorsImagesBasePath}/Slava-1920.webp 1920w
    `,
  },
  {
    Name: 'Ильяс Индралиев',
    Profession: 'Музыкальный продюсер / композитор',
    Description: (
      <>
        Работает в области аудиовизуальных
        <br />
        проектов авторской музыки
        <br />
        и саунд-дизайна.
      </>
    ),
    Src: `${authorsImagesBasePath}/Ilyas-1440.webp`,
    SrcSet: `
      ${authorsImagesBasePath}/Ilyas-900.webp 900w,
      ${authorsImagesBasePath}/Ilyas-1440.webp 1440w,
      ${authorsImagesBasePath}/Ilyas-1920.webp 1920w
    `,
  },
  {
    Name: 'Дмитрий Рябини',
    Profession: 'Дизайнер-маркетолог',
    Description: (
      <>
        Продуктовый дизайнер в рекламе
        <br />
        DODO Brands. Арт-директор в агентстве
        <br />
        маркетинговых коммуникаций Journey.
      </>
    ),
    Src: `${authorsImagesBasePath}/DimaRyab-1440.webp`,
    SrcSet: `
      ${authorsImagesBasePath}/DimaRyab-900.webp 900w,
      ${authorsImagesBasePath}/DimaRyab-1440.webp 1440w,
      ${authorsImagesBasePath}/DimaRyab-1920.webp 1920w
    `,
  },
]