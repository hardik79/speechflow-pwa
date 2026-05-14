import { motion } from 'framer-motion';
import { Star, Flame } from 'lucide-react';

export default function RewardScreen({ onFinish }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-orange-50 to-peach-100 h-full">
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative mb-10"
      >
        <div className="absolute inset-0 bg-orange-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
        <div className="relative w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-orange-100">
          <Star className="w-16 h-16 text-orange-400 fill-orange-400" />
        </div>
      </motion.div>
      
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-3xl font-bold text-slate-800 mb-2"
      >
        Wonderful Job
      </motion.h2>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-lg text-slate-600 mb-8"
      >
        You completed today's practice.
      </motion.p>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex gap-6 mb-12"
      >
        <div className="flex flex-col items-center bg-white/60 p-4 rounded-2xl shadow-sm glass">
          <span className="text-sm text-slate-500 font-medium mb-1">XP Earned</span>
          <span className="text-2xl font-bold text-teal-600">+40</span>
        </div>
        <div className="flex flex-col items-center bg-white/60 p-4 rounded-2xl shadow-sm glass">
          <span className="text-sm text-slate-500 font-medium mb-1">Day Streak</span>
          <div className="flex items-center text-orange-500 font-bold text-2xl">
            <Flame className="w-6 h-6 mr-1 fill-orange-500" />
            <span>3</span>
          </div>
        </div>
      </motion.div>
      
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        onClick={onFinish}
        className="w-full max-w-xs bg-slate-800 hover:bg-slate-900 text-white font-medium py-4 px-8 rounded-2xl shadow-lg transition-colors"
      >
        Done for Today
      </motion.button>
    </div>
  );
}
