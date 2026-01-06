
'use client';

export default function ServicesSection() {
  const services = [
    {
      icon: 'bi bi-graph-up-arrow',
      title: 'Strategy Consulting',
      description: 'Turn growth challenges into opportunities with our tailor-made strategies. We help startups, SMEs, and established businesses identify gaps in sales, operations, and revenue, and implement actionable roadmaps to scale efficiently and sustainably.'
    },
    {
      icon: 'bi bi-database-check',
      title: 'Internal Systems & Accountability Mapping',
      description: 'Ensure every role, process, and team aligns with your business goals. We design reporting structures, performance tracking, and accountability frameworks that empower your staff, reduce founder dependency, and drive consistent results.'
    },
    {
      icon: 'bi bi-speedometer2',
      title: 'Startup Acceleration',
      description: 'Fast-track your startup’s growth with our structured frameworks and actionable strategies. We help systematic startups scale efficiently, optimize operations, attract funding, and achieve milestones faster while building a foundation for long-term success.'
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
            At AB Lincoln & Company, we help you build a business that’s structured, self-sustaining, and scalable — so you can lead with clarity, not chaos.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-center md:gap-40 gap-4 mb-8 items-center">
          {services.slice(0, 2).map((service, index) => (
            <div
              key={index}
              data-intro
              className={`bg-[#f5f7fa] p-8 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer animate-fade-in-up ${index === 0 ? 'delay-100' : 'delay-200'} w-full md:w-[40%]`}
            >
              <div className="w-16 h-16 bg-[#6fa8dc]/20 rounded-2xl flex items-center justify-center mb-6">
                <i className={`${service.icon} text-[#202b5e] text-2xl`}></i>
              </div>
              <h3 className="text-xl font-avenir font-medium text-gray-900 mb-4">{service.title}</h3>
              <p className="font-freight font-book text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div
            data-intro
            className="bg-[#f5f7fa] p-8 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer animate-fade-in-up delay-300 w-full md:w-[40%]"
          >
            <div className="w-16 h-16 bg-[#6fa8dc]/20 rounded-2xl flex items-center justify-center mb-6">
              <i className={`${services[2].icon} text-[#202b5e] text-2xl`}></i>
            </div>
            <h3 className="text-xl font-avenir font-medium text-gray-900 mb-4">{services[2].title}</h3>
            <p className="font-freight font-book text-gray-600 leading-relaxed">{services[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
