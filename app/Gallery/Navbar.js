"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Gallery", href: "/Gallery" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href) => {
    if (href.startsWith("#")) {
      // Handle anchor links
      if (pathname === "/Gallery") {
        // If on Gallery page, navigate to home first, then scroll
        router.push("/");
        setTimeout(() => {
          if (href === "#home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            const element = document.querySelector(href);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }
        }, 100);
      } else {
        // On home page, just scroll
        if (href === "#home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    } else {
      // Handle route navigation
      router.push(href);
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg text-neutral-900" // Text color when scrolled
          : "bg-transparent text-neutral-900" // KEEP TEXT DARK when not scrolled
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer">
            {/* LOGO: Always use a dark color like text-neutral-800 */}
            <Link
              href="/"
              className={`text-2xl font-bold transition-colors cursor-pointer reverie text-neutral-800`}
            >
              Jassica
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline cursor-pointer space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  // NAV LINKS: Always use a dark color like text-neutral-700
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors text-neutral-700 hover:text-neutral-900`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            {/* GET QUOTE BUTTON: Adjust style when at top to fit with dark text */}
            <Button
              onClick={() => handleNavigation("#contact")}
              className={`transition-all duration-300 ${
                isScrolled
                  ? "bg-neutral-800 hover:bg-neutral-700 text-white"
                  : "bg-neutral-800 hover:bg-neutral-700 text-white backdrop-blur-sm" // Changed background to a solid dark color for better contrast with dark text
              }`}
              variant="default" // Force default variant to control colors manually
            >
              Get Quote
            </Button>
          </div>

          <div className="md:hidden">
            {/* MOBILE TOGGLE: Always use a dark color */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100`}
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        {/* Mobile menu remains white background with dark text */}
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                handleNavigation(item.href); // smooth scroll for internal links or route change
                setIsOpen(false); // close mobile menu
              }}
              className="text-neutral-700 hover:text-neutral-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left cursor-pointer"
            >
              {item.name}
            </button>
          ))}
          <div className="px-3 py-2">
            <Button
              onClick={() => {
                handleNavigation("#contact"); // smooth scroll
                setIsOpen(false); // close mobile menu
              }}
              className="w-full bg-neutral-800 hover:bg-neutral-700 cursor-pointer"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
