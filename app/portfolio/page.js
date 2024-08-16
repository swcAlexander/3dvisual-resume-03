'use client';
import { useState } from 'react';
import Header from '../(components)/Header/page';
import Footer from '../(components)/Footer/page';
import ModalImage from '../(components)/ModalImage/page';

const images = [
  { src: 'portfolio/bath/1.jpg', category: 'Вбиральні', description: 'ва' },
  { src: 'portfolio/bath/4.jpg', category: 'Вбиральні', description: 'ва' },
  { src: 'portfolio/bath/5.jpg', category: 'Вбиральні', description: 'ва' },
  { src: 'portfolio/bedroom/1.jpg', category: 'Спальні', description: 'ва' },
  { src: 'portfolio/bedroom/1-2.jpg', category: 'Спальні', description: 'ва' },
  { src: 'portfolio/bedroom/1-6.jpg', category: 'Спальні', description: 'ва' },
  { src: 'portfolio/bedroom/1-7.jpg', category: 'Спальні', description: 'ва' },
  { src: 'portfolio/bedroom/1-8.jpg', category: 'Спальні', description: 'ва' },
  { src: 'portfolio/bedroom/2.jpg', category: 'Спальні', description: 'ва' },
  { src: 'portfolio/bedroom/3.jpg', category: 'Спальні', description: 'ва' },
  { src: 'portfolio/bedroom/4.jpg', category: 'Спальні', description: 'ва' },
  { src: 'portfolio/bedroom/5.jpg', category: 'Спальні', description: 'ва' },
  { src: 'portfolio/bedroom2/2.jpg', category: 'Спальні', description: 'ва' },
  { src: 'portfolio/bedroom2/3.jpg', category: 'Спальні', description: 'ва' },
  { src: 'portfolio/bedroom2/5.jpg', category: 'Спальні', description: 'ва' },
  { src: 'portfolio/bedroom2/6.jpg', category: 'Спальні', description: 'ва' },
  { src: 'portfolio/bedroom3/3.jpg', category: 'Спальні', description: 'ва' },
  { src: 'portfolio/bedroom3/6.jpg', category: 'Спальні', description: 'ва' },
  {
    src: 'portfolio/boysBedroom/1.jpg',
    category: 'Спальні',
    description: 'ва',
  },
  {
    src: 'portfolio/boysBedroom/2.jpg',
    category: 'Спальні',
    description: 'ва',
  },
  {
    src: 'portfolio/boysBedroom/3.jpg',
    category: 'Спальні',
    description: 'ва',
  },
  {
    src: 'portfolio/boysBedroom/4.jpg',
    category: 'Спальні',
    description: 'ва',
  },
  {
    src: 'portfolio/boysBedroom/5.jpg',
    category: 'Спальні',
    description: 'ва',
  },
  {
    src: 'portfolio/boysBedroom/6.jpg',
    category: 'Спальні',
    description: 'ва',
  },
  { src: 'portfolio/exam/001.jpg', category: 'Вітальні', description: 'ва' },
  { src: 'portfolio/exam/002.jpg', category: 'Вітальні', description: 'ва' },
  { src: 'portfolio/exam/006.jpg', category: 'Вітальні', description: 'ва' },
  { src: 'portfolio/exam/007.jpg', category: 'Вітальні', description: 'ва' },
  { src: 'portfolio/exam/1-3.jpg', category: 'Вітальні', description: 'ва' },
  { src: 'portfolio/exam/1-4.jpg', category: 'Вітальні', description: 'ва' },
  {
    src: 'portfolio/hodgepodge/01.jpg',
    category: 'Спальні',
    description: 'ва',
  },
  {
    src: 'portfolio/hodgepodge/02.jpg',
    category: 'Вбиральні',
    description: 'ва',
  },
  {
    src: 'portfolio/hodgepodge/03.jpg',
    category: 'Вітальні',
    description: 'ва',
  },
  {
    src: 'portfolio/hodgepodge/04.jpg',
    category: 'Вітальні',
    description: 'ва',
  },
  {
    src: 'portfolio/hodgepodge/05.jpg',
    category: 'Вбиральні',
    description: 'ва',
  },
  {
    src: 'portfolio/hodgepodge/06.jpg',
    category: 'Вітальні',
    description: 'ва',
  },
  {
    src: 'portfolio/hodgepodge/07.jpg',
    category: 'Спальні',
    description: 'ва',
  },
  {
    src: 'portfolio/hodgepodge/08.jpg',
    category: 'Спальні',
    description: 'ва',
  },
  { src: 'portfolio/hodgepodge/09.jpg', category: 'Кухні', description: 'ва' },
  {
    src: 'portfolio/hodgepodge/010.jpg',
    category: 'Спальні',
    description: 'ва',
  },
  {
    src: 'portfolio/hodgepodge/011.jpg',
    category: 'Спальні',
    description: 'ва',
  },
  {
    src: 'portfolio/hodgepodge/012.jpg',
    category: 'Вітальні',
    description: 'ва',
  },
  {
    src: 'portfolio/hodgepodge/013.jpg',
    category: 'Спальні',
    description: 'ва',
  },
  { src: 'portfolio/kitchen/1.jpg', category: 'Кухні', description: 'ва' },
  { src: 'portfolio/kitchen/2.jpg', category: 'Кухні', description: 'ва' },
  { src: 'portfolio/kitchen/3.jpg', category: 'Кухні', description: 'ва' },
  { src: 'portfolio/kitchen/4.jpg', category: 'Кухні', description: 'ва' },
  { src: 'portfolio/kitchen/7.jpg', category: 'Кухні', description: 'ва' },
  { src: 'portfolio/kitchen/1-5.jpg', category: 'Кухні', description: 'ва' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Усі');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredImages =
    activeCategory === 'Усі'
      ? images
      : images.filter((image) => image.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };
  return (
    <>
      <Header />
      <main>
        <section className="portfolio">
          <div className="container">
            <h1 className="hidden">Портфоліо</h1>
            <ul className="button-list list">
              {['Усі', 'Спальні', 'Кухні', 'Вбиральні', 'Вітальні'].map(
                (category) => (
                  <li key={category} className="button-list__item">
                    <button
                      type="button"
                      className={`button-list__button ${
                        activeCategory === category ? 'active' : ''
                      }`}
                      onClick={() => setActiveCategory(category)}>
                      {category}
                    </button>
                  </li>
                )
              )}
            </ul>

            <ul className="portfolio__list list">
              {filteredImages.map((image, index) => (
                <li key={index} className="portfolio__item">
                  <div
                    className="container-images"
                    onClick={() => openModal(image)}>
                    <img
                      src={image.src}
                      loading="lazy"
                      alt=""
                      width="370"
                      className="container-images__image"
                      sizes="(min-width: 1600px) 15vw, (min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="overlay">
                      <p className="overlay__text">Опис відсутній</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
      <ModalImage
        image={selectedImage}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </>
  );
}
