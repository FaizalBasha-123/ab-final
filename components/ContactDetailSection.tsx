"use client";
import { useState } from 'react';
import React from 'react';

export default function ContactDetailSection({ serviceInterestedIn, onClose }: { serviceInterestedIn: string, onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: serviceInterestedIn || '',
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
        service: serviceInterestedIn || '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Modal style: always fixed at top center
  const modalStyle = {
    position: 'fixed' as const,
    top: '40px',
    transform: 'translateX(-50%)',
    zIndex: 100,
    maxWidth: 'md:40vw , 50vw',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
  <div data-intro className="bg-white rounded-2xl shadow-lg max-w-lg w-full p-8 relative animate-fade-in-up delay-100" style={modalStyle}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        <h2 className="text-2xl font-bold mb-4 text-[#202b5e]">Contact Us</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 font-book border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202b5e] focus:border-transparent text-sm" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 font-book border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202b5e] focus:border-transparent text-sm" required />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 font-book border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202b5e] focus:border-transparent text-sm" minLength={10} maxLength={10} pattern="[0-9]{10}" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
              <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-3 font-book border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202b5e] focus:border-transparent text-sm" required />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In *</label>
            <div className="relative">
              <input type="text" name="service" value={formData.service} readOnly className="w-full px-4 py-3 font-book border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202b5e] focus:border-transparent text-sm bg-gray-100" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
            <textarea name="message" value={formData.message} onChange={handleInputChange} rows={5} maxLength={500} className="w-full px-4 py-3 font-book border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202b5e] focus:border-transparent text-sm resize-none" placeholder="Tell us about your project requirements..." required></textarea>
            <div className="text-right text-sm font-book text-gray-500 mt-1">{formData.message.length}/500 characters</div>
          </div>
          {submitMessage && (
            <div className={`mb-6 p-4 rounded-lg ${submitMessage.includes('error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
              <span className="font-book">{submitMessage}</span>
            </div>
          )}
          <button type="submit" disabled={isSubmitting || formData.message.length > 500} className="w-full bg-[#202b5e] text-white py-4 px-8 rounded-lg font-heavy hover:bg-[#3a4587] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer">
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
