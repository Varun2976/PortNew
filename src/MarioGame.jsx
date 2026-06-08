function MarioGame() {
  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden flex flex-col">
      <h1 className="text-center text-white py-2">
        Move: Arrow Keys | Jump: X | Run: Z
      </h1>

      <iframe
        src="/mario/index.html"
        className="flex-1 border-none overflow-hidden"
        title="Mario"
        scrolling="no"
      />
    </div>
  );
}

export default MarioGame;