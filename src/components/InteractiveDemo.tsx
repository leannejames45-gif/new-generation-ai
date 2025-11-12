import { useState } from "react";
import { Button } from "@/components/ui/button";

const InteractiveDemo = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="bg-blue-50 p-6 rounded-lg text-center my-12">
      <h3 className="text-xl font-semibold mb-4">See AI Video Generation in Action</h3>
      <p className="text-gray-600 mb-4">
        Watch how our AI transforms your text into amazing videos
      </p>
      <Button 
        onClick={() => setIsActive(!isActive)}
        className="bg-blue-600 text-white"
      >
        {isActive ? "Hide Demo" : "Show Interactive Demo"}
      </Button>
      
      {isActive && (
        <div className="mt-4 p-4 bg-white rounded-lg">
          <p>Interactive demo would go here with animations and real-time generation preview</p>
        </div>
      )}
    </div>
  );
};

export default InteractiveDemo;