import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Mic, Square } from 'lucide-react';
import clsx from 'clsx';

export default function ListenRepeatCard({ data, onComplete }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecorded, setHasRecorded] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    // Simulate audio playing
    setTimeout(() => setIsPlaying(false), 2000);
  };

  const handleRecord = () => {
    if (isRecording) {
      setIsRecording(false);
      setHasRecorded(true);
      // Simulate checking the recording and calling onComplete after a short delay
      setTimeout(() => {
        onComplete(true, "Great pronunciation.");
      }, 800);
    } else {
      setIsRecording(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">{data.title}</h2>
      <p className="text-slate-500 mb-12 text-center">{data.instruction}</p>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 w-full max-w-sm flex flex-col items-center mb-12">
        <span className="text-4xl font-bold text-slate-700 tracking-widest mb-8">
          {data.content}
        </span>
        
        <button
          onClick={handlePlay}
          disabled={isPlaying || isRecording}
          className={clsx(
            "flex items-center justify-center w-16 h-16 rounded-full transition-all mb-4",
            isPlaying ? "bg-teal-100 text-teal-600 scale-110" : "bg-blue-50 text-blue-500 hover:bg-blue-100"
          )}
        >
          <Play className="w-8 h-8 ml-1" />
        </button>
        <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">
          {isPlaying ? "Playing..." : "Listen"}
        </span>
      </div>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={handleRecord}
        className={clsx(
          "relative flex items-center justify-center w-20 h-20 rounded-full shadow-lg transition-colors",
          isRecording ? "bg-red-500 text-white" : "bg-teal-500 text-white",
          hasRecorded && !isRecording ? "opacity-50 cursor-not-allowed" : ""
        )}
        disabled={hasRecorded && !isRecording}
      >
        {isRecording && (
          <motion.div 
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute inset-0 bg-red-400 rounded-full opacity-30"
          />
        )}
        {isRecording ? <Square className="w-8 h-8 fill-current" /> : <Mic className="w-8 h-8" />}
      </motion.button>
      <span className="text-sm text-slate-500 font-medium mt-4">
        {isRecording ? "Tap to stop" : "Tap to speak"}
      </span>
    </div>
  );
}
