const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-xl font-bold">MO</span>
            <span className="text-brand-red text-xl font-bold">HIT</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-300">
              © {currentYear} Mohit Sehrawat. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Built with React & TypeScript
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-600 text-center">
          <p className="text-gray-400 text-sm">
            Designed & Developed with ❤️ by Mohit Sehrawat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;