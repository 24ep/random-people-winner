import { motion, AnimatePresence } from "framer-motion";

interface Winner {
  id: number;
  name: string;
  image: string;
}

interface WinnerDisplayProps {
  winner: Winner;
  isSelecting: boolean;
}

const WinnerDisplay = ({ winner, isSelecting }: WinnerDisplayProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="relative mx-auto max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#9b87f5]/10 to-transparent" />
        <div className="relative p-8">
          <h2 className="text-2xl font-bold text-center mb-4">
            {isSelecting ? "Selecting..." : "Winner!"}
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-[#9b87f5] ring-offset-2">
              <img
                src={winner.image}
                alt={winner.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-xl font-semibold text-center text-gray-900">
            {winner.name}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WinnerDisplay;