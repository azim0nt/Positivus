
import "./globals.css";
import Header from "./components/Header";
import {Space_Grotesk} from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <div className="app-wrapper max-w-[1700px] mx-auto px-5">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
