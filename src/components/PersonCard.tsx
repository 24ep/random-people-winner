import { motion } from "framer-motion";

interface Person {
  id: number;
  name: string;
  image: string;
}

interface PersonCardProps {
  person: Person;
  isSelected: boolean;
}

const PersonCard = ({ person, isSelected }: PersonCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`relative overflow-hidden rounded-xl bg-white p-4 shadow-lg transition-all duration-300 ${
        isSelected
          ? "ring-4 ring-[#9b87f5] ring-offset-2 scale-105"
          : "hover:scale-102 hover:shadow-xl"
      }`}
    >
      <div className="aspect-square overflow-hidden rounded-lg mb-4">
        <img
          src={person.image}
          alt={person.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 text-center">
        {person.name}
      </h3>
    </motion.div>
  );
};

export default PersonCard;