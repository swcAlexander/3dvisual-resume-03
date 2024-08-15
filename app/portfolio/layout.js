import { Inter } from 'next/font/google';
import Header from '../(components)/Header/page';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
  title: 'Портфоліо',
  description: "Портфоліо дизайнера інрер'єрів ",
};

export default function PortfolioLayout({ children }) {
  return <body className={inter.className}>{children}</body>;
}
