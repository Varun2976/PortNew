import MagicBento from './MagicBento';
function Achievements() {

  return (
    <section className="max-w-6xl mx-auto mt-32 px-6 py-8 rounded-[25px]">
      <h2 className="text-left text-4xl font-bitcount text-cyan-300 mb-8 pl-[20px]">
        Achievements
      </h2>

      <hr className="mb-6 border-cyan-300/30" />
        <div className="w-full max-w-7xl mx-auto">
            <MagicBento 
        textAutoHide={true}
        enableStars
        enableSpotlight
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect
        spotlightRadius={490}
        particleCount={12}
        glowColor="132, 0, 255"
        disableAnimations={false}
      />
        </div>
      
    </section>
  );
}

export default Achievements;