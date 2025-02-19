import { useEffect, useState } from "react";
import Link from "next/link";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import Image from "next/image";
import sertifikat1 from "../../public/img/artificial intelligence.png";
import sertifikat2 from "../../public/img/python.png";
import sertifikat3 from "../../public/img/machine learning.png";
import sertifikat4 from "../../public/img/DevCoach Flutter.png";
import sertifikat5 from "../../public/img/Basic atm.png";
import sertifikat6 from "../../public/img/Screenshot 2024-09-01 190114.png";

// export default function Sertifikat() {
//   useEffect(() => {
//           AOS.init( );
//         });
//   return (
//     <>
//      <section id="sertifikat" className="pt-36 pb-16 bg-slate-200">
//         <div className="container">
//             <div className="w-full px-4">
//                 <div className="mx-auto text-center mb-16">
//                     <h4 className="font-semibold text-lg text-primary">Certificate</h4>
//                     <h2 className="font-bold text-dark text text-3xl mb-4 sm:text-4xl lg:text-5xl">Participation and Competition Certificate</h2>
//                     <p className="font-medium text-md text-secondary md:text-lg">Here are some certificates that I obtained from my participation in various competitions and events that I participated in</p>
//                 </div>
//             </div>
//             <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
//                 <div className="mb-12 p-4 md:w-1/2" data-aos="fade-up" data-aos-duration="500">
//                     <div className="rounded-md shadow-md overflow-hidden">
//                         <Image src={sertifikat1} alt="artificial intelligence" className="w-full" loading="lazy" />
//                     </div>
//                     <h3 className="font-semibold text-dark text-xl mt-5 mb-3">artificial intelligence competition participant certificate</h3>
//                     {/* <a href="../public/certificate/106 Artificial Intelligence - ILHAM ADI PURNOMO_sign.pdf" className="visited:text-blue-500">
//                     </a> */}
//                 </div>
//                 <div className="mb-12 p-4 md:w-1/2" data-aos="fade-up" data-aos-duration="600">
//                     <div className="rounded-md shadow-md overflow-hidden">
//                         <Image src={sertifikat2} alt="python" className="w-full"  loading="lazy" />
//                     </div>
//                     <h3 className="font-semibold text-dark text-xl mt-5 mb-3 ">Certificate of completion of python className</h3>
//                     {/* <a href="../public/certificate/sertifikat_course_86_3858903_270224134211.pdf" className="visited:text-blue-500">
//                     </a> */}
//                 </div>
//                 <div className="mb-12 p-4 md:w-1/2" data-aos="fade-up" data-aos-duration="700">
//                     <div className="rounded-md shadow-md overflow-hidden">
//                         <Image src={sertifikat3} alt="meachine learning" className="w-full" loading="lazy"/>
//                     </div>
//                     <h3 className="font-semibold text-dark text-xl mt-5 mb-3">Certificate of Completion of beginner teaching learning className</h3>
//                     {/* <a href="../public/certificate/sertifikat_course_184_3858903_040424123216.pdf" className="visited:text-blue-500">
//                     </a> */}
//                 </div>
//                 <div className="mb-12 p-4 md:w-1/2" data-aos="fade-up" data-aos-duration="800">
//                     <div className="rounded-md shadow-md overflow-hidden">
//                         <Image src={sertifikat4} alt="Flutter" className="w-full" loading="lazy"/>
//                     </div>
//                     <h3 className="font-semibold text-dark text-xl mt-5 mb-3 pt-4">Certificate of participation in Devcoach 164 Flutter dicoding event</h3>
//                     {/* <a href="../public/certificate/devcoach-164-flutter-navigasikan-aplikasimu-dengan-navigator-20-certificate.pdf" className="visited:text-blue-500">
//                     </a> */}
//                 </div>
//                 <div className="mb-12 p-4 md:w-1/2" data-aos="fade-up" data-aos-duration="900">
//                     <div className="rounded-md shadow-md overflow-hidden">
//                         <Image src={sertifikat5} alt="basic atm" className="w-full" loading="lazy"/>
//                     </div>
//                     <h3 className="font-semibold text-dark text-xl mt-5 mb-3">Certificate of Participation in Basic ATM Pentest event: Uncover the secrets of ATM Cyber Security Education</h3>
//                     {/* <a href="../public/certificate/sertif atm pentest.pdf" className="visited:text-blue-500">
//                     </a> */}
//                 </div>
//                 <div className="mb-12 p-4 md:w-1/2" data-aos="fade-up" data-aos-duration="1000">
//                     <div className="rounded-md shadow-md overflow-hidden">
//                         <Image src={sertifikat6} alt="ransomware" className="w-full" loading="lazy" />
//                     </div>
//                     <h3 className="font-semibold text-dark text-xl mt-5 mb-3">Certificate of Participation in Defender Ransomware</h3>
//                     {/* <a href="../public/certificate/ilham adi purnomo.pdf" className="visited:text-blue-500">
//                     </a> */}
//                 </div>
//             </div>
//           </div>
//         </section>
//     </>
//   )
// }

export default function CertificateSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const certificates = [
    { image: sertifikat1, title: "artificial intelligence competition participant certificate" },
    { image: sertifikat2, title: "Certificate of completion of python className" },
    { image: sertifikat3, title: "Certificate of Completion of beginner teaching learning className" },
    { image: sertifikat4, title: "Certificate of participation in Devcoach 164 Flutter dicoding event" },
    { image: sertifikat5, title: "Certificate of Participation in Basic ATM Pentest event: Uncover the secrets of ATM Cyber Security Education" },
    { image: sertifikat6, title: "Certificate of Participation in Defender Ransomware" },
  ];

  return (
    <section id="sertifikat" className="pt-36 pb-16 bg-slate-200">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Certificate</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Participation and Competition Certificate</h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Here are some certificates that I obtained from my participation in various competitions and events that I participated in
            </p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {certificates.map((cert, index) => (
            <div key={index} className="mb-12 p-4 md:w-1/2" data-aos="fade-up" data-aos-duration={`${500 + index * 100}`}> 
              <div
                className="rounded-md shadow-md overflow-hidden cursor-pointer"
                onClick={() => {
                  setSelectedImage(cert.image);
                  setSelectedTitle(cert.title);
                }}
              >
                <Image src={cert.image} alt={cert.title} className="w-full" loading="lazy" />
              </div>
              <h3 className="font-semibold text-dark text-xl mt-5 mb-3">{cert.title}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* Modal with Smooth Transition */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out opacity-100 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white p-5 rounded-lg max-w-lg w-full text-center relative shadow-lg transform transition-all duration-300 scale-100 opacity-100 animate-fadeInOut">
            <Image src={selectedImage} alt="Selected Certificate" className="w-full rounded-md" loading="lazy" />
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes fadeInOut {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeInOut {
          animation: fadeInOut 0.3s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
}
