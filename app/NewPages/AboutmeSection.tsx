import React from 'react';

export default function AboutmeSection() {
  return (
    <section className="bg-white">
      {/* Hero Section with background and stats */}
      <div className="relative bg-cover bg-center min-h-[340px] flex flex-col justify-center items-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80)'}}>
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto py-16 text-center">
          <h1 className="text-5xl font-avenir font-bold text-gray-900 mb-4">Our Story & Mission</h1>
          <p className="text-xl font-freight text-gray-700 mb-8">For over two decades, AB Lincoln & Company has been transforming businesses through innovative technology solutions. We believe that authentic partnerships and unwavering commitment to excellence drive lasting success.</p>
          <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-avenir font-bold text-[#202b5e]">20+ Years</div>
              <div className="font-freight text-gray-700 text-sm">of proven industry experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-avenir font-bold text-[#202b5e]">500+ Clients</div>
              <div className="font-freight text-gray-700 text-sm">Trust our expertise worldwide</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-avenir font-bold text-[#202b5e]">ISO Certified</div>
              <div className="font-freight text-gray-700 text-sm">Quality management standards</div>
            </div>
          </div>
        </div>
      </div>

      {/* Story & Mission Section */}
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <div>
          <h2 className="text-3xl font-avenir font-bold text-gray-900 mb-6">Built on Trust, Driven by Innovation</h2>
          <div className="space-y-6">
            <p className="font-freight text-gray-700 text-lg">
              AB Lincoln & Company (Reliquix Private Limited) was founded in November 2024 by Mr. Pratheep Abraham — not as a planned venture, but through a serendipitous moment that sparked a new consulting journey.
            </p>
            <p className="font-freight text-gray-700 text-lg">
              Already a successful entrepreneur, Mr. Pratheep Abraham is the Founder of Japag Regulatory Solutions, a global regulatory compliance consulting firm that serves top retailers, manufacturers in the fragrance and home fragrance industry worldwide. With years of experience building scalable, system-driven companies, consulting wasn’t new to him — but helping MSMEs build operational maturity from scratch? That’s where a new path began.
            </p>
            <p className="font-freight text-gray-700 text-lg">
              During a business forum, a fellow entrepreneur asked him the secret behind Japag’s early and global success. Mr. Pratheep revealed the simple truth: “From Day 1, Japag was built with systems — job roles, SOPs, KPIs, and contracts — even before hiring the first employee.”
            </p>
            <p className="font-freight text-gray-700 text-lg">
              Astonished, the friend confessed, “My 10-year-old company doesn’t feel 10 years old — there are no systems, no structure, and everything still depends on me.” That conversation led to Mr. Pratheep’s first blueprint for organizational design, beginning with R&R and KPIs. It worked — and word spread fast.
            </p>
            <p className="font-freight text-gray-700 text-lg">
              What began as a favour quickly evolved into a movement. Inquiries poured in from business owners across sectors — manufacturing, services, retail, pest control, medical furnishings, and more. The pattern was clear: MSMEs were stuck in the loop of daily firefighting, unable to grow due to lack of systems and over-dependence on founders.
            </p>
            <p className="font-freight text-gray-700 text-lg">
              And thus, A B Lincoln & Company was born — with a mission to systemize MSMEs for scalable and sustainable growth. Under the strategic leadership of Mr. Pratheep and a capable implementation team of Senior Consultants, Business Analysts, Client Associates, we now help businesses build clarity, accountability, and performance — one system at a time.
            </p>
          </div>
        </div>
        
      </div>

      {/* Core Values Section */}
      <div className="bg-[#f8fafc] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-avenir font-bold text-gray-900 mb-6 text-center">Our Core Values</h2>
          <p className="font-freight text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            These principles have guided us for over two decades and continue to shape every interaction, decision, and solution we provide to our valued partners.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-avenir font-bold text-lg text-[#202b5e] mb-2">Integrity First</h3>
              <p className="font-freight text-gray-700">We believe in complete transparency. Every decision, every recommendation, and every solution is guided by what’s truly best for our clients’ success.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-avenir font-bold text-lg text-[#202b5e] mb-2">Innovation Excellence</h3>
              <p className="font-freight text-gray-700">We don’t just follow trends – we anticipate them. Our team continuously invests in cutting-edge technologies to deliver future-ready solutions.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-avenir font-bold text-lg text-[#202b5e] mb-2">Partnership Approach</h3>
              <p className="font-freight text-gray-700">You’re not just a client, you’re our partner. We invest in understanding your business deeply to create solutions that truly fit your unique needs.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-avenir font-bold text-lg text-[#202b5e] mb-2">Client Success</h3>
              <p className="font-freight text-gray-700">Your success is our success. We measure our achievements not by projects completed, but by the growth and satisfaction of our partners.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-avenir font-bold text-lg text-[#202b5e] mb-2">Quality Commitment</h3>
              <p className="font-freight text-gray-700">Every solution undergoes rigorous testing and quality assurance. We don’t just deliver – we deliver excellence, every single time.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-avenir font-bold text-lg text-[#202b5e] mb-2">Reliability Promise</h3>
              <p className="font-freight text-gray-700">Deadlines aren’t just targets – they’re promises. Our track record speaks for itself: on-time delivery, within budget, exceeding expectations.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
