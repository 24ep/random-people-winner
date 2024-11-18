import { useState } from "react";
import PeopleGrid from "@/components/PeopleGrid";
import WinnerDisplay from "@/components/WinnerDisplay";
import { Button } from "@/components/ui/button";

// Example data with 10 people
const people = [
  { id: 1, name: "Alice Johnson", image: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Bob Smith", image: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Carol White", image: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "David Brown", image: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Eve Wilson", image: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "Frank Davis", image: "https://i.pravatar.cc/150?img=6" },
  { id: 7, name: "Grace Taylor", image: "https://i.pravatar.cc/150?img=7" },
  { id: 8, name: "Henry Miller", image: "https://i.pravatar.cc/150?img=8" },
  { id: 9, name: "Ivy Clark", image: "https://i.pravatar.cc/150?img=9" },
  { id: 10, name: "Jack Lewis", image: "https://i.pravatar.cc/150?img=10" },
];

const Index = () => {
  const [selectedPeople, setSelectedPeople] = useState<typeof people>([]);
  const [winner, setWinner] = useState<typeof people[0] | null>(null);
  const [isSelecting, setIsSelecting] = useState(false);

  const selectRandomPeople = () => {
    setIsSelecting(true);
    
    // Shuffle array and get first 5 people
    const shuffled = [...people].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 5);
    setSelectedPeople(selected);
    
    // Simulate selection process with multiple steps
    let iterations = 0;
    const maxIterations = 20;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * selected.length);
      setWinner(selected[randomIndex]);
      iterations++;
      
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setIsSelecting(false);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Random Person Selector
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Click the button to randomly select 5 people and pick a winner
          </p>
          <Button
            onClick={selectRandomPeople}
            disabled={isSelecting}
            className={`px-8 py-6 text-lg bg-[#9b87f5] hover:bg-[#8b76f4] transition-all duration-300 ${
              isSelecting ? "animate-pulse" : ""
            }`}
          >
            {isSelecting ? "Selecting..." : "Pick Random Winner"}
          </Button>
        </div>

        {winner && <WinnerDisplay winner={winner} isSelecting={isSelecting} />}

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Selected Participants
          </h2>
          <PeopleGrid 
            people={selectedPeople.length > 0 ? selectedPeople : people} 
            selectedId={winner?.id} 
          />
        </div>
      </div>
    </div>
  );
};

export default Index;