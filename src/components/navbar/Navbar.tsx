import { ChevronDown, Globe, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`h-[80px] bg-white sticky top-0 dark:bg-dark dark:border-dark border-b border-[#D3D6DE] py-3 px-4 md:px-8 flex items-center justify-between z-50`}
      >
        <nav className="container mx-auto h-10 gap-9 flex-1 flex items-center justify-between lg:justify-start lg:gap-9">
          <h3 className="text-primary-100 font-glory text-3xl md:text-4xl leading-10 font-bold tracking-[-2%]">
            VeeWallet
          </h3>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex max:w-[831px] w-auto gap-6">
            {["Buy Crypto", "Markets", "Trades", "Derivatives", "Earn", "NFT"].map(
              (item, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-1 text-lg font-inter cursor-pointer ${
                    theme === "dark"
                      ? "text-gray-300 hover:text-primary-100"
                      : "text-dark-200 hover:text-primary-100"
                  }`}
                >
                  {item}
                  {["Buy Crypto", "Trades", "Derivatives", "Earn", "NFT"].includes(
                    item
                  ) && <ChevronDown className="w-3 h-3" />}
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Right Section (Buttons + Theme Toggle) */}
        <section className="hidden md:flex gap-4 items-center">
          <button className="text-primary-100 py-3 px-6 rounded-lg text-base font-semibold font-inter">
            Sign In
          </button>
          <button className="text-[#FAFAFB] bg-primary-100 py-3 px-6 rounded-lg font-semibold text-base">
            Get Started
          </button>
          <div className="w-12 h-12 rounded-lg flex items-center justify-center cursor-pointer">
            <Globe className="w-8 h-8 dark:bg-white" />
          </div>
          <div
            onClick={toggleTheme}
            className="w-12 h-12 rounded-lg flex items-center justify-center cursor-pointer"
          >
            {theme === "light" ? (
              <Sun className="w-8 h-8 text-gray-600" />
            ) : (
              <Moon className="w-8 h-8 text-gray-300" />
            )}
          </div>
        </section>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`lg:hidden bg-[#FAFAFB] dark:bg-gray-900 z-50`}>
          <nav className="p-6">
            <ul className="space-y-6">
              {["Buy Crypto", "Markets", "Trades", "Derivatives", "Earn", "NFT"].map(
                (item, index) => (
                  <li
                    key={index}
                    className={`flex items-center justify-between text-lg font-inter cursor-pointer ${
                      theme === "dark" ? "text-gray-300" : "text-dark-200"
                    }`}
                  >
                    {item}
                    {["Buy Crypto", "Trades", "Derivatives", "Earn", "NFT"].includes(
                      item
                    ) && <ChevronDown className="w-3 h-3" />}
                  </li>
                )
              )}
            </ul>
            <div className="mt-6 space-y-4">
              <button className="w-full border text-primary-100 py-3 px-6 rounded-lg text-base font-semibold font-inter">
                Sign In
              </button>
              <button className="w-full bg-primary-100 py-3 px-6 rounded-lg text-white font-semibold">
                Get Started
              </button>
              <div className="flex gap-4 justify-center mt-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                  <Globe className="w-8 h-8" />
                </div>
                <div
                  onClick={toggleTheme}
                  className="w-12 h-12 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-700"
                >
                  {theme === "light" ? (
                    <Sun className="w-8 h-8 text-gray-600" />
                  ) : (
                    <Moon className="w-8 h-8 text-gray-300" />
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
