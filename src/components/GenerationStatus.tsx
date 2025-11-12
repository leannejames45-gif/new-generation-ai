import { Card, CardContent } from "@/components/ui/card";

const GenerationStatus = ({ isGenerating, progress }: { isGenerating: boolean; progress: number }) => {
  if (!isGenerating) return null;

  return (
    <Card className="mt-4">
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2">Generating your video...</h3>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          This usually takes 1-2 minutes. Thank you for your patience!
        </p>
      </CardContent>
    </Card>
  );
};

export default GenerationStatus;