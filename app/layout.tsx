import { Footer } from '../components/footer/Footer';
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
          <Navigation />
          <div className='flex-grow flex justify-center w-full bg-gray-100'>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
