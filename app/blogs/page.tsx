import BlogsSection from '../NewPages/BlogsSection';
import Footer from '@/components/Footer';


export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fa]">
      <div className="max-w">
        <div data-intro className="w-full animate-fade-in-up delay-100">
        </div>
        <div data-intro className="w-full animate-fade-in-up delay-200">
          <BlogsSection />
        </div>
        <div data-intro className="w-full">
          <Footer />
        </div>

      </div>
    </main>
  );
}
