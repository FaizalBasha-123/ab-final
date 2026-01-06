"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactDetailSection from '../components/ContactDetailSection';

type Props = { serviceId?: string };

export default function ServiceContentSection({ serviceId }: Props) {
  const [pageIndex, setPageIndex] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  // Dynamic hero content mapping
  const heroContent: Record<string, { heading: string; description: string }> = {
    'organization-restructure': {
      heading: 'Organization Restructure',
      description: 'Build a stronger, scalable, and more efficient business structure with expert guidance.'
    },
    'roles-responsibilities': {
      heading: 'Roles & Responsibilities',
      description: 'Achieve clarity and accountability with a custom R&R framework for your team.'
    },
    'swot-gap-analysis': {
      heading: 'SWOT Analysis & GAP Assessment',
      description: 'Gain strategic clarity for smarter business decisions and sustainable growth.'
    },
    'kpi': {
      heading: 'Key Performance Indicators (KPI)',
      description: 'Measure what matters. Manage what grows. Optimize your business performance.'
    },
    'sop': {
      heading: 'Standard Operating Procedure (SOP)',
      description: 'Document, standardize, and excel with practical SOPs for every department.'
    },
    'need-analysis': {
      heading: 'Need Analysis',
      description: 'Identify gaps, unlock potential, and accelerate growth with a tailored need analysis.'
    },
    'growth-consulting': {
      heading: 'Strategic Growth Consulting',
      description: 'From stable to scalable—transform your business into an industry leader.'
    },
  };

  // Determine which service to show in hero
  const heroKey = serviceId || 'organization-restructure';
  const heroHeading = heroContent[heroKey]?.heading || 'Our Services';
  const heroDescription = heroContent[heroKey]?.description || 'Empowering your business with expert consulting, strategic clarity, and operational excellence.';

  // Hero section content
  const hero = (
    <div className="relative overflow-hidden rounded-3xl mb-10 shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-sky-400 to-teal-300 opacity-80 animate-gradient-x" />
      <div className="relative z-10 p-10 md:p-16 text-white text-center flex flex-col items-center justify-center min-h-[220px]">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg tracking-tight mb-2 animate-fade-in">{heroHeading}</h1>
        <p className="text-lg md:text-2xl font-medium max-w-2xl mx-auto animate-fade-in delay-100">{heroDescription}</p>
      </div>
    </div>
  );
  // Pages collection per service. The first entry is the "first page" for card 1.
  // Helper to get readable service name
  const serviceNames: Record<string, string> = {
    'organization-restructure': 'Organization Restructure',
    'roles-responsibilities': 'Roles & Responsibilities',
    'swot-gap-analysis': 'SWOT Analysis & GAP Assessment',
    'kpi': 'Key Performance Indicators (KPI)',
    'sop': 'Standard Operating Procedure (SOP)',
    'need-analysis': 'Need Analysis',
    'growth-consulting': 'Strategic Growth Consulting',
  };

  const pagesMap: Record<string, React.ReactNode[]> = {
    'organization-restructure': [
      <div key="org-restructure" className="max-w-none">
        <h1 className="text-4xl md:text-5xl font-avenir font-bold text-[#202b5e] mb-4">Organization Restructure</h1>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Build a Stronger, Scalable, and More Efficient Business Structure</h2>
        <p className="font-freight text-gray-700 text-lg mb-4">Whether you’re a <b>startup preparing for rapid expansion</b> or a <b>running business struggling with operational bottlenecks</b>, your organization’s structure plays a crucial role in determining growth, efficiency, and profitability. At <b>AB Lincoln & Company</b> as a <b>Management Consulting Company</b>, we specialize in helping businesses restructure for maximum performance.</p>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Why Organization Restructure Matters</h2>
        <ul className="list-disc ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2">Confusion in roles and responsibilities</li>
          <li className="font-freight text-gray-700 text-base mb-2">Over-dependence on the founder or a few key people</li>
          <li className="font-freight text-gray-700 text-base mb-2">Lack of accountability and performance tracking</li>
          <li className="font-freight text-gray-700 text-base mb-2">Slower decision-making and execution delays</li>
          <li className="font-freight text-gray-700 text-base mb-2">Difficulty in scaling operations</li>
        </ul>
        <p className="font-freight text-gray-700 text-lg mb-4">A well-planned restructure ensures the right people are in the right roles, workflows are streamlined, and decision-making is faster—paving the way for <b>sustainable growth</b>.</p>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Our Approach to Restructuring</h2>
        <ol className="list-decimal ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2"><b>Business Diagnosis</b> – Identify gaps in current structure, workflows, and accountability.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Role Clarity & R&R</b> – Redefine job descriptions, reporting lines, and responsibilities.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Process Alignment</b> – Streamline operations with clear SOPs and KPIs.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Change Management</b> – Ensure smooth transition with minimal disruption.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Scalability Roadmap</b> – Create a structure that supports future growth without chaos.</li>
        </ol>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Who Should Consider Restructuring?</h2>
        <ul className="list-disc ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2">Startups ready to scale but without formal systems in place</li>
          <li className="font-freight text-gray-700 text-base mb-2">Established businesses facing stagnation or inefficiencies</li>
          <li className="font-freight text-gray-700 text-base mb-2">Companies preparing for mergers, expansions, or leadership changes</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">The Result?</h2>
        <ul className="list-disc ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2">Increased productivity and accountability</li>
          <li className="font-freight text-gray-700 text-base mb-2">Faster decision-making</li>
          <li className="font-freight text-gray-700 text-base mb-2">Reduced founder/owner dependency</li>
          <li className="font-freight text-gray-700 text-base mb-2">A scalable structure ready for the next phase of growth</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Let’s Build Your Business for the Future</h2>
        <p className="font-freight text-gray-700 text-lg mb-4">Don’t let an outdated or unclear structure hold your business back. <b>AB Lincoln & Company</b> helps you create a framework that drives efficiency, accountability, and growth.</p>
            <div className="text-center mb-16">
                  <h3 className="text-2xl font-avenir font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                  <p className="font-freight text-gray-700 mb-6 max-w-xl mx-auto">
                    Schedule a consultation and discover how we can transform your business with our proven process and guaranteed results.
                  </p>
                  <button
                    className="bg-[#202b5e] text-white font-avenir font-bold py-4 px-8 rounded-lg hover:bg-[#3a4587] transition-colors"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setSelectedService(serviceNames[serviceId ?? 'organization-restructure'] ?? 'Service');
                      setShowContactModal(true);
                    }}
                  >
                    Schedule a Consultation
                  </button>
            </div>
        </div>
    ],
    'roles-responsibilities': [
      <div key="roles" className="max-w-none">
        <h1 className="text-4xl md:text-5xl font-avenir font-bold text-[#202b5e] mb-4">Roles & Responsibilities (R&R)</h1>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Clarity That Drives Performance</h2>
        <p className="font-freight text-gray-700 text-lg mb-4">One of the most common reasons businesses—whether <b>startups</b> or <b>established enterprises</b>—struggle with productivity is unclear <b>Roles & Responsibilities</b>. Without defined expectations, employees work in silos, tasks overlap, and accountability disappears. At <b>AB Lincoln & Company</b> as a <b>Management Consulting Company</b>, we help you design and implement a clear R&R framework that ensures every person knows exactly <b>what to do</b>, <b>how</b> to do it, and <b>who</b> to report to.</p>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Why Clear R&R is Essential</h2>
        <ul className="list-disc ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2">Overlapping tasks and wasted effort</li>
          <li className="font-freight text-gray-700 text-base mb-2">Delays due to unclear ownership of work</li>
          <li className="font-freight text-gray-700 text-base mb-2">Employee frustration and demotivation</li>
          <li className="font-freight text-gray-700 text-base mb-2">Poor performance tracking</li>
          <li className="font-freight text-gray-700 text-base mb-2">Founder/manager burnout from micromanagement</li>
        </ul>
        <p className="font-freight text-gray-700 text-lg mb-4">When R&R is clearly documented, <b>every employee works with purpose, accountability, and alignment to business goals</b>.</p>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Our R&R Development Process</h2>
        <ol className="list-decimal ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2"><b>Business Role Mapping</b> – Identify all functions and job titles required.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Responsibility Definition</b> – Assign specific duties for each role.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Reporting Structure</b> – Establish clear reporting lines and escalation points.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Performance Alignment</b> – Link responsibilities with measurable KPIs.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Implementation & Training</b> – Ensure team-wide understanding and adoption.</li>
        </ol>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Who Needs This?</h2>
        <ul className="list-disc ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2">Startups building their first team</li>
          <li className="font-freight text-gray-700 text-base mb-2">Growing companies experiencing role confusion</li>
          <li className="font-freight text-gray-700 text-base mb-2">Businesses with high employee turnover</li>
          <li className="font-freight text-gray-700 text-base mb-2">Organizations preparing for expansion or restructuring</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Benefits You Can Expect</h2>
        <ul className="list-disc ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2">Clear accountability across the organization</li>
          <li className="font-freight text-gray-700 text-base mb-2">Higher productivity with reduced task overlap</li>
          <li className="font-freight text-gray-700 text-base mb-2">Better team coordination and communication</li>
          <li className="font-freight text-gray-700 text-base mb-2">Improved employee satisfaction and retention</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Let’s Define Success for Every Role</h2>
        <p className="font-freight text-gray-700 text-lg mb-4">At <b>AB Lincoln & Company</b>, we transform workplace chaos into structured efficiency with a solid R&R framework. The result? <b>A high-performing team that drives business growth</b>.</p>
            <div className="text-center mb-16">
                  <h3 className="text-2xl font-avenir font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                  <p className="font-freight text-gray-700 mb-6 max-w-xl mx-auto">
                    Schedule a consultation and discover how we can transform your business with our proven process and guaranteed results.
                  </p>
                  <button
                    className="bg-[#202b5e] text-white font-avenir font-bold py-4 px-8 rounded-lg hover:bg-[#3a4587] transition-colors"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setSelectedService(serviceNames[serviceId ?? 'roles-responsibilities'] ?? 'Service');
                      setShowContactModal(true);
                    }}
                  >
                    Schedule a Consultation
                  </button>
            </div>
        </div>
    ],
    'swot-gap-analysis': [
      <div key="swot" className="max-w-none">
        <h1 className="text-4xl md:text-5xl font-avenir font-bold text-[#202b5e] mb-4">SWOT Analysis & GAP Assessment</h1>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Strategic Clarity for Smarter Business Decisions</h2>
        <p className="font-freight text-gray-700 text-lg mb-4">Whether you are a <b>startup shaping your business plan</b> or an <b>established company looking to scale</b>, you need a clear picture of where you stand today and where you want to be tomorrow. At <b>AB Lincoln & Company</b> as a <b>Management Consulting Company</b>, our SWOT Analysis & GAP Assessment services give you a structured, fact-based foundation to make better business decisions and achieve sustainable growth.</p>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Why SWOT & GAP Analysis Matter</h2>
        <ul className="list-disc ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2">Their <b>true strengths</b> that can be leveraged for growth</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Weaknesses</b> that limit performance and profitability</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Opportunities</b> they could be missing in the market</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Threats</b> that could disrupt their business</li>
          <li className="font-freight text-gray-700 text-base mb-2">The <b>gap</b> between current capabilities and desired outcomes</li>
        </ul>
        <p className="font-freight text-gray-700 text-lg mb-4">Without this clarity, decision-making becomes guesswork—and growth slows down.</p>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Our Proven Approach</h2>
        <ol className="list-decimal ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2"><b>Discovery & Data Collection</b> – Understand your business, market, and operations.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>SWOT Analysis</b> – Identify strengths, weaknesses, opportunities, and threats.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>GAP Assessment</b> – Compare your current state with industry benchmarks and your future goals.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Actionable Insights</b> – Develop strategies to close gaps and capitalize on strengths.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Implementation Roadmap</b> – Prioritize initiatives for quick wins and long-term gains.</li>
        </ol>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Who Benefits from This Service?</h2>
        <ul className="list-disc ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2">Startups preparing for investment or market entry</li>
          <li className="font-freight text-gray-700 text-base mb-2">Established companies aiming for expansion or diversification</li>
          <li className="font-freight text-gray-700 text-base mb-2">Businesses facing competitive or operational challenges</li>
          <li className="font-freight text-gray-700 text-base mb-2">Organizations planning restructuring or process improvements</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Key Benefits</h2>
        <ul className="list-disc ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2">Objective view of your business health</li>
          <li className="font-freight text-gray-700 text-base mb-2">Strategic clarity for confident decision-making</li>
          <li className="font-freight text-gray-700 text-base mb-2">Focused growth initiatives</li>
          <li className="font-freight text-gray-700 text-base mb-2">Reduced risks and faster problem-solving</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Turn Insights into Action</h2>
        <p className="font-freight text-gray-700 text-lg mb-4">At <b>AB Lincoln & Company</b>, we don’t just hand you a report—we give you <b>clear, actionable steps</b> to strengthen your position, close performance gaps, and accelerate growth.</p>
            <div className="text-center mb-16">
                  <h3 className="text-2xl font-avenir font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                  <p className="font-freight text-gray-700 mb-6 max-w-xl mx-auto">
                    Schedule a consultation and discover how we can transform your business with our proven process and guaranteed results.
                  </p>
                  <button
                    className="bg-[#202b5e] text-white font-avenir font-bold py-4 px-8 rounded-lg hover:bg-[#3a4587] transition-colors"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setSelectedService(serviceNames[serviceId ?? 'swot-gap-analysis'] ?? 'Service');
                      setShowContactModal(true);
                    }}
                  >
                    Schedule a Consultation
                  </button>
            </div>
        </div>
    ],
    'kpi': [
      <div key="kpi" className="max-w-none">
        <h1 className="text-4xl md:text-5xl font-avenir font-bold text-[#202b5e] mb-4">Key Performance Indicators (KPI)</h1>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Measure What Matters. Manage What Grows.</h2>
        <p className="font-freight text-gray-700 text-lg mb-4">In business, what gets measured gets managed—and what gets managed grows. At <b>AB Lincoln & Company</b>, our Key Performance Indicator (KPI) Consulting helps you define, track, and optimize the metrics that truly drive business success.</p>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Why KPIs Are Critical for Business Growth</h2>
        <ul className="list-disc ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2">Misaligned goals between teams and leadership</li>
          <li className="font-freight text-gray-700 text-base mb-2">Poor decision-making due to incomplete or irrelevant data</li>
          <li className="font-freight text-gray-700 text-base mb-2">Wasted resources on non-impactful activities</li>
          <li className="font-freight text-gray-700 text-base mb-2">Missed opportunities for growth</li>
        </ul>
        <p className="font-freight text-gray-700 text-lg mb-4">The right KPIs, tracked consistently, create focus, accountability, and measurable results.</p>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Our KPI Development Process</h2>
        <ol className="list-decimal ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2"><b>Goal Alignment</b> – Understand your business objectives and strategic priorities.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>KPI Identification</b> – Select meaningful, industry-relevant metrics.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>System Integration</b> – Set up tools and dashboards for real-time tracking.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Performance Benchmarking</b> – Compare against industry standards and past results.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Continuous Improvement</b> – Review, refine, and adapt KPIs as your business evolves.</li>
        </ol>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Types of KPIs We Help You Create</h2>
        <ul className="list-disc ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2"><b>Financial KPIs</b> – Revenue growth, profit margins, cost efficiency</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Operational KPIs</b> – Production output, delivery timelines, quality control</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Sales & Marketing KPIs</b> – Lead conversion rate, customer acquisition cost, ROI</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>HR & Team KPIs</b> – Employee productivity, retention, training effectiveness</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Who Should Use KPI Consulting?</h2>
        <ul className="list-disc ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2">Startups preparing for funding or scale-up</li>
          <li className="font-freight text-gray-700 text-base mb-2">Growing SMEs looking for performance visibility</li>
          <li className="font-freight text-gray-700 text-base mb-2">Established businesses aiming to improve accountability</li>
          <li className="font-freight text-gray-700 text-base mb-2">Organizations planning strategic restructuring</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Key Benefits</h2>
        <ul className="list-disc ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2">Clear performance tracking at every level of the organization</li>
          <li className="font-freight text-gray-700 text-base mb-2">Data-driven decision-making</li>
          <li className="font-freight text-gray-700 text-base mb-2">Improved productivity and accountability</li>
          <li className="font-freight text-gray-700 text-base mb-2">Faster identification of growth opportunities and problem areas</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Turn Data into Decisions</h2>
        <p className="font-freight text-gray-700 text-lg mb-4">At <b>AB Lincoln & Company</b>, we transform raw data into powerful business insights. Our KPI consulting ensures you measure the right things—so you can manage them better and grow faster.</p>
            <div className="text-center mb-16">
                  <h3 className="text-2xl font-avenir font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                  <p className="font-freight text-gray-700 mb-6 max-w-xl mx-auto">
                    Schedule a consultation and discover how we can transform your business with our proven process and guaranteed results.
                  </p>
                  <button
                    className="bg-[#202b5e] text-white font-avenir font-bold py-4 px-8 rounded-lg hover:bg-[#3a4587] transition-colors"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setSelectedService(serviceNames[serviceId ?? 'kpi'] ?? 'Service');
                      setShowContactModal(true);
                    }}
                  >
                    Schedule a Consultation
                  </button>
            </div>
        </div>
    ],
    'sop': [
      <div key="sop" className="max-w-none">
        <h1 className="text-4xl md:text-5xl font-avenir font-bold text-[#202b5e] mb-4">Standard Operating Procedure (SOP) Consulting</h1>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Document. Standardize. Excel.</h2>
        <p className="font-freight text-gray-700 text-lg mb-4">In today’s competitive market, <b>clarity and consistency</b> are the foundation of business success. Whether you are a <b>startup setting up operations</b> or an <b>established company preparing for ISO certification or audits</b>, a well-crafted Standard Operating Procedure (SOP) is your blueprint for efficiency, compliance, and growth.</p>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Why Every Business Needs SOPs</h2>
        <ul className="list-disc ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2">Consistency – Every team member follows the same process every time.</li>
          <li className="font-freight text-gray-700 text-base mb-2">Efficiency – Reduce delays, confusion, and duplicated effort.</li>
          <li className="font-freight text-gray-700 text-base mb-2">Compliance – Meet ISO, client, and government audit requirements.</li>
          <li className="font-freight text-gray-700 text-base mb-2">Scalability – Replicate success as your business grows.</li>
          <li className="font-freight text-gray-700 text-base mb-2">Quality Control – Maintain product and service standards.</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">SOP Consulting for Indian Companies & Startups</h2>
        <ul className="list-disc ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2"><b>Manufacturing companies</b> – Production processes, quality checks, machine handling</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Service-based businesses</b> – Customer handling, complaint management, workflow documentation</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Startups</b> – SOPs for sales, HR, finance, operations and other departments</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Our SOP Development Process</h2>
        <ol className="list-decimal ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2"><b>Business Process Study</b> – We analyze your current operations.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Workflow Mapping</b> – Identify the most efficient process steps.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Documentation</b> – Write clear, practical SOPs in an easy-to-use format.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Implementation Support</b> – Train your team on following SOPs.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Continuous Review</b> – Update SOPs to match evolving needs.</li>
        </ol>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Why Choose AB Lincoln & Company?</h2>
        <ul className="list-disc ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2"><b>Expertise Across Industries</b> – From manufacturing to retail to service sectors.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Operational Excellence Focus</b> – We align SOPs with productivity and growth goals.</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Practical & Usable</b> – No jargon-filled manuals—only actionable documentation.</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Benefits of SOP Implementation</h2>
        <ul className="list-disc ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2">✔ Smooth onboarding of new employees</li>
          <li className="font-freight text-gray-700 text-base mb-2">✔ Higher efficiency and reduced errors</li>
          <li className="font-freight text-gray-700 text-base mb-2">✔ Stronger compliance and easier audits</li>
          <li className="font-freight text-gray-700 text-base mb-2">✔ Consistent quality across locations and teams</li>
          <li className="font-freight text-gray-700 text-base mb-2">✔ Better accountability and performance tracking</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Let’s Build Your Business Playbook</h2>
        <p className="font-freight text-gray-700 text-lg mb-4">An SOP isn’t just a document—it’s your company’s success manual. With <b>AB Lincoln & Company</b>, you get SOPs that work in the real world, not just on paper.</p>
            <div className="text-center mb-16">
                  <h3 className="text-2xl font-avenir font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                  <p className="font-freight text-gray-700 mb-6 max-w-xl mx-auto">
                    Schedule a consultation and discover how we can transform your business with our proven process and guaranteed results.
                  </p>
                  <button
                    className="bg-[#202b5e] text-white font-avenir font-bold py-4 px-8 rounded-lg hover:bg-[#3a4587] transition-colors"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setSelectedService(serviceNames[serviceId ?? 'sop'] ?? 'Service');
                      setShowContactModal(true);
                    }}
                  >
                    Schedule a Consultation
                  </button>
            </div>
        </div>
    ],
    'need-analysis': [
      <div key="need" className="max-w-none">
        <h1 className="text-4xl md:text-5xl font-avenir font-bold text-[#202b5e] mb-4">Need Analysis</h1>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Identify Gaps. Unlock Potential. Accelerate Growth.</h2>
        <p className="font-freight text-gray-700 text-lg mb-4">Every successful business strategy starts with understanding <b>where you are</b> before deciding where to go. Whether you’re a <b>startup setting up systems</b> or an <b>established company aiming for expansion, or operational excellence</b>, a Need Analysis is the foundation for informed decision-making.</p>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Why Need Analysis is Essential for Your Business</h2>
        <ul className="list-disc ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2">Clear understanding of strengths and weaknesses</li>
          <li className="font-freight text-gray-700 text-base mb-2">Prioritized action plans for efficiency and profitability</li>
          <li className="font-freight text-gray-700 text-base mb-2">Alignment with business goals and compliance requirements</li>
          <li className="font-freight text-gray-700 text-base mb-2">Resource optimization—time, manpower, and budget</li>
          <li className="font-freight text-gray-700 text-base mb-2">Better readiness for ISO certification and audits</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Need Analysis for Indian Companies & Startups</h2>
        <ul className="list-disc ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2"><b>Manufacturing units</b> – Productivity, quality control, safety standards</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Service-based businesses</b> – Customer journey, operational workflow</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Retail & Distribution</b> – Inventory, sales processes, vendor management</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Startups</b> – Foundational systems, SOPs, team structure</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>ISO Certification Preparation</b> – Process gaps and documentation needs</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Our Need Analysis Process</h2>
        <ol className="list-decimal ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2"><b>Business Discovery Session</b> – Understand your vision, goals, and challenges</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Data Collection & Observation</b> – Onsite visits, interviews, and process study</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Gap Identification</b> – Compare current performance vs. desired outcomes</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Solution Roadmap</b> – Practical, prioritized improvement plan</li>
          <li className="font-freight text-gray-700 text-base mb-2"><b>Implementation Support</b> – Optional consulting for executing solutions</li>
        </ol>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Benefits of a Need Analysis</h2>
        <ul className="list-disc ml-6 mb-4">
          <li className="font-freight text-gray-700 text-base mb-2">✔ Pinpoint operational inefficiencies</li>
          <li className="font-freight text-gray-700 text-base mb-2">✔ Reduce unnecessary costs</li>
          <li className="font-freight text-gray-700 text-base mb-2">✔ Strengthen compliance and quality control</li>
          <li className="font-freight text-gray-700 text-base mb-2">✔ Increase productivity and team accountability</li>
          <li className="font-freight text-gray-700 text-base mb-2">✔ Build a clear roadmap for growth</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-3">Get Clarity. Take Action. Grow Faster.</h2>
        <p className="font-freight text-gray-700 text-lg mb-4">A Need Analysis is not an expense—it’s an investment in <b>direction, efficiency, and profitability</b>.</p>
            <div className="text-center mb-16">
                  <h3 className="text-2xl font-avenir font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                  <p className="font-freight text-gray-700 mb-6 max-w-xl mx-auto">
                    Schedule a consultation and discover how we can transform your business with our proven process and guaranteed results.
                  </p>
                  <button
                    className="bg-[#202b5e] text-white font-avenir font-bold py-4 px-8 rounded-lg hover:bg-[#3a4587] transition-colors"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setSelectedService(serviceNames[serviceId ?? 'need-analysis'] ?? 'Service');
                      setShowContactModal(true);
                    }}
                  >
                    Schedule a Consultation
                  </button>
            </div>
        </div>
    ],
    'growth-consulting': [
      <div key="growth" className="max-w-none">
        <h1 className="text-5xl md:text-6xl font-avenir font-extrabold text-[#202b5e] mb-6 drop-shadow-lg tracking-tight bg-gradient-to-r from-blue-600 via-sky-400 to-teal-400 bg-clip-text text-transparent animate-gradient-x">Strategic Growth Consulting</h1>
        <h2 className="text-2xl md:text-3xl font-avenir font-bold text-[#0ea5e9] mb-4">From Stable to Scalable — Transform Your Business into an Industry Leader</h2>
        <p className="font-freight text-gray-700 text-xl mb-6">If your business already has strong systems, processes, and a capable team, you’ve done the hard work of building stability. Now it’s time for the next step—scaling your business strategically to dominate your market, enter new segments, and multiply your revenue.</p>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">Who This Service is For</h3>
            <ul className="list-disc ml-6 text-base font-freight text-gray-700 mb-4">
              <li>Established Businesses with strong operational systems wanting to expand nationally or globally</li>
              <li>Funded Startups ready to move beyond survival and aggressively capture market share</li>
              <li>Industry Leaders aiming to diversify products/services or enter new sectors</li>
              <li>Companies Preparing for IPO or Large-Scale Investments who need a clear growth story</li>
            </ul>
            <h3 className="text-xl font-bold text-blue-700 mb-2">Why Strategic Growth Consulting is Different</h3>
            <ul className="list-disc ml-6 text-base font-freight text-gray-700 mb-4">
              <li>Data-driven market analysis</li>
              <li>Competitive positioning strategies</li>
              <li>Revenue model optimization</li>
              <li>Team structure and leadership alignment</li>
              <li>Brand scaling and market penetration tactics</li>
              <li>Industry-specific expertise—strategies that work in your market, not just theory</li>
              <li>End-to-end support—from strategy creation to on-ground execution</li>
              <li>Focus on profitability, not just revenue—sustainable, long-term growth</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">Our Strategic Growth Consulting Process</h3>
            <ol className="list-decimal ml-6 text-base font-freight text-gray-700 mb-4">
              <li><b>Growth Readiness Audit</b> – Assess your systems, capacity, and market positioning</li>
              <li><b>Opportunity Mapping</b> – Identify untapped markets, product lines, or customer segments</li>
              <li><b>Tailored Strategy Blueprint</b> – Industry-specific, step-by-step scaling plan</li>
              <li><b>Execution Oversight</b> – Hands-on guidance during implementation</li>
              <li><b>Performance Scaling Metrics</b> – Track, refine, and optimize every growth phase</li>
            </ol>
            <h3 className="text-xl font-bold text-blue-700 mb-2">What You Can Expect</h3>
            <ul className="list-disc ml-6 text-base font-freight text-gray-700 mb-4">
              <li>✔ Rapid market share growth</li>
              <li>✔ Increased profitability through optimized models</li>
              <li>✔ Stronger brand positioning against competitors</li>
              <li>✔ Expansion into new regions or product lines</li>
              <li>✔ Scalable systems to handle higher demand</li>
            </ul>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-50 via-sky-100 to-teal-50 rounded-2xl p-6 md:p-10 shadow-lg border border-blue-100 mb-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-2">From Good to Great — The Scaling Mindset</h3>
          <p className="font-freight text-gray-700 text-lg mb-2">Growth is not about doing <b>more of the same</b>. It’s about doing the <b>right things, at the right scale, with the right strategy</b>.</p>
          <p className="font-freight text-gray-700 text-lg mb-2">If your company is ready to invest in serious growth and wants a <b>clear, results-driven scaling plan</b>, we are your partners in making it happen.</p>
          <p className="font-freight text-gray-700 text-lg mb-2">Talk to <b>AB Lincoln & Company</b> today and let’s design your <b>exclusive growth strategy</b> to take your business from <span className="text-blue-700 font-bold">stable</span> to <span className="text-teal-600 font-bold">unstoppable</span>.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-gradient-to-r from-blue-600 via-sky-400 to-teal-400 rounded-2xl p-6 md:p-10 shadow-xl border border-blue-200 animate-gradient-x">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2 drop-shadow">Ready to Scale?</h3>
            <p className="font-freight text-white text-lg mb-2 drop-shadow">Let’s turn your business into an industry leader. Book a <b>free consultation</b> and get a custom roadmap for rapid, sustainable growth.</p>
          </div>
          <a href="/contactdetails" className="inline-block px-8 py-3 bg-white text-blue-700 font-bold rounded-xl shadow hover:bg-blue-50 transition text-lg mt-4 md:mt-0">Book Consultation</a>
        </div>
      </div>
    ],
  };

  const pages = pagesMap[serviceId ?? 'organization-restructure'] ?? [
    <div key="default" className="text-center">
      <h2 className="text-2xl font-bold">{(serviceId || 'Service').replace(/-/g, ' ')}</h2>
      <p className="mt-4 text-gray-600">Details coming soon.</p>
    </div>,
  ];

  const current = pages[Math.min(pageIndex, pages.length - 1)];

  return (
    <>
      <section className="min-h-[60vh] py-10 md:py-16 bg-gradient-to-br from-[#f7fafc] via-[#e0f2fe] to-[#f0fdfa] animate-fade-in">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {hero }
          <div className="bg-white/90 rounded-3xl shadow-2xl p-6 md:p-12 transition-all duration-300 hover:shadow-blue-200 border border-blue-100 animate-fade-in-up">
            {current}

            {/* Simple pager controls (hidden when only one page) */}
            {pages.length > 1 && (
              <div className="flex justify-between mt-10">
                <button
                  onClick={() => setPageIndex(i => Math.max(0, i - 1))}
                  className="px-6 py-2 bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 font-semibold rounded-lg shadow hover:from-blue-100 hover:to-blue-50 transition disabled:opacity-50"
                  disabled={pageIndex === 0}
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setPageIndex(i => Math.min(pages.length - 1, i + 1))}
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-lg shadow hover:from-blue-600 hover:to-teal-500 transition disabled:opacity-50"
                  disabled={pageIndex === pages.length - 1}
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Animations only */}
        <style jsx global>{`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 8s ease-in-out infinite;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: none; }
          }
          .animate-fade-in {
            animation: fade-in 0.8s cubic-bezier(.4,0,.2,1) both;
          }
          .animate-fade-in-up {
            animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both;
          }
        `}</style>
        {/* Contact Modal */}
        {showContactModal && (
          <ContactDetailSection
            serviceInterestedIn={selectedService}
            onClose={() => setShowContactModal(false)}
          />
        )}
      </section>
      <Footer />
    </>
  );
}
