

import React from 'react';
import Link from 'next/link';

export default function BlogPage() {
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

  // Blog string IDs matching BlogsContentSection and generateStaticParams
  const blogIds = [
    'Management_Fix',
    'Management_Gaps',
    'Error_Correction',
    'The_Growth_Drain',
    'Be_a_Builder',
  ];

  return (
    <main className="bg-[#f5f7fa] min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-10 text-center bg-gradient-to-b from-white to-[#f5f7fa]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-avenir font-medium text-gray-900 mb-4">
            Tech Talks
          </h2>
          <p className="text-lg md:text-xl font-freight text-gray-600 mb-8">
            Stay ahead of the curve with expert insights, industry trends, and practical advice from our team of technology professionals. Learn from real-world implementations and case studies.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow text-gray-700 text-sm"><i className="ri-article-line mr-2"></i>50+ Articles</div>
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow text-gray-700 text-sm"><i className="ri-user-star-line mr-2"></i>Industry Experts</div>
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow text-gray-700 text-sm"><i className="ri-refresh-line mr-2"></i>Updated Weekly</div>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-2xl font-avenir font-medium text-gray-900 mb-4 text-left">Featured Article</h3>
          <div data-intro className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden mb-8 animate-fade-in-up delay-100">
            <div data-intro className="md:w-1/2 w-full flex items-center justify-center bg-[#f5f7fa]">
              <img src={articles[0].image} alt={articles[0].title} className="object-cover w-full h-64 md:h-72" />
            </div>
            <div data-intro className="md:w-1/2 w-full p-6 flex flex-col justify-center animate-fade-in-left delay-200">
              <div className="mb-2"><span className="bg-[#e6f0fa] text-[#202b5e] text-xs px-3 py-1 rounded-full font-avenir">Featured</span></div>
              <h3 className="text-xl font-avenir font-medium text-gray-900 mb-2">{articles[0].title}</h3>
              <p className="font-freight text-gray-600 mb-4">{articles[0].excerpt}</p>
              <Link href={`/blogscontent/Management_Fix`} className="inline-flex items-center text-[#202b5e] font-avenir font-heavy hover:text-[#3a4587] transition-colors text-sm bg-[#e6f0fa] px-4 py-2 rounded-lg w-max">Read Full Article <i className="ri-arrow-right-line ml-2"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link data-intro href={`/blogscontent/${blogIds[index]}`} key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group animate-fade-in-up ${index % 3 === 0 ? 'delay-100' : index % 3 === 1 ? 'delay-200' : 'delay-300'}`}>
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
                  <div className="flex items-center text-[#202b5e] font-avenir font-heavy hover:text-[#3a4587] transition-colors">
                    <span>Read More</span>
                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
