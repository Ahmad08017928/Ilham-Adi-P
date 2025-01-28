"use client";
import Image from "next/image";
import { useEffect } from "react";
import Image_Roket from "../public/img/roket.png";
import portofolio1 from "../public/img/portofolio-1.png";
import portofolio2 from "../public/img/portofolio-2.png";
import portofolio3 from "../public/img/portofolio-3.png";
import portofolio4 from "../public/img/portofolio-4.png";
import portofolio5 from "../public/img/portofolio-5.png";
import portofolio6 from "../public/img/portofolio-6.png";
import portofolio7 from "../public/img/portofolio-7.png";
import portofolio8 from "../public/img/portofolio-8.png";
import portofolio9 from "../public/img/image.png";
import sertifikat1 from "../public/img/artificial intelligence.png";
import sertifikat2 from "../public/img/python.png";
import sertifikat3 from "../public/img/machine learning.png";
import sertifikat4 from "../public/img/DevCoach Flutter.png";
import sertifikat5 from "../public/img/Basic atm.png";
import sertifikat6 from "../public/img/Screenshot 2024-09-01 190114.png";
import html from "../public/img/html.svg";
import css from "../public/img/css.svg";
import js from "../public/img/javascript.svg";
import php from "../public/img/php.svg";
import python from "../public/img/python.svg";
import tailwind from "../public/img/tailwind.svg";
import boostrap from "../public/img/boostrap.svg";
import laravel from "../public/img/laravel.svg";
import next_js from "../public/img/next-js.svg";
import express_js from "../public/img/express-js.svg"
import blog_github from "../public/img/github.jpg";
import blog_liveserve from "../public/img/live-serve.jpg";
import blog_php from "../public/img/blog-php.jpg";
import blog_css from "../public/img/web-desain.jpg";
import blog_html from "../public/img/web-programmer.jpg";
import Link from "next/link";

