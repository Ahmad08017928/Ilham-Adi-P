import { useEffect } from "react";
import Link from "next/link";

export default function Header() {
  useEffect(() => {
    // Use type assertions or null checks for DOM elements
    const header = document.querySelector("header");
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    if (!header || !hamburger || !navMenu) {
      console.warn("Required DOM elements not found");
      return;
    }

    const fixedNav = header.offsetTop;

    // Handle scroll event for fixed navbar
    const handleScroll = () => {
      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };

    // Handle hamburger menu click
    const handleHamburgerClick = () => {
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    hamburger.addEventListener("click", handleHamburgerClick);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      hamburger.removeEventListener("click", handleHamburgerClick);
    };
  }, []);
  return (
    <>
    <header className="bg-trasparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
        <div className="flex items-center justify-between relative">
            <div className="px-4">
            <a href="#home" className="font-bold text-lg text-primary block py-6">Ilham Adi Purnomo</a>
            </div>
            <div className="flex items-center px-4">
            <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden" aria-label="Toggle navigation menu">
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>

            <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                <ul className="block lg:flex">
                <li className="group">
                    <Link href="#home" className="text-base text-dark py-5 mx-8 flex group-hover:text-primary">Home</Link>
                </li>
                <li className="group"> 
                    <Link href="#about" className="text-base text-dark py-5 mx-8 flex group-hover:text-primary">Tentang Saya</Link>
                </li>
                <li className="group">
                    <Link href="#portfolio" className="text-base text-dark py-5 mx-8 flex group-hover:text-primary">Portfolio</Link>
                </li>
                <li className="group">
                    <Link href="#sertifikat" className="text-base text-dark py-5 mx-8 flex group-hover:text-primary">Sertifikat</Link>
                </li>
                <li className="group">
                    <Link href="#Language-and-Framework" className="text-base text-dark py-5 mx-8 flex group-hover:text-primary">Language and Framework</Link>
                </li>
                <li className="group">
                    <Link href="#blog" className="text-base text-dark py-5 mx-8 flex group-hover:text-primary">Blog</Link>
                </li>
                </ul>
            </nav>
            </div>
        </div>
        </div>
    </header>
    </>
  )
}