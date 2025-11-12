import VideoGenerator from "./pages/VideoGenerator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HistoryPanel from "./components/HistoryPanel";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FeatureHighlights from "./components/FeatureHighlights";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto p-6 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Create with AI</h1>
          <p className="text-lg text-gray-600">
            Transform your ideas into stunning videos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <VideoGenerator />
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Recent Creations</h2>
              <HistoryPanel />
            </div>
          </div>
        </div>

        <div className="my-12">
          <FeatureHighlights />
        </div>

        <div className="text-center mt-12">
          <ThemeToggle />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;