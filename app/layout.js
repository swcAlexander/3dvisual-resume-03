import { Inter } from 'next/font/google';

import Header from './(components)/Header/page';
import Footer from './(components)/Footer/page';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
  title: "Дизайнер інтер'єрів",
  description: "Головна сторінка дизайнера інтер'єрів",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
