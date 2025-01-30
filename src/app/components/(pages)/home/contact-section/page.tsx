"use client";

import ButtonWhastApp from "@/app/components/button-whatsapp/page";
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <footer className="relative py-16 bg-gray-900 text-white overflow-hidden bg-[url('/img/product-carousel/bg-green.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Efeito Glassmorphism */}
      <div className="absolute inset-0 bg-emerald-400 bg-opacity-20 backdrop-blur-md"></div>

      <motion.div
        className="relative max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-emerald-400 mb-6">
          Entre em Contato
        </h2>
        <p className="text-gray-300 text-lg">
          Para dúvidas, pedidos ou informações, fale conosco pelos números abaixo:
        </p>

        {/* Contatos */}
        <div className="mt-8 space-y-6">
          <div className="flex justify-center items-center space-x-3">
            <FaPhone className="text-emerald-400 text-xl" />
            <span className="font-medium text-gray-300">Residencial:</span>
            <a
              href="tel:32317088"
              className="text-emerald-400 font-semibold hover:underline"
            >
              (53) 3231-7088
            </a>
          </div>

          <div className="flex justify-center items-center space-x-3">
            <FaWhatsapp className="text-green-400 text-xl animate-pulse" />
            <span className="font-medium text-gray-300">Celular:</span>
            <a
              href="tel:+535981284497"
              className="text-emerald-400 font-semibold hover:underline"
            >
              (53) 98128-4497
            </a>
          </div>
        </div>

        {/* Botão de contato rápido */}
        <ButtonWhastApp />
      </motion.div>
    </footer>
  );
};

export default ContactSection;
