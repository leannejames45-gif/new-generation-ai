import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import GenerationStatus from "@/components/GenerationStatus";
import { generateVideo } from "@/utils/api";
import { useToast } from "@/hooks/use-toast";

const VideoGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a video description",
        variant: "destructive"
      });
      return;
    }

    if (!style) {
      toast({
        title: "Error",
        description: "Please select a video style",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    setProgress(0);
    setGeneratedVideo(null);
    
    try {
      // Simulate generation progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = Math.min(prev + 5, 95);
          if (newProgress === 95) {
            clearInterval(interval);
          }
          return newProgress;
        });
      }, 200);

      // Call the actual API
      const result = await generateVideo(prompt, style);
      
      // Complete the progress
      clearInterval(interval);
      setProgress(100);
      
      // Set the generated video URL
      setGeneratedVideo(result.videoUrl || "https://example.com/generated-video.mp4");
      
      // Save to history
      const newHistoryItem = {
        id: Date.now(),
        prompt,
        style,
        date: new Date().toLocaleString(),
        videoUrl: result.videoUrl || "https://example.com/generated-video.mp4"
      };
      
      // Update localStorage
      const savedHistory = localStorage.getItem('videoHistory');
      const history = savedHistory ? JSON.parse(savedHistory) : [];
      const updatedHistory = [newHistoryItem, ...history.slice(0, 9)]; // Keep only last 10 items
      localStorage.setItem('videoHistory', JSON.stringify(updatedHistory));
      
      // Show success message
      toast({
        title: "Success",
        description: "Your video has been generated successfully!"
      });
      
      // Reset generating state after a delay
      setTimeout(() => {
        setIsGenerating(false);
      }, 1000);
    } catch (error) {
      setIsGenerating(false);
      toast({
        title: "Error",
        description: "Failed to generate video. Please try again.",
        variant: "destructive"
      });
      console.error("Generation error:", error);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Create Your AI Video
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="text-sm font-medium mb-2 block">What would you like to see?</label>
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your video... e.g., 'A peaceful beach at sunset with gentle waves'"
              className="w-full p-3 border rounded-lg"
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Video Style</label>
            <Select value={style} onValueChange={setStyle}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="realistic">Realistic</SelectItem>
                <SelectItem value="animated">Animated</SelectItem>
                <SelectItem value="abstract">Abstract</SelectItem>
                <SelectItem value="fantasy">Fantasy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={handleGenerate} 
            disabled={isGenerating}
            className="w-full py-3 text-lg"
          >
            {isGenerating ? "Generating..." : "Generate Video"}
          </Button>

          <GenerationStatus isGenerating={isGenerating} progress={progress} />

          {generatedVideo && (
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Your Generated Video</h3>
              <video 
                src={generatedVideo} 
                controls 
                className="w-full rounded-lg shadow"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoGenerator;