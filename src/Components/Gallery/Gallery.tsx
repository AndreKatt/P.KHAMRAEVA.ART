import {useState, type FC} from "react"
import { Preview } from "./Preview/Preview";

import type {IGalleryProps, IImage} from "./types"

import styles from "./styles.module.scss"

export const Gallery: FC<IGalleryProps> = ({
  Images,
}) => {
  const [previewImage, setPreviewImage] = useState<IImage | null>(null);
  const currentImageIndex = Images.findIndex(({Key}) => previewImage?.Key === Key);
  const isLastImage = currentImageIndex === Images.length - 1;
  const isFirstImage = currentImageIndex === 0;

  const goToNextImage = () => {
    if (isLastImage) {
      return;
    }
    setPreviewImage(Images[currentImageIndex + 1]);
  }

  const goToPrevImage = () => {
    if (isFirstImage) {
      return;
    }
    setPreviewImage(Images[currentImageIndex - 1]);
  }

  return (
    <>
      <div
        className={styles.galleryContainer}
      >
        {Images.map((image) => (
          <div
            key={image.Key}
            className={styles.galleryImageWrapper}
            onClick={() => setPreviewImage(image)}
          >
            <img
              src={image.Src}
              srcSet={image.SrcSet}
              sizes="100vw"
              loading="lazy"
              className={styles.galleryImage}
            />
          </div>
        ))}
      </div>

      {previewImage && (
        <Preview
          Image={previewImage}
          OnClose={() => setPreviewImage(null)}
          ArrowLeft={{
            OnClick: goToPrevImage,
            IsDisabled: isFirstImage,
          }}
          ArrowRight={{
            OnClick: goToNextImage,
            IsDisabled: isLastImage,
          }}
        />
      )}
    </>
  )
}
