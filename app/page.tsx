"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

/** Wraps children and fades/slides them in the first time they scroll into view. */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
];

const EXPERTISE = [
  {
    title: "AI Engineering & Applied LLMs",
    desc: "Architecting advanced Retrieval-Augmented Generation (RAG) pipelines and semantic indexes for production use cases.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="16" x="4" y="4" rx="2"></rect>
        <rect width="6" height="6" x="9" y="9" rx="1"></rect>
        <path d="M9 1v3"></path><path d="M15 1v3"></path><path d="M9 20v3"></path><path d="M15 20v3"></path>
        <path d="M20 9h3"></path><path d="M20 15h3"></path><path d="M1 9h3"></path><path d="M1 15h3"></path>
      </svg>
    ),
  },
  {
    title: "Deep Learning & Computer Vision",
    desc: "Building and fine-tuning multimodal models across vision, audio, and text using PyTorch and TensorFlow.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="4"></circle>
        <line x1="21.17" y1="8" x2="12" y2="8"></line>
        <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
        <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
      </svg>
    ),
  },
  {
    title: "MLOps & Cloud Pipelines",
    desc: "Moving models from notebooks to production with Docker, FastAPI, and automated CI/CD pipelines on AWS.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
  },
  {
    title: "Core CS & Problem Solving",
    desc: "Strong foundations in Data Structures & Algorithms, OOP design, and internals of DBMS and Operating Systems.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
];

