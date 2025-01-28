import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import BlogCss from "./img/web-desain.jpg";
import mediaCss from "./img/media-css.png";
import gridCss from "./img/grid-css.png";
import flex from "./img/flex.png";
import display from "./img/display-css.png";
import positionCss from "./img/position.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog Github",
};


export default function blog_liveserve() {
  return (
    <>
    <html lang="en">
      <body>
          <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased rounded-3xl drop-shadow-2xl selection:bg-amber-400 text-justify">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                <article className="mx-auto w-full max-w-5xl format format-sm sm:format-base lg:format-lg format-blue">
                    <header className="mb-4 lg:mb-6 not-format">
                        <Link href="/" className="font-medium text-sm text-blue-500 hover:underline">&laquo; Back To Page</Link>
                        <address className="flex items-center my-6 not-italic">
                            <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">Ilham Adi Purnomo</h1>
                                    <p className="text-base text-gray-500 ">Rabu, 28-08-2024</p>
                                </div>
                            </div>
                        </address>
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">Belajar singkat tentang Layout Css</h1>
                        <Image src={BlogCss} alt="Css" className="mb-4" />
                    </header>
                    <div className="selection:bg-lime-600 selection:text-gray-100 text-slate-600 mb-3 text-lg">
                        <p className="mb-2">CSS (Cascading Style Sheets) itu bahasa yang dipakai buat <strong>ngatur tampilan dan tata letak elemen-elemen di halaman web.</strong> 
                            Salah satu hal penting dari CSS adalah cara kita ngatur layout atau tata letak halaman biar terlihat rapi dan menarik. Nah, di 
                            artikel ini kita bakal bahas dasar-dasar layout CSS dengan cara yang santai dan gampang dipahami.</p>
                        <p className="mb-2">Layout CSS itu cara kita ngatur posisi dan tampilan elemen-elemen di halaman web. <strong>Mulai dari cara elemen yang ditampilkan 
                            secara horizontal atau vertikal, sampai gimana mereka (tampilan) bisa menyesuaikan diri di berbagai ukuran layar.</strong> Dengan ngerti layout CSS, 
                            kita bisa bikin halaman web yang responsif dan enak dilihat di mana aja, dari laptop sampai HP</p>
                        <p className="mb-2">Sebelum kita masuk ke teknik layout yang lebih canggih, penting banget buat ngerti perbedaan antara elemen block dan inline</p>
                        <div className="text-slate-600 mx-3">
                            <ul className="list-disc list-outside">
                                <li className="mb-2">
                                    <p><strong>Block:</strong> Elemen block, kayak &lt;div&gt; atau &lt;p&gt;, akan memenuhi seluruh lebar halaman dan otomatis mulai di baris baru.</p>
                                </li>
                                <li className="mb-2">
                                    <p><strong>Inline:</strong> Elemen inline, kayak &lt;span&gt; atau &lt;a&gt;, cuma mengambil ruang sesuai kontennya dan nggak mulai di baris baru.</p>
                                </li>
                            </ul>
                            <Image src={display} alt="display css" className="my-4 mx-auto" />
                        </div>
                        <p className="font-light text-xl text-slate-600 my-2 mx-2">Flexbox itu salah satu cara yang paling sering dipakai dan <strong>cara simpel buat ngatur layout. Dengan Flexbox, 
                            kita bisa gampang ngatur elemen-elemen biar sejajar secara horizontal atau vertikal</strong>, plus ngatur jarak antar elemen. </p>
                        <p className="font-light text-xl text-slate-600 my-2 mx-2">Contoh paling Flexbox </p>
                        <Image src={flex} alt="flexbox" className="mx-auto mt-4 mb-6" />
                        <p className="font-light text-xl text-slate-600 my-2">Contoh di atas bikin elemen-elemen di dalam .container berada di tengah-tengah, baik secara horizontal maupun vertikal. Gampang, kan?</p>
                        <ul className="list-disc list-outside">
                            <li className="mb-3 mx-3">
                                <h3 className="font-semibold text-lg">Grid Layout</h3>
                            </li>
                        </ul>

                        <p className="font-light text-xl text-slate-600 my-2 mx-2">CSS Grid itu teknik layout yang lebih keren dan kompleks dibanding Flexbox. 
                            Dengan Grid, kita bisa bikin layout dengan baris dan kolom, mirip kayak tabel tapi <strong>jauh lebih fleksibel.</strong></p>
                        <Image src={gridCss} alt="grid css" className="my-4 mx-auto" />
                        <p className="font-light text-xl text-slate-600 mb-4 mx-2">Di sini, .container bakal punya tiga kolom yang masing-masing ukurannya sama, dan ada jarak 10px di antara kolom-kolom itu.</p>

                        <ul className="list-disc list-outside">
                            <li className="mb-2 mx-3">
                                <h3 className="font-semibold text-lg">Positioning</h3>
                            </li>
                        </ul>

                        <p className="font-light text-xl text-slate-600 my-2 mx-2">Selain Flexbox dan Grid, CSS juga punya properti position yang bikin kita bisa <strong>ngatur posisi elemen secara lebih spesifik</strong>.</p>
                        <ol className="list-decimal list-outside">
                          <ul>
                              <li className="mb-2 mx-3">
                                    <p><strong>Static (default) : </strong>Elemen ditempatkan sesuai aliran dokumen biasa.</p>
                                </li>
                                <li className="mb-2 mx-3">
                                    <p><strong>Relative : </strong>Elemen diposisikan relatif terhadap posisi awalnya.</p>
                                </li>
                                <li className="mb-2 mx-3">
                                    <p><strong>Absolute : </strong>Elemen diposisikan relatif terhadap elemen induknya yang 
                                        paling dekat dengan position: relative.</p>
                                </li>
                                <li className="mb-2 mx-3">
                                    <p><strong>Fixed : </strong> Elemen diposisikan relatif terhadap viewport, alias tetap 
                                        di tempat meskipun halaman di-scroll.</p>
                                </li>
                            </ul>
                        </ol>
                            <Image src={positionCss} alt="position" className="my-4 mx-auto" />

                            <ul className="list-disc list-outside">
                                <li className="mb-3 mx-3">
                                    <h3 className="font-semibold text-lg">Media Queries</h3>
                                </li>
                            </ul>
                        <p className="font-light text-xl text-slate-600 my-2 mx-2">Biar layout kita kelihatan oke di semua 
                            perangkat, kita perlu pakai media queries. Media queries bikin kita bisa ngatur tampilan yang 
                            beda-beda tergantung ukuran layar.</p>
                        <Image src={mediaCss} alt="media Queries" className="mt-4 mb-6 mx-auto" />
                        <p className="mb-4">Kalau lebar layar lebih kecil dari 768px, .container cuma bakal punya satu kolom, jadi layout-nya lebih ramah buat mobile.</p>

                        <div>
                            <p className="mb-3">Mengerti tentang CSS Layout itu penting banget buat bikin website yang nggak cuma fungsional tapi juga enak dilihat. Dengan pakai Flexbox, Grid, dan 
                                teknik positioning, kita bisa ngatur elemen-elemen di halaman web jadi rapi dan responsif.</p>
                            <p>Buat makin jago, coba-coba aja bikin layout untuk berbagai tipe halaman web, dari landing page, blog, sampai e-commerce. Semakin sering 
                                latihan, makin luwes deh kamu ngatur layout pakai CSS!</p>
                        </div>
                    </div>
                </article>
            </div>
        </main>
        {/* footer */}
        <footer className="bg-dark pt-24 pb-12">
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
                              <Link href="/" className="inline-block text-base hover:text-primary mb-3">
                                  Programming
                              </Link>
                          </li>
                          <li>
                              <Link href="/" className="inline-block text-base hover:text-primary mb-3">
                                  Desain
                              </Link>
                          </li>
                      </ul>
                  </div>
                  <div className="w-full px-4 mb-12 md:w-1/3">
                      <h3 className="font-semibold text-xl text-white mb-5">Navigasi</h3>
                      <ul className="text-slate-300">
                          <li>
                              <Link href="/" className="inline-block text-base hover:text-primary mb-3">
                                  Beranda
                              </Link>
                          </li>
                          <li>
                              <Link href="/" className="inline-block text-base hover:text-primary mb-3">
                                  Tentang Saya
                              </Link>
                          </li>
                          <li>
                              <Link href="#portfolio" className="inline-block text-base hover:text-primary mb-3">
                                  Portofolio
                              </Link>
                          </li>
                          <li>
                              <Link href="/" className="inline-block text-base hover:text-primary mb-3">
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
                  </div>
                  <p className="font-medium text-xs  text-slate-500 text-center">Created by <a href="#" target="_black" className="font-bold text-primary">ilham adi purnomo</a></p>
              </div>
          </div>
        </footer>
        {/* end footer */}
      </body>
    </html>
    </>
  );
}