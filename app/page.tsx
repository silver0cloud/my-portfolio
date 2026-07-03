"use client";

import React from 'react';
// 1. Next.js native navigation link 
import Link from 'next/link'; 

// 2. Clear out any potential named export conflicts from lucide-react
import { Github, Linkedin, Mail, FileText, ExternalLink, Cpu } from 'lucide-react';
import dynamic from 'next/dynamic';

// 3. Clean dynamic integration for the calendar
const GitHubCalendarComponent = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

export default function Page() {
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

          {/* Social Links */}
          <div className="flex space-x-4 pt-4 text-slate-400">
            <Link href="https://github.com" className="hover:text-white transition-colors"><Github size={20} /></Link>
            <Link href="https://linkedin.com" className="hover:text-white transition-colors"><Linkedin size={20} /></Link>
            <Link href="mailto:your@email.com" className="hover:text-white transition-colors"><Mail size={20} /></Link>
            <Link href="#" className="inline-flex items-center space-x-1 hover:text-white transition-colors text-sm font-medium">
              <FileText size={18} /> <span>Resume</span>
            </Link>
          </div>
        </section>

        {/* 2. CORE EXPERTISE */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-teal-400">
                <Cpu size={18} />
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
                gUrrT — Local Video Intelligence Engine <ExternalLink size={14} />
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
          <div className="p-4 bg-slate-900/30 border border-slate-800 rounded-xl flex justify-center overflow-x-auto">
            <GitHubCalendarComponent 
              username="your-github-username" 
              colorScheme="dark"
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
