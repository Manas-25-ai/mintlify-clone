import DocsLayout from '@/components/DocsLayout';

export default function Home() {
  return (
    <DocsLayout>
      <article className="prose prose-gray dark:prose-invert max-w-none">
        <h1 id="introduction">Introduction</h1>
        <p className="lead">
          Welcome to Mintlify Clone - a modern, beautiful documentation platform built with Next.js and Tailwind CSS.
        </p>

        <h2 id="features">Features</h2>
        <p>
          This documentation platform includes all the essential features you need to create beautiful, user-friendly documentation:
        </p>
        <ul>
          <li><strong>Dark Mode Support</strong> - Seamlessly switch between light and dark themes</li>
          <li><strong>Responsive Design</strong> - Looks great on all devices, from mobile to desktop</li>
          <li><strong>Hierarchical Navigation</strong> - Organize your docs with collapsible sidebar sections</li>
          <li><strong>Table of Contents</strong> - Auto-generated TOC for easy page navigation</li>
          <li><strong>Modern UI</strong> - Clean, professional design inspired by leading documentation platforms</li>
        </ul>

        <h2 id="getting-started">Getting Started</h2>
        <p>
          To get started with this documentation platform, follow these simple steps:
        </p>
        <ol>
          <li>Clone the repository</li>
          <li>Install dependencies with <code>npm install</code></li>
          <li>Run the development server with <code>npm run dev</code></li>
          <li>Open your browser and navigate to <code>http://localhost:3000</code></li>
        </ol>

        <h3 id="quick-example">Quick Example</h3>
        <p>
          Here's a simple example of how to add a new documentation page:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <code>{`// app/my-page/page.tsx
import DocsLayout from '@/components/DocsLayout';

export default function MyPage() {
  return (
    <DocsLayout>
      <article className="prose dark:prose-invert max-w-none">
        <h1>My Custom Page</h1>
        <p>This is my custom documentation page.</p>
      </article>
    </DocsLayout>
  );
}`}</code>
        </pre>

        <h2 id="customization">Customization</h2>
        <p>
          The platform is highly customizable. You can modify:
        </p>
        <ul>
          <li>Colors and themes in <code>tailwind.config.ts</code></li>
          <li>Navigation structure in <code>components/Sidebar.tsx</code></li>
          <li>Layout and spacing in <code>components/DocsLayout.tsx</code></li>
        </ul>

        <h2 id="next-steps">Next Steps</h2>
        <p>
          Now that you understand the basics, check out these resources:
        </p>
        <ul>
          <li><a href="/installation">Installation Guide</a> - Detailed setup instructions</li>
          <li><a href="/quickstart">Quick Start</a> - Get up and running in minutes</li>
          <li><a href="/concepts/pages">Pages Concept</a> - Learn about page structure</li>
        </ul>
      </article>
    </DocsLayout>
  );
}
