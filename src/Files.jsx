import { motion } from 'framer-motion';


export default function Files({ files, active, setActive, onSelect }) {
  return (
    <div className="flex h-40 w-full min-w-0 items-start gap-3 overflow-x-auto overflow-y-hidden px-4 pt-4 md:h-52 md:gap-6 md:px-10">
      {files.map((file, index) => {
        const isActive = active === index;

        return (
          <motion.div
            layout
            key={file.id}
            onMouseEnter={() => setActive(index)}
            onClick={() => {
              setActive(index);
              onSelect?.(file, index);
            }}
            className={`
              flex shrink-0 items-end justify-start rounded-2xl p-3
              cursor-pointer bg-center relative overflow-hidden
              transition-all duration-300
              
              ${isActive 
                ? "z-10 h-32 w-32 scale-105 border-[3px] border-white shadow-2xl md:h-44 md:w-44"
                : "h-24 w-24 md:h-32 md:w-32"}
            `}
            style={{
              originX: 0,
              originY: 0,
              backgroundImage: file.cardBg ? `url(${file.cardBg})` : 'none',
              backgroundColor: file.cardColor || '#000',
              backgroundSize: file.cardSize || '50%',
              backgroundRepeat: 'no-repeat'
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Dark overlay for readability */}
            {file.cardBg && (
              <div className="absolute inset-0 bg-black/40" />
            )}
            <div

              className={`

                absolute inset-0 pointer-events-none

                ${isActive ? "shine" : ""}

              `}

            />

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