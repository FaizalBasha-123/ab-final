
'use client';

import { useState } from 'react';

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Valentin J Machado',
      position: 'Founder & CEO, Ozzon Containers',
      avatar: 'https://res.cloudinary.com/dwpzkfzuv/image/upload/v1755273340/Ozzon_lusrol.jpg',
      content: "As a 10+ year old company, we struggled with daily operations due to unclear job roles. After working with AB Lincoln & Company, we implemented defined Roles & Responsibilities with proper guidelines. This improved our workflow, built accountability, and made hiring and training new employees much easier. We've applied this from executive to manager level—and our overall efficiency has improved significantly.",
    },
    {
      name: 'Pratheep',
      position: 'Founder & CEO, Hardware Gallery',
      avatar: 'https://res.cloudinary.com/dwpzkfzuv/image/upload/v1755271707/TPG_xls98p.jpg',
      content: 'We engaged AB Lincoln & Co to advance our business by implementing systematic changes, establishing company policies, and defining organizational hierarchy. They initiated this process by thoroughly understanding my vision and ensuring that their approach was aligned with it. Throughout the engagement, they provided comprehensive education regarding each step of their methodology, accompanied by a detailed timeline. Additionally, they conducted interviews with all employees and delivered a feedback assessment based on those interactions. This facilitated my understanding of areas requiring improvement within our business and provided a clear framework for subsequent actions. I would endorse their services to individuals or organizations prepared to undertake a restructuring of their business operations.',
    },
    {
      name: 'Pio James',
      position: 'Founder & CEO, Vero Spaces',
      avatar: 'https://res.cloudinary.com/dwpzkfzuv/image/upload/v1755269383/Vero_1_f7fkqg.jpg',
      content: 'Working with AB Lincoln & Company has been a turning point for our manufacturing operations. They helped us clearly define every team member’s roles and responsibilities, establish KPIs that actually drive performance, and design an efficient work process flow on our shop floor. The clarity and structure they brought have improved accountability, reduced bottlenecks, and increased productivity across departments. Their practical, hands-on approach made the implementation seamless, and the results were visible within weeks. We now run our operations with a new level of efficiency and confidence.',
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-avenir font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl font-freight text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-lg h-[630px] md:h-[400px] flex items-center">
            
            <div className="relative z-10 mt-9">
              <div className="text-center mb-8">
                <p className="text-sm md:text-l font-freight text-gray-700 leading-relaxed italic">
                  "{testimonials[currentSlide].content}"
                </p>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[currentSlide].avatar}
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-lg font-avenir font-bold text-gray-900">{testimonials[currentSlide].name}</h4>
                  <p className="font-freight text-gray-600">{testimonials[currentSlide].position}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-[#202b5e] text-white rounded-full flex items-center justify-center hover:bg-[#3a4587] transition-colors cursor-pointer"
              suppressHydrationWarning={true}
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    currentSlide === index ? 'bg-[#202b5e]' : 'bg-gray-300'
                  }`}
                  suppressHydrationWarning={true}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-[#202b5e] text-white rounded-full flex items-center justify-center hover:bg-[#3a4587] transition-colors cursor-pointer"
              suppressHydrationWarning={true}
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
