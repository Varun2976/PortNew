import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/*
  Drop your profile URLs here.
  WhatsApp uses the wa.me format: https://wa.me/919876543210
*/
const socials = [
  { name: 'Instagram',  slug: 'instagram',  color: 'E4405F', url: 'https://www.instagram.com/varunnair29/' },
  { name: 'X',          slug: 'x',          color: 'FFFFFF', url: '' },
  { name: 'LinkedIn',   slug: 'linkedin',   color: '0A66C2', url: 'https://www.linkedin.com/in/varun-nair-39055b332/' },
  { name: 'CodeChef',   slug: 'codechef',   color: '5B4638', url: 'https://www.codechef.com/users/varun2976' },
  { name: 'Codeforces', slug: 'codeforces', color: '1F8ACB', url: 'https://codeforces.com/' },
  { name: 'LeetCode',   slug: 'leetcode',   color: 'FFA116', url: 'https://leetcode.com/u/Varun2976/' },
  { name: 'WhatsApp',   slug: 'whatsapp',   color: '25D366', url: 'https://wa.me/918356938734' },
];

function Socials({ open, onClose }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="socials-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[9997] flex items-center justify-center bg-black/70 backdrop-blur-md p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-8 text-white shadow-[0_0_60px_rgba(255,255,255,0.12)] backdrop-blur-2xl"
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close socials"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-xl leading-none transition-all hover:scale-110 hover:bg-white/25"
            >
              ×
            </button>

            <h2 className="font-blackops text-3xl tracking-wide">Socials</h2>
            <p className="mt-2 mb-8 text-sm text-white/60">Find me around the internet.</p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {socials.map((s, i) => {
                const linked = Boolean(s.url);

                return (
                  <motion.a
                    key={s.slug}
                    href={linked ? s.url : undefined}
                    target={linked ? '_blank' : undefined}
                    rel={linked ? 'noreferrer noopener' : undefined}
                    onClick={linked ? undefined : (e) => e.preventDefault()}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.08 + i * 0.05 }}
                    className={`group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/5 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/15 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] ${
                      linked ? 'cursor-pointer' : 'cursor-default opacity-60'
                    }`}
                  >
                    <span className="relative h-8 w-8">
                      {/* White by default, brand colour on hover */}
                      <img
                        src={`https://cdn.simpleicons.org/${s.slug}/FFFFFF`}
                        alt=""
                        className="absolute inset-0 h-8 w-8 transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <img
                        src={`https://cdn.simpleicons.org/${s.slug}/${s.color}`}
                        alt={s.name}
                        className="absolute inset-0 h-8 w-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </span>

                    <span className="text-sm font-medium tracking-wide">{s.name}</span>

                    {!linked && (
                      <span className="text-[10px] uppercase tracking-widest text-white/40">
                        Soon
                      </span>
                    )}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Socials;
