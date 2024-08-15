'use client';
import Head from 'next/head';
import styles from './page.module.css';
import ModalSummary from './(components)/Summary/page.js';
import Slider from './(components)/Slider/page.js';

export default function Home() {
  const imgSlides = [
    {
      id: 1,
      content: (
        <img src="1.jpg" alt="" width="670" sizes="(min-width: 1200px) 33vw" />
      ),
    },
    {
      id: 2,
      content: (
        <img src="2.jpg" alt="" width="670" sizes="(min-width: 1200px) 33vw" />
      ),
    },
    {
      id: 3,
      content: (
        <img src="3.jpg" alt="" width="670" sizes="(min-width: 1200px) 33vw" />
      ),
    },
    {
      id: 4,
      content: (
        <img src="4.jpg" alt="" width="670" sizes="(min-width: 1200px) 33vw" />
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Дизайнер інтер'єрів</title>
        <meta
          name="description"
          content="Головна сторінка дизайнера інрер'єрів "
        />
      </Head>
      <main className={styles.main}>
        <section className="hiro-section">
          <div className="container inline-block">
            <h1 className="hiro-section__title">
              Створюю простори, в яких ви живете мріями
            </h1>
          </div>
        </section>
        <section className="team-section">
          <div className="team-section__container container">
            <h2 className="team-section__title section-title hidden">
              Наталія Климук
            </h2>
            <div className="team-section__list list">
              <div className="team-section__item">
                <img
                  className="team-section__image"
                  src="./Natalia_Klymuk.jpg"
                  alt="фото Наталії Климук"
                  width="450"
                  sizes="(min-width: 1200px) 25vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="team-section__box">
                  <h3 className="team-section__name">Natalia Klymuk</h3>
                  <p className="team-section__job">Interior designer</p>
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
                <ModalSummary />
              </div>
              <div className="team-section__skills">
                <h2 className="team-section__name hidden">Технічні навички</h2>
                <ul className="team-section_technical-list">
                  <li>
                    <h3 className="team-section__technical-title">
                      3D моделювання та рендеринг
                    </h3>
                    <p>
                      <strong>Програми:</strong> Corona, 3ds Max.
                    </p>
                    <span>
                      <strong>Опис:</strong> Навички роботи з 3D програмами
                      дозволяють створювати тривимірні моделі інтер'єрів і
                      рендери, які допомагають візуалізувати кінцевий результат
                      проєкту.
                    </span>
                  </li>
                  <li>
                    <h3 className="team-section__technical-title">
                      Графічний дизайн
                    </h3>
                    <p>
                      <strong>Програми:</strong> Adobe Photoshop
                    </p>
                    <span>
                      <strong>Опис:</strong> Вміння працювати з графічними
                      програмами для створення презентацій, візуалізації
                      концептів, колажів та планів розташування меблів.
                    </span>
                  </li>
                  <li>
                    <h3 className="team-section__technical-title">
                      Управління кольором
                    </h3>
                    <span>
                      <strong>Опис:</strong> Знання теорії кольору і вміння
                      працювати з різними палітрами для створення гармонійного і
                      естетично привабливого інтер'єру.
                    </span>
                  </li>
                  <li>
                    <h3 className="team-section__technical-title">
                      Просторове мислення
                    </h3>
                    <span>
                      <strong>Опис:</strong> Здатність уявляти та проектувати
                      функціональні та естетично привабливі простори, враховуючи
                      ергономіку, освітлення, текстури та матеріали.
                    </span>
                  </li>
                  <li>
                    <h3 className="team-section__technical-title">
                      Робота з освітленням
                    </h3>
                    <span>
                      <strong>Опис:</strong> Розуміння технічних аспектів
                      освітлення, знання видів ламп і світильників, вміння
                      створювати схеми освітлення, які доповнюють дизайн
                      інтер'єру.
                    </span>
                  </li>
                  <li>
                    <h3 className="team-section__technical-title">
                      Проектування меблів та елементів декору
                    </h3>
                    <span>
                      <strong>Опис:</strong> Вміння проектувати меблі на
                      замовлення та вибирати декоративні елементи, що
                      відповідають загальній концепції інтер'єру.
                    </span>
                  </li>
                  <li>
                    <h3 className="team-section__technical-title">
                      Знання будівельних матеріалів
                    </h3>
                    <span>
                      <strong>Опис:</strong> Вміння вибирати матеріали,
                      враховуючи їхні властивості, вартість, довговічність і
                      естетичні якості.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <div className="container">
            <h2 className="hidden">Ь'які навички (Soft Skills)</h2>

            <ul className="skills-section__list list flex">
              <li className="skills-section__item antenna-icon">
                <h3 className="skills-section__title">УВАГА ДО ДЕТАЛЕЙ</h3>
                <p className="skills-section__text">
                  Завжди приділяю особливу увагу деталям у своїй роботі. Це
                  дозволяє мені виявляти і виправляти помилки на ранніх стадіях,
                  забезпечувати високу якість кінцевого продукту і уникати
                  непотрібних переробок. Мій детальний підхід також допомагає
                  мені чітко розуміти вимоги проекту та забезпечувати їх точне
                  виконання.
                </p>
              </li>
              <li className="skills-section__item clock-icon">
                <h3 className="skills-section__title">ПУНКТУАЛЬНІСТЬ</h3>
                <p className="skills-section__text">
                  Вважаю, що своєчасність є критично важливою для ефективного
                  управління проектами і досягнення успіху. Завжди дотримуюсь
                  встановлених термінів та часу виконання завдань, що дозволяє
                  мені організувати свою роботу максимально ефективно та
                  забезпечити безперебійну роботу.
                </p>
              </li>
              <li className="skills-section__item diagram-icon">
                <h3 className="skills-section__title">ПЛАНУВАННЯ</h3>
                <p className="skills-section__text">
                  Маю сильні навички в плануванні і організації робочих
                  процесів. Я детально розробляю стратегії та плани дій для
                  досягнення цілей проекту, що включає розподіл ресурсів,
                  визначення пріоритетів і встановлення реалістичних термінів.
                  Мій підхід до планування допомагає уникнути непередбачених
                  затримок і забезпечує чіткий шлях до успіху.
                </p>
              </li>
              <li className="skills-section__item astronaut-icon">
                <h3 className="skills-section__title">СУЧАСНІ ТЕХНОЛОГІЇ</h3>
                <p className="skills-section__text">
                  Активно слідкую за останніми тенденціями та новинами в сфері
                  технологій, що дозволяє мені ефективно використовувати сучасні
                  інструменти і технології у своїй роботі. Моя здатність швидко
                  адаптуватися до нових технологій забезпечує оптимізацію
                  процесів, підвищення продуктивності та впровадження
                  інноваційних рішень у проекти.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="work-section">
          <div className="container">
            <h2 className="work-section__title section-title">
              Приклади моїх робіт
            </h2>
            <Slider slides={imgSlides} />
          </div>
        </section>

        <section className="customers-section">
          <div className="container">
            <h2 className="customers-section__title">Освіта</h2>

            <ul className="customers-section__list flex">
              <li className="customers-section__item">
                <div className="aducation-box">
                  <h3> Visual 360-studio</h3>
                  <span>2022-2023</span>
                  <p>Візуалізатор інтер'єрів</p>
                </div>
                <a
                  href="https://visual360-studio.com/"
                  className="customers-section__link">
                  <img
                    className="imglogo"
                    src="https://static.tildacdn.one/tild6437-3831-4132-a532-616266306662/Visual_360_1.svg"
                    alt="Логотип Visual 360-studio"></img>
                </a>
              </li>
              <li className="customers-section__item">
                <div className="aducation-box">
                  <h3>
                    Волинський фаховий коледж культури і мистецтв І.Ф.
                    Стравінського
                  </h3>
                  <span>2014-2017</span>
                  <p>Mайстер хорового співу</p>
                </div>
                <a
                  href="https://www.vfkkim.com.ua/"
                  className="customers-section__link">
                  <img
                    src="./logo2.webp"
                    className="imglogo"
                    alt="Логотип"></img>
                </a>
              </li>
              <li className="customers-section__item">
                <div className="aducation-box">
                  <h3>Lesya Ukrainka Volyn National University</h3>
                  <span>2017-2020</span>
                  <p>Хоровий диригент, вчитель музики</p>
                </div>
                <a
                  href="https://vnu.edu.ua/uk"
                  className="customers-section__link">
                  <img
                    loading="lazy"
                    src="https://vnu.edu.ua/sites/default/files/styles/48_x_60/public/2020-10/imgonline-com-ua-Transparent-backgr-7N0aM2lAD1d2z5.png?itok=NxgUylSE"
                    width="48px"
                    alt="Логотип Lesya Ukrainka Volyn National University"
                    typeof="foaf:Image"
                    className="imglogo"></img>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
