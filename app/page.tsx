import Link from "next/link";
import { Header, Footer } from "./components";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      {/* Header */}
      <Header currentPage="/" />

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative px-6 py-32 overflow-hidden">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-50/50 to-zinc-50 dark:via-black/50 dark:to-black"></div>
          </div>

          {/* Floating Orbs */}
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-zinc-200/20 dark:bg-zinc-800/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-[15%] w-96 h-96 bg-zinc-300/20 dark:bg-zinc-700/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

          <div className="mx-auto max-w-6xl relative">
            {/* Badge */}
            <div className="mb-8 flex justify-center">
              <div className="group relative inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm px-6 py-3 text-sm font-medium text-zinc-700 shadow-sm hover:shadow-md transition-all dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-900 opacity-75 dark:bg-zinc-50"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-900 dark:bg-zinc-50"></span>
                </span>
              </div>
            </div>

            {/* Main Heading with Gradient Text Effect */}
            <div className="text-center mb-8">
              <h2 className="mb-6 text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
                <span className="inline-block bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent dark:from-zinc-50 dark:via-zinc-300 dark:to-zinc-50">
                  AI-Powered
                </span>
                <br />
                <span className="inline-block relative">
                  <span className="relative z-10 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent dark:from-zinc-50 dark:via-zinc-400 dark:to-zinc-50">
                    Research Writing
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700 opacity-30 blur-2xl -z-10"></div>
                </span>
                <br />
                <span className="inline-block bg-gradient-to-bl from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent dark:from-zinc-50 dark:via-zinc-300 dark:to-zinc-50">
                  Platform
                </span>
              </h2>
            </div>

            {/* Subtitle */}
            <p className="mb-6 text-2xl md:text-3xl font-semibold text-zinc-800 dark:text-zinc-200 text-center max-w-4xl mx-auto">
              Transform Assignment Briefs Into Published-Grade Academic Papers
            </p>

            {/* Description */}
            <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400 text-center max-w-3xl mx-auto leading-relaxed">
              Comprehensive agentic AI platform helping students, researchers, and professionals create evidence-based academic reports through intelligent multi-agent workflows:
              <span className="inline-flex items-center gap-2 mx-1 px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 font-medium text-sm">
                Planner → Research → Writer → Proofreader
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
              <Link
                href="/dashboard"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-10 py-5 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-2xl hover:scale-105 dark:bg-zinc-50 dark:text-zinc-900"
              >
                <span>Start Writing Now</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-900 opacity-0 transition-opacity group-hover:opacity-100 dark:from-zinc-100 dark:to-zinc-200 -z-10"></div>
              </Link>
              <a
                href="#how-it-works"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-zinc-900 bg-transparent px-10 py-5 text-lg font-semibold text-zinc-900 transition-all hover:bg-zinc-900 hover:text-white hover:scale-105 dark:border-zinc-50 dark:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900"
              >
                <span>See How It Works</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Stats Section - Futuristic Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 transition-all hover:shadow-xl hover:scale-105 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
                <div className="absolute top-0 right-0 w-20 h-20 bg-zinc-900/5 dark:bg-zinc-50/5 rounded-full blur-2xl transition-all group-hover:scale-150"></div>
                <div className="relative">
                  <div className="text-5xl font-bold bg-gradient-to-br from-zinc-900 to-zinc-700 bg-clip-text text-transparent dark:from-zinc-50 dark:to-zinc-300">
                    99.5%
                  </div>
                  <div className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">System Uptime</div>
                  <div className="absolute -right-2 -bottom-2 w-16 h-16 border border-zinc-200 dark:border-zinc-800 rounded-full opacity-20"></div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 transition-all hover:shadow-xl hover:scale-105 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
                <div className="absolute top-0 right-0 w-20 h-20 bg-zinc-900/5 dark:bg-zinc-50/5 rounded-full blur-2xl transition-all group-hover:scale-150"></div>
                <div className="relative">
                  <div className="text-5xl font-bold bg-gradient-to-br from-zinc-900 to-zinc-700 bg-clip-text text-transparent dark:from-zinc-50 dark:to-zinc-300">
                    6000+
                  </div>
                  <div className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">Words Per Paper</div>
                  <div className="absolute -right-2 -bottom-2 w-16 h-16 border border-zinc-200 dark:border-zinc-800 rounded-full opacity-20"></div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 transition-all hover:shadow-xl hover:scale-105 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
                <div className="absolute top-0 right-0 w-20 h-20 bg-zinc-900/5 dark:bg-zinc-50/5 rounded-full blur-2xl transition-all group-hover:scale-150"></div>
                <div className="relative">
                  <div className="text-5xl font-bold bg-gradient-to-br from-zinc-900 to-zinc-700 bg-clip-text text-transparent dark:from-zinc-50 dark:to-zinc-300">
                    90%+
                  </div>
                  <div className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">Citation Coverage</div>
                  <div className="absolute -right-2 -bottom-2 w-16 h-16 border border-zinc-200 dark:border-zinc-800 rounded-full opacity-20"></div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 transition-all hover:shadow-xl hover:scale-105 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
                <div className="absolute top-0 right-0 w-20 h-20 bg-zinc-900/5 dark:bg-zinc-50/5 rounded-full blur-2xl transition-all group-hover:scale-150"></div>
                <div className="relative">
                  <div className="text-5xl font-bold bg-gradient-to-br from-zinc-900 to-zinc-700 bg-clip-text text-transparent dark:from-zinc-50 dark:to-zinc-300">
                    4
                  </div>
                  <div className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">Citation Styles</div>
                  <div className="absolute -right-2 -bottom-2 w-16 h-16 border border-zinc-200 dark:border-zinc-800 rounded-full opacity-20"></div>
                </div>
              </div>
            </div>

            {/* Feature Highlights Strip */}
            <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <svg className="w-4 h-4 text-zinc-900 dark:text-zinc-50" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Multi-Agent AI System</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <svg className="w-4 h-4 text-zinc-900 dark:text-zinc-50" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Peer-Reviewed Sources</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <svg className="w-4 h-4 text-zinc-900 dark:text-zinc-50" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Human-in-the-Loop</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <svg className="w-4 h-4 text-zinc-900 dark:text-zinc-50" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Submission Ready</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white px-6 py-24 dark:bg-zinc-950">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h3 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                Comprehensive Platform Features
              </h3>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                A complete ecosystem of intelligent tools designed to streamline every aspect of academic writing,
                from initial research to final submission.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-zinc-200 p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 text-2xl dark:bg-zinc-50">
                  ⚡
                </div>
                <h4 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Single Comprehensive Prompt Generation
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Generate entire academic papers up to 6,000 words in a single prompt using Gemini 2.5 Flash.
                  No fragmented writing sessions or context loss—get coherent, well-structured content from introduction to conclusion.
                </p>
                <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-500">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Unified context throughout entire document</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Consistent academic tone and writing style</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Lightning-fast generation (under 2 minutes)</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-zinc-200 p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 text-2xl dark:bg-zinc-50">
                  📚
                </div>
                <h4 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Smart Multi-Style Citation Management
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Automatic citation generation and formatting in Harvard, APA 7, MLA, and Chicago styles.
                  Combines primary references from OpenAlex with intelligent LLM-generated citations for comprehensive academic support.
                </p>
                <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-500">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>In-text citations with proper formatting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Auto-generated reference list/bibliography</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>90%+ citation coverage across all references</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-zinc-200 p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 text-2xl dark:bg-zinc-50">
                  🔄
                </div>
                <h4 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Intelligent Automatic Chunking
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Seamlessly handles documents exceeding 6,000 words with smart context preservation.
                  Perfect for dissertations, theses, and extensive research papers requiring deep academic coverage.
                </p>
                <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-500">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>No word limit constraints on output</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Context continuity across all sections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Smart section breaks maintain narrative flow</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-zinc-200 p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 text-2xl dark:bg-zinc-50">
                  🎯
                </div>
                <h4 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  AI-Powered Research Planning
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  The Planner Agent analyzes your assignment brief and automatically generates comprehensive structured outlines
                  with subtopics, sections, word count allocations, and targeted research directions.
                </p>
                <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-500">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Hierarchical topic and subtopic structuring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Strategic word count distribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Research direction mapping per section</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-zinc-200 p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 text-2xl dark:bg-zinc-50">
                  📊
                </div>
                <h4 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Rich Academic Content Generation
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Automatically generates data tables, comparison matrices, and chart specifications to enhance research presentation.
                  Each visual element is contextually relevant and properly referenced.
                </p>
                <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-500">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Structured data tables with proper formatting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Chart and graph specifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Visual framework diagrams</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-zinc-200 p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 text-2xl dark:bg-zinc-50">
                  ✏️
                </div>
                <h4 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Advanced Proofreading & Validation
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  The Proofreader Agent validates humanization, flow, readability, and citation traceability before final rendering.
                  Ensures your paper meets academic standards and reads naturally.
                </p>
                <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-500">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Natural tone and language humanization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Logical flow and transition validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Citation integrity and completeness checks</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-zinc-200 p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 text-2xl dark:bg-zinc-50">
                  🔬
                </div>
                <h4 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Autonomous Research Agent
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Automatically gathers peer-reviewed academic sources from Google Scholar and open-access repositories.
                  Extracts, processes, and structures research content with proper metadata for citation-ready integration.
                </p>
                <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-500">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>PDF and HTML content extraction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Vector-based retrieval for relevance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Structured summaries with metadata</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-zinc-200 p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 text-2xl dark:bg-zinc-50">
                  📄
                </div>
                <h4 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Professional Document Rendering
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Upload briefs in DOCX or PDF format. Export completed papers as professionally formatted DOCX documents
                  with table of contents, proper headings, embedded tables, and formatted reference sections.
                </p>
                <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-500">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>DOCX and PDF input support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Professional formatting and structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Instant download, submission-ready</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-zinc-200 p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 text-2xl dark:bg-zinc-50">
                  👥
                </div>
                <h4 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Team Collaboration & Sharing
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Collaborate with team members on research projects. Assign roles (Owner, Editor, Reviewer),
                  share projects, and track progress with comment threads at plan and section levels.
                </p>
                <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-500">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Role-based access control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Real-time collaboration features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Comment and annotation system</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agents Section */}
        <section id="agents" className="px-6 py-24 bg-zinc-100 dark:bg-zinc-900">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h3 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                Four Specialized AI Agents Working in Harmony
              </h3>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                Our multi-agent architecture ensures every aspect of your research paper is handled by a specialized AI system,
                delivering superior quality and academic rigor at every stage.
              </p>
            </div>

            <div className="space-y-12">
              {/* Planner Agent */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 md:p-10 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-zinc-900 text-3xl dark:bg-zinc-50">
                    🎯
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                      1. Planner Agent — Strategic Research Architect
                    </h4>
                    <p className="mb-4 text-lg text-zinc-600 dark:text-zinc-400">
                      Powered by Gemini 2.5 Flash, the Planner Agent is your strategic research architect. It analyzes assignment
                      briefs uploaded in DOCX or PDF format, extracting requirements, objectives, and constraints to create a comprehensive
                      research blueprint.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
                        <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Core Capabilities:</h5>
                        <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                          <li>• Brief analysis and requirement extraction</li>
                          <li>• Hierarchical subtopic generation (2-3 sections each)</li>
                          <li>• Strategic word count allocation</li>
                          <li>• Technical difficulty assessment (1-10 scale)</li>
                          <li>• Citation style identification</li>
                        </ul>
                      </div>
                      <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
                        <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Output Deliverables:</h5>
                        <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                          <li>• Structured JSON plan with metadata</li>
                          <li>• 3 alternative title suggestions</li>
                          <li>• Primary reference list</li>
                          <li>• Preferred journal recommendations</li>
                          <li>• Research direction roadmap</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500">
                      <strong>Generation Time:</strong> Under 20 seconds • <strong>Model:</strong> gemini-2.5-flash
                    </p>
                  </div>
                </div>
              </div>

              {/* Research Agent */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 md:p-10 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-zinc-900 text-3xl dark:bg-zinc-50">
                    🔬
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                      2. Research Agent — Autonomous Literature Gatherer
                    </h4>
                    <p className="mb-4 text-lg text-zinc-600 dark:text-zinc-400">
                      The Research Agent autonomously explores academic databases including Google Scholar and OpenAlex to gather
                      peer-reviewed papers, extract content, and prepare citation-ready structured data. Uses advanced RAG
                      (Retrieval-Augmented Generation) with vector embeddings for precise source retrieval.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
                        <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Research Capabilities:</h5>
                        <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                          <li>• Automated Google Scholar searches</li>
                          <li>• OpenAlex API integration for DOI retrieval</li>
                          <li>• PDF and HTML content extraction</li>
                          <li>• OCR support for scanned documents</li>
                          <li>• Smart chunking with context overlap</li>
                        </ul>
                      </div>
                      <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
                        <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Data Processing:</h5>
                        <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                          <li>• Vector embeddings for semantic search</li>
                          <li>• ChromaDB vector store integration</li>
                          <li>• Deduplication by hash/title</li>
                          <li>• Metadata extraction and indexing</li>
                          <li>• Citation-ready structured outputs</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500">
                      <strong>Storage:</strong> Local PDF cache, vector database • <strong>Compliance:</strong> Open-access focus, respects robots.txt
                    </p>
                  </div>
                </div>
              </div>

              {/* Writer Agent */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 md:p-10 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-zinc-900 text-3xl dark:bg-zinc-50">
                    ✍️
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                      3. Writer Agent — Content Generation Powerhouse
                    </h4>
                    <p className="mb-4 text-lg text-zinc-600 dark:text-zinc-400">
                      The Writer Agent transforms research and plans into comprehensive academic prose. Powered by Gemini 2.5 Flash,
                      it generates per-section content with proper citations, data tables, chart specifications, and maintains
                      academic rigor throughout.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
                        <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Writing Features:</h5>
                        <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                          <li>• Per-section content generation</li>
                          <li>• Strict word count target compliance</li>
                          <li>• 90%+ reference utilization</li>
                          <li>• Automatic in-text citation insertion</li>
                          <li>• Context preservation across sections</li>
                        </ul>
                      </div>
                      <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
                        <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Rich Content:</h5>
                        <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                          <li>• Data tables and comparison matrices</li>
                          <li>• Chart and graph specifications</li>
                          <li>• Framework diagrams</li>
                          <li>• Structured conclusions with synthesis</li>
                          <li>• Formatted reference sections</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500">
                      <strong>Typical Generation:</strong> 90-120 seconds • <strong>Output:</strong> Structured JSON with all content
                    </p>
                  </div>
                </div>
              </div>

              {/* Proofreader Agent */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 md:p-10 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-zinc-900 text-3xl dark:bg-zinc-50">
                    ✏️
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                      4. Proofreader Agent — Quality Assurance Guardian
                    </h4>
                    <p className="mb-4 text-lg text-zinc-600 dark:text-zinc-400">
                      The final quality gate before document rendering. The Proofreader Agent validates humanization, flow,
                      readability, and academic integrity. It ensures your paper reads naturally while maintaining scholarly standards.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
                        <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Validation Checks:</h5>
                        <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                          <li>• Humanization and natural tone</li>
                          <li>• Flow and logical progression</li>
                          <li>• Transition quality between sections</li>
                          <li>• Citation traceability (100% mapping)</li>
                          <li>• Word count compliance verification</li>
                        </ul>
                      </div>
                      <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
                        <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Quality Control:</h5>
                        <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                          <li>• Readability assessment</li>
                          <li>• Passive voice detection</li>
                          <li>• Jargon and clarity checks</li>
                          <li>• Paragraph-level validation</li>
                          <li>• Re-generation prompts for improvements</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500">
                      <strong>Validation Time:</strong> Under 30 seconds • <strong>Output:</strong> Validated JSON with improvement notes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-xl border border-zinc-300 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-800">
              <p className="text-center text-zinc-700 dark:text-zinc-300">
                <strong>Agent Orchestration:</strong> All four agents work in sequence through an intelligent pipeline,
                with each agent's output serving as optimized input for the next. The system ensures data contracts,
                quality gates, and validation at every stage.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="px-6 py-24 bg-white dark:bg-zinc-950">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h3 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                From Brief to Published Paper in Four Steps
              </h3>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                Our streamlined workflow takes you from assignment brief to submission-ready academic paper with minimal effort.
                Each step is powered by specialized AI agents working seamlessly together.
              </p>
            </div>

            <div className="space-y-16">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-zinc-900 text-3xl font-bold text-white dark:bg-zinc-50 dark:text-zinc-900 shadow-lg">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                    Upload Your Assignment Brief
                  </h4>
                  <p className="mb-6 text-lg text-zinc-600 dark:text-zinc-400">
                    Start by uploading your assignment brief in DOCX or PDF format. The Planner Agent immediately begins analyzing
                    your document, extracting key requirements, objectives, and constraints.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                      <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-3">What the Planner Extracts:</h5>
                      <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <li>• Research topic and scope</li>
                        <li>• Word count requirements</li>
                        <li>• Citation style (Harvard, APA, MLA, Chicago)</li>
                        <li>• Target audience and tone</li>
                        <li>• Specific sections or requirements</li>
                        <li>• Submission guidelines and formatting</li>
                      </ul>
                    </div>
                    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                      <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-3">Planner Generates:</h5>
                      <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <li>• Comprehensive outline with 2-3 sections per subtopic</li>
                        <li>• Word count allocation per section</li>
                        <li>• 3 alternative title suggestions</li>
                        <li>• Technical difficulty rating (1-10)</li>
                        <li>• Recommended research sources</li>
                        <li>• Primary reference list with preferred journals</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 rounded-lg border-l-4 border-zinc-900 bg-zinc-100 p-4 dark:border-zinc-50 dark:bg-zinc-800">
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">
                      <strong>⏱️ Time Required:</strong> Less than 20 seconds •
                      <strong> Output:</strong> Interactive structured plan ready for your review and approval
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-zinc-900 text-3xl font-bold text-white dark:bg-zinc-50 dark:text-zinc-900 shadow-lg">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                    Review & Approve Research Plan
                  </h4>
                  <p className="mb-6 text-lg text-zinc-600 dark:text-zinc-400">
                    Receive an interactive plan that you can review, edit, or approve. Make adjustments to section titles,
                    word counts, or research directions. Add or remove subtopics, reorder sections, or provide additional prompts
                    for regeneration.
                  </p>
                  <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                    <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Plan Customization Options:</h5>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-2xl mb-2">✏️</div>
                        <h6 className="font-medium text-zinc-900 dark:text-zinc-50 mb-1">Edit Content</h6>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          Modify subtopic titles, section names, and word count targets
                        </p>
                      </div>
                      <div>
                        <div className="text-2xl mb-2">🔄</div>
                        <h6 className="font-medium text-zinc-900 dark:text-zinc-50 mb-1">Reorganize</h6>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          Drag and drop to reorder subtopics and sections
                        </p>
                      </div>
                      <div>
                        <div className="text-2xl mb-2">➕</div>
                        <h6 className="font-medium text-zinc-900 dark:text-zinc-50 mb-1">Add/Remove</h6>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          Add new sections or remove unnecessary ones
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 rounded-lg border-l-4 border-zinc-900 bg-zinc-100 p-4 dark:border-zinc-50 dark:bg-zinc-800">
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">
                      <strong>🎯 Human-in-the-Loop:</strong> You remain in full control. Approve the plan when you're satisfied,
                      or use prompt-based refinements for regeneration.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-zinc-900 text-3xl font-bold text-white dark:bg-zinc-50 dark:text-zinc-900 shadow-lg">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                    Automated Research & Writing Pipeline
                  </h4>
                  <p className="mb-6 text-lg text-zinc-600 dark:text-zinc-400">
                    Once approved, the Research and Writer agents take over. The Research Agent gathers peer-reviewed sources,
                    while the Writer Agent generates comprehensive content with proper citations, tables, and charts.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="rounded-xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-6 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
                      <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-3 flex items-center gap-2">
                        <span className="text-2xl">🔬</span> Research Phase
                      </h5>
                      <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <li>• Searches Google Scholar & OpenAlex</li>
                        <li>• Downloads open-access papers (respects copyright)</li>
                        <li>• Extracts content via PDF/HTML parsing</li>
                        <li>• Creates vector embeddings for RAG</li>
                        <li>• Structures citation-ready metadata</li>
                        <li>• Validates DOIs and accessibility</li>
                      </ul>
                    </div>
                    <div className="rounded-xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-6 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
                      <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-3 flex items-center gap-2">
                        <span className="text-2xl">✍️</span> Writing Phase
                      </h5>
                      <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <li>• Generates content section by section</li>
                        <li>• Maintains context across 6000+ words</li>
                        <li>• Inserts in-text citations automatically</li>
                        <li>• Creates data tables and chart specs</li>
                        <li>• Ensures 90%+ reference utilization</li>
                        <li>• Validates word count compliance</li>
                      </ul>
                    </div>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                    <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-3 flex items-center gap-2">
                      <span className="text-2xl">✏️</span> Proofreading Phase
                    </h5>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                      The Proofreader Agent validates quality before final rendering:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                        <li>✓ Humanization & natural tone</li>
                        <li>✓ Logical flow between sections</li>
                        <li>✓ Transition quality</li>
                      </ul>
                      <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                        <li>✓ Citation traceability (100%)</li>
                        <li>✓ Readability assessment</li>
                        <li>✓ Word count compliance</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 rounded-lg border-l-4 border-zinc-900 bg-zinc-100 p-4 dark:border-zinc-50 dark:bg-zinc-800">
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">
                      <strong>⏱️ Total Pipeline Time:</strong> 90-120 seconds typical •
                      <strong> Progress Tracking:</strong> Real-time updates for each stage
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-zinc-900 text-3xl font-bold text-white dark:bg-zinc-50 dark:text-zinc-900 shadow-lg">
                  4
                </div>
                <div className="flex-1">
                  <h4 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                    Download Your Professional Document
                  </h4>
                  <p className="mb-6 text-lg text-zinc-600 dark:text-zinc-400">
                    Receive your complete academic paper rendered as a professional DOCX document, ready for submission.
                    The document includes everything required by academic institutions.
                  </p>
                  <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900 mb-6">
                    <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Your Document Includes:</h5>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h6 className="text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2">Structure & Formatting</h6>
                        <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                          <li>✓ Professional title page with metadata</li>
                          <li>✓ Clickable table of contents</li>
                          <li>✓ Hierarchical headings (H1, H2, H3)</li>
                          <li>✓ Proper page numbering</li>
                          <li>✓ Consistent formatting throughout</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2">Content & Citations</h6>
                        <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                          <li>✓ All sections with proper content</li>
                          <li>✓ Embedded data tables</li>
                          <li>✓ Chart specifications/images</li>
                          <li>✓ In-text citations (APA/Harvard/MLA/Chicago)</li>
                          <li>✓ Formatted reference list/bibliography</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="rounded-lg border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-950">
                      <div className="text-3xl mb-2">📥</div>
                      <h6 className="font-medium text-zinc-900 dark:text-zinc-50 mb-1">Instant Download</h6>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400">DOCX format, compatible with all systems</p>
                    </div>
                    <div className="rounded-lg border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-950">
                      <div className="text-3xl mb-2">📄</div>
                      <h6 className="font-medium text-zinc-900 dark:text-zinc-50 mb-1">PDF Export</h6>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400">Optional PDF conversion available</p>
                    </div>
                    <div className="rounded-lg border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-950">
                      <div className="text-3xl mb-2">✅</div>
                      <h6 className="font-medium text-zinc-900 dark:text-zinc-50 mb-1">Ready to Submit</h6>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400">No additional formatting needed</p>
                    </div>
                  </div>
                  <div className="mt-4 rounded-lg border-l-4 border-zinc-900 bg-zinc-100 p-4 dark:border-zinc-50 dark:bg-zinc-800">
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">
                      <strong>📊 Success Rate:</strong> 95%+ documents render perfectly on first attempt •
                      <strong> Support:</strong> Full revision support if needed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-16 rounded-2xl border-2 border-zinc-900 bg-zinc-900 p-8 text-center dark:border-zinc-50 dark:bg-zinc-50">
              <h4 className="mb-4 text-2xl font-bold text-white dark:text-zinc-900">
                Total Time: Brief to Finished Paper in Under 3 Minutes
              </h4>
              <p className="text-lg text-zinc-200 dark:text-zinc-700">
                What traditionally takes weeks of research and writing is now accomplished in minutes,
                with academic quality that meets or exceeds institutional standards.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="px-6 py-24 bg-zinc-100 dark:bg-zinc-900">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h3 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                Trusted by Researchers, Students & Professionals
              </h3>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                Thesiora Writer serves diverse users across academia, business, and professional services.
                See how different personas leverage our platform to accelerate their research and writing workflows.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Student/Academic */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-900 text-3xl dark:bg-zinc-50">
                  🎓
                </div>
                <h4 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  Students & Academic Researchers
                </h4>
                <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                  Generate thesis chapters, dissertations, literature reviews, and research proposals with properly formatted citations
                  in Harvard, APA, MLA, or Chicago styles. Perfect for undergraduate, postgraduate, and doctoral students.
                </p>
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
                  <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Common Use Cases:</h5>
                  <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                    <li>• Master's thesis and PhD dissertations</li>
                    <li>• Literature reviews and systematic reviews</li>
                    <li>• Research proposals and grant applications</li>
                    <li>• Term papers and coursework assignments</li>
                    <li>• Conference paper submissions</li>
                    <li>• Journal article drafts</li>
                  </ul>
                </div>
                <div className="mt-4 rounded-lg border-l-4 border-zinc-900 bg-zinc-100 p-3 dark:border-zinc-50 dark:bg-zinc-800">
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">
                    <strong>Success Story:</strong> "Completed my 15,000-word dissertation literature review in under 2 hours with 98 properly cited sources."
                  </p>
                </div>
              </div>

              {/* HR/Business Analyst */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-900 text-3xl dark:bg-zinc-50">
                  💼
                </div>
                <h4 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  HR & Business Analysts
                </h4>
                <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                  Produce evidence-based internal reports, policy documents, and stakeholder presentations backed by credible research.
                  Generate strategic HR documents with data-driven insights and industry best practices.
                </p>
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
                  <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Common Use Cases:</h5>
                  <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                    <li>• Organizational development reports</li>
                    <li>• Talent management strategy documents</li>
                    <li>• Policy analysis and recommendations</li>
                    <li>• Market research summaries</li>
                    <li>• Competitive intelligence reports</li>
                    <li>• Training needs analysis documents</li>
                  </ul>
                </div>
                <div className="mt-4 rounded-lg border-l-4 border-zinc-900 bg-zinc-100 p-3 dark:border-zinc-50 dark:bg-zinc-800">
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">
                    <strong>Success Story:</strong> "Generated a 6,500-word HR policy document with 45 industry references for board presentation in 90 minutes."
                  </p>
                </div>
              </div>

              {/* Consultant/Agency */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-900 text-3xl dark:bg-zinc-50">
                  📈
                </div>
                <h4 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  Consultants & Agencies
                </h4>
                <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                  Scale your content production with batch generation capabilities. Create client deliverables, white papers,
                  and industry reports with team collaboration features and role-based access control.
                </p>
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
                  <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Common Use Cases:</h5>
                  <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                    <li>• Client project deliverables</li>
                    <li>• Industry white papers and thought leadership</li>
                    <li>• Due diligence reports</li>
                    <li>• Strategic recommendations documents</li>
                    <li>• RFP responses and proposals</li>
                    <li>• Research-backed case studies</li>
                  </ul>
                </div>
                <div className="mt-4 rounded-lg border-l-4 border-zinc-900 bg-zinc-100 p-3 dark:border-zinc-50 dark:bg-zinc-800">
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">
                    <strong>Agency Benefit:</strong> Team collaboration with Owner, Editor, and Reviewer roles. Share projects and track progress with comments.
                  </p>
                </div>
              </div>

              {/* Professional Writer/Editor */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-900 text-3xl dark:bg-zinc-50">
                  ✍️
                </div>
                <h4 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  Professional Writers & Editors
                </h4>
                <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                  Accelerate the drafting and fact-checking process while maintaining full editorial control. Use AI assistance
                  for research organization and synthesis, then apply your professional touch to the output.
                </p>
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
                  <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Common Use Cases:</h5>
                  <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                    <li>• Long-form article drafting</li>
                    <li>• Research synthesis and aggregation</li>
                    <li>• Citation management and verification</li>
                    <li>• Content outlining and structuring</li>
                    <li>• Fact-checking and source validation</li>
                    <li>• Editorial workflow acceleration</li>
                  </ul>
                </div>
                <div className="mt-4 rounded-lg border-l-4 border-zinc-900 bg-zinc-100 p-3 dark:border-zinc-50 dark:bg-zinc-800">
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">
                    <strong>Authorship Preservation:</strong> You remain the author. The tool assists, organizes, and accelerates—it doesn't replace you.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="mt-12 rounded-2xl border-2 border-zinc-900 bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 md:p-10 dark:border-zinc-50 dark:from-zinc-50 dark:to-zinc-100">
              <h4 className="mb-6 text-center text-3xl font-bold text-white dark:text-zinc-900">
                Why Users Choose Thesiora Writer
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-5xl mb-3">⏰</div>
                  <h5 className="font-bold text-white dark:text-zinc-900 mb-2">Save Time</h5>
                  <p className="text-sm text-zinc-300 dark:text-zinc-700">
                    Reduce research and writing time from weeks to hours. Focus on analysis and critical thinking.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-3">🎯</div>
                  <h5 className="font-bold text-white dark:text-zinc-900 mb-2">Ensure Quality</h5>
                  <p className="text-sm text-zinc-300 dark:text-zinc-700">
                    Maintain academic rigor with 90%+ citation coverage and validated references from peer-reviewed sources.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-3">🤝</div>
                  <h5 className="font-bold text-white dark:text-zinc-900 mb-2">Stay in Control</h5>
                  <p className="text-sm text-zinc-300 dark:text-zinc-700">
                    Human-in-the-loop design. Review, edit, and approve at every stage. You're the author, always.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
