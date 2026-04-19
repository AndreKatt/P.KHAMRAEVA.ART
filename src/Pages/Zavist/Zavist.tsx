import {ProjectPreview} from '../../Modules/ProjectPreview/ProjectPreview.tsx'
import {VideoPreview} from '../../Modules/VideoPreview/VideoPreview'
import {Image} from '../../Components/Image/Image'
import {ContainerFullWidth} from '../../Components/ContainerFullWidth/ContainerFullWidth'
import {Authors} from '../../Components/Authors/Authors'
import {Gallery} from '../../Components/Gallery/Gallery'
import {Footer} from '../../Components/Footer/Footer'
import {
  authors,
  footerIcons,
  galleryImages,
  imageProps,
  previewProps,
  videoPreviewProps
} from './constants.tsx'

export function Component() {
  return (
    <>
      <ProjectPreview {...previewProps}/>

      <div>
        Камерная эпопея о природе зависти, разыгранная в пространстве абсолютной белизны.
        <br />
        <br />
        По мотивам маленькой трагедии A.С.&nbsp;Пушкина «Моцарта и Сальери»&nbsp;— но вне истории.{' '}
        Внутри лабораторной клетки, где личность препарируют на&nbsp;глазах у&nbsp;зрителя.{' '}
        Сальери&nbsp;— черная вертикаль на&nbsp;белом холсте, муха, прибитая булавками: он не&nbsp;может сдвинуться,{' '}
        но&nbsp;любое движение оставит след. Белый&nbsp;— пустота, страх первой линии, точка отсчета, чистая страница нового&nbsp;произведения.{' '}
        Три среды&nbsp;— пустая комната, глянцевый мир фешн-съемки и&nbsp;сумрачные джунгли&nbsp;— отображают деформацию личности отравленой ядовитой&nbsp;«завистью».
      </div>

      <VideoPreview {...videoPreviewProps}/>

      <div>
        Видео арт к спектаклю&nbsp;— искушение, картинка с&nbsp;лучших страниц запретного Vogue.{' '}
        Мы видим то, что хотим увидеть: руки в&nbsp;земле намекают на&nbsp;убийство, но&nbsp;оставляют пространство для&nbsp;иллюзий.{' '}
        Попугай&nbsp;— прообраз Моцарта: свободный, прекрасный, в&nbsp;центре внимания. Он и&nbsp;ангел, и&nbsp;демон, и&nbsp;райская птица.{' '}
        Видеоряд создает интерактивный нарратив, построенный на&nbsp;намеках. История Сальери и&nbsp;Моцарта показана не&nbsp;буквально,{' '}
        а&nbsp;через образы-иллюзии (руки в&nbsp;земле, «Рог изобилия»), которые отражают искаженное восприятие героя.{' '}
        Зависть, подобно сладкому искушению, заставляет Сальери желать гений Моцарта.{' '}
        Но&nbsp;в&nbsp;финале весь этот «пир» оказывается на&nbsp;дне болота, обнажая свою&nbsp;мертвенность.
      </div>

      <ContainerFullWidth>
        <Image {...imageProps}/>
      </ContainerFullWidth>

      <div>
        Пространство как лаборатория&nbsp;— Белая циклорама, идеальный фон для&nbsp;фешн-съемки, здесь становится клеткой.{' '}
        Усиленная перспектива заваливает зрителя внутрь трагедии личности, в&nbsp;лабораторию, где герой&nbsp;— подопытный, мучимый завистью.
        <br />
        Пространство то&nbsp;сжимается, то&nbsp;расширяется, но&nbsp;не&nbsp;выпускает. Ворота ведут лишь в&nbsp;другой отдел той&nbsp;же&nbsp;клетки.{' '}
        <br />
        <br />
        Ядовито-зеленое платье Зависти&nbsp;— опухоль, разрушающая душу Сальери изнутри.{' '}
        Это цвет биологического разложения, маскирующийся под&nbsp;жизнь.
        <br />
        Платье «Зависти» вызывающе роскошно, но&nbsp;цвет делает эту роскошь тошнотворной.{' '}
        В&nbsp;процессе повествования опухоль в&nbsp;Душе Сальери разрастается&nbsp;— из&nbsp;никчемной микро-сущности в&nbsp;диву, идущую по&nbsp;головам.
      </div>

      <Gallery Images={galleryImages}/>

      <Authors
        Items={authors}
        ProjectName={previewProps.Title}
      />

      <Footer Icons={footerIcons}/>
    </>
  )
}
