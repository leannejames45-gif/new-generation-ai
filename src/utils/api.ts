export const generateVideo = async (prompt: string, style: string) => {
  // Using the provided API key
  const API_KEY = 'c077929b410a4761ab7182fc0a5f2596';
  
  const response = await fetch('https://api.example.com/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      prompt,
      style,
      duration: 30 // seconds
    })
  });
  
  if (!response.ok) {
    throw new Error('Failed to generate video');
  }
  
  return response.json();
};