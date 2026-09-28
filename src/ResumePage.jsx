import { motion } from 'framer-motion';
import { ArrowLeft, Download, FileText, ShieldCheck, Sparkles } from 'lucide-react';
import resumeFile from './assets/VarunNairResume.pdf';

function ResumePage({ onBack }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen overflow-hidden bg-[#07111f] px-5 pb-12 pt-28 text-white sm:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_88%_80%,rgba(250,204,21,0.12),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          

          <a
            href={resumeFile}
            download
            className="inline-flex items-center gap-2 border border-yellow-300/50 bg-yellow-300/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-100 transition hover:bg-yellow-300/20"
          >
            <Download size={16} />
            Download file
          </a>
        </div>

        <header className="mb-8 border-l-4 border-cyan-300 pl-5">
          <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.32em] text-cyan-300">
            <Sparkles size={15} />
            Mission archive // unlocked
          </p>
          
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            A quick scan of Varun Nair&apos;s skills, experience, and next-level builds.
          </p>
        </header>

        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          <div className="border border-white/15 bg-white/[0.06] p-4 backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Player</p>
            <p className="mt-1 text-xl font-bold text-white">Varun Nair</p>
          </div>
          <div className="border border-white/15 bg-white/[0.06] p-4 backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Class</p>
            <p className="mt-1 text-xl font-bold text-cyan-200">Software Engineer</p>
          </div>
          <div className="border border-white/15 bg-white/[0.06] p-4 backdrop-blur-md">
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-slate-400"><ShieldCheck size={14} /> Status</p>
            <p className="mt-1 text-xl font-bold text-emerald-300">Ready for launch</p>
          </div>
        </div>

        <div className="border border-cyan-200/30 bg-slate-950/70 p-3 shadow-[0_0_50px_rgba(34,211,238,0.12)] backdrop-blur-xl sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">
              <FileText size={17} />
              Resume / main quest
            </p>
            <span className="text-xs uppercase tracking-[0.18em] text-slate-500">PDF // online</span>
          </div>
          <iframe
            title="Varun Nair resume"
            src={`${resumeFile}#view=FitH`}
            className="aspect-[612/792] w-full bg-white"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default ResumePage;