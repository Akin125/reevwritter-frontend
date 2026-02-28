'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '../blogData';
import { Header, Footer } from "@/app/components";

export default function BlogPost() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-black font-sans relative overflow-hidden">
      {/* Futuristic Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 via-black to-black"></div>
      </div>

      {/* Animated Glow Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="sticky top-0 z-50 backdrop-blur-lg bg-black/50 border-b border-white/10">
        <Header currentPage="/blog" />
      </div>

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        <div className="relative px-4 sm:px-6 py-12 sm:py-16 overflow-hidden">
          <div className="mx-auto max-w-4xl relative">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 mb-8 text-white/70 hover:text-white transition-colors font-medium group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Blog
            </Link>

            {/* Article Header */}
            <article className="relative group">
              <div className="absolute -inset-1 bg-white/20 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>

              <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-6 sm:p-10 border border-white/10 shadow-2xl mb-8">
              <div className="text-center mb-8">
                <div className="text-7xl mb-6">{post.image}</div>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-white/10 text-white/70 rounded-full font-medium border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center justify-center flex-wrap gap-4 text-sm text-white/40 mb-4">
                  <span className="font-semibold text-white/60">{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="h-1 w-20 bg-white rounded-full mx-auto mb-10 shadow-lg shadow-white/30"></div>

              {/* Article Content */}
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-xl text-white/80 leading-relaxed mb-8 font-medium">
                  {post.excerpt}
                </p>

                {/* Dynamic content based on post ID */}
                {post.content ? (
                  post.content.map((section, idx) => (
                    <div key={idx} className="mb-10">
                      {section.heading && (
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 mt-8">
                          {section.heading}
                        </h2>
                      )}
                      {section.paragraphs?.map((para, pIdx) => (
                        <p key={pIdx} className="text-white/70 leading-relaxed mb-4 text-lg">
                          {para}
                        </p>
                      ))}
                      {section.list && (
                        <ul className="list-disc list-inside space-y-3 mb-6 text-white/70 text-lg">
                          {section.list.map((item, lIdx) => (
                            <li key={lIdx} className="ml-4">{item}</li>
                          ))}
                        </ul>
                      )}
                      {section.quote && (
                        <blockquote className="border-l-4 border-white pl-6 py-4 my-6 bg-white/5 rounded-r-xl backdrop-blur-sm">
                          <p className="text-xl italic text-white/80 font-medium">
                            "{section.quote}"
                          </p>
                        </blockquote>
                      )}
                    </div>
                  ))
                ) : (
                  // Default content structure for posts without specific content
                  <>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 mt-8">
                      Introduction
                    </h2>
                    <p className="text-white/70 leading-relaxed mb-6 text-lg">
                      Welcome to this comprehensive guide on {post.title.toLowerCase()}. This article explores the key concepts, strategies, and best practices that will help you understand and implement these ideas effectively in your academic writing journey.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 mt-8">
                      Key Concepts
                    </h2>
                    <p className="text-white/70 leading-relaxed mb-6 text-lg">
                      Understanding the foundational concepts is crucial for success. Our platform leverages advanced AI technology to provide you with intelligent assistance throughout your research and writing process. Each feature is designed to enhance your productivity while maintaining academic integrity.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 mt-8">
                      Practical Applications
                    </h2>
                    <p className="text-white/70 leading-relaxed mb-6 text-lg">
                      Let's explore how you can apply these concepts in real-world scenarios. Whether you're working on a research paper, thesis, or dissertation, these strategies will help you work more efficiently and produce higher-quality academic content.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 mt-8">
                      Best Practices
                    </h2>
                    <ul className="list-disc list-inside space-y-3 mb-6 text-white/70 text-lg">
                      <li className="ml-4">Start with a clear understanding of your research objectives</li>
                      <li className="ml-4">Use structured outlines to organize your thoughts</li>
                      <li className="ml-4">Leverage AI assistance while maintaining your unique voice</li>
                      <li className="ml-4">Review and refine content iteratively</li>
                      <li className="ml-4">Ensure all citations and references are accurate</li>
                    </ul>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 mt-8">
                      Conclusion
                    </h2>
                    <p className="text-white/70 leading-relaxed mb-6 text-lg">
                      By implementing these strategies and utilizing the right tools, you can significantly improve your academic writing process. Thesiora Writer is here to support you every step of the way, from initial planning to final submission.
                    </p>
                  </>
                )}
              </div>

              {/* Author Bio */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/5 border-2 border-white/20 flex items-center justify-center text-2xl backdrop-blur-sm">
                    ✍️
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{post.author}</h3>
                    <p className="text-white/60 text-sm">
                      Contributing writer at Thesiora Writer, specializing in academic writing, AI technology, and research methodologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </article>

            {/* Related Posts */}
            <div className="bg-zinc-900/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {blogPosts
                  .filter(p => p.id !== post.id && p.category === post.category)
                  .slice(0, 2)
                  .map(relatedPost => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.id}`}
                      className="group relative"
                    >
                      <div className="absolute -inset-0.5 bg-white/20 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                      <div className="relative bg-zinc-900/50 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all backdrop-blur-sm">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{relatedPost.image}</div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white/80 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-white/40">{relatedPost.readTime}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            {/* CTA */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-white/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

              <div className="relative text-center mb-8 bg-zinc-900/90 rounded-2xl p-8 sm:p-10 border border-white/10 shadow-2xl">
              <div className="text-5xl mb-6">🚀</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Transform Your Writing?</h2>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Start using Thesiora Writer today and experience the future of academic writing
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/register"
                  className="relative inline-block group/btn"
                >
                  <div className="absolute -inset-1 bg-white/30 rounded-xl blur opacity-40 group-hover/btn:opacity-70 transition duration-300"></div>
                  <div className="relative px-8 py-4 bg-white text-black font-bold rounded-xl transition-all hover:bg-white/90">
                    Get Started Free →
                  </div>
                </Link>
                <Link
                  href="/blog"
                  className="px-8 py-4 bg-zinc-900/50 backdrop-blur-sm text-white font-bold rounded-xl transition-all hover:bg-zinc-800/50 border border-white/20 hover:border-white/40"
                >
                  More Articles
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

