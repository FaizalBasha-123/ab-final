

import Header  from '@/components/Header';
import ServiceDetailsSection from '../NewPages/ServiceDetailsSection';
import Footer from '@/components/Footer';


export default function servicedetaillPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fa]">
      <div className="max-w">
        <Header />
        <ServiceDetailsSection />
        <Footer />  

      </div>
    </main>
  );
}
