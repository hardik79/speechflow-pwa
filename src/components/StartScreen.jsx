import { motion } from 'framer-motion';
import { HeartPulse, ArrowRight } from 'lucide-react';

export default function StartScreen({ onStart }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-blue-50 to-teal-50 h-full">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mb-8 shadow-sm"
      >
        <HeartPulse className="w-12 h-12 text-teal-600" />
      </motion.div>
      
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-3xl font-bold text-slate-800 mb-4"
      >
        Your Daily Moment
      </motion.h1>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-lg text-slate-600 mb-12 max-w-xs leading-relaxed"
      >
        Take a deep breath. We'll go at your pace today.
      </motion.p>
      
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        onClick={onStart}
        className="group relative flex items-center justify-center w-full max-w-xs bg-teal-600 hover:bg-teal-700 text-white font-medium py-4 px-8 rounded-2xl shadow-lg shadow-teal-200 transition-colors"
      >
        <span className="text-lg">Begin Lesson</span>
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </div>
  );
}
