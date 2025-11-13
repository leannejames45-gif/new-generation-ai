import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Brain, Cpu } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number}>>([]);

  // Generate floating particles for background effect
  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1
    }));
    setParticles(newParticles);
  }, []);

  const handleGenerate = () => {
    if (!prompt.trim() || !style) return;
    setIsGenerating(true);
    
    // Simulate generation process
    setTimeout(() => {
      setIsGenerating(false);
      // In a real app, this would navigate to the results page
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-blue-400/20 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${Math.random() * 4 + 2}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.1)_0%,rgba(255,255,255,0)_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,119,198,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-16 mt-8">
          <Badge className="mb-4 bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Video Creation
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Create with AI
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Transform your ideas into stunning videos using cutting-edge artificial intelligence. 
            No technical skills required.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Zap className="w-4 h-4 mr-2" />
              Instant Generation
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Brain className="w-4 h-4 mr-2" />
              Multiple Styles
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Cpu className="w-4 h-4 mr-2" />
              4K Resolution
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Video Generator Card */}
          <Card className="lg:col-span-2 bg-slate-800/40 backdrop-blur-lg border border-slate-700/50 shadow-2xl shadow-purple-500/10">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center">
                <Sparkles className="w-6 h-6 mr-2 text-purple-400" />
                Create Your Video
              </CardTitle>
              <p className="text-gray-400">
                Describe what you want to see and our AI will generate it
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Video Description
                </label>
                <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your video... e.g., 'A futuristic cityscape at sunset with flying cars'"
                  className="min-h-[120px] bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Style
                </label>
                <Select value={style} onValueChange={setStyle}>
                  <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white focus:ring-purple-500 focus:border-purple-500">
                    <SelectValue placeholder="Select a style" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    <SelectItem value="realistic">Photorealistic</SelectItem>
                    <SelectItem value="animated">Animated</SelectItem>
                    <SelectItem value="cinematic">Cinematic</SelectItem>
                    <SelectItem value="abstract">Abstract Art</SelectItem>
                    <SelectItem value="scifi">Sci-Fi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                onClick={handleGenerate}
                disabled={isGenerating || !prompt.trim() || !style}
                className="w-full py-6 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5 mr-2" />
                    Generate Video
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
          
          {/* Features Panel */}
          <div className="space-y-6">
            <Card className="bg-slate-800/40 backdrop-blur-lg border border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">How It Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-lg mr-3">
                    <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Describe Your Vision</h3>
                    <p className="text-sm text-gray-400">Tell us what you want to see in your video</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-lg mr-3">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">AI Generation</h3>
                    <p className="text-sm text-gray-400">Our AI creates your video in seconds</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pink-500/20 p-2 rounded-lg mr-3">
                    <div className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Download & Share</h3>
                    <p className="text-sm text-gray-400">Get your video in high quality</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/40 backdrop-blur-lg border border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Recent Creations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-center py-8">
                  Sign in to see your generated videos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center py-8">
          <MadeWithDyad />
        </div>
      </div>
    </div>
  );
};

export default Index;