export default function Home() {
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
                    <a href="#home" className="text-base text-dark py-5 mx-8 flex group-hover:text-primary">Home</a>
                </li>
                <li className="group">
                    <a href="#about" className="text-base text-dark py-5 mx-8 flex group-hover:text-primary">Tentang Saya</a>
                </li>
                <li className="group">
                    <a href="#portfolio" className="text-base text-dark py-5 mx-8 flex group-hover:text-primary">Portfolio</a>
                </li>
                <li className="group">
                    <a href="#sertifikat" className="text-base text-dark py-5 mx-8 flex group-hover:text-primary">Sertifikat</a>
                </li>
                <li className="group">
                    <a href="#Language-and-Framework" className="text-base text-dark py-5 mx-8 flex group-hover:text-primary">Language and Framework</a>
                </li>
                <li className="group">
                    <a href="#blog" className="text-base text-dark py-5 mx-8 flex group-hover:text-primary">Blog</a>
                </li>
                </ul>
            </nav>
            </div>
        </div>
        </div>
    </header>

    <section id="home" className="pt-36">
        <div className="container">
        <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">
                Hallo Semua 👋🏻, Saya
                <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Ilham Adi Purnomo</span>
            </h1>
            <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">Student & <span className="text-dark">Junior programmer</span></h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed">Menghidupkan ide Anda menjadi solusi digital.</p>

            <Link href="mailto:ilhamadipurnomo55@gmail.com" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:opacity-80 transition duration-300 ease-in-out">Hubungi Saya</Link>
            </div>

            <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-32 lg:mt-9 lg:right-0">
                <Image src={Image_Roket} alt="roket" className="max-w-full mx-auto" priority />
                <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                    fill="#FF0066"
                    d="M59.2,-59.9C74.9,-43.4,84.8,-21.7,82.1,-2.7C79.4,16.2,64,32.4,48.2,43C32.4,53.5,16.2,58.3,-3.1,61.5C-22.5,64.6,-45,66.1,-56.7,55.5C-68.4,45,-69.4,22.5,-69.2,0.2C-69,-22.2,-67.8,-44.3,-56.1,-60.9C-44.3,-77.4,-22.2,-88.3,-0.2,-88C21.7,-87.8,43.4,-76.4,59.2,-59.9Z"
                    transform="translate(100 100) scale(1.1)" />
                </svg>
                </span>
            </div>
            </div>
        </div>
        </div>
    </section>

    <section id="about" className="pt-36 pb-32">
        <div className="container" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className="font-bold uppercase text-primary text-lg mb-3">Tentang Saya</h4>
            <h2 className="font-bold text-dark text-2xl mb-5 max-w-md lg:text-3xl">Kenali saya lebih dekat</h2>
            <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">Saya adalah seorang Junior web programmer yang berfokus pada pengembangan aplikasi web modern dan efisien. Dengan pengalaman di berbagai teknologi seperti Laravel, Tailwind CSS, dan lainnya, saya siap membantu mewujudkan ide Anda menjadi realitas digital yang luar biasa.</p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
            <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Mari berteman</h3>
            <p className="font-medium text-base text-secondary mb-6 lg:text-lg">Jangan ragu untuk menghubungi saya! Saya selalu terbuka untuk berbagi ilmu, diskusi, atau bahkan sekedar ngobrol tentang coding dan teknologi. Let's connect and grow together!</p>
            <div className="flex items-center">

                <Link href="https://wa.me/+6285179810143" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-b hover:bg-primary hover:text-white">
                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>WhatsApp</title>
                    <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                </Link>

                <Link href="https://www.instagram.com/bytemind_software?igsh=MTc2cXRucTNqb3dscg==" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Instagram</title>
                    <path
                    d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                </svg>
                </Link>

                
                <Link href="https://www.tiktok.com/@guardiankingchannel?_t=ZS-8tROHWLkDeE&_r=1" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>TikTok</title>
                    <path
                    d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
                </Link>

                <Link href="https://www.linkedin.com/in/ilham-a-p-13a635248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>linkedin</title>
                    <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                </Link>
                
                <Link href="https://github.com/Ahmad08017928" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white" >
                <svg role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <title>Github</title>
                    <path fill="currentColor" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584c.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076c-.343-.93-.881-1.175-.881-1.175c-.734-.489.048-.489.048-.489c.783.049 1.224.832 1.224.832c.734 1.223 1.859.88 2.3.685c.048-.538.293-.88.489-1.076c-1.762-.196-3.621-.881-3.621-3.964c0-.88.293-1.566.832-2.153c-.05-.147-.343-.978.098-2.055c0 0 .685-.196 2.201.832c.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832c.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915c.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.98 7.98 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0" />
                </svg>
                </Link>
            </div>
            </div>
        </div>
        </div>
    </section>

    <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
    <div className="container" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
        <div className="w-full px-4">
            <div className=" mx-auto text-center mb-16">
                <h4 className="font-semibold text-lg text-primary">Portfolio</h4>
                <h2 className="font-bold text-dark text text-3xl mb-4 sm:text-4xl lg:text-5xl">Project Aplication & Landing Page</h2>
                <p className="font-medium text-md text-secondary md:text-lg">Here are the various website designs and applications that I have created and developed that prioritize creativity and functionality</p>
            </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <Image src={portofolio1} alt="portofolio-1" className="w-full" loading="lazy" />
                </div>
                <h3 className="font-semibold text-dark text-xl mt-5 mb-3">Mansory style layout</h3>
                <p className="font-md text-base text-secondary">Modern portfolio blending minimalism with dynamic, expressive web design elements.</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <Image src={portofolio2} alt="portofolio-2" className="w-full" loading="lazy" />
                </div>
                <h3 className="font-semibold text-dark text-xl mt-5 mb-3">Landing page Artikel</h3>
                <p className="font-md text-base text-secondary">Engaging article landing page with vibrant visuals</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <Image src={portofolio3} alt="portofolio-3" className="w-full" loading="lazy" />
                </div>
                <h3 className="font-semibold text-dark text-xl mt-5 mb-3">Landing page Learning Mathematics</h3>
                <p className="font-md text-base text-secondary">A website that offers digital math learning with a myriad of learning support features in it</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <Image src={portofolio4} alt="portofolio-4" className="w-full" loading="lazy" />
                </div>
                <h3 className="font-semibold text-dark text-xl mt-5 mb-3">Web Aplication Blog</h3>
                <p className="font-md text-base text-secondary">This blog page features an in-depth collection of articles, allowing users to search and explore various topics efficiently.</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <Image src={portofolio5} alt="portofolio-5" className="w-full"  loading="lazy" />
                </div>
                <h3 className="font-semibold text-dark text-xl mt-5 mb-3">Landing page Smkn 1 Kraksaan</h3>
                <p className="font-md text-base text-secondary">a schoolyard with tons of features and information, and offers a modern layout</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <Image src={portofolio6} alt="portofolio-6" className="w-full" loading="lazy" />
                </div>
                <h3 className="font-semibold text-dark text-xl mt-5 mb-3">Landing page Adventure</h3>
                <p className="font-md text-base text-secondary">It is the homepage of an adventure website that offers vibrant browsing and a great experience and offers a modern layout</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <Image src={portofolio7} alt="portofolio-7" className="w-full" loading="lazy" />
                </div>
                <h3 className="font-semibold text-dark text-xl mt-5 mb-3">Natural Language Processing (NLP) </h3>
                <p className="font-md text-base text-secondary">a web-based application that is used to provide a statement of a word or sentence and can choose between positive and negative sentences.</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <Image src={portofolio8} alt="portofolio-8" className="w-full" loading="lazy"/>
                </div>
                <h3 className="font-semibold text-dark text-xl mt-5 mb-3">Web Application E-Commerce (CRUD)</h3>
                <p className="font-md text-base text-secondary">a web-based application designed to perform CRUD functions of an E-Commerce.</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <Image src={portofolio9} alt="portofolio-9" className="w-full" loading="lazy"/>
                </div>
                <Link href="http://36.88.113.173:8501/" className="hover:bg-primary hover:text-white">
                    <h3 className="font-semibold text-dark text-xl mt-5 mb-3">Web Application Kasir</h3>
                </Link>
                <p className="font-md text-base text-secondary">A web-based application designed to handle CRUD functions for cashier operations.</p>
            </div>
        </div>
      </div>
    </section>

    <section id="sertifikat" className="pt-36 pb-16 bg-slate-200" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
    <div className="container">
        <div className="w-full px-4">
            <div className="mx-auto text-center mb-16">
                <h4 className="font-semibold text-lg text-primary">Certificate</h4>
                <h2 className="font-bold text-dark text text-3xl mb-4 sm:text-4xl lg:text-5xl">Participation and Competition Certificate</h2>
                <p className="font-medium text-md text-secondary md:text-lg">Here are some certificates that I obtained from my participation in various competitions and events that I participated in</p>
            </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <Image src={sertifikat1} alt="artificial intelligence" className="w-full" loading="lazy" />
                </div>
                <h3 className="font-semibold text-dark text-xl mt-5 mb-3">artificial intelligence competition participant certificate</h3>
                {/* <a href="../public/certificate/106 Artificial Intelligence - ILHAM ADI PURNOMO_sign.pdf" className="visited:text-blue-500">
                </a> */}
            </div>
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <Image src={sertifikat2} alt="python" className="w-full"  loading="lazy" />
                </div>
                <h3 className="font-semibold text-dark text-xl mt-5 mb-3 ">Certificate of completion of python className</h3>
                {/* <a href="../public/certificate/sertifikat_course_86_3858903_270224134211.pdf" className="visited:text-blue-500">
                </a> */}
            </div>
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <Image src={sertifikat3} alt="meachine learning" className="w-full" loading="lazy"/>
                </div>
                <h3 className="font-semibold text-dark text-xl mt-5 mb-3">Certificate of Completion of beginner teaching learning className</h3>
                {/* <a href="../public/certificate/sertifikat_course_184_3858903_040424123216.pdf" className="visited:text-blue-500">
                </a> */}
            </div>
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <Image src={sertifikat4} alt="Flutter" className="w-full" loading="lazy"/>
                </div>
                <h3 className="font-semibold text-dark text-xl mt-5 mb-3 pt-4">Certificate of participation in Devcoach 164 Flutter dicoding event</h3>
                {/* <a href="../public/certificate/devcoach-164-flutter-navigasikan-aplikasimu-dengan-navigator-20-certificate.pdf" className="visited:text-blue-500">
                </a> */}
            </div>
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <Image src={sertifikat5} alt="basic atm" className="w-full" loading="lazy"/>
                </div>
                 <h3 className="font-semibold text-dark text-xl mt-5 mb-3">Certificate of Participation in Basic ATM Pentest event: Uncover the secrets of ATM Cyber Security Education</h3>
                {/* <a href="../public/certificate/sertif atm pentest.pdf" className="visited:text-blue-500">
                </a> */}
            </div>
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <Image src={sertifikat6} alt="ransomware" className="w-full" loading="lazy" />
                </div>
                <h3 className="font-semibold text-dark text-xl mt-5 mb-3">Certificate of Participation in Defender Ransomware</h3>
                {/* <a href="../public/certificate/ilham adi purnomo.pdf" className="visited:text-blue-500">
                </a> */}
            </div>
        </div>
      </div>
    </section>

    <section id="Language-and-Framework" className="pt-36 pb-32 bg-slate-700">
      <div className="container">
          <div className="w-full px-4">
              <div className="mx-auto text-center mb-16">
                  <h4 className="font-semibold text-lg text-primary">Language and Framework</h4>
                  <h2 className="font-bold text-white text text-3xl mb-4 sm:text-4xl lg:text-5xl">languages and frameworks</h2>
                  <p className="font-medium text-md text-secondary md:text-lg">Dengan kombinasi bahasa dan framwork yang saya kuasai, saya dapat menciptakan solusi web yang modern dan efektif.</p>
              </div>
          </div>

          <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                  <div className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                      <Image src={html} alt="html" loading="lazy" />
                  </div>
                  <div className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                      <Image src={css} alt="css" loading="lazy" />
                  </div>
                  <div className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                      <Image src={js} alt="js" loading="lazy" />
                  </div>
                  <div className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                      <Image src={php} alt="php" loading="lazy" />
                  </div>
                  <div className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                      <Image src={python} alt="python" loading="lazy" />
                  </div>
                  <div className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                      <Image src={express_js} alt="express js" loading="lazy" />
                  </div>
                  <div className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                      <Image src={next_js} alt="next js" loading="lazy" />
                  </div>
                  <div className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                      <Image src={tailwind} alt="tailwind" loading="lazy" />
                  </div>
                  <div className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                      <Image src={boostrap} alt="boostrap" loading="lazy" />
                  </div>
                  <div className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                      <Image src={laravel} alt="laravel" loading="lazy" />
                  </div>
              </div>
          </div>
      </div>
  </section>

  <section id="blog" className="pt-36 pb-32 bg-slate-100">
    <div className="container" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
        <div className="w-full px-4">
            <div className=" mx-auto text-center mb-16">
                <h4 className="font-semibold text-lg text-primary">blog</h4>
                <h2 className="font-bold text-dark text text-3xl mb-4 sm:text-4xl lg:text-5xl">latest Article</h2>
                <p className="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, nulla magni! Assumenda, aliquam.</p>
            </div>
        </div>
        <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                    <Image src={blog_github} alt="github" className="w-full" loading="lazy"/>
                    <div className="py-8 px-6">
                        <Link href="./blog_github" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">
                            <h3>Tips Hosting website di github FREE!!</h3>
                        </Link>
                        <p className="font-medium text-base text-secondary mb-6">Cara Mudah Hosting website gratis di github dengan tips praktis dan tutorial yang lengkap</p>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                    <Image src={blog_liveserve} alt="live serve" className="w-full" loading="lazy"/>
                    <div className="py-8 px-6">
                        <Link href="./blog_liveserve" className="block mb-3 font-semibold text-xl text-dark hover:text-primary">
                            <h3>Tips Praktis: Menampilkan project web Laravel kita di HP Tanpa Ribet!</h3>
                        </Link>
                        <p className="font-medium text-base text-secondary mb-6">Jangan pusing lagi! Pelajari cara menampilkan hasil coding Laravel di HP dengan 
                             langkah² praktis.</p>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                    <Image src={blog_php} alt="blog php" className="w-full" loading="lazy"/>
                    <div className="py-8 px-6">
                        <Link href="./blog_php" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">
                            <h3>Belajar singkat tentang PHP Native</h3>
                        </Link>
                        <p className="font-medium text-base text-secondary mb-6">Belajar cepat PHP Native untuk pemula, langsung praktik dengan contoh sederhana</p>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                    <Image src={blog_css} alt="web desain" className="w-full" loading="lazy"/>
                    <div className="py-8 px-6">
                        <Link href="./blog_css" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">
                            <h3>Belajar singkat tentang layout Css</h3>
                        </Link>
                        <p className="font-medium text-base text-secondary mb-6">Panduan cepat mempelajari css layout, atur tampilan website dengan mudah dan rapi</p>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                    <Image src={blog_html} alt="learn html" className="w-full" loading="lazy"/>
                    <div className="py-8 px-6">
                        <Link href="./blog_html" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">
                            <h3>Belajar Html Selama Lima menit</h3>
                        </Link>
                        <p className="font-medium text-base text-secondary mb-6">Pelajari Html dasar hanya dalam 5 (lima) menit, efektif dan mudah di pahami</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
  <footer className="bg-dark pt-24 pb-12" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
    <div className="container">
        <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                <h2 className="font-bold text-4xl text-white mb-5">Bytemind Software</h2>
                <h3 className="font-bold text-2xl mb-2">Hubungi Saya</h3>
                <p>ilhamadipurnomo55@gmail.com</p>
                <p>Jl. Rondokuning, Desa Sukomulyo</p>
                <p>Probolinggo</p>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
                <h3 className="font-semibold text-xl text-white mb-5">Kategori Tulisan</h3>
                <ul className="text-slate-300">
                    <li>
                        <Link href="#Language-and-Framework" className="inline-block text-base hover:text-primary mb-3">
                            Programming
                        </Link>
                    </li>
                    <li>
                        <Link href="#portfolio" className="inline-block text-base hover:text-primary mb-3">
                            Desain
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
                <h3 className="font-semibold text-xl text-white mb-5">Navigasi</h3>
                <ul className="text-slate-300">
                    <li>
                        <Link href="#home" className="inline-block text-base hover:text-primary mb-3">
                            Beranda
                        </Link>
                    </li>
                    <li>
                        <Link href="#about" className="inline-block text-base hover:text-primary mb-3">
                            Tentang Saya
                        </Link>
                    </li>
                    <li>
                        <Link href="#portfolio" className="inline-block text-base hover:text-primary mb-3">
                            Portofolio
                        </Link>
                    </li>
                    <li>
                        <Link href="#blog" className="inline-block text-base hover:text-primary mb-3">
                            Blog
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="w-full pt-10 border-t border-slate-700">
            <div className="flex items-center justify-center mb-5">
                {/* <!-- Instagram --> */}
                <Link href="https://wa.me/+6285179810143" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>WhatsApp</title>
                    <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                </Link>

                {/* <!-- Instagram --> */}
                <Link href="https://www.instagram.com/bytemind_software?igsh=MTc2cXRucTNqb3dscg==" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Instagram</title>
                    <path
                    d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                </svg>
                </Link>

                {/* <!-- Tik Tok --> */}
                <Link href="https://www.tiktok.com/@guardiankingchannel?_t=ZS-8tROHWLkDeE&_r=1" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>TikTok</title>
                    <path
                    d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
                </Link>

                {/* <!-- Linkedln --> */}
                <Link href="https://www.linkedin.com/in/ilham-a-p-13a635248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>LinkedIn</title>
                    <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                </Link>

                <Link href="https://github.com/Ahmad08017928" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <svg role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <title>Github</title>
                    <path fill="currentColor" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584c.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076c-.343-.93-.881-1.175-.881-1.175c-.734-.489.048-.489.048-.489c.783.049 1.224.832 1.224.832c.734 1.223 1.859.88 2.3.685c.048-.538.293-.88.489-1.076c-1.762-.196-3.621-.881-3.621-3.964c0-.88.293-1.566.832-2.153c-.05-.147-.343-.978.098-2.055c0 0 .685-.196 2.201.832c.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832c.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915c.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.98 7.98 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0" />
                </svg>
                </Link>
            </div>
            <p className="font-medium text-xs  text-slate-500 text-center">Created by <a href="#" target="_black" className="font-bold text-primary">ilham adi purnomo</a></p>
        </div>
    </div>
  </footer>
    </>
  );
}