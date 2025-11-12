export const generateVideo = async (prompt: string, style: string) => {
  // This would be replaced with actual API call
  const response = await fetch('https://api.example.com/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
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