"use client";
import React from "react";
import Link from 'next/link';

export default function ServiceDetailsSection() {
  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Services Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Cards (updated data, same structure) */}
            <Link href="/ServiceContentSection/organization-restructure" data-intro className="block bg-[#f1f5f9] rounded-xl p-6 shadow-sm hover:shadow-md transition animate-fade-in-up delay-100">
              <h3 className="font-avenir font-bold text-lg text-[#202b5e] mb-2">Organization Restructure</h3>
              <p className="font-freight text-gray-700 mb-2">We realign your business structure to improve clarity, accountability, and efficiency. Build a scalable organization with defined roles and lean reporting systems.</p>
            </Link>
            <Link href="/ServiceContentSection/roles-responsibilities" data-intro className="block bg-[#f1f5f9] rounded-xl p-6 shadow-sm hover:shadow-md transition animate-fade-in-up delay-200">
              <h3 className="font-avenir font-bold text-lg text-[#202b5e] mb-2">Roles & Responsibilities</h3>
              <p className="font-freight text-gray-700 mb-2">We define clear job roles, responsibilities, and ownership across your team. Eliminate confusion, boost accountability, and improve team performance.</p>
            </Link>
            <Link href="/ServiceContentSection/swot-gap-analysis" data-intro className="block bg-[#f1f5f9] rounded-xl p-6 shadow-sm hover:shadow-md transition animate-fade-in-up delay-300">
              <h3 className="font-avenir font-bold text-lg text-[#202b5e] mb-2">SWOT & GAP Analysis</h3>
              <p className="font-freight text-gray-700 mb-2">We assess your business strengths, weaknesses, opportunities, and threats while identifying critical performance gaps. This forms the foundation for strategic improvements and focused growth.</p>
            </Link>
            <Link href="/ServiceContentSection/kpi" data-intro className="block bg-[#f1f5f9] rounded-xl p-6 shadow-sm hover:shadow-md transition animate-fade-in-up delay-100">
              <h3 className="font-avenir font-bold text-lg text-[#202b5e] mb-2">KPI (Key Performance Indicators)</h3>
              <p className="font-freight text-gray-700 mb-2">We define measurable KPIs aligned with your business goals to track progress, improve accountability, and drive consistent performance across teams.</p>
            </Link>
            <Link href="/ServiceContentSection/sop" data-intro className="block bg-[#f1f5f9] rounded-xl p-6 shadow-sm hover:shadow-md transition animate-fade-in-up delay-200">
              <h3 className="font-avenir font-bold text-lg text-[#202b5e] mb-2">SOP (Standard Operating Procedures)</h3>
              <p className="font-freight text-gray-700 mb-2">We create clear, customized SOPs that streamline operations, reduce errors, and ensure consistency—so your business runs smoothly, even without you.</p>
            </Link>
            <Link href="/ServiceContentSection/need-analysis" data-intro className="block bg-[#f1f5f9] rounded-xl p-6 shadow-sm hover:shadow-md transition animate-fade-in-up delay-300">
              <h3 className="font-avenir font-bold text-lg text-[#202b5e] mb-2">Need Analysis</h3>
              <p className="font-freight text-gray-700 mb-2">We deep-dive into your business to identify real challenges, operational gaps, and growth opportunities—setting the stage for effective consulting and lasting results.</p>
            </Link>
          </div>
          <div className="m-3 border-gray-800 border-t">
              <hr/>
          </div>
          <Link href="/ServiceContentSection/growth-consulting" data-intro className="relative bg-gradient-to-br from-[#e0e7ff] via-[#f1f5f9] to-[#c7d2fe] rounded-2xl p-5 shadow-2xl border-2 border-[#202b5e] overflow-hidden grid place-items-center min-h-[200px] block animate-fade-in-up delay-100">
            <div className="grid gap-6 justify-items-center w-full max-w-2xl mx-auto">
              <span className="bg-[#202b5e] text-white px-6 py-2 rounded-full text-lg md:text-xl font-bold shadow-lg border-2 border-white">Exclusive</span>
              <h3 className="font-avenir font-bold text-2xl md:text-3xl text-[#202b5e] tracking-wide drop-shadow-lg text-center">Growth Consulting</h3>
              <p className="font-freight text-gray-700 text-lg md:text-xl leading-relaxed text-center">
                We design actionable strategies to accelerate business growth, streamline operations, and unlock your organization's full potential—backed by data, systems, and structured execution.
              </p>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
