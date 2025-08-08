
'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  } catch (error) {
    setSubmitMessage('There was an error sending your message. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-avenir font-medium text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl font-freight font-book text-gray-600 max-w-3xl mx-auto">
            <span className="text-3xl lg:text-3xl font-freight font-medium text-gray-900 mb-6">Ready to transform your business?</span> <br/>
            Let’s build systems that scale. Reach out today to discuss your challenges, explore solutions, and see how A B Lincoln & Company can help you unlock structured growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-avenir font-medium text-gray-900 mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#6fa8dc]/20 rounded-full flex items-center justify-center mt-1">
                  <i className="ri-map-pin-line text-[#202b5e] text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-avenir font-medium text-gray-900 mb-2">Our Office</h4>
                  <p className="font-freight font-book text-gray-600">Head Office<br/>A B Lincoln & Company<br />Reliquix Pvt. Ltd.<br />18 B, South Raja Street,<br />Thoothukudi - 628001,<br />Tamil Nadu, India.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#6fa8dc]/20 rounded-full flex items-center justify-center mt-1">
                  <i className="ri-phone-line text-[#202b5e] text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-avenir font-medium text-gray-900 mb-2">Mobile Numbers</h4>
                  <p className="font-freight font-book text-gray-600">+91 81221 47405</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#6fa8dc]/20 rounded-full flex items-center justify-center mt-1">
                  <i className="ri-mail-line text-[#202b5e] text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-avenir font-medium text-gray-900 mb-2">Email Addresses</h4>
                  <p className="font-avenir font-book text-gray-600">info@ablincolnco.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#6fa8dc]/20 rounded-full flex items-center justify-center mt-1">
                  <i className="ri-phone-line text-[#202b5e] text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-avenir font-medium text-gray-900 mb-2">Phone Numbers</h4>
                  <p className="font-freight font-book text-gray-600">+91 8883678909</p>
                </div>
              </div>
              

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#6fa8dc]/20 rounded-full flex items-center justify-center mt-1">
                  <i className="ri-time-line text-[#202b5e] text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-avenir font-medium text-gray-900 mb-2">Business Hours</h4>
                  <p className="font-freight font-book text-gray-600">Monday - Saturday: 9:30 AM - 6:30 PM</p>
                </div>
              </div>
            </div>

            
          </div>

          <div className="bg-[#f5f7fa] p-8 rounded-2xl shadow-lg">
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-avenir font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 font-avenir font-book border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202b5e] focus:border-transparent text-sm"
                    required
                    suppressHydrationWarning={true}
                  />
                </div>
                <div>
                  <label className="block text-sm font-avenir font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 font-avenir font-book border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202b5e] focus:border-transparent text-sm"
                    required
                    suppressHydrationWarning={true}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-avenir font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 font-avenir font-book border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202b5e] focus:border-transparent text-sm"
                    suppressHydrationWarning={true}
                  />
                </div>
                <div>
                  <label className="block text-sm font-avenir font-medium text-gray-700 mb-2">Company *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 font-avenir font-book border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202b5e] focus:border-transparent text-sm"
                    suppressHydrationWarning={true}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-avenir font-medium text-gray-700 mb-2">Service Interested In *</label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 font-avenir font-book border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202b5e] focus:border-transparent text-sm appearance-none pr-8"
                    suppressHydrationWarning={true}
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Manufacturing</option>
                    <option value="mobile-apps">Service</option>
                    <option value="cloud-solutions">Trading</option>
                    <option value="data-analytics">Export / Import</option>
                    <option value="cybersecurity">Retail</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-avenir font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  maxLength={500}
                  className="w-full px-4 py-3 font-avenir font-book border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202b5e] focus:border-transparent text-sm resize-none"
                  placeholder="Tell us about your project requirements..."
                  required
                ></textarea>
                <div className="text-right text-sm font-avenir font-book text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              {submitMessage && (
                <div className={`mb-6 p-4 rounded-lg ${submitMessage.includes('error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                  <span className="font-avenir font-book">{submitMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="w-full bg-[#202b5e] text-white py-4 px-8 rounded-lg font-avenir font-heavy hover:bg-[#3a4587] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                suppressHydrationWarning={true}
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
