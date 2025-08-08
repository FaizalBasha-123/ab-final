
'use client';

export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-code-s-slash-line',
      title: 'Organization Restructure',
      description: 'We realign your business structure to improve clarity, accountability, and efficiency. Build a scalable organization with defined roles and lean reporting systems.'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Roles & Responsibilities',
      description: 'We define clear job roles, responsibilities, and ownership across your team. Eliminate confusion, boost accountability, and improve team performance.'
    },
    {
      icon: 'ri-cloud-line',
      title: 'SWOT & GAP Analysis',
      description: 'We assess your business strengths, weaknesses, opportunities, and threats while identifying critical performance gaps. This forms the foundation for strategic improvements and focused growth.'
    },
    {
      icon: 'ri-database-2-line',
      title: 'KPI (Key Performance Indicators)',
      description: 'We define measurable KPIs aligned with your business goals to track progress, improve accountability, and drive consistent performance across teams.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'SOP (Standard Operating Procedures)',
      description: 'We create clear, customized SOPs that streamline operations, reduce errors, and ensure consistency—so your business runs smoothly, even without you.'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Need Analysis',
      description: 'We deep-dive into your business to identify real challenges, operational gaps, and growth opportunities—setting the stage for effective consulting and lasting results.'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Exclusive Growth Consulting',
      description: "We design actionable strategies to accelerate business growth, streamline operations, and unlock your organization's full potential—backed by data, systems, and structured execution."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-avenir font-medium text-gray-900 mb-6">
            Why Choose Our Services
          </h2>
          <p className="text-xl font-freight font-book text-gray-600 max-w-3xl mx-auto">
            At A B Lincoln & Company, we help you build a business that’s structured, self-sustaining, and scalable — so you can lead with clarity, not chaos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#f5f7fa] p-8 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-[#6fa8dc]/20 rounded-2xl flex items-center justify-center mb-6">
                <i className={`${service.icon} text-[#202b5e] text-2xl`}></i>
              </div>
              <h3 className="text-xl font-avenir font-medium text-gray-900 mb-4">{service.title}</h3>
              <p className="font-freight font-book text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
