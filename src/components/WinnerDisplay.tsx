import { motion, AnimatePresence } from "framer-motion";

interface Winner {
  id: number;
  name: string;
  image: string;
}

interface WinnerDisplayProps {
  winners: Winner[];
  isSelecting: boolean;
}

const WinnerDisplay = ({ winners, isSelecting }: WinnerDisplayProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="relative mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#9b87f5]/10 to-transparent" />
        <div className="relative p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            {isSelecting ? "Selecting..." : "Top 5 Winners!"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {winners.map((winner, index) => (
              <motion.div
                key={winner.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-[#9b87f5] ring-offset-2 mb-2">
                  <img
                    src={winner.image}
                    alt={winner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg font-semibold text-center text-gray-900">
                  {winner.name}
                </p>
                <p className="text-sm font-medium text-[#9b87f5]">
                  #{index + 1}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WinnerDisplay;