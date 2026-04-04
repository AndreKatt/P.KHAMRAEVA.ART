import {ProjectPreview} from '../../Components/ProjectPreview/ProjectPreview'
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
        Это камерная эпопея о природе зависти, По мотивам маленькой трагедии «Моцарт и Сальери», но вне исторического контекста — здесь и сейчас, внутри лабораторной клетки, где личность препарируют на глазах у зрителя. Сальери — черная вертикаль на белом
        холсте, муха, прибитая булавками: он не может сдвинуться, любое движение оставит след. Белый — не цвет, а состояние: пустота, страх первой линии, точка отсчета, чистая страница, которую мучительно страшно начать. Три среды — пустая комната, глянцевый
        мир фешн-съемки и сумрачные джунгли — переключают реальности, обнажая механизмы восприятия.
      </div>

      <VideoPreview {...videoPreviewProps}/>

      <div>
        Видеоарт:видео — искушение, картинка с лучших страниц запретного “vogue”. Мы видим то, что хотим увидеть: руки в земле намекают на отравление, но оставляют пространство для иллюзий. Попугай — прообраз Моцарта: свободный, прекрасный, в центре внимания.
        <br />
        Он и ангел, и демон, и животное. Когда зависть умирает, фантазия обнажает дно — утонувшиефрукты и жемчуга в отсылке к ванитас: тщетность удовольствий и быстротечность жизни
      </div>

      <ContainerFullWidth>
        <Image {...imageProps}/>
      </ContainerFullWidth>

      <div>
        Цвет как персонаж: Ядовито-зеленое платье Зависти — опухоль, разрушающая душу изнутри. Мерзкая сущность на пике успеха, облеченная в тренд. Цвет вошел в моду одновременно соспектаклем: Зависть всегда в тренде, всегда актуальна. В этом ее главная издёвка
        <br />
        <br />
        Пространство как лаборатория: белая циклорама — идеальный фон для фешн-съемки — здесь становится клеткой.
        <br />
        Усиленная перспектива сценографии заваливает зрителя внутрь характера, в лабораторию, где герой — подопытный. Пространство то сжимается, то расширяется, но не выпускает. Ворота открываются, но ведут лишь в другой отдел той же клетки.
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
