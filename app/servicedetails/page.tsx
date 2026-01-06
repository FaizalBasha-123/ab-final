

import Header  from '@/components/Header';
import ServiceDetailsSection from '../NewPages/ServiceDetailsSection';
import Footer from '@/components/Footer';


export default function servicedetaillPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fa]">
      <div className="max-w">
        <div data-intro className="w-full animate-fade-in-up delay-100">
        </div>
        <div data-intro className="w-full animate-fade-in-up delay-200">
          <ServiceDetailsSection />
        </div>
        <div data-intro className="w-full">
          <Footer />
        </div>

      </div>
    </main>
  );
}
