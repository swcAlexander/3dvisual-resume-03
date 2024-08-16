'use client';

import styles from './page.module.scss';

const ModalImage = ({ image, isModalOpen, closeModal }) => {
  if (!image) return null;

  return (
    <div
      className={`${styles.backdrop} ${
        isModalOpen ? styles.show : styles.is_hidden
      }`}
      onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.button_close}
          onClick={closeModal}>
          <svg className={styles.button_close__image} width="18" height="18">
            <use href="./images/icons.svg#icon-close-black"></use>
          </svg>
        </button>
        <div className={styles.modal__content}>
          <img
            src={image.src}
            loading="lazy"
            alt={image.description}
            width="670"
            className={styles.container_images__image}
            sizes="(min-width: 1600px) 15vw, (min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalImage;
