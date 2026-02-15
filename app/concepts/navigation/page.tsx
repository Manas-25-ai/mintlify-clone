import DocsLayout from '@/components/DocsLayout';

export default function NavigationDoc() {
  return (
    <DocsLayout>
      <article className="prose prose-gray dark:prose-invert max-w-none">
        <h1 id="navigation">Navigation</h1>
        <p className="lead">
          Customize the sidebar navigation to organize your documentation effectively.
        </p>

        <h2 id="navigation-structure">Navigation Structure</h2>
        <p>
          The navigation is defined in <code>components/Sidebar.tsx</code> using a hierarchical structure.
        </p>

        <h3 id="adding-sections">Adding Sections</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <code>{`const navigationData: NavItem[] = [
  {
    title: 'Section Name',
    children: [
      { title: 'Page 1', href: '/page-1' },
      { title: 'Page 2', href: '/page-2' },
    ],
  },
];`}</code>
        </pre>

        <h2 id="collapsible-groups">Collapsible Groups</h2>
        <p>
          Navigation groups are collapsible by default. Users can expand or collapse sections
          to focus on the content they need.
        </p>

        <h2 id="active-state">Active State</h2>
        <p>
          The current page is automatically highlighted in the navigation, helping users
          understand their current location in the documentation.
        </p>
      </article>
    </DocsLayout>
  );
}
