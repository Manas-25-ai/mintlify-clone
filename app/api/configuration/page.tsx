import DocsLayout from '@/components/DocsLayout';

export default function ConfigurationDoc() {
  return (
    <DocsLayout>
      <article className="prose prose-gray dark:prose-invert max-w-none">
        <h1 id="configuration">Configuration</h1>
        <p className="lead">
          Configure your Mintlify Clone documentation site to match your needs.
        </p>

        <h2 id="next-config">Next.js Configuration</h2>
        <p>
          The main configuration file is <code>next.config.ts</code>. Here you can configure:
        </p>
        <ul>
          <li>Build settings</li>
          <li>Environment variables</li>
          <li>Image optimization</li>
          <li>Redirects and rewrites</li>
        </ul>

        <h3 id="example-config">Example Configuration</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <code>{`import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['example.com'],
  },
};

export default nextConfig;`}</code>
        </pre>

        <h2 id="tailwind-config">Tailwind Configuration</h2>
        <p>
          Customize Tailwind CSS in <code>tailwind.config.ts</code> to match your brand:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <code>{`theme: {
  extend: {
    colors: {
      brand: {
        primary: '#your-color',
        secondary: '#your-color',
      },
    },
  },
}`}</code>
        </pre>

        <h2 id="metadata">Metadata Configuration</h2>
        <p>
          Set site-wide metadata in <code>app/layout.tsx</code>:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <code>{`export const metadata: Metadata = {
  title: "Your Docs Title",
  description: "Your documentation description",
};`}</code>
        </pre>
      </article>
    </DocsLayout>
  );
}
