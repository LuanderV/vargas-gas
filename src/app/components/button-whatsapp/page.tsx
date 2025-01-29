"use client"

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const ButtonWhatsApp = () => {
  return (
    <div className="text-center mt-10">
      <motion.a
        href="https://wa.me/5511999999999?text=Olá! Gostaria de fazer um pedido de gás."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-3 text-white bg-green-600 font-bold text-lg rounded-lg shadow-lg transition-all duration-300 relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Efeito de brilho no hover */}
        <span className="absolute inset-0 bg-green-400 opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-lg"></span>

        {/* Ícone animado */}
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mr-3"
        >
          <FaWhatsapp className="text-2xl" />
        </motion.span>

        Pedir pelo WhatsApp
      </motion.a>

      {/* Efeito de borda neon */}
      <div className="mt-2 w-48 mx-auto h-1 bg-gradient-to-r from-green-500 to-green-700 rounded-full animate-pulse"></div>
    </div>
  );
};

export default ButtonWhatsApp;
