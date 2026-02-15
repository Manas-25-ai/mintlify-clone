import DocsLayout from '@/components/DocsLayout';

export default function Installation() {
  return (
    <DocsLayout>
      <article className="prose prose-gray dark:prose-invert max-w-none">
        <h1 id="installation">Installation</h1>
        <p className="lead">
          Get started with Mintlify Clone by following this comprehensive installation guide.
        </p>

        <h2 id="prerequisites">Prerequisites</h2>
        <p>
          Before installing, make sure you have the following installed on your system:
        </p>
        <ul>
          <li><strong>Node.js</strong> - Version 18.0 or higher</li>
          <li><strong>npm</strong> - Version 9.0 or higher (comes with Node.js)</li>
          <li><strong>Git</strong> - For cloning the repository</li>
        </ul>

        <h2 id="clone-repository">Clone the Repository</h2>
        <p>
          First, clone the repository to your local machine:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <code>{`git clone https://github.com/Manas-25-ai/mintlify-clone.git
cd mintlify-clone`}</code>
        </pre>

        <h2 id="install-dependencies">Install Dependencies</h2>
        <p>
          Install all required dependencies using npm:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <code>{`npm install`}</code>
        </pre>
        <p>
          This will install all the necessary packages including:
        </p>
        <ul>
          <li>Next.js - React framework</li>
          <li>React - UI library</li>
          <li>Tailwind CSS - Utility-first CSS framework</li>
          <li>TypeScript - Type safety</li>
        </ul>

        <h2 id="development-server">Run Development Server</h2>
        <p>
          Start the development server to see your documentation site in action:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <code>{`npm run dev`}</code>
        </pre>
        <p>
          The site will be available at <code>http://localhost:3000</code>. The page will automatically reload when you make changes.
        </p>

        <h3 id="build-production">Build for Production</h3>
        <p>
          When you're ready to deploy, build the production version:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <code>{`npm run build
npm run start`}</code>
        </pre>

        <h2 id="troubleshooting">Troubleshooting</h2>
        <p>
          If you encounter any issues during installation:
        </p>
        <ul>
          <li>Make sure you're using the correct Node.js version</li>
          <li>Try clearing npm cache: <code>npm cache clean --force</code></li>
          <li>Delete <code>node_modules</code> and <code>package-lock.json</code>, then reinstall</li>
        </ul>
      </article>
    </DocsLayout>
  );
}
