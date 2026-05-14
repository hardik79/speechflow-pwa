import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function ConfidenceReflectionCard({ data, onComplete }) {
  const handleSelect = (option) => {
    // There is no right or wrong answer here, it's a reflection
    setTimeout(() => {
      onComplete(true, "Thank you for reflecting. It's perfectly okay to feel that way.");
    }, 400);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">{data.title}</h2>
      <p className="text-slate-500 mb-12 text-center">{data.instruction}</p>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        {data.options.map((option, index) => (
          <motion.button
            key={option}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelect(option)}
            className="w-full text-left p-6 rounded-2xl text-lg font-medium text-slate-700 bg-white shadow-sm border border-slate-100 hover:border-teal-300 hover:shadow-md transition-all"
          >
            {option}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
