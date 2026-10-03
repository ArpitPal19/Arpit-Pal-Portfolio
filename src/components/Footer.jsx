const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-300 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © {year} Arpit Pal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
