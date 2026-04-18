import { motion } from 'framer-motion';

export default function Files({ files, active, setActive }) {
  return (
    <div className="flex gap-6 px-10 items-start h-40 pt-4">
      {files.map((file, index) => {
        const isActive = active === index;

        return (
          <motion.div
            layout
            key={file.id}
            onMouseEnter={() => setActive(index)}
            className={`
              rounded-2xl flex items-end justify-start p-3
              cursor-pointer bg-center relative overflow-hidden
              transition-all duration-300
              
              ${isActive 
                ? "w-44 h-44 border-[3px] border-white shadow-2xl z-10 scale-105" 
                : "w-32 h-32"}
            `}
            style={{
              originX: 0,
              originY: 0,
              backgroundImage: file.cardBg ? `url(${file.cardBg})` : 'none',
              backgroundColor: '#000',
              backgroundSize: '50%',
              backgroundRepeat: 'no-repeat'
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Dark overlay for readability */}
            {file.cardBg && (
              <div className="absolute inset-0 bg-black/40" />
            )}

            {/* Title */}
            <span className="relative z-10 text-white font-semibold text-sm">
              {file.title}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}