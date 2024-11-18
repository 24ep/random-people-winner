import PersonCard from "./PersonCard";

interface Person {
  id: number;
  name: string;
  image: string;
}

interface PeopleGridProps {
  people: Person[];
  selectedId?: number | null;
}

const PeopleGrid = ({ people, selectedId }: PeopleGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {people.map((person) => (
        <PersonCard
          key={person.id}
          person={person}
          isSelected={person.id === selectedId}
        />
      ))}
    </div>
  );
};

export default PeopleGrid;