import DocsLayout from '@/components/DocsLayout';

export default function ComponentsDoc() {
  return (
    <DocsLayout>
      <article className="prose prose-gray dark:prose-invert max-w-none">
        <h1 id="components">Components</h1>
        <p className="lead">
          Learn about the built-in components and how to use them.
        </p>

        <h2 id="header">Header</h2>
        <p>
          The header component provides the top navigation bar with logo and dark mode toggle.
          Located in <code>components/Header.tsx</code>.
        </p>

        <h3 id="header-features">Features</h3>
        <ul>
          <li>Fixed position at top of page</li>
          <li>Logo and site title</li>
          <li>Dark mode toggle</li>
          <li>Responsive design</li>
        </ul>

        <h2 id="sidebar">Sidebar</h2>
        <p>
          The sidebar component displays the navigation menu with collapsible sections.
          Located in <code>components/Sidebar.tsx</code>.
        </p>

        <h3 id="sidebar-features">Features</h3>
        <ul>
          <li>Hierarchical navigation</li>
          <li>Collapsible groups</li>
          <li>Active page highlighting</li>
          <li>Smooth scrolling</li>
        </ul>

        <h2 id="table-of-contents">Table of Contents</h2>
        <p>
          The table of contents component automatically generates navigation for the current page.
          Located in <code>components/TableOfContents.tsx</code>.
        </p>

        <h3 id="toc-features">Features</h3>
        <ul>
          <li>Auto-generated from h2 and h3 elements</li>
          <li>Active section tracking</li>
          <li>Smooth scroll to section</li>
          <li>Fixed position on larger screens</li>
        </ul>

        <h2 id="docs-layout">DocsLayout</h2>
        <p>
          The DocsLayout component wraps all documentation pages and provides the consistent layout.
          Located in <code>components/DocsLayout.tsx</code>.
        </p>

        <h3 id="usage">Usage</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <code>{`import DocsLayout from '@/components/DocsLayout';

export default function Page() {
  return (
    <DocsLayout>
      {/* Your content here */}
    </DocsLayout>
  );
}`}</code>
        </pre>
      </article>
    </DocsLayout>
  );
}
