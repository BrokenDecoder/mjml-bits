import './globals.css';
import Navbar from '@/components/Navbar';
import Background from '@/components/Background';

export const metadata = {
  title: 'MJML Bits — Expressive Components for Responsive Emails',
  description:
    'Highly customizable email components, partials and backgrounds that drop into your MJML project and instantly make your emails stand out.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
