

import Header  from '@/components/Header';
import ContactDetailsSection from '../NewPages/ContactDetailSection';
import Footer from '@/components/Footer';


export default function contactdetailPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fa]">
      <div className="max-w">
        <div data-intro className="w-full animate-fade-in-up delay-100">
        </div>
        <div data-intro className="w-full animate-fade-in-up delay-200">
          <ContactDetailsSection />
        </div>
        <div data-intro className="w-full">
          <Footer />
        </div>

      </div>
    </main>
  );
}
