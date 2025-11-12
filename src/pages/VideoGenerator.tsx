import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import GenerationStatus from "@/components/GenerationStatus";

const VideoGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setProgress(0);
    
    // Simulate generation progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(prev + 5, 100);
        if (newProgress === 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsGenerating(false);
          }, 500);
        }
        return newProgress;
      });
    }, 200);
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
            <Select>
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

          {isGenerating && <GenerationStatus isGenerating={isGenerating} progress={progress} />}
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoGenerator;