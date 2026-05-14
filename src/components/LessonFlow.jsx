import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { lessonData } from '../data/lessonData';
import ProgressBar from './ProgressBar';
import FeedbackOverlay from './FeedbackOverlay';
import ListenRepeatCard from './cards/ListenRepeatCard';
import WordSelectionCard from './cards/WordSelectionCard';
import MirrorCoachingCard from './cards/MirrorCoachingCard';
import ConfidenceReflectionCard from './cards/ConfidenceReflectionCard';

export default function LessonFlow({ onFinish, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState({ status: 'idle', message: '' }); // 'idle', 'correct', 'incorrect'

  const currentCard = lessonData[currentIndex];

  const handleCardComplete = (isCorrect, message) => {
    setFeedback({
      status: isCorrect ? 'correct' : 'incorrect',
      message: message
    });
  };

  const handleContinue = () => {
    if (feedback.status === 'correct') {
      // Move to next or finish
      if (currentIndex < lessonData.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setFeedback({ status: 'idle', message: '' });
      } else {
        onFinish();
      }
    } else {
      // If incorrect, hide feedback and let them try again
      setFeedback({ status: 'idle', message: '' });
    }
  };

  const renderCard = () => {
    switch (currentCard.type) {
      case 'listen-repeat':
        return <ListenRepeatCard key={currentCard.id} data={currentCard} onComplete={handleCardComplete} />;
      case 'word-selection':
        return <WordSelectionCard key={currentCard.id} data={currentCard} onComplete={handleCardComplete} />;
      case 'mirror-coaching':
        return <MirrorCoachingCard key={currentCard.id} data={currentCard} onComplete={handleCardComplete} />;
      case 'confidence-reflection':
        return <ConfidenceReflectionCard key={currentCard.id} data={currentCard} onComplete={handleCardComplete} />;
      default:
        return <div>Unknown Card Type</div>;
    }
  };

  return (
    <div className="flex-1 flex flex-col w-full h-full bg-slate-50 relative overflow-hidden">
      <ProgressBar 
        currentStep={currentIndex} 
        totalSteps={lessonData.length} 
        onClose={onClose} 
      />
      
      <div className="flex-1 relative w-full h-full overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className="absolute inset-0 pb-24" // padding bottom for feedback overlay
          >
            {renderCard()}
          </motion.div>
        </AnimatePresence>
      </div>

      <FeedbackOverlay 
        status={feedback.status} 
        message={feedback.message} 
        onContinue={handleContinue} 
      />
    </div>
  );
}
