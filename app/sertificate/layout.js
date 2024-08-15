import { Inter } from 'next/font/google';
import Header from '../(components)/Header/page';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });
export const metadata = {
  title: 'Сертифікат',
  description: "Сертифікат дизайнера інрер'єрів ",
};

export default function SertificateLayout({ children }) {
  return (
    <html lang="ua">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
