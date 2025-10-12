import { motion } from "framer-motion";

export default function LoadingScreen({ progress = 0 }) {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-green-50 to-emerald-100 flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {/* Logo atau ikon loading */}
        <div className="mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full mx-auto"
          />
        </div>

        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          Artha Bonsai
        </h2>

        {/* Progress bar */}
        <div className="w-64 h-2 bg-green-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <p className="mt-4 text-green-600 text-sm">
          Preparing your zen experience...
        </p>
      </motion.div>
    </div>
  );
}
