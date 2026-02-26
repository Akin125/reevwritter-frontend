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

          <div className="mx-auto max-w-4xl relative">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 mb-8 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors font-medium"
            >
              <span>←</span> Back to Blog
            </Link>

            {/* Article Headerold */}
            <article className="bg-white dark:bg-zinc-950 backdrop-blur-sm rounded-2xl p-6 sm:p-10 border-2 border-zinc-200 dark:border-zinc-800 shadow-xl mb-8">
              <div className="text-center mb-8">
                <div className="text-7xl mb-6">{post.image}</div>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded-full font-medium border border-zinc-200 dark:border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center justify-center flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  <span className="font-semibold">{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="h-1 w-20 bg-black dark:bg-white rounded-full mx-auto mb-10"></div>

              {/* Article Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8 font-medium">
                  {post.excerpt}
                </p>

                {/* Dynamic content based on post ID */}
                {post.content ? (
                  post.content.map((section, idx) => (
                    <div key={idx} className="mb-10">
                      {section.heading && (
                        <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4 mt-8">
                          {section.heading}
                        </h2>
                      )}
                      {section.paragraphs?.map((para, pIdx) => (
                        <p key={pIdx} className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4 text-lg">
                          {para}
                        </p>
                      ))}
                      {section.list && (
                        <ul className="list-disc list-inside space-y-3 mb-6 text-zinc-700 dark:text-zinc-300 text-lg">
                          {section.list.map((item, lIdx) => (
                            <li key={lIdx} className="ml-4">{item}</li>
                          ))}
                        </ul>
                      )}
                      {section.quote && (
                        <blockquote className="border-l-4 border-black dark:border-white pl-6 py-4 my-6 bg-zinc-50 dark:bg-zinc-900 rounded-r-xl">
                          <p className="text-xl italic text-zinc-700 dark:text-zinc-300 font-medium">
                            "{section.quote}"
                          </p>
                        </blockquote>
                      )}
                    </div>
                  ))
                ) : (
                  // Default content structure for posts without specific content
                  <>
                    <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4 mt-8">
                      Introduction
                    </h2>
                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 text-lg">
                      Welcome to this comprehensive guide on {post.title.toLowerCase()}. This article explores the key concepts, strategies, and best practices that will help you understand and implement these ideas effectively in your academic writing journey.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4 mt-8">
                      Key Concepts
                    </h2>
                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 text-lg">
                      Understanding the foundational concepts is crucial for success. Our platform leverages advanced AI technology to provide you with intelligent assistance throughout your research and writing process. Each feature is designed to enhance your productivity while maintaining academic integrity.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4 mt-8">
                      Practical Applications
                    </h2>
                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 text-lg">
                      Let's explore how you can apply these concepts in real-world scenarios. Whether you're working on a research paper, thesis, or dissertation, these strategies will help you work more efficiently and produce higher-quality academic content.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4 mt-8">
                      Best Practices
                    </h2>
                    <ul className="list-disc list-inside space-y-3 mb-6 text-zinc-700 dark:text-zinc-300 text-lg">
                      <li className="ml-4">Start with a clear understanding of your research objectives</li>
                      <li className="ml-4">Use structured outlines to organize your thoughts</li>
                      <li className="ml-4">Leverage AI assistance while maintaining your unique voice</li>
                      <li className="ml-4">Review and refine content iteratively</li>
                      <li className="ml-4">Ensure all citations and references are accurate</li>
                    </ul>

                    <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4 mt-8">
                      Conclusion
                    </h2>
                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 text-lg">
                      By implementing these strategies and utilizing the right tools, you can significantly improve your academic writing process. Thesiora Writer is here to support you every step of the way, from initial planning to final submission.
                    </p>
                  </>
                )}
              </div>

              {/* Author Bio */}
              <div className="mt-12 pt-8 border-t-2 border-zinc-200 dark:border-zinc-800">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-2xl">
                    ✍️
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2">{post.author}</h3>
                    <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                      Contributing writer at Thesiora Writer, specializing in academic writing, AI technology, and research methodologies.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Related Posts */}
            <div className="bg-white dark:bg-zinc-950 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-zinc-200 dark:border-zinc-800 shadow-xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {blogPosts
                  .filter(p => p.id !== post.id && p.category === post.category)
                  .slice(0, 2)
                  .map(relatedPost => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.id}`}
                      className="group"
                    >
                      <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-6 border-2 border-zinc-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-all">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{relatedPost.image}</div>
                        <h3 className="text-lg font-bold text-black dark:text-white mb-2 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">{relatedPost.readTime}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 rounded-2xl p-8 sm:p-10 border-2 border-zinc-200 dark:border-zinc-800 shadow-xl">
              <div className="text-5xl mb-6">🚀</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4">Ready to Transform Your Writing?</h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
                Start using Thesiora Writer today and experience the future of academic writing
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/register"
                  className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-lg"
                >
                  Get Started Free →
                </Link>
                <Link
                  href="/blog"
                  className="px-8 py-4 bg-white dark:bg-black text-black dark:text-white font-bold rounded-xl transition-all hover:bg-zinc-100 dark:hover:bg-zinc-900 border-2 border-black dark:border-white"
                >
                  More Articles
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

