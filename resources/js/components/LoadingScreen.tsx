import macaoImage from '@/assets/images/macao_logo.png';

import { AnimatePresence, motion } from 'framer-motion';
import React, { PropsWithChildren, useEffect, useState } from 'react';

const LoadingScreen: React.FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: -20,
            transition: {
              duration: 0.75,
              ease: [0.43, 0.13, 0.23, 0.96],
              y: { duration: 0.5 },
              opacity: { duration: 0.5 }
            }
          }}
        >
          <motion.img
            src={macaoImage}
            alt="Logo"
            className="w-28 h-28 object-cover"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
