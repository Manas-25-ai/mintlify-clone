import DocsLayout from '@/components/DocsLayout';

export default function PagesDoc() {
  return (
    <DocsLayout>
      <article className="prose prose-gray dark:prose-invert max-w-none">
        <h1 id="pages">Pages</h1>
        <p className="lead">
          Learn how pages work in Mintlify Clone and how to structure your documentation.
        </p>

        <h2 id="page-structure">Page Structure</h2>
        <p>
          Pages in Mintlify Clone follow Next.js App Router conventions. Each page is a React component
          that exports a default function.
        </p>

        <h3 id="basic-page">Basic Page Example</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <code>{`import DocsLayout from '@/components/DocsLayout';

export default function MyPage() {
  return (
    <DocsLayout>
      <article className="prose dark:prose-invert max-w-none">
        <h1 id="title">Page Title</h1>
        <p>Page content goes here.</p>
      </article>
    </DocsLayout>
  );
}`}</code>
        </pre>

        <h2 id="file-based-routing">File-Based Routing</h2>
        <p>
          Routes are automatically created based on your file structure:
        </p>
        <ul>
          <li><code>app/page.tsx</code> → <code>/</code></li>
          <li><code>app/about/page.tsx</code> → <code>/about</code></li>
          <li><code>app/docs/api/page.tsx</code> → <code>/docs/api</code></li>
        </ul>

        <h2 id="markdown-content">Markdown-Style Content</h2>
        <p>
          While we use JSX, you can write content that feels like Markdown using the prose classes from Tailwind CSS.
        </p>

        <h2 id="best-practices">Best Practices</h2>
        <ul>
          <li>Always add IDs to headings for deep linking</li>
          <li>Use semantic HTML elements</li>
          <li>Keep content focused and scannable</li>
          <li>Add code examples where helpful</li>
        </ul>
      </article>
    </DocsLayout>
  );
}
