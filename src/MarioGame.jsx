function MarioGame() {

  return (

    <div className="fixed inset-0 overflow-hidden bg-black">

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