// app/blogscontent/[blogId]/page.tsx

import BlogsContentSection from '../../NewPages/BlogsContentSection';

// Inline param typing to avoid conflicts with Next's generated types
export default function Page({ params }: { params: { blogId: string } }) {
  return <BlogsContentSection blogId={params.blogId} />;
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
