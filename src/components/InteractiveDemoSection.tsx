import { useState } from "react";
import { Button } from "@/components/ui/button";

const InteractiveDemoSection = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Experience AI Video Generation</h2>
        <p className="text-gray-600 mb-6">
          See how our technology transforms your ideas into visual masterpieces
        </p>
        
        <Button 
          onClick={() => setIsActive(!isActive)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          {isActive ? "Hide Demo" : "Try Interactive Demo"}
        </Button>
        
        {isActive && (
          <div className="mt-6 p-6 bg-white rounded-lg shadow">
            <p>Interactive demo area with live preview and customization options</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveDemoSection;