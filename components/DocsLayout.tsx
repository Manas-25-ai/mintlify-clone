import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import TableOfContents from '@/components/TableOfContents';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="ml-64 mt-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-8 py-12">
          {children}
        </div>
      </main>
      <TableOfContents />
    </>
  );
}
