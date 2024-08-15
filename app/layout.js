import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
  title: "Дизайнер інтер'єрів",
  description: "Головна сторінка дизайнера інтер'єрів",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
