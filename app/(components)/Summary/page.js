'use client';

import { useState } from 'react';
import styles from './page.module.scss';

const ModalSummary = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.inline_block}>
        <button
          type="button"
          className={styles.about__button}
          onClick={openModal}>
          Про себе →
        </button>
      </div>
      <div
        className={`backdrop ${isModalOpen ? 'show' : 'is-hidden'}`}
        onClick={closeModal}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <button type="button" className="button-close" onClick={closeModal}>
            <svg className="button-close__image" width="18" height="18">
              <use href="./images/icons.svg#icon-close-black"></use>
            </svg>
          </button>
          <form className="modal__form">
            <span className={styles.form_text}>
              Дизайнер інтер'єрів - початківець, у минулому - учитель музики та
              етики, переможиця в конкурсі "Вчитель року".
              <p className={styles.form_text}>
                Після успішної кар'єри в освіті, перейшла на шлях дизайну
                інтер'єрів, опанувавши 3ds Max та інші професійні програми.
                Посидюча, маю шалену пристрасть до творчої роботи, не боюсь
                викликів та труднощів, завжди прагну удосконалюватись.
              </p>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalSummary;
