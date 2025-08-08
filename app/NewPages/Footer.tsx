
'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Web Development',
      'Mobile Apps',
      'Cloud Solutions',
      'Data Analytics',
      'Cybersecurity',
      'IT Consulting'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Case Studies',
      'News & Blog',
      'Contact'
    ],
    support: [
      'Help Center',
      'Documentation',
      'Community',
      'Training',
      'Status Page',
      'Roadmap'
    ],
    legal: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'GDPR Compliance',
      'Security',
      'Licenses'
    ]
  };

  return (
    <footer className="bg-[#202b5e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="font-['Pacifico'] text-2xl text-[#6fa8dc] mb-6 block">
              AB Lincoln <br></br> & Company
            </Link>
            <p className="font-avenir font-book text-[#c9d4e9] mb-6 leading-relaxed max-w-md">
              Transforming businesses through innovative technology solutions. We're your trusted partner for digital transformation and growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#3a4587] text-[#c9d4e9] rounded-full flex items-center justify-center hover:bg-[#6fa8dc] hover:text-white transition-colors cursor-pointer">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#3a4587] text-[#c9d4e9] rounded-full flex items-center justify-center hover:bg-[#6fa8dc] hover:text-white transition-colors cursor-pointer">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#3a4587] text-[#c9d4e9] rounded-full flex items-center justify-center hover:bg-[#6fa8dc] hover:text-white transition-colors cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#3a4587] text-[#c9d4e9] rounded-full flex items-center justify-center hover:bg-[#6fa8dc] hover:text-white transition-colors cursor-pointer">
                <i className="ri-github-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#3a4587] text-[#c9d4e9] rounded-full flex items-center justify-center hover:bg-[#6fa8dc] hover:text-white transition-colors cursor-pointer">
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-freight font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="font-avenir font-book text-[#c9d4e9] hover:text-[#6fa8dc] transition-colors cursor-pointer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-freight font-medium mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="font-avenir font-book text-[#c9d4e9] hover:text-[#6fa8dc] transition-colors cursor-pointer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-freight font-medium mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href="#" className="font-avenir font-book text-[#c9d4e9] hover:text-[#6fa8dc] transition-colors cursor-pointer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3a4587] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-avenir font-book text-[#c9d4e9] text-sm">
              © {currentYear} TechInnovate Solutions. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              {footerLinks.legal.map((link, index) => (
                <a key={index} href="#" className="font-avenir font-book text-[#c9d4e9] hover:text-[#6fa8dc] transition-colors cursor-pointer">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
