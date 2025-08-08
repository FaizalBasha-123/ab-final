
'use client';
import Link from 'next/link';

export default function NewsSection() {
  const articles = [
    {
      image: 'https://res.cloudinary.com/dwpzkfzuv/image/upload/v1754649391/Blog_1_zu14k0.png',
      title: 'Why Most Businesses Struggle to Grow — And How Management Systems Quietly Fix That',
      excerpt: 'business consultant in India, management consulting company, SOP consultant, KPI consultant, SME business growth, business systems, employee management, organizational process, startup scalability',
    },
    {
      image: 'https://res.cloudinary.com/dwpzkfzuv/image/upload/v1754649472/Blog_2_bwvzzt.png',
      title: 'The Hidden Reason Most MSMEs Don’t Grow — No Management Systems',
      excerpt: 'In the vibrant ecosystem of Indian business, MSMEs and SMEs form the backbone of economic activity. They innovate, create jobs, and contribute significantly to GDP. But while thousands of these businesses are launched every year, only a small fraction ever scale beyond a certain size.',
    },
    {
      image: 'https://res.cloudinary.com/dwpzkfzuv/image/upload/v1754649515/Blog_3_elq85o.png',
      title: 'Everyday Business Errors That Cost You Growth (And How to Stop Them)',
      excerpt: 'In the fast-paced world of MSMEs and startups, growth is often hindered not by external threats — but by everyday internal errors. These recurring issues may seem small, but they silently erode your profits, delay your scaling, and frustrate your team. So, what’s holding you back?',
    },
    {
      image: 'https://res.cloudinary.com/dwpzkfzuv/image/upload/v1754656694/Blog_4_xuogvi.png',
      title: 'The Hidden Operational Gaps Draining Your Business Growth',
      excerpt: 'Small business mistakes don’t always come with alarms.They often feel like “part of the process” — missed follow-ups, unclear roles, inconsistent service, or untrained staff. But when left unchecked, these seemingly minor errors snowball into lost customers, wasted time, employee turnover, and stalled growth. These aren’t one-time blunders. They’re recurring patterns caused by a lack of structure.',
    },
    {
      image: 'https://res.cloudinary.com/dwpzkfzuv/image/upload/v1754649510/Blog_5_rpmx7o.png',
      title: 'Stop Being the System: Build One Instead',
      excerpt: 'Most founders don’t realize this early on — They didn’t just start a business. They became it. Every client call, every approval, every fix, every fire — all routes lead back to you. You are the memory, the manual, and the method. And here’s the catch: if your business depends on you to function, it’s not really a business — it’s a bottleneck.',
    }
  ];

  return (
    <section id="news" className="py-20 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-avenir font-medium text-gray-900 mb-6">
            Latest News & Blog
          </h2>
          <p className="text-xl font-freight font-book text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest technology trends, industry insights, and expert opinions from our team of professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                
                <h3 className="text-xl font-avenir font-medium text-gray-900 mb-3 group-hover:text-[#202b5e] transition-colors">
                  {article.title}
                </h3>
                
                <p className="font-freight font-book text-gray-600 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
                <Link href={`/blogscontent/${index}`} className="flex items-center text-[#202b5e] font-avenir font-heavy hover:text-[#3a4587] transition-colors">
                  <span>Read More</span>
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/blogs">
            <button className="bg-[#202b5e] text-white px-8 py-4 rounded-lg text-lg font-avenir font-heavy hover:bg-[#3a4587] transition-colors whitespace-nowrap cursor-pointer" suppressHydrationWarning={true}>
              View All Articles
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
