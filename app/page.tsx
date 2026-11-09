import PhotoStories from '@/components/sections/PhotoStories';
import TestimonialsAccordion from '@/components/sections/TestimonialsAccordion';
import CelebsGallery from '@/components/sections/CelebsGallery';
import SpotCollection from '@/components/sections/SpotCollection';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <main className="w-full">
        <PhotoStories />
        <TestimonialsAccordion />
        <CelebsGallery />
        <SpotCollection />
      </main>
    </div>
  );
}
