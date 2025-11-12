import { useState } from "react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setIsDark(!isDark)}
      className="rounded-full"
    >
      {isDark ? "️" : "🌙"}
    </Button>
  );
};

export default ThemeToggle;