'use client';

import { useState } from 'react';
import Link from 'next/link';
import { blogPosts } from './blogData';
import { Header, Footer } from '../components';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'features', name: 'Product Features' },
    { id: 'tips', name: 'Writing Tips' },
    { id: 'research', name: 'Academic Research' },
    { id: 'updates', name: 'Product Updates' },
    { id: 'guides', name: 'How-To Guides' },
  ];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts[0];

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-black">
      {/* Headerold */}
      <Header currentPage="/blog" />

      {/* Main Content */}
      <main className="flex-1">
        <div className="relative px-4 sm:px-6 py-12 sm:py-16 overflow-hidden">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4d4d420_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d420_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,#27272a20_1px,transparent_1px),linear-gradient(to_bottom,#27272a20_1px,transparent_1px)]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-black/50 dark:to-black"></div>
          </div>

          <div className="mx-auto max-w-7xl relative">
            {/* Headerold */}
            <div className="mb-12 sm:mb-16 text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">Thesiora Writer Blog</h1>
              <p className="text-zinc-700 dark:text-zinc-300 text-base sm:text-lg max-w-3xl mx-auto">
                Insights, tutorials, and updates on AI-powered academic writing
              </p>
            </div>

            {/* Featured Post */}
            <div className="mb-12 sm:mb-16">
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 backdrop-blur-sm rounded-2xl p-6 sm:p-10 border-2 border-zinc-200 dark:border-zinc-800 shadow-xl hover:border-black dark:hover:border-white transition-all">
                <div className="flex items-center mb-6">
                  <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-bold">
                    ⭐ Featured Post
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="text-6xl sm:text-7xl mb-6">{featuredPost.image}</div>
                    <h2 className="text-2xl sm:text-4xl font-bold text-black dark:text-white mb-4 leading-tight">{featuredPost.title}</h2>
                    <p className="text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed text-base">{featuredPost.excerpt}</p>
                    <div className="flex items-center flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                      <span className="font-semibold">{featuredPost.author}</span>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-lg inline-block"
                    >
                      Read Full Article →
                    </Link>
                  </div>
                  <div className="hidden md:block">
                    <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 sm:p-8 border-2 border-zinc-200 dark:border-zinc-800 shadow-lg">
                      <h3 className="text-black dark:text-white font-bold text-lg mb-5 flex items-center gap-2">
                        <span className="text-2xl">✨</span>
                        Key Highlights
                      </h3>
                      <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
                        <li className="flex items-start gap-3">
                          <span className="text-black dark:text-white font-bold text-lg">✓</span>
                          <span className="pt-1">Three-agent AI system (Planner, Writer, Proofreader)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-black dark:text-white font-bold text-lg">✓</span>
                          <span className="pt-1">OpenAlex integration for reference validation</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-black dark:text-white font-bold text-lg">✓</span>
                          <span className="pt-1">Support for all major citation styles</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-black dark:text-white font-bold text-lg">✓</span>
                          <span className="pt-1">Human-in-the-loop approach preserves authorship</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-xl font-bold transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg scale-105'
                        : 'bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white border-2 border-zinc-200 dark:border-zinc-800'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {filteredPosts.slice(1).map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="bg-white dark:bg-zinc-950 backdrop-blur-sm rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-black dark:hover:border-white transition-all group shadow-xl hover:shadow-2xl hover:scale-105 duration-200 block"
                >
                  <div className="p-6 sm:p-8">
                    <div className="text-5xl sm:text-6xl mb-6 group-hover:scale-110 transition-transform duration-200">{post.image}</div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded-full font-medium border border-zinc-200 dark:border-zinc-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-3 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-zinc-700 dark:text-zinc-300 mb-5 leading-relaxed text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 mb-5 pb-5 border-b border-zinc-200 dark:border-zinc-800">
                      <span className="font-medium">{post.author}</span>
                      <span className="font-medium">{post.readTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-500 dark:text-zinc-500">{post.date}</span>
                      <span className="text-black dark:text-white hover:text-zinc-600 dark:hover:text-zinc-400 font-bold text-sm transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 backdrop-blur-sm rounded-2xl p-6 sm:p-10 border-2 border-zinc-200 dark:border-zinc-800 mb-12 sm:mb-16 shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <div className="text-5xl mb-6">📬</div>
                <h2 className="text-2xl sm:text-4xl font-bold text-black dark:text-white mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-8 text-lg">
                  Get the latest updates, writing tips, and product news delivered to your inbox every week. Join 10,000+ subscribers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-white dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-700 rounded-xl text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white font-medium"
                  />
                  <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-lg">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-5 font-medium">
                  🔒 No spam. Unsubscribe anytime. We respect your privacy.
                </p>
              </div>
            </div>

            {/* Popular Topics */}
            <div className="bg-white dark:bg-zinc-950 backdrop-blur-sm rounded-2xl p-6 sm:p-10 border-2 border-zinc-200 dark:border-zinc-800 mb-12 sm:mb-16 shadow-xl">
              <h2 className="text-2xl sm:text-4xl font-bold text-black dark:text-white mb-10 text-center">Popular Topics</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-black dark:group-hover:border-white transition-all group-hover:scale-110">
                    <span className="text-4xl">🤖</span>
                  </div>
                  <h3 className="font-bold text-black dark:text-white mb-2 text-lg">AI & Technology</h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Learn about our AI agents and tech stack</p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-black dark:group-hover:border-white transition-all group-hover:scale-110">
                    <span className="text-4xl">✍️</span>
                  </div>
                  <h3 className="font-bold text-black dark:text-white mb-2 text-lg">Writing Tips</h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Improve your academic writing skills</p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-black dark:group-hover:border-white transition-all group-hover:scale-110">
                    <span className="text-4xl">📚</span>
                  </div>
                  <h3 className="font-bold text-black dark:text-white mb-2 text-lg">Research Methods</h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Citations, references, and best practices</p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-black dark:group-hover:border-white transition-all group-hover:scale-110">
                    <span className="text-4xl">🎓</span>
                  </div>
                  <h3 className="font-bold text-black dark:text-white mb-2 text-lg">Student Success</h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Case studies and success stories</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mb-8 bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 rounded-2xl p-8 sm:p-12 border-2 border-zinc-200 dark:border-zinc-800 shadow-xl">
              <div className="text-5xl mb-6">🚀</div>
              <h2 className="text-2xl sm:text-4xl font-bold text-black dark:text-white mb-4">Ready to Start Writing?</h2>
              <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
                Join thousands of students and professionals using AI-powered research assistance to create exceptional academic work
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/register"
                  className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-lg"
                >
                  Get Started Free →
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-4 bg-white dark:bg-black text-black dark:text-white font-bold rounded-xl transition-all hover:bg-zinc-100 dark:hover:bg-zinc-900 border-2 border-black dark:border-white"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footerold */}
      <Footer variant="minimal" />
    </div>
  );
}

