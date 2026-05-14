import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function ProgressBar({ currentStep, totalSteps, onClose }) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="flex items-center w-full px-4 py-6 bg-transparent">
      <button 
        onClick={onClose}
        className="p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-slate-100"
      >
        <X className="w-6 h-6" />
      </button>
      
      <div className="flex-1 ml-4 mr-2 h-3 bg-slate-200 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-teal-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
