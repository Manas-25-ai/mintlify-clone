'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon } from '@/components/Icons';

interface NavItem {
  title: string;
  href?: string;
  children?: NavItem[];
}

const navigationData: NavItem[] = [
  {
    title: 'Getting Started',
    children: [
      { title: 'Introduction', href: '/' },
      { title: 'Installation', href: '/installation' },
      { title: 'Quick Start', href: '/quickstart' },
    ],
  },
  {
    title: 'Core Concepts',
    children: [
      { title: 'Pages', href: '/concepts/pages' },
      { title: 'Navigation', href: '/concepts/navigation' },
      { title: 'Theming', href: '/concepts/theming' },
    ],
  },
  {
    title: 'API Reference',
    children: [
      { title: 'Configuration', href: '/api/configuration' },
      { title: 'Components', href: '/api/components' },
    ],
  },
];

function NavGroup({ group }: { group: NavItem }) {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className="mb-4">
      {group.title && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <span>{group.title}</span>
          <ChevronDownIcon />
        </button>
      )}
      {isOpen && group.children && (
        <div className="mt-1 space-y-1 ml-3">
          {group.children.map((item) => (
            <Link
              key={item.href}
              href={item.href || '#'}
              className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                pathname === item.href
                  ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-y-auto">
      <nav className="p-4">
        {navigationData.map((group) => (
          <NavGroup key={group.title} group={group} />
        ))}
      </nav>
    </aside>
  );
}
