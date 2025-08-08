

import Header  from '@/components/Header';
import BlogsSection from '../NewPages/BlogsSection';
import Footer from '@/components/Footer';


export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fa]">
      <div className="max-w">
        <Header />
        <BlogsSection />
        <Footer />  

      </div>
    </main>
  );
}
