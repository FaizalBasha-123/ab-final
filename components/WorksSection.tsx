
'use client';

export default function WorksSection() {
  const projects = [
    {
      image: 'https://res.cloudinary.com/dwpzkfzuv/image/upload/v1754649441/In1_b9i8yi.png',
      title: 'Professional Services',
      description: 'Auditing & Accounting, Regulatory Advisory, Business Compliance'
    },
    {
      image: 'https://res.cloudinary.com/dwpzkfzuv/image/upload/v1754649394/In2_eli00q.png',
      title: 'Essential Services',
      description: 'Pest Management, Maintenance Services, Field Support Operations'
    },
    {
      image: 'https://res.cloudinary.com/dwpzkfzuv/image/upload/v1754649442/In3_mifhnc.png',
      title: 'Healthcare & Medical Infrastructure',
      description: 'Medical Furniture Manufacturing, Hospital Equipment Supply'
    },
    {
      image: 'https://res.cloudinary.com/dwpzkfzuv/image/upload/v1754649476/In4_q4iubt.png',
      title: 'Retail & Distribution',
      description: 'Mobile Retail & Exchange, Hardware & Building Materials'
    },
    {
      image: 'https://res.cloudinary.com/dwpzkfzuv/image/upload/v1754649516/In5_pvnlaj.png',
      title: 'Industrial & Manufacturing',
      description: 'Sheet Metal, Container Infrastructure, Custom Fabrication'
    },
    {
      image: 'https://res.cloudinary.com/dwpzkfzuv/image/upload/v1754649477/In6_qqqtaz.png',
      title: 'Construction & Infrastructure',
      description: 'Modular Units, On-Site Facilities, Pre-Fab Container Solutions'
    }
  ];

  return (
    <section id="works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-avenir font-bold text-gray-900 mb-6">
            Industries We’ve Systemized
          </h2>
          <p className="text-xl font-freight text-gray-600 max-w-3xl mx-auto">
            We’ve worked with businesses across diverse industries—from retail and manufacturing to services and compliance—helping them build systems, improve performance, and scale sustainably.
          </p>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-3xl font-avenir font-bold text-gray-900 mb-6">
            Industries We've Worked With
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-avenir font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="font-freight text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
