

import Header  from '@/components/Header';
import ContactDetailsSection from '../NewPages/ContactDetailSection';
import Footer from '@/components/Footer';


export default function contactdetailPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fa]">
      <div className="max-w">
        <Header />
        <ContactDetailsSection />
        <Footer />  

      </div>
    </main>
  );
}
