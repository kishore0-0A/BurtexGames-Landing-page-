import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router';
function AnimatedOutlet() {
  const outlet = useOutlet();
  return <>{outlet}</>;
}
// No need for ReactNode import

export default function PageTransition() {
  const location = useLocation();
  // No need for useOutlet here; we'll use AnimatedOutlet component

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20, filter: 'brightness(0.7)' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {<AnimatedOutlet />}
      </motion.div>
    </AnimatePresence>
  );
}
