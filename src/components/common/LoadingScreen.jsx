import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ visible = true }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 flex flex-col justify-center items-center bg-white z-[9999]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-green-700 font-medium">Loading...</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
