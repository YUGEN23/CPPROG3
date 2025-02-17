"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion"; 


export default function Home() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const videoHeight = document.getElementById("home")?.offsetHeight || 600;
      setIsSticky(window.scrollY > videoHeight - 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white bg-black">
      
      {/* 🎥 R34 Hero Video Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/r34.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-semibold text-blue-400"
          >
            The Legend Lives On
          </motion.h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Brian O’Conner’s Nissan Skyline GT-R R34—The Ultimate Street Machine.
          </p>
        </div>
      </section>

      {/* 🔹 Fast & Furious Navbar (Initially below video, becomes fixed on scroll) */}
      <header
        className={`w-full bg-black bg-opacity-90 shadow-md z-50 py-4 transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0" : "relative"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
          <h1 className="text-2xl font-bold uppercase tracking-wide text-blue-500">
            Fast & Furious | R34 GT-R
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#stats" className="nav-link">Stats</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
   
      {/* 🚗 Car Specifications Section */}
      <section id="stats" className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-center text-2xl font-bold text-blue-400 mb-6">Car Specs</h2>
        <div className="space-y-6">
          <SpecDetail title="Engine" description="RB26DETT 2.6L Twin-Turbo Inline-6, legendary for tuning potential." />
          <SpecDetail title="Power" description="Over 500 HP when tuned, dominating the streets." />
          <SpecDetail title="Torque" description="289 lb-ft (392 Nm) for insane acceleration." />
          <SpecDetail title="0-60 mph" description="Under 4 seconds with the right tune." />
          <SpecDetail title="Top Speed" description="200+ mph with the right modifications." />
          <SpecDetail title="Weight" description="1,560 kg (3,439 lbs), balanced for speed & control." />
          <SpecDetail title="Transmission" description="6-speed manual for total driving control." />
          <SpecDetail title="NOS System" description="Dual-bottle nitrous setup for explosive speed boosts." />
        </div>
      </section>

      {/* 📞 Contact Section */}
      <section id="contact" className="text-center py-10">
        <h2 className="text-2xl font-bold text-blue-400">Join the Crew</h2>
        <p className="text-gray-300 mt-2">
          Want to race? Hit us up at <a href="mailto:race@fastfurious.com" className="text-blue-400 underline">race@fastfurious.com</a>
        </p>
      </section>

      {/* ⚡ Footer */}
      <footer className="w-full bg-gray-900 text-center py-4">
        <p className="text-sm text-gray-400">&copy; 2025 Fast & Furious R34 Tribute</p>
      </footer>

      {/* 🛠 Styling */}
      <style jsx>{`
        .nav-link {
          color: white;
          font-size: 1rem;
          text-transform: uppercase;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: #3b82f6;
        }
      `}</style>
    </div>
  );
}

// 📜 Animated Spec Detail Component
function SpecDetail({ title, description }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(title);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [title]);

  return (
    <motion.div 
      id={title}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="p-4 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg"
    >
      <h3 className="text-lg font-semibold text-blue-400">{title}</h3>
      <p className="text-gray-300 text-sm mt-1">{description}</p>
    </motion.div>
  );
}
