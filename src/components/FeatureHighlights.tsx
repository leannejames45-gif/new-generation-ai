const FeatureHighlights = () => {
  const features = [
    {
      title: "Instant Generation",
      description: "Create videos in seconds with AI"
    },
    {
      title: "Multiple Styles", 
      description: "From realistic to animated styles"
    },
    {
      title: "Easy to Use",
      description: "No technical skills required"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {features.map((feature, index) => (
        <div key={index} className="text-center p-4">
          <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureHighlights;