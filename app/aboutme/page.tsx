import Header  from '@/components/Header';
import AboutmeSection from '../NewPages/AboutmeSection';
import Footer from '@/components/Footer';

export default function aboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fa]">
      <div className="max-w">
        <Header />
        <AboutmeSection />
        <Footer />
      </div>
    </main>
  );
}
