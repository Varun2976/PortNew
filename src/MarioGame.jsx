import { ArrowLeft } from 'lucide-react';

function MarioGame({ onBack }) {

  return (

    <div className="fixed inset-0 overflow-hidden bg-black">

      <button
        type="button"
        onClick={onBack}
        className="absolute left-3 top-3 z-20 inline-flex items-center gap-2 rounded-md border border-white/40 bg-black/80 px-3 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur transition hover:bg-black lg:left-6 lg:top-6 lg:px-4 lg:text-sm"
      >
        <ArrowLeft size={18} aria-hidden="true" />
        PS5 View
      </button>

      <div className="absolute left-1/2 top-2 z-10 w-full -translate-x-1/2 px-3 pt-14 text-center font-blackops text-xs text-white lg:w-auto lg:px-0 lg:pt-6 lg:text-xl">

        Move: Arrow Keys | Jump: X | Run: Z

      </div>

      <iframe

        src="/mario/index.html"

        className="w-full h-full border-0"

        tabIndex={0}

        onLoad={(event) => event.currentTarget.contentWindow?.focus()}

        title="Mario"

        scrolling="no"

      />

    </div>

  );

}

export default MarioGame;