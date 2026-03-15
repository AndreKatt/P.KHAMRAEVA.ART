import {Image} from '../Image/Image.tsx'
import {useIsMobile} from '../../utils/useIsMobile.ts';
import Polina_900 from '../../assets/Images/Polina-900.webp';
import Polina_1440 from '../../assets/Images/Polina-1440.webp';
import Polina_1920 from '../../assets/Images/Polina-1920.webp';

import styles from "./styles.module.scss"

export const Info = () => {
  const isMobile = useIsMobile();

  const $text = isMobile ? (
    <></>
  ) : null;

  return (
    <div
      className={styles.infoWrapper}
    >
      <div
        className={styles.infoContainer}
      >
        <BackgroundImage />
        {$text}
      </div>
      <div
        className={styles.bottomGradient}
      />
    </div>
  )
}

const BackgroundImage = () => {
  return (
    <Image
      Src={Polina_1440}
      SrcSet={`
        ${Polina_900} 900w,
        ${Polina_1440} 1440w,
        ${Polina_1920} 1920w
      `}
      className={styles.backgroundImage}
    />
  )
}
