const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-12 py-8">
      <div className="container mx-auto text-center">
        <p className="text-gray-600">
          © 2024 AI Video Generator. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Privacy
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Terms
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;