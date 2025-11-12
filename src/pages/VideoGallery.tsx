import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const VideoGallery = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Sunset Beach Scene",
      url: "https://example.com/video1.mp4",
      prompt: "A beautiful sunset at the beach with waves"
    },
    {
      id: 2,
      title: "Mountain Adventure",
      url: "https://example.com/video2.mp4", 
      prompt: "Hiking through misty mountains"
    }
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video) => (
        <Card key={video.id} className="overflow-hidden">
          <video 
            src={video.url} 
            controls 
            className="w-full h-48 object-cover"
          />
          <CardContent className="p-4">
            <h3 className="font-semibold">{video.title}</h3>
            <p className="text-sm text-gray-600">{video.prompt}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default VideoGallery;