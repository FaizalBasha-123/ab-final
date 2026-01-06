import BlogsContentSection from '../../NewPages/BlogsContentSection';

export default async function Page({ params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;
  return <BlogsContentSection blogId={blogId} />;
}

export function generateStaticParams() {
  return [
    { blogId: 'Management_Fix' },
    { blogId: 'Management_Gaps' },
    { blogId: 'Error_Correction' },
    { blogId: 'The_Growth_Drain' },
    { blogId: 'Be_a_Builder' },
  ];
}
