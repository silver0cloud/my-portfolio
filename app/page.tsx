"use client";

import React from 'react';
import Link from 'next/link'; 

export default function Page() {
  const githubUsername = "your-github-username"; // Change to your GitHub user

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-200 font-sans antialiased selection:bg-teal-500/30">
      <main className="max-w-3xl mx-auto px-6 py-16 space-y-20">
        
        {/* 1. HERO SECTION */}
        <section className="space-y-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-4xl font-bold tracking-tight text-white">Your Name</h1>
            <span className="px-2.5 py-0.5 text-xs font-medium bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20">
              Available for roles
            </span>
          </div>
          <p className="text-xl text-slate-400 font-medium">AI/ML & Backend Developer</p>
          <p className="text-slate-400 leading-relaxed max-w-2xl">
            I build production-ready AI/ML pipelines, custom LLM solutions, and full-stack architectures. 
          </p>
          
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {['Python', 'PyTorch', 'Docker', 'FastAPI', 'RAG', 'LLMs', 'AWS'].map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs font-mono bg-slate-900 text-slate-300 rounded-md border border-slate-800">
                {tech}
              </span>
            ))}
          </div>

          {/* Social Links (Using Raw Inline SVGs to guarantee zero import errors) */}
          <div className="flex space-x-5 pt-4 text-slate-400 items-center">
            {/* GitHub */}
            <Link href={`https://github.com/${githubUsername}`} target="_blank" className="hover:text-white transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </Link>
            
            {/* LinkedIn */}
            <Link href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </Link>
            
            {/* Mail */}
            <Link href="mailto:your@email.com" className="hover:text-white transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </Link>
            
            {/* Resume File link */}
            <Link href="#" className="inline-flex items-center space-x-1.5 hover:text-white transition-colors text-sm font-medium">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
              <span>Resume</span>
            </Link>
          </div>
        </section>

        {/* 2. CORE EXPERTISE */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-teal-400">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M9 1v3"></path><path d="M15 1v3"></path><path d="M9 20v3"></path><path d="M15 20v3"></path><path d="M20 9h3"></path><path d="M20 15h3"></path><path d="M1 9h3"></path><path d="M1 15h3"></path></svg>
                <h3 className="font-semibold text-white">AI Engineering & Applied LLMs</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Architecting advanced Retrieval-Augmented Generation (RAG) and semantic indexes.
              </p>
            </div>
          </div>
        </section>

        {/* 3. FEATURED PROJECTS */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight">Featured Projects</h2>
          <div className="space-y-8">
            <div className="group relative border-l-2 border-slate-800 pl-6 space-y-3 hover:border-teal-500/50 transition-colors">
              <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors flex items-center gap-1.5">
                gUrrT — Local Video Intelligence Engine 
                <svg className="w-3.5 h-3.5 text-slate-500 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {['Python', 'llama.cpp', 'ChromaDB'].map((t) => (
                  <span key={t} className="text-[11px] font-mono bg-slate-900 px-2 py-0.5 rounded text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
              <ul className="text-sm text-slate-400 space-y-1.5 list-disc list-inside">
                <li>Open-source Video-RAG framework with 6K+ PyPI downloads for semantic video understanding.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. GITHUB ACTIVITY WIDGET */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">GitHub Activity</h2>
          <div className="p-4 bg-slate-900/30 border border-slate-800 rounded-xl flex justify-center items-center overflow-x-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={`https://github-readme-stroke-chart.vercel.app/?user=${githubUsername}&theme=dark&background=0b0f19`} 
              alt="GitHub Contributions Chart"
              className="w-full max-w-2xl h-auto object-contain"
            />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 border-t border-slate-900 text-center text-xs text-slate-500 font-mono">
          © {new Date().getFullYear()} Your Name. Built with Next.js & Vercel.
        </footer>

      </main>
    </div>
  );
}
