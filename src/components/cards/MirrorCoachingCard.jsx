import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function MirrorCoachingCard({ data, onComplete }) {
  const [phase, setPhase] = useState('breathe-in'); // 'breathe-in', 'hold', 'breathe-out', 'ready'
  
  // Simple breathing cycle
  useEffect(() => {
    let timeout;
    if (phase === 'breathe-in') {
      timeout = setTimeout(() => setPhase('hold'), 3000);
    } else if (phase === 'hold') {
      timeout = setTimeout(() => setPhase('breathe-out'), 1000);
    } else if (phase === 'breathe-out') {
      timeout = setTimeout(() => setPhase('ready'), 3000);
    }
    return () => clearTimeout(timeout);
  }, [phase]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 relative overflow-hidden">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">{data.title}</h2>
      <p className="text-slate-500 mb-8 text-center">{data.instruction}</p>

      {/* Camera UI Container */}
      <div className="relative w-64 h-64 mb-8 flex items-center justify-center">
        {/* Breathing glow animation */}
        <motion.div 
          animate={{
            scale: phase === 'breathe-in' ? 1.2 : phase === 'breathe-out' ? 0.8 : 1,
            opacity: phase === 'breathe-in' ? 0.4 : phase === 'breathe-out' ? 0.1 : 0.3
          }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="absolute inset-0 bg-teal-200 rounded-full blur-2xl"
        />
        
        {/* Mirror Frame */}
        <div className="relative w-56 h-56 rounded-full border-4 border-white/40 shadow-xl overflow-hidden bg-slate-100 flex flex-col items-center justify-end glass">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-32 h-32 bg-slate-300/50 rounded-t-full mb-[-2rem] flex items-center justify-center"
          >
            {/* Silhouette */}
            <User className="w-24 h-24 text-slate-400 mb-4" />
          </motion.div>
          
          {/* Scanning line animation */}
          <motion.div 
            animate={{ y: ["0%", "200%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 right-0 h-1 bg-teal-400/50 blur-sm"
          />
        </div>
      </div>

      {/* Coaching Hint */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 p-4 rounded-2xl shadow-sm text-center mb-8 max-w-sm glass"
      >
        <p className="text-teal-800 font-medium">{data.hint}</p>
        <p className="text-sm text-teal-600/80 mt-1 uppercase tracking-widest font-bold">
          {phase === 'breathe-in' && "Breathe In..."}
          {phase === 'hold' && "Hold..."}
          {phase === 'breathe-out' && "Breathe Out..."}
          {phase === 'ready' && "Now Try It"}
        </p>
      </motion.div>

      <button
        onClick={() => onComplete(true, "Beautiful form.")}
        disabled={phase !== 'ready'}
        className="w-full max-w-xs bg-slate-800 hover:bg-slate-900 disabled:opacity-50 disabled:bg-slate-300 text-white font-medium py-4 px-8 rounded-2xl shadow-lg transition-colors"
      >
        I Did It
      </button>
    </div>
  );
}
