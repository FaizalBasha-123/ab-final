
'use client';

import { useState } from 'react';

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20businesswoman%20portrait%2C%20confident%20female%20CEO%20headshot%2C%20corporate%20executive%20photo%20with%20clean%20background%2C%20professional%20business%20attire&width=80&height=80&seq=avatar-001&orientation=squarish',
      content: 'Working with this team has been transformational for our business. Their expertise in cloud solutions helped us scale efficiently while reducing costs by 40%. The level of support and innovation they bring is unmatched.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'CTO, Digital Solutions Ltd.',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20businessman%20portrait%2C%20confident%20male%20CTO%20headshot%2C%20technology%20executive%20photo%20with%20clean%20background%2C%20modern%20business%20attire&width=80&height=80&seq=avatar-002&orientation=squarish',
      content: 'The custom software they developed for us exceeded all expectations. The project was delivered on time, within budget, and the ongoing support has been exceptional. Highly recommend their services.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      position: 'Founder, InnovateCorp',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20businesswoman%20portrait%2C%20confident%20female%20founder%20headshot%2C%20startup%20executive%20photo%20with%20clean%20background%2C%20contemporary%20business%20style&width=80&height=80&seq=avatar-003&orientation=squarish',
      content: 'Their mobile app development team brought our vision to life perfectly. The user experience is incredible, and our customer engagement has increased by 300% since launch. True professionals!',
      rating: 5
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
          <div className="bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-lg">
            <div className="absolute top-8 left-8 text-6xl text-[#6fa8dc]/30">
              <i className="ri-double-quotes-l"></i>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-xl"></i>
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-freight text-gray-700 leading-relaxed italic">
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
