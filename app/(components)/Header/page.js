"use client";

import { usePathname } from 'next/navigation';
import { useState } from 'react'; 
import styles from './page.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <header className={styles.site_header}>
      <div className={`${styles.container} ${styles.flex}`}>
        <nav className={`${styles.flex} ${styles.nav}`}>
          <a href="/" className={`${styles.logo} ${styles.centred} ${styles.flex}`}>
            <span className={styles.logo__first}>Visual</span>
            <span className={styles.logo__second}>Master</span>
          </a>
          <ul className={`${styles.nav_list} ${styles.list} ${styles.flex}`}>
            <li className={styles.nav_item}>
              <a
                href="/"
                className={`${styles.nav__link} ${styles.list} ${isActive('/') ? styles.current : ''}`}
              >
                Моє резюме
              </a>
            </li>
            <li className={styles.nav_item}>
              <a
                href="/portfolio"
                className={`${styles.nav__link} ${styles.list} ${isActive('/portfolio') ? styles.current : ''}`}
              >
                Портфоліо
              </a>
            </li>
            <li className={styles.nav_item}>
              <a
                href="/sertificate"
                className={`${styles.nav__link} ${styles.list} ${isActive('/sertificate') ? styles.current : ''}`}
              >
                Сертифікат
              </a>
            </li>
          </ul>
        </nav>
        <ul className={`${styles.contacts} ${styles.list}`}>
          <li className={styles.contacts_item}>
            <a href="mailto:info@devstudio.com" className={`${styles.contacts__link} ${styles.list}`}>
              <svg className={styles.contacts__mail}>
                <use href="./images/icons.svg#icon-mail" width="16" height="12"></use>
              </svg>
              <span>natalia_klymuk@gmail.com</span>
            </a>
          </li>
          <li className={styles.contacts_item}>
            <a href="tel:+380676841366" className={`${styles.contacts__link} ${styles.list}`}>
              <svg className={styles.contacts__smartphone}>
                <use href="./images/icons.svg#icon-smartphone" width="10" height="16"></use>
              </svg>
              <span>+380676841366</span>
            </a>
          </li>
        </ul>
        <button
          className={`${styles.menu_toggle} ${styles.js_open_menu}`}
          aria-expanded={isMenuOpen}
          aria-controls="mobile_menu"
          onClick={toggleMenu}
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        id="mobile_menu"
        className={`${styles.menu_container} ${isMenuOpen ? styles.is_open : ''}`}
      >
        <button className={`${styles.menu_toggle} ${styles.js_close_menu}`} onClick={toggleMenu}>
          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <ul className={styles.mobile_menu}>
          <li>
            <a href="/" className={styles.link}>
              Студія
            </a>
          </li>
          <li>
            <a href="/portfolio" className={styles.link}>
              Портфоліо
            </a>
          </li>
          <li>
            <a href="/sertificate" className={styles.link}>
              Сертифікат
            </a>
          </li>
        </ul>
        <ul className={`${styles.mobile_menu} ${styles.down} ${styles.list}`}>
          <li className={styles.mobile_menu__item}>
            <a href="tel:+380676841366" className={`${styles.mobile_menu__link} ${styles.list}`}>
              <span>+38 0676841366</span>
            </a>
          </li>
          <li className={styles.mobile_menu__item}>
            <a
              href="mailto:natalia_klymuk@gmail.com"
              className={`${styles.mobile_menu__link} ${styles.list}`}
            >
              <span>natalia_klymuk@gmail.com</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;