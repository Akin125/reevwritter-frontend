'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '../components';

export default function UserGuide() {
    const [activeSection, setActiveSection] = useState('getting-started');

    const sections = [
        { id: 'getting-started', title: 'Getting Started', icon: '🚀' },
        { id: 'planner', title: 'Planner Agent', icon: '📋' },
        { id: 'writer', title: 'Writer Agent', icon: '✍️' },
        { id: 'proofreader', title: 'Proofreader Agent', icon: '✓' },
        { id: 'references', title: 'References & Citations', icon: '📚' },
        { id: 'export', title: 'Export & Download', icon: '⬇️' },
        { id: 'collaboration', title: 'Team Collaboration', icon: '👥' },
        { id: 'tips', title: 'Best Practices', icon: '💡' },
    ];

    const sectionContent: Record<string, {
        title: string;
        icon: string;
        content: Array<{
            heading: string;
            text: string;
            steps?: string[];
            tips?: string[];
            features?: string[];
        }>;
    }> = {
        'getting-started': {
            title: 'Getting Started',
            icon: '🚀',
            content: [
                {
                    heading: 'Welcome to Thesiora Writer',
                    text: 'Thesiora Writer is an AI-powered academic writing platform that helps you create high-quality research papers, theses, and dissertations. Our intelligent agents work together to plan, write, and refine your academic documents with precision and academic rigor.',
                },
                {
                    heading: 'Creating Your First Project',
                    text: 'Follow these steps to start your first academic writing project:',
                    steps: [
                        'Sign in to your account or create a new one from the dashboard',
                        'Click "New Project" and enter your research topic or thesis title',
                        'Provide a brief description of your research objectives and scope',
                        'Select your academic level (undergraduate, masters, or PhD)',
                        'Choose your preferred citation style (APA, MLA, Chicago, Harvard, etc.)',
                        'Review the automatically generated project outline',
                        'Start writing with AI assistance or let the agents generate initial drafts'
                    ],
                },
                {
                    heading: 'Understanding the Workflow',
                    text: 'Thesiora Writer uses a three-stage intelligent workflow to ensure quality output:',
                    features: [
                        'Planning Stage: The Planner Agent analyzes your topic and creates a detailed outline',
                        'Writing Stage: The Writer Agent generates academic content with proper structure',
                        'Review Stage: The Proofreader Agent checks grammar, style, and academic tone',
                        'Iterative Refinement: You can request revisions at any stage for continuous improvement'
                    ],
                },
            ],
        },
        'planner': {
            title: 'Planner Agent',
            icon: '📋',
            content: [
                {
                    heading: 'What is the Planner Agent?',
                    text: 'The Planner Agent is your AI research assistant that creates comprehensive outlines for your academic papers. It analyzes your topic, suggests relevant sections, and organizes your content logically according to academic standards.',
                },
                {
                    heading: 'Key Features',
                    text: 'The Planner Agent provides powerful planning capabilities:',
                    features: [
                        'Topic Analysis: Deep understanding of your research area and objectives',
                        'Structure Suggestion: Recommends optimal chapter and section organization',
                        'Research Questions: Helps formulate clear, focused research questions',
                        'Literature Review Planning: Identifies key themes and research gaps',
                        'Methodology Framework: Suggests appropriate research methods',
                        'Argument Flow: Ensures logical progression of ideas',
                        'Citation Planning: Indicates where citations are needed'
                    ],
                },
                {
                    heading: 'How to Use',
                    text: 'Working with the Planner Agent is straightforward:',
                    steps: [
                        'Enter your research topic and any specific requirements',
                        'Review the generated outline structure',
                        'Add, remove, or reorder sections as needed',
                        'Expand specific sections for more detailed planning',
                        'Approve the outline to proceed to the writing stage',
                        'Request regeneration if you want alternative structures'
                    ],
                    tips: [
                        'Be specific with your topic description for better results',
                        'Include keywords related to your research area',
                        'Mention any required sections specified by your institution',
                        'Review the suggested structure before proceeding to writing'
                    ],
                },
            ],
        },
        'writer': {
            title: 'Writer Agent',
            icon: '✍️',
            content: [
                {
                    heading: 'AI-Powered Academic Writing',
                    text: 'The Writer Agent transforms your outline into polished academic content. It understands academic writing conventions, maintains consistency in tone and style, and generates well-structured paragraphs with proper argumentation.',
                },
                {
                    heading: 'Writing Capabilities',
                    text: 'The Writer Agent excels in multiple aspects of academic writing:',
                    features: [
                        'Content Generation: Creates original, plagiarism-free academic text',
                        'Academic Tone: Maintains formal, scholarly language throughout',
                        'Argument Development: Builds logical, well-supported arguments',
                        'Evidence Integration: Seamlessly incorporates research findings',
                        'Critical Analysis: Provides analytical depth and critical thinking',
                        'Transition Smoothness: Ensures coherent flow between sections',
                        'Terminology Accuracy: Uses discipline-specific vocabulary correctly'
                    ],
                },
                {
                    heading: 'Customization Options',
                    text: 'Tailor the writing to your specific needs:',
                    steps: [
                        'Set your preferred writing style (descriptive, analytical, critical)',
                        'Adjust the level of technical complexity',
                        'Specify the desired length for each section',
                        'Choose between comprehensive or concise writing',
                        'Request specific focus areas or perspectives',
                        'Iterate on sections until satisfied with the output'
                    ],
                    tips: [
                        'Start with shorter sections to establish the desired tone',
                        'Review and edit generated content to add your personal insights',
                        'Use the regeneration feature to explore different writing approaches',
                        'Combine AI-generated content with your own writing for best results'
                    ],
                },
            ],
        },
        'proofreader': {
            title: 'Proofreader Agent',
            icon: '✓',
            content: [
                {
                    heading: 'Intelligent Review and Refinement',
                    text: 'The Proofreader Agent is your final quality assurance layer. It meticulously reviews your document for grammar, style, consistency, and academic standards, ensuring your work meets the highest quality benchmarks.',
                },
                {
                    heading: 'What Gets Checked',
                    text: 'Comprehensive review across multiple dimensions:',
                    features: [
                        'Grammar & Syntax: Identifies and corrects grammatical errors',
                        'Spelling & Punctuation: Ensures perfect spelling and punctuation',
                        'Academic Style: Verifies adherence to academic writing conventions',
                        'Consistency: Checks terminology, formatting, and tone consistency',
                        'Clarity & Readability: Improves sentence structure and clarity',
                        'Citation Format: Validates citation and reference formatting',
                        'Logical Flow: Ensures coherent argument progression',
                        'Redundancy: Identifies and suggests removal of repetitive content'
                    ],
                },
                {
                    heading: 'Review Process',
                    text: 'Understanding how proofreading works:',
                    steps: [
                        'Automatic initial scan identifies potential issues',
                        'Issues are categorized by type and severity',
                        'Suggestions are provided for each identified issue',
                        'Accept or reject suggestions individually',
                        'Request a full document review for comprehensive check',
                        'Generate a quality report showing improvements made'
                    ],
                    tips: [
                        'Run proofreading after completing each major section',
                        'Pay attention to high-priority suggestions first',
                        'Use the consistency checker for terminology across chapters',
                        'Review the style guide recommendations for your field'
                    ],
                },
            ],
        },
        'references': {
            title: 'References & Citations',
            icon: '📚',
            content: [
                {
                    heading: 'Automated Citation Management',
                    text: 'Thesiora Writer includes powerful citation and reference management tools that automatically format your citations according to your chosen style guide. Never worry about citation formatting again.',
                },
                {
                    heading: 'Supported Citation Styles',
                    text: 'We support all major academic citation formats:',
                    features: [
                        'APA (American Psychological Association) - 7th Edition',
                        'MLA (Modern Language Association) - 9th Edition',
                        'Chicago Manual of Style - 17th Edition',
                        'Harvard Referencing Style',
                        'IEEE (Institute of Electrical and Electronics Engineers)',
                        'Vancouver Style (numbered references)',
                        'AMA (American Medical Association)',
                        'Custom institutional styles'
                    ],
                },
                {
                    heading: 'Adding References',
                    text: 'Multiple ways to add references to your document:',
                    steps: [
                        'Manual Entry: Fill in the reference details through our form',
                        'DOI Import: Paste a DOI to automatically fetch publication data',
                        'PubMed Import: Search and import from PubMed database',
                        'Google Scholar: Import citations from Google Scholar',
                        'BibTeX Import: Upload your existing BibTeX file',
                        'RIS/EndNote: Import from EndNote or other reference managers'
                    ],
                    tips: [
                        'Use DOI or database import for accuracy',
                        'Verify auto-imported references for completeness',
                        'Keep your reference library organized with tags',
                        'Export your reference library for backup'
                    ],
                },
            ],
        },
        'export': {
            title: 'Export & Download',
            icon: '⬇️',
            content: [
                {
                    heading: 'Export Your Documents',
                    text: 'Once your document is complete, export it in your preferred format with all formatting, citations, and styles preserved. Our export engine ensures compatibility with various platforms and maintains document integrity.',
                },
                {
                    heading: 'Available Formats',
                    text: 'Export your work in multiple professional formats:',
                    features: [
                        'Microsoft Word (.docx) - Full formatting and comments preserved',
                        'PDF - Publication-ready with embedded fonts',
                        'LaTeX - Complete .tex file with all packages',
                        'HTML - Web-ready format with responsive design',
                        'Markdown - Plain text with formatting markup',
                        'Plain Text (.txt) - Content only without formatting',
                        'EPUB - E-book format for digital reading'
                    ],
                },
                {
                    heading: 'Export Options',
                    text: 'Customize your export with these options:',
                    steps: [
                        'Select your preferred file format from the export menu',
                        'Choose to include or exclude comments and suggestions',
                        'Select page size and margins (A4, Letter, Legal)',
                        'Enable or disable line numbering',
                        'Include table of contents and indices',
                        'Set PDF security options (password protection, printing)',
                        'Download immediately or receive via email for large files'
                    ],
                    tips: [
                        'Export to PDF for submission to ensure formatting is preserved',
                        'Use Word format if further editing is needed',
                        'LaTeX export is ideal for technical or mathematics-heavy papers',
                        'Keep a backup export after major revisions'
                    ],
                },
            ],
        },
        'collaboration': {
            title: 'Team Collaboration',
            icon: '👥',
            content: [
                {
                    heading: 'Collaborate with Your Team',
                    text: 'Thesiora Writer supports seamless collaboration features, allowing you to work with supervisors, co-authors, and research team members. Share documents, receive feedback, and track changes in real-time.',
                },
                {
                    heading: 'Collaboration Features',
                    text: 'Work together effectively with these tools:',
                    features: [
                        'Real-time Editing: See changes as team members make them',
                        'Comments & Annotations: Leave feedback on specific sections',
                        'Change Tracking: View complete revision history',
                        'Version Control: Access previous versions anytime',
                        'Role-based Permissions: Control who can view, comment, or edit',
                        'Share Links: Generate secure sharing links',
                        'Notification System: Get alerted to comments and changes',
                        'Conflict Resolution: Automatic handling of simultaneous edits'
                    ],
                },
                {
                    heading: 'Sharing Your Work',
                    text: 'Different ways to collaborate on your documents:',
                    steps: [
                        'Click the "Share" button in your document',
                        'Enter email addresses of collaborators',
                        'Set permission levels (Viewer, Commenter, Editor)',
                        'Add an optional message with the invitation',
                        'Send invitations to team members',
                        'Manage access from the sharing settings anytime'
                    ],
                    tips: [
                        'Give your supervisor "Commenter" access to provide feedback',
                        'Use "Viewer" access for external reviewers',
                        'Enable email notifications to stay updated',
                        'Review the activity log regularly to track progress'
                    ],
                },
            ],
        },
        'tips': {
            title: 'Best Practices',
            icon: '💡',
            content: [
                {
                    heading: 'Maximizing Your Productivity',
                    text: 'Get the most out of Thesiora Writer with these proven strategies and best practices. Learn from experienced users and optimize your academic writing workflow.',
                },
                {
                    heading: 'Writing Tips',
                    text: 'Essential practices for effective academic writing:',
                    tips: [
                        'Start with a clear outline before generating content',
                        'Write in focused sessions - complete one section at a time',
                        'Review and edit AI-generated content to add your voice',
                        'Use specific, detailed prompts for better AI responses',
                        'Save multiple versions as you work through major revisions',
                        'Take breaks to maintain fresh perspective on your work',
                        'Read your writing aloud to catch awkward phrasing',
                        'Keep a separate document for ideas and notes'
                    ],
                },
                {
                    heading: 'Quality Assurance',
                    text: 'Ensure the highest quality in your final document:',
                    tips: [
                        'Run the Proofreader Agent after each writing session',
                        'Check citation accuracy manually, especially for critical sources',
                        'Verify that all figures and tables are properly referenced',
                        'Read the entire document from start to finish before submission',
                        'Have a peer or colleague review your work',
                        'Check that your arguments are well-supported with evidence',
                        'Ensure consistent terminology throughout the document',
                        'Verify compliance with institutional formatting requirements'
                    ],
                },
                {
                    heading: 'Time Management',
                    text: 'Effective strategies for managing your writing project:',
                    tips: [
                        'Break your project into manageable milestones',
                        'Set realistic daily or weekly word count goals',
                        'Use the Planner Agent early to establish clear structure',
                        'Start with easier sections to build momentum',
                        'Schedule regular check-ins with your supervisor',
                        'Leave buffer time for unexpected revisions',
                        'Use the collaboration features to get feedback early',
                        'Export backups regularly to prevent data loss'
                    ],
                },
            ],
        },
    };

    const currentContent = sectionContent[activeSection];

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-black">
            {/* Header */}
            <Header currentPage="/user-guide" />

            {/* Main Content */}
            <main className="flex-1">
                <div className="relative px-4 sm:px-6 py-12 sm:py-16 overflow-hidden">
                    {/* Animated Background Grid */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4d4d420_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d420_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,#27272a20_1px,transparent_1px),linear-gradient(to_bottom,#27272a20_1px,transparent_1px)]"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-black/50 dark:to-black"></div>
                    </div>

                    <div className="mx-auto max-w-7xl relative">
                        {/* Header */}
                        <div className="mb-12 sm:mb-16 text-center">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">User Guide</h1>
                            <p className="text-zinc-700 dark:text-zinc-300 text-base sm:text-lg max-w-3xl mx-auto">
                                Complete guide to using Thesiora Writer - from creating your first project to advanced features
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-4 gap-8">
                            {/* Sidebar Navigation */}
                            <div className="lg:col-span-1">
                                <div className="bg-white dark:bg-zinc-950 backdrop-blur-sm rounded-2xl p-6 border-2 border-zinc-200 dark:border-zinc-800 shadow-xl sticky top-24">
                                    <h3 className="text-xl font-bold text-black dark:text-white mb-6 pb-4 border-b-2 border-zinc-200 dark:border-zinc-800">Contents</h3>
                                    <nav className="space-y-1">
                                        {sections.map((section) => (
                                            <button
                                                key={section.id}
                                                onClick={() => setActiveSection(section.id)}
                                                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                                                    activeSection === section.id
                                                        ? 'bg-black text-white dark:bg-white dark:text-black shadow-lg scale-105'
                                                        : 'text-zinc-700 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white'
                                                }`}
                                            >
                                                <span className="mr-3 text-lg">{section.icon}</span>
                                                <span className="text-sm">{section.title}</span>
                                            </button>
                                        ))}
                                    </nav>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="lg:col-span-3 space-y-6">
                                {currentContent && (
                                    <>
                                        {/* Main Content Card */}
                                        <div className="bg-white dark:bg-zinc-950 backdrop-blur-sm rounded-2xl p-6 sm:p-10 border-2 border-zinc-200 dark:border-zinc-800 shadow-xl">
                                            <div className="mb-8">
                                                <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-3 flex items-center gap-3">
                                                    <span className="text-4xl">{currentContent.icon}</span>
                                                    {currentContent.title}
                                                </h2>
                                                <div className="h-1 w-20 bg-black dark:bg-white rounded-full"></div>
                                            </div>

                                            <div className="space-y-8">
                                                {currentContent.content.map((section, idx) => (
                                                    <div key={idx} className="space-y-4">
                                                        <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
                                                            {section.heading}
                                                        </h3>
                                                        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-base">
                                                            {section.text}
                                                        </p>

                                                        {/* Steps */}
                                                        {section.steps && section.steps.length > 0 && (
                                                            <div className="mt-4 space-y-3">
                                                                {section.steps.map((step, stepIdx) => (
                                                                    <div key={stepIdx} className="flex gap-4 items-start group">
                                                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
                                                                            {stepIdx + 1}
                                                                        </div>
                                                                        <p className="text-zinc-700 dark:text-zinc-300 pt-1 flex-1">
                                                                            {step}
                                                                        </p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}

                                                        {/* Features */}
                                                        {section.features && section.features.length > 0 && (
                                                            <div className="mt-4 grid sm:grid-cols-2 gap-3">
                                                                {section.features.map((feature, featureIdx) => (
                                                                    <div
                                                                        key={featureIdx}
                                                                        className="flex gap-3 items-start p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-colors"
                                                                    >
                                                                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-black dark:bg-white mt-2"></div>
                                                                        <p className="text-sm text-zinc-700 dark:text-zinc-300">
                                                                            {feature}
                                                                        </p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}

                                                        {/* Tips */}
                                                        {section.tips && section.tips.length > 0 && (
                                                            <div className="mt-6 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border-2 border-zinc-200 dark:border-zinc-800">
                                                                <div className="flex items-center gap-2 mb-4">
                                                                    <span className="text-2xl">💡</span>
                                                                    <h4 className="text-lg font-bold text-black dark:text-white">Pro Tips</h4>
                                                                </div>
                                                                <ul className="space-y-2">
                                                                    {section.tips.map((tip, tipIdx) => (
                                                                        <li key={tipIdx} className="flex gap-3 items-start text-sm text-zinc-700 dark:text-zinc-300">
                                                                            <span className="text-black dark:text-white font-bold">•</span>
                                                                            {tip}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Quick Navigation */}
                                        <div className="bg-zinc-50 dark:bg-zinc-950 rounded-2xl p-6 border-2 border-zinc-200 dark:border-zinc-800">
                                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                                <button
                                                    onClick={() => {
                                                        const currentIdx = sections.findIndex(s => s.id === activeSection);
                                                        if (currentIdx > 0) {
                                                            setActiveSection(sections[currentIdx - 1].id);
                                                        }
                                                    }}
                                                    disabled={sections.findIndex(s => s.id === activeSection) === 0}
                                                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-black border-2 border-zinc-200 dark:border-zinc-800 text-black dark:text-white hover:border-black dark:hover:border-white"
                                                >
                                                    <span>←</span> Previous Section
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        const currentIdx = sections.findIndex(s => s.id === activeSection);
                                                        if (currentIdx < sections.length - 1) {
                                                            setActiveSection(sections[currentIdx + 1].id);
                                                        }
                                                    }}
                                                    disabled={sections.findIndex(s => s.id === activeSection) === sections.length - 1}
                                                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200"
                                                >
                                                    Next Section <span>→</span>
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Help Section */}
                                <div className="bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-zinc-200 dark:border-zinc-800 text-center shadow-xl">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4">Need More Help?</h3>
                                    <p className="text-zinc-700 dark:text-zinc-300 mb-6 text-lg">Check our FAQ or contact support for personalized assistance</p>
                                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                                        <Link href="/faq" className="px-8 py-4 bg-white dark:bg-black border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white font-bold rounded-xl transition-all">
                                            View FAQ
                                        </Link>
                                        <Link href="/contact" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200 border-2 border-black dark:border-white">
                                            Contact Support
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer variant="minimal" />
        </div>
    );
}

