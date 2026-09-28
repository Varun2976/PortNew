import { ArrowLeft } from 'lucide-react';

function MarioGame({ onBack }) {

  return (

    <div className="fixed inset-0 overflow-hidden bg-black">

      <button
        type="button"
        onClick={onBack}
        className="absolute left-6 top-6 z-20 inline-flex items-center gap-2 rounded-md border border-white/40 bg-black/80 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur transition hover:bg-black"
      >
        <ArrowLeft size={18} aria-hidden="true" />
        PS5 View
      </button>

      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 text-white text-sm pt-6 text-xl font-blackops">

        Move: Arrow Keys | Jump: X | Run: Z

      </div>

      <iframe

        src="/mario/index.html"

        className="w-full h-full border-0"

        title="Mario"

        scrolling="no"

      />

    </div>

  );

}

export default MarioGame;