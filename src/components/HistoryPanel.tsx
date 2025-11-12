import { useState, useEffect } from "react";

const HistoryPanel = () => {
  const [history, setHistory] = useState<any[]>([]);

  // Load history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('videoHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold mb-4">Recent Generations</h3>
      {history.length === 0 ? (
        <p className="text-gray-500 text-sm">No videos generated yet</p>
      ) : (
        history.map((item) => (
          <div key={item.id} className="border-b border-gray-100 py-2">
            <p className="text-sm">{item.prompt}</p>
            <p className="text-xs text-gray-500">{item.date}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default HistoryPanel;