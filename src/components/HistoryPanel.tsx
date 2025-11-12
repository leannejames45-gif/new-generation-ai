import { useState } from "react";

const HistoryPanel = () => {
  const [history, setHistory] = useState([
    {
      id: 1,
      prompt: "A sunset at the beach",
      date: "2 hours ago"
    },
    {
      id: 2, 
      prompt: "Forest with sunlight rays",
      date: "1 day ago"
    }
  ]);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold mb-4">Recent Generations</h3>
      {history.map((item) => (
        <div key={item.id} className="border-b border-gray-100 py-2">
          <p className="text-sm">{item.prompt}</p>
          <p className="text-xs text-gray-500">{item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default HistoryPanel;