import DocViewer from '@/components/DocViewer';

export const metadata = {
  title: 'Introduction — MJML Bits Documentation',
  description: 'Learn about MJML Bits, getting started, and responsive email component architecture.',
};

export default function DocsPage() {
  return <DocViewer initialSlug="introduction" />;
}
