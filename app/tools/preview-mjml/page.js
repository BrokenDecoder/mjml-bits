import MjmlPreviewStudio from '@/components/MjmlPreviewStudio';

export const metadata = {
  title: 'Preview MJML Code — MJML Bits Live Studio',
  description:
    'Interactive live studio to edit, preview, and transpile MJML email markup into bulletproof responsive HTML with instant mobile & desktop views.',
};

export default function MjmlPreviewToolPage() {
  return <MjmlPreviewStudio />;
}
