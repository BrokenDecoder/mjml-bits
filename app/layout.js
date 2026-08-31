import './globals.css';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Background from '@/components/Background';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'MJML Bits — Expressive Components for Responsive Emails',
  description:
    'Highly customizable email components, partials and backgrounds that drop into your MJML project and instantly make your emails stand out.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable}`}>
      <body className={sansFont.className}>
        {/* Full-Screen WebGL Background & Grid */}
        <Background />

        {/* Main Application Container */}
        <div className="app-wrapper">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
