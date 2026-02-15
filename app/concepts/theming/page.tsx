import DocsLayout from '@/components/DocsLayout';

export default function ThemingDoc() {
  return (
    <DocsLayout>
      <article className="prose prose-gray dark:prose-invert max-w-none">
        <h1 id="theming">Theming</h1>
        <p className="lead">
          Customize the look and feel of your documentation site.
        </p>

        <h2 id="dark-mode">Dark Mode</h2>
        <p>
          Dark mode is built-in and can be toggled using the button in the header.
          The theme preference is saved to localStorage.
        </p>

        <h2 id="color-customization">Color Customization</h2>
        <p>
          Customize colors in <code>tailwind.config.ts</code>:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <code>{`theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    },
  },
}`}</code>
        </pre>

        <h2 id="typography">Typography</h2>
        <p>
          The site uses system fonts for optimal performance and native feel across platforms.
          You can customize typography in <code>app/globals.css</code>.
        </p>

        <h3 id="custom-fonts">Adding Custom Fonts</h3>
        <p>
          To add custom fonts, import them in your layout and update the font-family in the CSS.
        </p>
      </article>
    </DocsLayout>
  );
}
