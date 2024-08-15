'use client';

import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const Header = () => {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <header className="site-header">
      <div className="container flex">
        <nav className="nav flex">
          <a href="/" className="logo centred flex">
            <span className="logo__first">Visual</span>
            <span className="logo__second">Master</span>
          </a>
          <ul className={classNames('nav__list', 'list', 'flex')}>
            <li className={classNames('nav__item')}>
              <a
                href="/"
                className={classNames('nav__link', 'list', {
                  ['current']: isActive('/'),
                })}>
                Моє резюме
              </a>
            </li>
            <li className={classNames('nav__item')}>
              <a
                href="/portfolio"
                className={classNames('nav__link', 'list', {
                  ['current']: isActive('/portfolio'),
                })}>
                Портфоліо
              </a>
            </li>
            <li className={classNames('nav__item')}>
              <a
                href="sertificate"
                className={classNames('nav__link', 'list', {
                  ['current']: isActive('/contacts'),
                })}>
                Сертифікат
              </a>
            </li>
          </ul>
        </nav>
        <ul className="contacts list">
          <li className="contacts__item">
            <a href="mailto:info@devstudio.com" className="contacts__link list">
              <svg className="contacts__mail">
                <use
                  href="./images/icons.svg#icon-mail"
                  width="16"
                  height="12"></use>
              </svg>
              <span>natalia_klymuk@gmail.com</span>
            </a>
          </li>
          <li className="contacts__item">
            <a href="tel:+380676841366" className="contacts__link list">
              <svg className="contacts__smartphone">
                <use
                  href="./images/icons.svg#icon-smartphone"
                  width="10"
                  height="16"></use>
              </svg>
              <span>+380676841366</span>
            </a>
          </li>
        </ul>
        <button
          className="menu-toggle js-open-menu"
          aria-expanded="false"
          aria-controls="mobile-menu">
          <svg
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div className="menu-container js-menu-container" id="mobile-menu">
        <button className="menu-toggle js-close-menu">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414z"
              clipRule="evenodd"></path>
          </svg>
        </button>

        <ul className="mobile-menu">
          <li>
            <a href="/" className="link">
              Студія
            </a>
          </li>
          <li>
            <a href="/portfolio" className="link">
              Портфоліо
            </a>
          </li>
          <li>
            <a href="/sertificate" className="link">
              Сертифікат
            </a>
          </li>
        </ul>
        <ul className="mobile-menu down list">
          <li className="mobile-menu__item">
            <a href="tel:+380676841366" className="mobile-menu__link list">
              <span>+38 0676841366</span>
            </a>
          </li>
          <li className="mobile-menu__item">
            <a
              href="mailto:natalia_klymuk@gmail.com"
              className="mobile-menu__link list">
              <span>natalia_klymuk@gmail.com</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
