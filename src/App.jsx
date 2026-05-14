import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import StartScreen from './components/StartScreen';
import LessonFlow from './components/LessonFlow';
import RewardScreen from './components/RewardScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('start'); // 'start', 'lesson', 'reward'

  const handleStart = () => setCurrentScreen('lesson');
  const handleLessonFinish = () => setCurrentScreen('reward');
  const handleRewardFinish = () => setCurrentScreen('start');
  const handleClose = () => setCurrentScreen('start');

  return (
    <main className="w-full h-[100dvh] max-w-md mx-auto bg-white shadow-2xl relative overflow-hidden flex flex-col">
      <AnimatePresence mode="wait">
        {currentScreen === 'start' && (
          <motion.div
            key="start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full absolute inset-0"
          >
            <StartScreen onStart={handleStart} />
          </motion.div>
        )}
        
        {currentScreen === 'lesson' && (
          <motion.div
            key="lesson"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full absolute inset-0 bg-slate-50"
          >
            <LessonFlow onFinish={handleLessonFinish} onClose={handleClose} />
          </motion.div>
        )}
        
        {currentScreen === 'reward' && (
          <motion.div
            key="reward"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-full h-full absolute inset-0 z-20"
          >
            <RewardScreen onFinish={handleRewardFinish} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
