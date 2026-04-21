import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const posts = [
    {
        id: 1,
        title: "The Future of IoT in Manufacturing",
        excerpt: "How connected devices are revolutionizing the industrial landscape through predictive maintenance and real-time monitoring.",
        date: "October 12, 2025",
        category: "Internet of Things",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Scaling Sustainable Energy Solutions",
        excerpt: "Implementing smart grid technologies to optimize energy consumption and reduce carbon footprint.",
        date: "September 28, 2025",
        category: "Power Systems",
        readTime: "7 min read"
    },
    {
        id: 3,
        title: "AI-Driven Automation Trends",
        excerpt: "Exploring the latest advancements in AI-assisted development and their impact on engineering workflows.",
        date: "September 15, 2025",
        category: "Additional Skills (AI-assisted)",
        readTime: "6 min read"
    },
    {
        id: 4,
        title: "Building Resilient Software Architectures",
        excerpt: "Best practices for designing scalable systems using engineering-grade programming tools.",
        date: "August 30, 2025",
        category: "Programming Languages",
        readTime: "8 min read"
    }
];

export default function Blog() {
    return (
        <div className="pt-24 pb-12 md:pb-20 container-padding min-h-screen">
            <Helmet>
                <title>Build Notes | RSMK</title>
                <meta name="description" content="Engineering notes, architecture decisions, and lessons learned while building products and experiments." />
            </Helmet>

            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-secondary dark:text-white font-heading">Build Notes</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Notes from the build process: what I tried, what failed, and what I shipped.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {posts.map(post => (
                    <article key={post.id} className="glass-panel p-6 sm:p-8 rounded-xl bg-white dark:bg-slate-900 hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-800 flex flex-col group">
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-4 uppercase tracking-wider font-semibold">
                            <span className="text-primary bg-primary/10 px-2 py-1 rounded">{post.category}</span>
                            <span>{post.readTime}</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-3 font-heading text-secondary dark:text-white leading-tight hover:text-primary transition-colors cursor-pointer">
                            <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                            {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4 mt-auto">
                            <span className="text-sm text-slate-500">{post.date}</span>
                            <Link to={`/blog/${post.id}`} className="text-primary font-semibold text-sm hover:translate-x-1 transition-transform inline-flex items-center">
                                Read Article &rarr;
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
