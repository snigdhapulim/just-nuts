import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-just-purple via-just-blue to-just-green p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Just Nuts Logo"
            width={100}
            height={50}
            className="rounded-md"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-lg text-black hover:text-purple-600">
            Home
          </a>
          <a href="#" className="text-lg text-black hover:text-purple-600">
            Blog
          </a>
          <a href="#" className="text-lg text-black hover:text-purple-600">
            About Us
          </a>
          <a href="#" className="text-lg text-black hover:text-purple-600">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-just-purple focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
