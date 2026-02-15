# Mintlify Clone

A modern, beautiful documentation platform built with Next.js and Tailwind CSS. This project is a clone of Mintlify, designed to help you create professional documentation sites with ease.

> 📍 **Repository Location**: https://github.com/Manas-25-ai/mintlify-clone  
> 🌿 **Current Branch**: `copilot/create-mintlify-clone`  
> 📖 **[Full Location Guide](./WHERE_TO_FIND.md)** - Detailed instructions on finding and accessing this repository

![Mintlify Clone Light Mode](https://github.com/user-attachments/assets/ecf6091b-2abd-4364-83fc-e950d548d774)

![Mintlify Clone Dark Mode](https://github.com/user-attachments/assets/0c8f42db-399a-4d51-add2-ba4fed60815e)

## ✨ Features

- **🌓 Dark Mode Support** - Seamlessly switch between light and dark themes with localStorage persistence
- **📱 Responsive Design** - Looks great on all devices, from mobile to desktop
- **🗂️ Hierarchical Navigation** - Organize your docs with collapsible sidebar sections
- **📑 Table of Contents** - Auto-generated TOC for easy page navigation with active section tracking
- **🎨 Modern UI** - Clean, professional design inspired by leading documentation platforms
- **⚡ Fast Performance** - Built on Next.js 16 with App Router and Turbopack
- **🎯 TypeScript** - Full type safety throughout the codebase
- **💅 Tailwind CSS** - Utility-first CSS for rapid development and customization

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm 9.0 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Manas-25-ai/mintlify-clone.git
cd mintlify-clone
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

Build the production version:
```bash
npm run build
npm run start
```

## 📖 Documentation Structure

The documentation is organized in the following structure:

```
app/
├── page.tsx              # Home page (Introduction)
├── installation/         # Installation guide
├── quickstart/           # Quick start guide
├── concepts/             # Core concepts
│   ├── pages/           # Page structure documentation
│   ├── navigation/      # Navigation configuration
│   └── theming/         # Theming and customization
└── api/                 # API reference
    ├── configuration/   # Configuration options
    └── components/      # Component documentation
```

## 🎨 Creating New Pages

To create a new documentation page:

1. Create a new folder in the `app` directory with your page name
2. Add a `page.tsx` file in that folder
3. Use the `DocsLayout` component to wrap your content:

```tsx
import DocsLayout from '@/components/DocsLayout';

export default function MyPage() {
  return (
    <DocsLayout>
      <article className="prose dark:prose-invert max-w-none">
        <h1 id="my-title">My Documentation Page</h1>
        <p>Your content here...</p>
        
        <h2 id="section">Section</h2>
        <p>More content...</p>
      </article>
    </DocsLayout>
  );
}
```

4. Update the navigation in `components/Sidebar.tsx`:

```tsx
const navigationData: NavItem[] = [
  {
    title: 'My Section',
    children: [
      { title: 'My Page', href: '/my-page' },
    ],
  },
  // ... other sections
];
```

## 🛠️ Customization

### Colors and Themes

Customize colors in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    },
  },
}
```

### Navigation Structure

Update the navigation menu in `components/Sidebar.tsx` by modifying the `navigationData` array.

### Layout and Spacing

Modify the layout in `components/DocsLayout.tsx` to adjust spacing, max-width, or add additional elements.

### Typography

Customize typography and styles in `app/globals.css`.

## 🏗️ Tech Stack

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[@tailwindcss/postcss](https://tailwindcss.com/docs/installation/using-postcss)** - PostCSS plugin

## 📁 Project Structure

```
mintlify-clone/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/          # React components
│   ├── Header.tsx      # Top navigation header
│   ├── Sidebar.tsx     # Left navigation sidebar
│   ├── TableOfContents.tsx  # Right TOC sidebar
│   ├── DocsLayout.tsx  # Documentation page layout
│   └── Icons.tsx       # SVG icon components
├── public/             # Static assets
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies
```

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

Inspired by [Mintlify](https://mintlify.com/), a modern documentation platform for API and developer documentation.

## 🐛 Troubleshooting

### Build Issues

If you encounter build issues:

1. Make sure you're using Node.js 18.0 or higher
2. Clear npm cache: `npm cache clean --force`
3. Delete `node_modules` and `package-lock.json`, then reinstall: `rm -rf node_modules package-lock.json && npm install`

### Dark Mode Not Working

If dark mode isn't persisting:

1. Check browser console for localStorage errors
2. Ensure cookies/storage is enabled in your browser

### Navigation Not Updating

After adding new pages, ensure:

1. The page file is in the correct location (`app/your-page/page.tsx`)
2. The navigation data is updated in `components/Sidebar.tsx`
3. The development server has restarted

---

Built with ❤️ for learning and testing front-end skills.
