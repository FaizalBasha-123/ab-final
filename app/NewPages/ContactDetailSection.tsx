"use client";
import { useState } from 'react';
import React from 'react';

export default function ContactDetailPage() {
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
    <main className="bg-[#f5f7fa] min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-10 text-center bg-gradient-to-b from-white to-[#f5f7fa]">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-avenir font-medium text-gray-900 mb-4">Let's Start Your <span className="text-[#202b5e]">Transformation Today</span></h1>
          <p className="text-lg md:text-xl font-freight text-gray-600 mb-8">Ready to unlock your business potential? Our experts are standing by to provide personalized solutions. <span className="font-bold text-[#202b5e]">Get a response within 2 hours, guaranteed.</span></p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-[#e6f0fa] rounded-full mb-3"><i className="ri-time-line text-2xl text-[#202b5e]"></i></div>
              <div className="font-bold text-lg mb-1">2-Hour Response</div>
              <div className="text-gray-600 text-sm text-center">Guaranteed response within 2 business hours</div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-[#e6f0fa] rounded-full mb-3"><i className="ri-chat-1-line text-2xl text-[#202b5e]"></i></div>
              <div className="font-bold text-lg mb-1">Free Consultation</div>
              <div className="text-gray-600 text-sm text-center">No-obligation strategy session worth ₹2,500</div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-[#e6f0fa] rounded-full mb-3"><i className="ri-user-star-line text-2xl text-[#202b5e]"></i></div>
              <div className="font-bold text-lg mb-1">Dedicated Support</div>
              <div className="text-gray-600 text-sm text-center">Personal project manager assigned</div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Form Section */}
      <section className="py-10 max-w-3xl mx-auto">
        <div className="bg-[#f5f7fa] p-8 rounded-2xl shadow-lg">
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 font-book border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202b5e] focus:border-transparent text-sm"
                    required
                    suppressHydrationWarning={true}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 font-book border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202b5e] focus:border-transparent text-sm"
                    required
                    suppressHydrationWarning={true}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 font-book border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202b5e] focus:border-transparent text-sm"
                    required
                    suppressHydrationWarning={true}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 font-book border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202b5e] focus:border-transparent text-sm"
                    required
                    suppressHydrationWarning={true}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In *</label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 font-book border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202b5e] focus:border-transparent text-sm appearance-none pr-8"
                    required
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  maxLength={500}
                  className="w-full px-4 py-3 font-book border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202b5e] focus:border-transparent text-sm resize-none"
                  placeholder="Tell us about your project requirements..."
                  required
                ></textarea>
                <div className="text-right text-sm font-book text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              {submitMessage && (
                <div className={`mb-6 p-4 rounded-lg ${submitMessage.includes('error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                  <span className="font-book">{submitMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="w-full bg-[#202b5e] text-white py-4 px-8 rounded-lg font-heavy hover:bg-[#3a4587] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                suppressHydrationWarning={true}
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>
      </section>

      {/* Commitment Section */}
      <section className="py-10 bg-[#202b5e] text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-avenir font-medium mb-8 text-center">Our Commitment to You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#23306a] rounded-2xl p-6 shadow flex flex-col">
              <div className="font-bold mb-2">2-Hour Response Guarantee</div>
              <div className="text-[#c9d4e9] text-sm mb-2">We respond to all inquiries within 2 business hours</div>
              <div className="text-xs text-[#6fa8dc]">Average response time: 45 minutes</div>
            </div>
            <div className="bg-[#23306a] rounded-2xl p-6 shadow flex flex-col">
              <div className="font-bold mb-2">No-Obligation Consultation</div>
              <div className="text-[#c9d4e9] text-sm mb-2">Free strategy session worth ₹2,500. No pressure, no hidden fees, just honest advice about your technology needs.</div>
              <div className="text-xs text-[#6fa8dc]">Completely free, no strings attached</div>
            </div>
            <div className="bg-[#23306a] rounded-2xl p-6 shadow flex flex-col">
              <div className="font-bold mb-2">Dedicated Project Manager</div>
              <div className="text-[#c9d4e9] text-sm mb-2">Every client gets a dedicated project manager as their single point of contact throughout the entire engagement.</div>
              <div className="text-xs text-[#6fa8dc]">Direct line to your PM 24/7</div>
            </div>
            <div className="bg-[#23306a] rounded-2xl p-6 shadow flex flex-col">
              <div className="font-bold mb-2">Satisfaction Guarantee</div>
              <div className="text-[#c9d4e9] text-sm mb-2">If you're not completely satisfied with our initial consultation, we'll refund any fees plus an additional $500 for your time.</div>
              <div className="text-xs text-[#6fa8dc]">Your satisfaction is guaranteed</div>
            </div>
          </div>
          <div className="bg-[#23306a] rounded-2xl p-8 shadow flex flex-col items-center">
            <h3 className="text-xl font-avenir font-medium mb-4 text-center">Ready to Experience the AB Lincoln Difference?</h3>
            <p className="font-freight text-[#c9d4e9] text-center mb-6">Join hundreds of satisfied clients who have transformed their businesses with our proven expertise. Your success is our mission, and we have the track record to prove it.</p>
            <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
              <button className="bg-white text-[#202b5e] px-6 py-3 rounded-lg font-avenir font-bold hover:bg-[#e6f0fa] transition w-full md:w-auto">Call Now: +91 8883678909</button>
              <button className="bg-[#6fa8dc] text-white px-6 py-3 rounded-lg font-avenir font-bold hover:bg-[#3a4587] transition w-full md:w-auto">Schedule Free Consultation</button>
            </div>
            <div className="flex gap-4 mt-4 text-xs text-[#c9d4e9]">
              <span>No obligation</span>
              <span>•</span>
              <span>2-hour response</span>
              <span>•</span>
              <span>Fully value</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
