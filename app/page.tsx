import PhotoStories from '@/components/sections/PhotoStories';
import TestimonialsAccordion from '@/components/sections/TestimonialsAccordion';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <main className="w-full">
        <PhotoStories />
        <TestimonialsAccordion />
      </main>
    </div>
  );
}
