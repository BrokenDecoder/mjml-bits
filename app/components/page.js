import ComponentsGallerySection from '@/components/ComponentsGallerySection';

export const metadata = {
  title: 'Components — MJML Bits',
  description: 'Browse all free and customizable MJML email components, backgrounds, and animations.',
};

export default function ComponentsPage() {
  return (
    <div style={{ paddingTop: '20px' }}>
      <ComponentsGallerySection />
    </div>
  );
}
