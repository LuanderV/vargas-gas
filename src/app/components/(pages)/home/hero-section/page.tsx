"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ButtonWhastApp from "../../../button-whatsapp/page";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between pt-16 pb-52 px-6 bg-gradient-to-b from-emerald-50 to-gray-50">

      {/* Left Side */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="flex flex-col text-center md:text-left justify-center max-w-lg"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
          Gás e Água com <span className="text-green-500">Entrega Rápida</span>!
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mt-4">
          Peça gás P13 e água mineral 20L com total segurança e comodidade.
        </p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6"
        >
          <ButtonWhastApp />
        </motion.div>
      </motion.div>

      {/* Right Side - Imagem animada */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10 md:mt-0"
      >
        <motion.div 
          whileHover={{ rotateX: 15, rotateY: 15, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Image
            src="/img/hero-section/1.jpg"
            alt="Entrega de gás e água"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
