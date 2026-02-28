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
        <div className="flex min-h-screen flex-col bg-black font-sans relative overflow-hidden">
            {/* Futuristic Grid Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 via-black to-black"></div>
            </div>

            {/* Animated Glow Orbs */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-2/3 left-1/2 w-96 h-96 bg-white/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>

            <div className="sticky top-0 z-50 backdrop-blur-lg bg-black/50 border-b border-white/10">
                <Header currentPage="/blog" />
            </div>

            {/* Main Content */}
            <main className="flex-1 relative z-10">
                <div className="relative px-4 sm:px-6 py-12 sm:py-16 overflow-hidden">
                    <div className="mx-auto max-w-7xl relative">
                        {/* Header */}
                        <div className="mb-12 sm:mb-16 text-center">
                            <div className="inline-block mb-4 px-6 py-2 bg-white/5 border border-white/20 rounded-full backdrop-blur-sm">
                                <span className="text-white text-sm font-semibold tracking-wider">KNOWLEDGE BASE</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Thesiora Writer Blog
                            </h1>
                            <p className="text-white/60 text-base sm:text-lg max-w-3xl mx-auto">
                                Insights, tutorials, and updates on AI-powered academic writing
                            </p>
                        </div>

                        {/* Featured Post */}
                        <div className="mb-12 sm:mb-16">
                            <div className="relative group">
                                {/* Glow Effect */}
                                <div className="absolute -inset-1 bg-white/20 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>

                                <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-6 sm:p-10 border border-white/10 shadow-2xl hover:border-white/20 transition-all">
                                    <div className="flex items-center mb-6">
                  <span className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ FEATURED
                  </span>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-8 items-center">
                                        <div>
                                            <div className="text-6xl sm:text-7xl mb-6">{featuredPost.image}</div>
                                            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 leading-tight">{featuredPost.title}</h2>
                                            <p className="text-white/70 mb-6 leading-relaxed text-base">{featuredPost.excerpt}</p>
                                            <div className="flex items-center flex-wrap gap-3 text-sm text-white/40 mb-6">
                                                <span className="font-semibold text-white/60">{featuredPost.author}</span>
                                                <span>•</span>
                                                <span>{featuredPost.date}</span>
                                                <span>•</span>
                                                <span>{featuredPost.readTime}</span>
                                            </div>
                                            <Link
                                                href={`/blog/${featuredPost.id}`}
                                                className="relative inline-block group"
                                            >
                                                <div className="absolute -inset-1 bg-white/30 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                                                <div className="relative px-8 py-4 bg-white text-black font-bold rounded-xl transition-all hover:bg-white/90">
                                                    Read Full Article →
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="bg-zinc-900/50 rounded-xl p-6 sm:p-8 border border-white/10 shadow-xl backdrop-blur-sm">
                                                <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                                                    <span className="text-2xl">✨</span>
                                                    Key Highlights
                                                </h3>
                                                <ul className="space-y-3 text-white/70">
                                                    <li className="flex items-start gap-3 group/item">
                                                        <span className="text-white font-bold text-lg group-hover/item:scale-110 transition-transform">✓</span>
                                                        <span className="pt-1">Three-agent AI system (Planner, Writer, Proofreader)</span>
                                                    </li>
                                                    <li className="flex items-start gap-3 group/item">
                                                        <span className="text-white font-bold text-lg group-hover/item:scale-110 transition-transform">✓</span>
                                                        <span className="pt-1">OpenAlex integration for reference validation</span>
                                                    </li>
                                                    <li className="flex items-start gap-3 group/item">
                                                        <span className="text-white font-bold text-lg group-hover/item:scale-110 transition-transform">✓</span>
                                                        <span className="pt-1">Support for all major citation styles</span>
                                                    </li>
                                                    <li className="flex items-start gap-3 group/item">
                                                        <span className="text-white font-bold text-lg group-hover/item:scale-110 transition-transform">✓</span>
                                                        <span className="pt-1">Human-in-the-loop approach preserves authorship</span>
                                                    </li>
                                                </ul>
                                            </div>
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
                                            className={`relative px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                                                selectedCategory === category.id
                                                    ? 'bg-white text-black shadow-lg shadow-white/20 scale-105'
                                                    : 'bg-zinc-900/50 text-white/80 hover:text-white border border-white/10 hover:border-white/20 hover:bg-zinc-800/50'
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
                                        className="relative group block"
                                    >
                                        {/* Glow Effect on Hover */}
                                        <div className="absolute -inset-0.5 bg-white/20 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                                        <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/30 transition-all shadow-xl group-hover:shadow-2xl group-hover:shadow-white/10 hover:-translate-y-1 duration-300">
                                            <div className="p-6 sm:p-8">
                                                <div className="text-5xl sm:text-6xl mb-6 group-hover:scale-110 transition-transform duration-200">{post.image}</div>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {post.tags.map((tag, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="text-xs px-3 py-1 bg-white/10 text-white/70 rounded-full font-medium border border-white/20"
                                                        >
                          {tag}
                        </span>
                                                    ))}
                                                </div>
                                                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-white/80 transition-colors leading-tight">
                                                    {post.title}
                                                </h3>
                                                <p className="text-white/60 mb-5 leading-relaxed text-sm">
                                                    {post.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between text-xs text-white/40 mb-5 pb-5 border-b border-white/10">
                                                    <span className="font-medium">{post.author}</span>
                                                    <span className="font-medium">{post.readTime}</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm text-white/40">{post.date}</span>
                                                    <span className="text-white hover:text-white/80 font-bold text-sm transition-colors flex items-center gap-2">
                        Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Newsletter Signup */}
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-white/20 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>

                                <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-6 sm:p-10 border border-white/10 mb-12 sm:mb-16 shadow-2xl">
                                    <div className="max-w-3xl mx-auto text-center">
                                        <div className="text-5xl mb-6">📬</div>
                                        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
                                        <p className="text-white/70 mb-8 text-lg">
                                            Get the latest updates, writing tips, and product news delivered to your inbox every week. Join 10,000+ subscribers.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                                            <input
                                                type="email"
                                                placeholder="Enter your email address"
                                                className="flex-1 px-6 py-4 bg-zinc-900/50 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 font-medium"
                                            />
                                            <button className="relative group/btn">
                                                <div className="absolute -inset-1 bg-white/30 rounded-xl blur opacity-30 group-hover/btn:opacity-60 transition duration-300"></div>
                                                <div className="relative px-8 py-4 bg-white text-black font-bold rounded-xl transition-all hover:bg-white/90">
                                                    Subscribe
                                                </div>
                                            </button>
                                        </div>
                                        <p className="text-xs text-white/40 mt-5 font-medium flex items-center justify-center gap-2">
                                            <span>🔒</span> No spam. Unsubscribe anytime. We respect your privacy.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Popular Topics */}
                            <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 sm:p-10 border border-white/10 mb-12 sm:mb-16 shadow-xl">
                                <h2 className="text-2xl sm:text-4xl font-bold text-white mb-10 text-center">Popular Topics</h2>
                                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                                    <div className="text-center group">
                                        <div className="w-20 h-20 bg-white/5 border-2 border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-white/40 group-hover:bg-white/10 transition-all group-hover:scale-110 backdrop-blur-sm">
                                            <span className="text-4xl">🤖</span>
                                        </div>
                                        <h3 className="font-bold text-white mb-2 text-lg">AI & Technology</h3>
                                        <p className="text-sm text-white/60">Learn about our AI agents and tech stack</p>
                                    </div>
                                    <div className="text-center group">
                                        <div className="w-20 h-20 bg-white/5 border-2 border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-white/40 group-hover:bg-white/10 transition-all group-hover:scale-110 backdrop-blur-sm">
                                            <span className="text-4xl">✍️</span>
                                        </div>
                                        <h3 className="font-bold text-white mb-2 text-lg">Writing Tips</h3>
                                        <p className="text-sm text-white/60">Improve your academic writing skills</p>
                                    </div>
                                    <div className="text-center group">
                                        <div className="w-20 h-20 bg-white/5 border-2 border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-white/40 group-hover:bg-white/10 transition-all group-hover:scale-110 backdrop-blur-sm">
                                            <span className="text-4xl">📚</span>
                                        </div>
                                        <h3 className="font-bold text-white mb-2 text-lg">Research Methods</h3>
                                        <p className="text-sm text-white/60">Citations, references, and best practices</p>
                                    </div>
                                    <div className="text-center group">
                                        <div className="w-20 h-20 bg-white/5 border-2 border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-white/40 group-hover:bg-white/10 transition-all group-hover:scale-110 backdrop-blur-sm">
                                            <span className="text-4xl">🎓</span>
                                        </div>
                                        <h3 className="font-bold text-white mb-2 text-lg">Student Success</h3>
                                        <p className="text-sm text-white/60">Case studies and success stories</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Section */}
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-white/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

                                <div className="relative text-center mb-8 bg-zinc-900/90 rounded-2xl p-8 sm:p-12 border border-white/10 shadow-2xl">
                                    <div className="text-5xl mb-6">🚀</div>
                                    <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Ready to Start Writing?</h2>
                                    <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                                        Join thousands of students and professionals using AI-powered research assistance to create exceptional academic work
                                    </p>
                                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                                        <Link
                                            href="/register"
                                            className="relative group/btn inline-block"
                                        >
                                            <div className="absolute -inset-1 bg-white/30 rounded-xl blur opacity-40 group-hover/btn:opacity-70 transition duration-300"></div>
                                            <div className="relative px-8 py-4 bg-white text-black font-bold rounded-xl transition-all hover:bg-white/90">
                                                Get Started Free →
                                            </div>
                                        </Link>
                                        <Link
                                            href="/pricing"
                                            className="px-8 py-4 bg-zinc-900/50 backdrop-blur-sm text-white font-bold rounded-xl transition-all hover:bg-zinc-800/50 border border-white/20 hover:border-white/40"
                                        >
                                            View Pricing
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </main>

            {/* Footer */}
            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    );
}

