import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { Navigation } from '../components/navigation/Navigation';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div className='flex flex-col w-screen h-screen'>
          <Header />
          <div className='flex w-full flex-grow'>
            <Navigation />
            <div className='flex justify-center w-full bg-gray-100'>
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
