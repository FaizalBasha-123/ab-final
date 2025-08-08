// app/blogscontent/[blogId]/page.tsx

import BlogsContentSection from '../../NewPages/BlogsContentSection';

// Next.js 15+ requires params to be awaited
export default async function Page({ params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;
  return <BlogsContentSection blogId={blogId} />;
}

// ✅ Must return plain objects, not JSX!
export function generateStaticParams() {
  return [
    { blogId: '0' },
    { blogId: '1' },
    { blogId: '2' },
    { blogId: '3' },
    { blogId: '4' },
  ];
}
