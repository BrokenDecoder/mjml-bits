import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'MJML Bits — Expressive Components for Responsive Emails',
  description:
    'Highly customizable email components, partials and backgrounds that drop into your MJML project and instantly make your emails stand out.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Background Grid & Aurora Ambient Elements */}
        <div className="bg-grid" aria-hidden="true" />
        <div className="aurora-container" aria-hidden="true">
          <div className="aurora-glow-left" />
          <div className="aurora-glow-right" />
        </div>

        {/* Main Application Container */}
        <div className="app-wrapper">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