export default function Page() {
  const githubUsername = "silver0cloud"; // Change to your GitHub user

  return (
    <div className="min-h-screen bg-black text-slate-200 font-sans antialiased selection:bg-teal-500/30">
      {/* STICKY NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/5">
        <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#top" className="flex items-center group">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/15 bg-white/5 flex items-center justify-center group-hover:border-teal-500/50 transition-colors">
              {/* Drop your photo at /public/avatar.jpg — falls back to initials if missing */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/avatar.jpeg"
                alt="Yasir Farooqui"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <span className="hidden w-full h-full items-center justify-center text-[11px] font-semibold text-slate-300">
                Yasir Farooqui 
              </span>
            </div>
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm text-slate-400">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <Link
            href="https://drive.google.com/file/d/1772iL-uKzXwVaalYMGvxnlKQrzKdV3ZV/view"
            target="_blank"
            className="text-sm font-medium px-3 py-1.5 rounded-full border border-white/10 text-slate-300 hover:text-white hover:border-teal-500/50 transition-colors"
          >
            Resume
          </Link>
        </nav>
      </header>

      <main id="top" className="max-w-3xl mx-auto px-6 py-16 space-y-24">
        {/* 1. HERO SECTION */}
        <section className="relative space-y-4">
          <div className="absolute inset-x-0 -top-16 h-64 glow-bg pointer-events-none -z-10" />

          <div className="flex items-center space-x-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Yasir Farooqui
            </h1>
          </div>
          <p className="text-xl text-slate-400 font-medium">AI/ML Engineer</p>
          <p className="text-slate-400 leading-relaxed max-w-2xl">
            I build production-ready AI/ML pipelines, custom LLM solutions, and full-stack architectures.
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {["Python", "PyTorch", "Docker", "FastAPI", "RAG", "LLMs", "AWS"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono bg-white/5 text-slate-300 rounded-md border border-white/10 hover:border-teal-500/40 hover:text-teal-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex space-x-5 pt-4 text-slate-400 items-center">
            <Link href="https://github.com/silver0cloud" target="_blank" className="hover:text-white hover:-translate-y-0.5 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </Link>

            <Link href="https://www.linkedin.com/in/yasir-farooqui-201a83376" target="_blank" className="hover:text-white hover:-translate-y-0.5 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </Link>

            <Link href="mailto:farooquiyasir12@gmail.com" className="hover:text-white hover:-translate-y-0.5 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </Link>

            <Link
              href="https://drive.google.com/file/d/1772iL-uKzXwVaalYMGvxnlKQrzKdV3ZV/view"
              target="_blank"
              className="inline-flex items-center space-x-1.5 hover:text-white transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
              <span>Resume</span>
            </Link>
          </div>
        </section>

        {/* 2. ABOUT */}
        <Reveal>
          <section id="about" className="space-y-4 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white tracking-tight">About Me</h2>
            <p className="text-slate-400 leading-relaxed max-w-2xl">
              I'm an AI/ML engineer who enjoys turning research-grade ideas into systems that actually
              ship — from custom model training loops to the infrastructure that keeps them running reliably
              in production. I care about clean pipelines, measurable evaluation, and code that doesn&apos;t
              fall over the moment real traffic hits it.
            </p>
          </section>
        </Reveal>

        {/* 3. CORE EXPERTISE */}
        <Reveal>
          <section id="expertise" className="space-y-6 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white tracking-tight">Core Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {EXPERTISE.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 hover:bg-white/[0.05] hover:border-teal-500/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex items-center space-x-2 text-teal-400">
                    {item.icon}
                    <h3 className="font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* 4. FEATURED PROJECTS */}
        <Reveal>
          <section id="projects" className="space-y-6 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white tracking-tight">Featured Projects</h2>
            <div className="space-y-8">
              <div className="group relative border-l-2 border-white/10 pl-6 space-y-3 hover:border-teal-500/50 transition-colors">
                <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors">
                  <a
                    href="https://github.com/silver0cloud/avavs-dtu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:underline decoration-teal-500/40 underline-offset-4"
                  >
                    AVAVS - Audio Visual Approximation of Video Semantic Space
                    <svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {["Python", "Scikit-Learn", "PyTorch", "TFlow", "ImageBind", "CLIP", "AudioCLIP"].map((t) => (
                    <span key={t} className="text-[11px] font-mono bg-white/5 px-2 py-0.5 rounded text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="text-sm text-slate-400 space-y-1.5 list-disc list-inside">
                  <h4 className="font-semibold text-slate-300 mb-1">
                    Designed a 𝗺𝘂𝗹𝘁𝗶𝗺𝗼𝗱𝗮𝗹 𝗿𝗲𝗽𝗿𝗲𝘀𝗲𝗻𝘁𝗮𝘁𝗶𝗼𝗻 𝗹𝗲𝗮𝗿𝗻𝗶𝗻𝗴 𝗳𝗿𝗮𝗺𝗲𝘄𝗼𝗿𝗸 that determines whether the 𝘀𝗲𝗺𝗮𝗻𝘁𝗶𝗰 𝗲𝗺𝗯𝗲𝗱𝗱𝗶𝗻𝗴 of a 𝗰𝗼𝗺𝗽𝗹𝗲𝘁𝗲 𝘃𝗶𝗱𝗲𝗼 𝘀𝗲𝗾𝘂𝗲𝗻𝗰𝗲 can be accurately approximated using -
                  </h4>
                  <li>A 𝘀𝗶𝗻𝗴𝗹𝗲 𝘀𝘁𝗮𝘁𝗶𝗰 𝘃𝗶𝘀𝘂𝗮𝗹 𝗳𝗿𝗮𝗺𝗲 (or sparse keyframes) extracted from the video.</li>
                  <li>The corresponding 𝗮𝘂𝗱𝗶𝗼 𝘁𝗿𝗮𝗰𝗸 of the clip.</li>
                  <li>Built around the 𝗔𝗩𝗠𝗜𝗧(𝗔𝘂𝗱𝗶𝗼-𝗩𝗶𝘀𝘂𝗮𝗹 𝗠𝗼𝗺𝗲𝗻𝘁𝘀 𝗶𝗻 𝗧𝗶𝗺𝗲) 𝗱𝗮𝘁𝗮𝘀𝗲𝘁, a 𝗺𝘂𝗹𝘁𝗶-𝗰𝗹𝗮𝘀𝘀, 𝗮𝘂𝗱𝗶𝗼-𝘃𝗶𝘀𝘂𝗮𝗹 𝗯𝗲𝗻𝗰𝗵𝗺𝗮𝗿𝗸.</li>
                  <li>Frameworks were evaluated across 𝟰 𝗲𝘃𝗮𝗹𝘂𝗮𝘁𝗶𝗼𝗻 𝗺𝗲𝘁𝗿𝗶𝗰𝘀 - 𝗥𝗲𝗰𝗮𝗹𝗹@𝗞, 𝗠𝗦𝗘, 𝗖𝗼𝘀𝗶𝗻𝗲 𝗦𝗶𝗺𝗶𝗹𝗮𝗿𝗶𝘁𝘆 𝗮𝗻𝗱 𝗠𝗲𝗱𝗶𝗮𝗻 𝗥𝗮𝗻𝗸 (𝗠𝗲𝗱𝗥).</li>
                  <li>Baselines implemented were 𝗖𝗹𝗮𝘀𝘀-𝗠𝗲𝗮𝗻 𝗳𝗹𝗼𝗼𝗿, 𝗡𝗮𝗶𝘃𝗲 𝗟𝗮𝘁𝗲 𝗙𝘂𝘀𝗶𝗼𝗻, 𝗔𝘂𝗱𝗶𝗼𝗖𝗟𝗜𝗣 (𝗢𝗽𝗲𝗻𝗔𝗜) and 𝗜𝗺𝗮𝗴𝗲𝗕𝗶𝗻𝗱 (𝗠𝗲𝘁𝗮 𝗔𝗜).</li>
                </ul>
              </div>

          <div className="group relative border-l-2 border-white/10 pl-6 space-y-3 hover:border-teal-500/50 transition-colors">
                <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors">
                  <a
                    href="https://github.com/silver0cloud/avavs-dtu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:underline decoration-teal-500/40 underline-offset-4"
                  >
                    Country Resilience Stress-Test RAG application
                    <svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {["Python", "Ollama", "PyTorch", "LangChain", "FAISS", "Docker"].map((t) => (
                    <span key={t} className="text-[11px] font-mono bg-white/5 px-2 py-0.5 rounded text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="text-sm text-slate-400 space-y-1.5 list-disc list-inside">
                  <li>Developed a full-stack RAG web application with Streamlit as the frontend</li>
                  <li>Made an end-to-end Retreival Augmented Generation (RAG) architecture with FAISS vector DB</li>
                  <li>Used DeepSeek-R1 model hosted on Ollama to run the system</li>
                  <li>Implemented PDF parsing and real-time data fetching APIs for data extraction and pre-processing</li>
                  <li>HNSW and BM25 search algorithm were added to reduce DB search latency and to make query handling efficient</li>
                  <li>Supervised ML algorithms- Decision Trees, SVMs were used for training. SHAP metric was used to generate
resilience score for 10 countries.</li>
                </ul>
              </div>
            </div>
          </section>
        </Reveal>

        {/* 5. EXPERIENCE — placeholder section, edit with your real roles */}
        <Reveal>
          <section id="experience" className="space-y-6 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white tracking-tight">Experience</h2>
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-teal-500/30 transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-white">Add your role here</h3>
                  <span className="text-xs font-mono text-slate-500">Month Year - Present</span>
                </div>
                <p className="text-sm text-teal-400/90 mt-0.5">Organization Name</p>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  Short description of what you did — impact, tools used, and scale.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* 6. EDUCATION — placeholder, edit with your real details */}
        <Reveal>
          <section id="education" className="space-y-6 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white tracking-tight">Education</h2>
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-teal-500/30 transition-colors">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-white">BTech, Computer Science & Engineering</h3>
                <span className="text-xs font-mono text-slate-500">Aug 2025 - Present</span>
              </div>
              <p className="text-sm text-slate-400 mt-1">Jamia Millia Islamia</p>
              <p className="text-sm text-slate-400 mt-1">CGPA : 8.8</p>
            </div>
          </section>

          <section>
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-teal-500/30 transition-colors">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-white">Cambridge School Srinivaspuri</h3>
                <span className="text-xs font-mono text-slate-500">May 2025</span>
              </div>
              <p className="text-sm text-slate-400 mt-1">New Delhi, Delhi</p>
              <p className="text-sm text-slate-400 mt-1">Percentage: 91.6</p>
            </div>
          </section>
        </Reveal>

        {/* 7. GITHUB ACTIVITY WIDGET */}
        <Reveal>
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">GitHub Activity</h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 overflow-x-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://ghchart.rshah.org/2dd4bf/silver0cloud`}
                alt={`silver0cloud's GitHub contributions chart`}
                className="w-full min-w-[600px]"
              />
            </div>
          </section>
        </Reveal>

        {/* FOOTER */}
        <footer className="pt-8 border-t border-white/10 text-center text-xs text-slate-500 font-mono">
          © {new Date().getFullYear()} Yasir Farooqui
        </footer>
      </main>
    </div>
  );
}
