import { Car, Menu } from "lucide-react";
import { useState } from "react";
import ThemeToggleButton from "../components/custom/ToggleThemeButton";
import { Link } from "react-router-dom";
import LoginLabel from "@/components/custom/LoginLabel";
import { LoginResponse } from "@/services/api/authService";
import { GetLocalStr } from "@/services/utils/storage";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const loginResponse = GetLocalStr<LoginResponse>("loginResponse");

  return (
    <>
      <header className="bg-background shadow-md mb-2">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/">
            <div className="flex items-center space-x-2">
              <Car className="text-primary" size={28} />
              <span className="text-xl font-bold text-primary">SmartPark</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/search"
              className="font-medium text-primary hover:primary-hover transition-colors"
            >
              Booking
            </Link>
            <a
              href="#how-it-works"
              className="font-medium text-primary hover:primary-hover transition-colors"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="font-medium text-primary hover:primary-hover transition-colors"
            >
              Pricing
            </a>
            <a
              href="/about"
              className="font-medium text-primary hover:primary-hover transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex space-x-4">
            {!loginResponse ? (
              <>
                <Link
                  to="/auth/register"
                  className="cursor-pointer btn px-4 py-2 rounded-md text-primary font-medium transition-colors border border-primary hover:bg-on-primary-hover hover:text-primary-hover"
                >
                  Register
                </Link>
                <Link
                  to="/auth/login"
                  className="cursor-pointer btn px-4 py-2 bg-primary text-on-primary rounded-md font-medium hover:bg-primary-hover hover:text-on-primary-hover transition-colors"
                >
                  Login
                </Link>
              </>
            ) : (
              <>
                <LoginLabel name={loginResponse.fullName} />
              </>
            )}

            <ThemeToggleButton />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <Menu size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white p-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="font-medium text-primary hover:primary-hover transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="font-medium text-primary hover:primary-hover transition-colors"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="font-medium text-primary hover:primary-hover transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="font-medium text-primary hover:primary-hover transition-colors"
              >
                Contact
              </a>
              <button className="px-4 py-2 rounded-md text-primary font-medium hover:bg-blue-50 transition-colors w-full text-left">
                Log In
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors w-full text-left">
                Sign Up
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
