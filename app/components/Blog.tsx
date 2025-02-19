import { useEffect } from "react";
import blog_github from "../../public/img/github.jpg";
import blog_liveserve from "../../public/img/live-serve.jpg";
import blog_php from "../../public/img/blog-php.jpg";
import blog_css from "../../public/img/web-desain.jpg";
import blog_html from "../../public/img/web-programmer.jpg";
import Link from "next/link";
import Image from "next/image";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export default function Blog() {
//   useEffect(() => {
//       AOS.init( );
//     });
  return (
    <>
    <section id="blog" className="pt-36 pb-32 bg-slate-100">
    <div className="container">
        <div className="w-full px-4">
            <div className=" mx-auto text-center mb-16">
                <h4 className="font-semibold text-lg text-primary">blog</h4>
                <h2 className="font-bold text-dark text text-3xl mb-4 sm:text-4xl lg:text-5xl">latest Article</h2>
                <p className="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, nulla magni! Assumenda, aliquam.</p>
            </div>
        </div>
        <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3" data-aos="fade-up" data-aos-duration="500">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                    <Image src={blog_github} alt="github" className="w-full" loading="lazy"/>
                    <div className="py-8 px-6">
                        <Link href="./tips-hosting-website-di-github-free" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">
                            <h3>Tips Hosting website di github FREE!!</h3>
                        </Link>
                        <p className="font-medium text-base text-secondary mb-6">Cara Mudah Hosting website gratis di github dengan tips praktis dan tutorial yang lengkap</p>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3" data-aos="fade-up" data-aos-duration="600">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                    <Image src={blog_liveserve} alt="live serve" className="w-full" loading="lazy"/>
                    <div className="py-8 px-6">
                        <Link href="./menampilkan-project-web-laravel-di-hp" className="block mb-3 font-semibold text-xl text-dark hover:text-primary">
                            <h3>Tips Praktis: Menampilkan project web Laravel kita di HP Tanpa Ribet!</h3>
                        </Link>
                        <p className="font-medium text-base text-secondary mb-6">Jangan pusing lagi! Pelajari cara menampilkan hasil coding Laravel di HP dengan 
                             langkah² praktis.</p>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3" data-aos="fade-up" data-aos-duration="700">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                    <Image src={blog_php} alt="blog php" className="w-full" loading="lazy"/>
                    <div className="py-8 px-6">
                        <Link href="./belajar-belajar-php" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">
                            <h3>Belajar singkat tentang PHP Native</h3>
                        </Link>
                        <p className="font-medium text-base text-secondary mb-6">Belajar cepat PHP Native untuk pemula, langsung praktik dengan contoh sederhana</p>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3" data-aos="fade-up" data-aos-duration="800">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                    <Image src={blog_css} alt="web desain" className="w-full" loading="lazy"/>
                    <div className="py-8 px-6">
                        <Link href="./belajar-css-singkat" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">
                            <h3>Belajar singkat tentang layout Css</h3>
                        </Link>
                        <p className="font-medium text-base text-secondary mb-6">Panduan cepat mempelajari css layout, atur tampilan website dengan mudah dan rapi</p>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3" data-aos="fade-up" data-aos-duration="900">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                    <Image src={blog_html} alt="learn html" className="w-full" loading="lazy"/>
                    <div className="py-8 px-6">
                        <Link href="./belajar-dasar-html" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">
                            <h3>Belajar Html Selama Lima menit</h3>
                        </Link>
                        <p className="font-medium text-base text-secondary mb-6">Pelajari Html dasar hanya dalam 5 (lima) menit, efektif dan mudah di pahami</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
    </>
  )
}