import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import clsx from 'clsx';

export default function FeedbackOverlay({ status, message, onContinue }) {
  if (status === 'idle') return null;

  const isCorrect = status === 'correct';
  
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={clsx(
          "fixed bottom-0 left-0 right-0 p-6 pt-8 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50",
          isCorrect ? "bg-green-50" : "bg-orange-50"
        )}
      >
        <div className="max-w-md mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={clsx(
              "p-2 rounded-full",
              isCorrect ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-500"
            )}>
              {isCorrect ? <CheckCircle2 className="w-8 h-8" /> : <AlertCircle className="w-8 h-8" />}
            </div>
            <div>
              <h3 className={clsx(
                "text-xl font-bold mb-1",
                isCorrect ? "text-green-700" : "text-orange-600"
              )}>
                {isCorrect ? "Wonderful!" : "Let's try again"}
              </h3>
              <p className={clsx(
                "text-sm font-medium",
                isCorrect ? "text-green-600/80" : "text-orange-500/80"
              )}>
                {message || (isCorrect ? "That sounded great." : "Take a breath and try once more.")}
              </p>
            </div>
          </div>
          
          <button
            onClick={onContinue}
            className={clsx(
              "w-full sm:w-auto px-8 py-3 rounded-2xl font-bold text-white transition-transform active:scale-95 shadow-md mt-4 sm:mt-0",
              isCorrect ? "bg-green-500 hover:bg-green-600 shadow-green-200" : "bg-orange-400 hover:bg-orange-500 shadow-orange-200"
            )}
          >
            Continue
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
