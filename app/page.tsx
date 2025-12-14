import SpotShowcase3D from '../components/sections/SpotShowcase3D';
import SpotVideoScroll from '../components/sections/SpotVideoScroll';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl z-10 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 pb-2">
            Future of Retail
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Immersive 3D experiences and interactive storytelling. 
            Scroll to explore our latest collection.
          </p>
          <div className="pt-8 animate-bounce">
            <svg className="w-8 h-8 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
        
        {/* Background Grid */}
        <div className="absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] opacity-[0.03] pointer-events-none">
           {/* Grid pattern simulation */}
           <div className="border-r border-black dark:border-white h-full w-full"></div>
           <div className="border-r border-black dark:border-white h-full w-full"></div>
           <div className="border-r border-black dark:border-white h-full w-full"></div>
           <div className="border-r border-black dark:border-white h-full w-full"></div>
           <div className="border-r border-black dark:border-white h-full w-full"></div>
           <div className="border-r border-black dark:border-white h-full w-full"></div>
        </div>
      </section>

      {/* 3D Showcase Section */}
      <SpotShowcase3D />
      
      {/* Scroll Video Section */}
      <SpotVideoScroll />
      
      {/* Footer */}
      <footer className="w-full py-12 flex flex-col items-center justify-center bg-gray-50 dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-800">
        <div className="text-center space-y-4">
           <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Spot Merch Store</h3>
           <p className="text-sm text-gray-500">© 2024. Built with Next.js and React 19.</p>
        </div>
      </footer>
    </main>
  );
}
