"use client";

import { FaWhatsapp, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative shadow-lg shadow-emerald-500/50 p-4 text-center text-white bg-gray-900 overflow-hidden bg-[url('/img/background/bg-green.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Efeito Glassmorphism */}
      <div className="absolute inset-0 bg-emerald-600 bg-opacity-30 backdrop-blur-lg"></div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-400 animate-pulse"></div>

      <motion.div
        className="relative container mx-auto flex flex-col items-center space-y-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Mídias Sociais */}
        <div>
          <h3 className="text-lg font-semibold">Mídias Sociais</h3>
          <div className="flex space-x-4 mt-2">
            <motion.div
              whileHover={{ scale: 1.2 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Link href="#" aria-label="WhatsApp">
                <FaWhatsapp className="text-white text-2xl hover:text-green-400 transition drop-shadow-lg" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            >
              <Link href="#" aria-label="Instagram">
                <FaInstagram className="text-white text-2xl hover:text-pink-400 transition drop-shadow-lg" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            >
              <Link href="#" aria-label="Twitter/X">
                <FaXTwitter className="text-white text-2xl hover:text-blue-400 transition drop-shadow-lg" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Direitos Autorais */}
        <p className="text-sm font-medium">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Vargas Gás</span>. Todos os direitos reservados.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
