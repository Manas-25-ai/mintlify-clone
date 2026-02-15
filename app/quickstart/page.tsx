import DocsLayout from '@/components/DocsLayout';

export default function QuickStart() {
  return (
    <DocsLayout>
      <article className="prose prose-gray dark:prose-invert max-w-none">
        <h1 id="quick-start">Quick Start</h1>
        <p className="lead">
          Get your documentation site up and running in just a few minutes.
        </p>

        <h2 id="step-1">Step 1: Create Your First Page</h2>
        <p>
          Create a new page by adding a folder and <code>page.tsx</code> file in the <code>app</code> directory:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <code>{`mkdir app/my-first-doc
touch app/my-first-doc/page.tsx`}</code>
        </pre>

        <h2 id="step-2">Step 2: Add Content</h2>
        <p>
          Add content to your new page using the DocsLayout component:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <code>{`import DocsLayout from '@/components/DocsLayout';

export default function MyFirstDoc() {
  return (
    <DocsLayout>
      <article className="prose dark:prose-invert max-w-none">
        <h1 id="my-title">My First Documentation</h1>
        <p>This is my first documentation page!</p>
        
        <h2 id="section-1">Section 1</h2>
        <p>Add your content here.</p>
      </article>
    </DocsLayout>
  );
}`}</code>
        </pre>

        <h2 id="step-3">Step 3: Update Navigation</h2>
        <p>
          Add your new page to the sidebar navigation in <code>components/Sidebar.tsx</code>:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <code>{`const navigationData: NavItem[] = [
  {
    title: 'My Section',
    children: [
      { title: 'My First Doc', href: '/my-first-doc' },
    ],
  },
  // ... other sections
];`}</code>
        </pre>

        <h2 id="tips">Pro Tips</h2>
        <ul>
          <li>Use meaningful IDs for headings to enable direct linking</li>
          <li>The Table of Contents automatically picks up h2 and h3 elements</li>
          <li>Use the <code>prose</code> class for beautiful typography</li>
          <li>Code blocks work great with the <code>pre</code> and <code>code</code> tags</li>
        </ul>

        <h2 id="next">What's Next?</h2>
        <p>
          Now that you have your first page, explore more features:
        </p>
        <ul>
          <li><a href="/concepts/pages">Learn about page structure</a></li>
          <li><a href="/concepts/navigation">Customize your navigation</a></li>
          <li><a href="/concepts/theming">Customize the theme</a></li>
        </ul>
      </article>
    </DocsLayout>
  );
}
