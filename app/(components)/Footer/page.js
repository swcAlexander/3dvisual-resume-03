const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <a href="/" className="footer__logo list">
            <span className="logo__first">Visual</span>
            <span className="footer__logo--color-white">Master</span>
          </a>
          <address className="footer__address">
            <ul className="footer__list list">
              <li>
                <a className="footer__item">natalia_klymuk@gmail.com</a>
              </li>
              <li>
                <a className="footer__item">+380676841366</a>
              </li>
            </ul>
          </address>
        </div>
        <div className="social-container">
          <h3 className="social-container__title">Приєднуйтесь</h3>
          <ul className="social-links">
            <li className="social-links__item">
              <a
                href="https://www.instagram.com/nataliia_klimuk/"
                className="social-links__link">
                <svg className="social-links__icon">
                  <use
                    href="images/icons.svg#icon-instagram"
                    width="20px"
                    height="20px"></use>
                </svg>
              </a>
            </li>
            <li className="social-links__item">
              <a
                href="https://www.facebook.com/alexander.klymuk.9"
                className="social-links__link">
                <svg className="social-links__icon">
                  <use
                    href="images/icons.svg#icon-facebook"
                    width="20px"
                    height="20px"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
