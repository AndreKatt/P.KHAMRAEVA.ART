import Polina_900 from '../../assets/Images/Polina-900.webp';
import Polina_1440 from '../../assets/Images/Polina-1440.webp';
import Polina_1920 from '../../assets/Images/Polina-1920.webp';

import styles from "./styles.module.scss"
import { useWindowWidth } from '../../utils/useWindowWidth';

export const Info = () => {
  const windowSize = useWindowWidth();

  const $text = windowSize !== 'small' ? (
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
    <img
      src={Polina_1440}
      srcSet={`
        ${Polina_900} 900w,
        ${Polina_1440} 1440w,
        ${Polina_1920} 1920w
      `}
      sizes="100vw"
      loading="eager"
      className={styles.backgroundImage}
    />
  )
}
