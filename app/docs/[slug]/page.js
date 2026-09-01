import DocViewer from '@/components/DocViewer';
import { docsData } from '@/lib/docsData';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return Object.keys(docsData)
    .filter((slug) => slug !== 'introduction')
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const doc = docsData[slug];

  if (!doc) {
    return { title: 'Documentation — MJML Bits' };
  }

  return {
    title: `${doc.title} — MJML Bits Documentation`,
    description: doc.subtitle || doc.title,
  };
}

export default async function DocSubPage({ params }) {
  const { slug } = await params;
  const doc = docsData[slug];

  if (!doc) {
    notFound();
  }

  return <DocViewer initialSlug={slug} />;
}
