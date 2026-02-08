export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  content?: Array<{
    heading?: string;
    paragraphs?: string[];
    list?: string[];
    quote?: string;
  }>;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Introducing Thesiora Writer: AI-Powered Academic Research Assistant',
    excerpt: 'We\'re excited to announce the launch of Thesiora Writer, a revolutionary platform that combines cutting-edge AI technology with academic rigor. Our three-agent system helps students, researchers, and professionals create comprehensive, properly cited academic documents while maintaining intellectual authenticity and academic integrity.',
    category: 'updates',
    author: 'Product Team',
    date: 'January 28, 2026',
    readTime: '5 min read',
    image: '🚀',
    tags: ['Launch', 'AI', 'Research'],
    content: [
      {
        heading: 'A New Era in Academic Writing',
        paragraphs: [
          'Today marks a significant milestone in the evolution of academic writing tools. Thesiora Writer represents years of research, development, and collaboration with educators, students, and AI experts to create a platform that truly understands the needs of academic writers.',
          'Our mission is simple: empower students and researchers to produce high-quality academic work more efficiently, while maintaining the highest standards of academic integrity and original thinking.'
        ]
      },
      {
        heading: 'The Three-Agent Architecture',
        paragraphs: [
          'At the heart of Thesiora Writer lies our innovative three-agent system. Each agent specializes in a specific aspect of the writing process, working in harmony to deliver exceptional results.'
        ],
        list: [
          'Planner Agent: Analyzes your research topic and creates comprehensive, well-structured outlines',
          'Writer Agent: Transforms outlines into polished academic prose with proper citations',
          'Proofreader Agent: Ensures grammatical perfection, style consistency, and academic tone'
        ]
      },
      {
        heading: 'Why Thesiora Writer?',
        paragraphs: [
          'We built Thesiora Writer to solve real problems that students and researchers face every day. From overcoming writer\'s block to ensuring proper citation formatting, our platform addresses the complete workflow of academic writing.',
          'What sets us apart is our commitment to transparency and academic integrity. We believe AI should assist, not replace, human creativity and critical thinking. Every feature is designed with this principle in mind.'
        ]
      },
      {
        quote: 'The future of academic writing is not about replacing human intelligence, but augmenting it with AI capabilities that handle the tedious aspects, freeing writers to focus on critical thinking and original insights.'
      },
      {
        heading: 'Getting Started',
        paragraphs: [
          'Ready to experience the future of academic writing? Sign up for a free account today and discover how Thesiora Writer can transform your research and writing process. Join thousands of students and professionals who are already creating better academic work, faster.'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'How Our Three-Agent System Works: Planner, Writer, and Proofreader',
    excerpt: 'Deep dive into the revolutionary architecture behind Thesiora Writer. Our Planner Agent analyzes your topic and creates structured outlines, the Writer Agent transforms those outlines into polished academic prose, and the Proofreader Agent ensures grammatical perfection and academic style consistency. Learn how these AI agents collaborate to produce exceptional results.',
    category: 'features',
    author: 'Engineering Team',
    date: 'January 25, 2026',
    readTime: '8 min read',
    image: '🤖',
    tags: ['Technology', 'AI Agents', 'Architecture'],
  },
  {
    id: 3,
    title: '10 Tips for Writing Better Research Briefs',
    excerpt: 'Your research brief is the foundation of great content. Discover how to write clear, specific, and actionable briefs that help our AI agents generate exactly what you need. From defining research scope to specifying citation styles, we cover everything you need to know to maximize your results and save time in the revision process.',
    category: 'tips',
    author: 'Dr. Sarah Mitchell',
    date: 'January 22, 2026',
    readTime: '6 min read',
    image: '📝',
    tags: ['Writing', 'Best Practices', 'Tips'],
  },
  {
    id: 4,
    title: 'Understanding Academic Integrity in the Age of AI',
    excerpt: 'Navigating the ethical use of AI writing assistants in academia requires careful consideration. This comprehensive guide explores institutional policies, ethical frameworks, and best practices for maintaining academic integrity while leveraging AI tools. Learn how to use Thesiora Writer as an assistant, not a replacement for critical thinking.',
    category: 'research',
    author: 'Dr. James Chen',
    date: 'January 20, 2026',
    readTime: '10 min read',
    image: '⚖️',
    tags: ['Ethics', 'Academic Integrity', 'Guidelines'],
  },
  {
    id: 5,
    title: 'New Feature: Real-Time Collaboration for Enterprise Teams',
    excerpt: 'Enterprise users can now collaborate seamlessly with team members in real-time. Our new collaboration features include role-based permissions, threaded comments, version control, and simultaneous editing. Perfect for research teams, writing groups, and supervisor-student collaborations. Discover how these tools transform your workflow.',
    category: 'updates',
    author: 'Product Team',
    date: 'January 18, 2026',
    readTime: '4 min read',
    image: '👥',
    tags: ['Collaboration', 'Enterprise', 'New Feature'],
  },
  {
    id: 6,
    title: 'Complete Guide to Citation Styles: APA, Harvard, MLA, and More',
    excerpt: 'Master the art of academic citations with our comprehensive guide covering all major citation styles. Learn when to use APA (sciences and social sciences), MLA (humanities), Chicago (history and arts), Harvard, IEEE (engineering), and more. Includes examples, common mistakes to avoid, and tips for consistent formatting throughout your document.',
    category: 'guides',
    author: 'Academic Writing Team',
    date: 'January 15, 2026',
    readTime: '12 min read',
    image: '📚',
    tags: ['Citations', 'Academic Writing', 'Reference Guide'],
  },
  {
    id: 7,
    title: 'How to Optimize Your Research Papers for AI Detection Tools',
    excerpt: 'Practical strategies for ensuring your AI-assisted work maintains authenticity and passes AI detection tools. Learn about adding personal voice, incorporating original analysis, balancing AI-generated content with human insight, and techniques for making AI-generated text more natural. Includes tips from academic writing experts.',
    category: 'tips',
    author: 'Dr. Emily Rodriguez',
    date: 'January 12, 2026',
    readTime: '7 min read',
    image: '🔍',
    tags: ['AI Detection', 'Quality', 'Strategies'],
  },
  {
    id: 8,
    title: 'Behind the Scenes: How We Use OpenAlex for Reference Validation',
    excerpt: 'Explore our integration with OpenAlex, the open-access catalog of scholarly papers and authors. Learn how we automatically validate academic references, fetch accurate publication data, ensure DOI accuracy, and maintain the highest standards of citation quality. Our engineering team shares insights into building reliable academic tools.',
    category: 'features',
    author: 'Engineering Team',
    date: 'January 10, 2026',
    readTime: '6 min read',
    image: '🔗',
    tags: ['References', 'OpenAlex', 'Technology'],
  },
  {
    id: 9,
    title: 'Case Study: How Students Cut Research Time by 60% with Thesiora Writer',
    excerpt: 'Real success stories from students who transformed their research process with Thesiora Writer. Graduate student Maria reduced her literature review time from 3 weeks to 1 week. PhD candidate James generated a complete first draft in 2 days instead of 2 weeks. Learn their strategies, workflows, and tips for maximizing efficiency.',
    category: 'research',
    author: 'Customer Success Team',
    date: 'January 8, 2026',
    readTime: '9 min read',
    image: '📊',
    tags: ['Case Study', 'Success Stories', 'Students'],
  },
  {
    id: 10,
    title: 'The Future of Academic Writing: AI as a Research Assistant',
    excerpt: 'Exploring how artificial intelligence is fundamentally transforming academic research and writing while preserving the essential human elements of creativity, critical thinking, and original insight. Join leading academics as they discuss the evolving role of AI in scholarship and what it means for the future of education.',
    category: 'research',
    author: 'Dr. Michael Zhang',
    date: 'January 5, 2026',
    readTime: '11 min read',
    image: '🔮',
    tags: ['Future', 'AI', 'Academia'],
  },
  {
    id: 11,
    title: 'Step-by-Step: Creating Your First Research Paper with Thesiora Writer',
    excerpt: 'Complete walkthrough for beginners taking you from zero to finished paper. Learn how to craft an effective research brief, review and refine the AI-generated outline, customize writing style preferences, integrate your own insights, use the proofreading features, and export your perfectly formatted DOCX file ready for submission.',
    category: 'guides',
    author: 'Tutorial Team',
    date: 'January 3, 2026',
    readTime: '15 min read',
    image: '📖',
    tags: ['Tutorial', 'Getting Started', 'Guide'],
  },
  {
    id: 12,
    title: 'December Product Update: Proofreader Agent and Performance Improvements',
    excerpt: 'Comprehensive recap of our December updates: introducing the intelligent Proofreader Agent with grammar checking and style consistency features, 40% faster content generation, improved citation accuracy, enhanced mobile experience, bug fixes, and stability improvements. Plus a sneak peek at what\'s coming in January 2026.',
    category: 'updates',
    author: 'Product Team',
    date: 'January 1, 2026',
    readTime: '5 min read',
    image: '🎉',
    tags: ['Product Update', 'Proofreader', 'Performance'],
  },
  {
    id: 13,
    title: 'Writing a Literature Review: Advanced Techniques and Best Practices',
    excerpt: 'Master the art of crafting comprehensive literature reviews that synthesize existing research effectively. Learn how to identify research gaps, organize themes logically, critically analyze sources, maintain academic voice, and use Thesiora Writer\'s Planner Agent to structure complex literature reviews across multiple disciplines.',
    category: 'tips',
    author: 'Dr. Patricia Williams',
    date: 'December 28, 2025',
    readTime: '14 min read',
    image: '📑',
    tags: ['Literature Review', 'Research', 'Academic Writing'],
  },
  {
    id: 14,
    title: 'From Outline to Final Draft: The Complete Writing Workflow',
    excerpt: 'Follow the optimal workflow for academic writing success. This comprehensive guide covers planning your research, creating detailed outlines, generating initial drafts, iterative revision strategies, incorporating feedback effectively, proofreading techniques, and final formatting. Includes workflow templates you can adapt to your projects.',
    category: 'guides',
    author: 'Writing Center Team',
    date: 'December 25, 2025',
    readTime: '10 min read',
    image: '📋',
    tags: ['Workflow', 'Process', 'Productivity'],
  },
  {
    id: 15,
    title: 'Managing References Like a Pro: Advanced Citation Management',
    excerpt: 'Take your reference management to the next level with advanced techniques for organizing sources, batch importing from databases, using tags and folders effectively, exporting to different formats, collaborating on shared libraries, and integrating with Zotero, Mendeley, and EndNote. Perfect for large research projects.',
    category: 'features',
    author: 'Research Tools Team',
    date: 'December 22, 2025',
    readTime: '8 min read',
    image: '📌',
    tags: ['Citations', 'Research Tools', 'Organization'],
  },
  {
    id: 16,
    title: 'Academic Writing Style Guide: Discipline-Specific Conventions',
    excerpt: 'Different academic disciplines have unique writing conventions and expectations. Explore the stylistic differences between STEM writing (concise, data-focused), humanities (interpretive, narrative), social sciences (analytical, evidence-based), and business writing. Includes examples and common pitfalls to avoid in each field.',
    category: 'research',
    author: 'Dr. Robert Martinez',
    date: 'December 20, 2025',
    readTime: '13 min read',
    image: '📐',
    tags: ['Style Guide', 'Disciplines', 'Conventions'],
  },
  {
    id: 17,
    title: 'Breaking Down Complex Topics: Research Strategies for Difficult Subjects',
    excerpt: 'Tackle challenging research topics with confidence using proven strategies for breaking down complexity. Learn systematic approaches to understanding difficult concepts, finding authoritative sources, building knowledge progressively, and communicating complex ideas clearly. Ideal for interdisciplinary research and advanced topics.',
    category: 'tips',
    author: 'Dr. Lisa Anderson',
    date: 'December 18, 2025',
    readTime: '9 min read',
    image: '🧩',
    tags: ['Research Strategy', 'Complexity', 'Learning'],
  },
  {
    id: 18,
    title: 'Collaboration Features Deep Dive: Working with Supervisors and Peers',
    excerpt: 'Maximize the potential of Thesiora Writer\'s collaboration tools. Learn best practices for sharing work with supervisors, managing feedback cycles efficiently, coordinating with co-authors, tracking changes across versions, resolving conflicts, and maintaining clear communication throughout the research and writing process.',
    category: 'features',
    author: 'Product Team',
    date: 'December 15, 2025',
    readTime: '7 min read',
    image: '🤝',
    tags: ['Collaboration', 'Teamwork', 'Features'],
  },
];

