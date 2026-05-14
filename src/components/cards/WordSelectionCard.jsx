import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function WordSelectionCard({ data, onComplete }) {
  const [selectedWord, setSelectedWord] = useState(null);

  const handleSelect = (word) => {
    setSelectedWord(word);
    const isCorrect = word === data.correctAnswer;
    
    // Slight delay to allow seeing the selection before showing feedback
    setTimeout(() => {
      onComplete(isCorrect, isCorrect ? "Perfectly chosen." : "That wasn't quite it. Listen to the sound again.");
    }, 400);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">{data.title}</h2>
      <p className="text-slate-500 mb-12 text-center">{data.instruction}</p>

      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        {data.options.map((word, index) => {
          const isSelected = selectedWord === word;
          return (
            <motion.button
              key={word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect(word)}
              disabled={selectedWord !== null}
              className={clsx(
                "p-6 rounded-2xl text-lg font-bold text-slate-700 shadow-sm border-2 transition-all",
                isSelected ? "bg-teal-50 border-teal-500 text-teal-700 scale-[1.02]" : "bg-white border-transparent hover:border-teal-200"
              )}
            >
              {word}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
