import Navbar        from './components/Navbar.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import WhatsAppBtn   from './components/WhatsAppBtn.jsx'
import Hero          from './sections/Hero.jsx'
import Stats         from './sections/Stats.jsx'
import Destinations  from './sections/Destinations.jsx'
import Tours         from './sections/Tours.jsx'
import WhyUs         from './sections/WhyUs.jsx'
import Packages      from './sections/Packages.jsx'
import Reviews       from './sections/Reviews.jsx'
import VideoSection  from './sections/Video.jsx'
import Pricing       from './sections/Pricing.jsx'
import Gallery       from './sections/Gallery.jsx'
import Booking       from './sections/Booking.jsx'
import FAQ           from './sections/FAQ.jsx'
import Newsletter    from './sections/Newsletter.jsx'
import Contact       from './sections/Contact.jsx'
import Footer        from './sections/Footer.jsx'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Destinations />
        <Tours />
        <WhyUs />
        <Packages />
        <Reviews />
        <VideoSection />
        <Pricing />
        <Gallery />
        <Booking />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <WhatsAppBtn />
    </>
  )
}
