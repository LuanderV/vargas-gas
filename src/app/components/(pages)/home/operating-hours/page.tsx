"use client";

import { FaClock } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const OperatingHours = () => {
  return (
    <section className="py-16 px-6 flex flex-col md:flex-row items-center justify-center gap-10 bg-gray-50 rounded-xl">
      {/* Horário de Funcionamento */}
      <motion.div 
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-[url('/img/background/bg-green-gradient.jpg')] bg-cover bg-center bg-no-repeat shadow-lg rounded-xl p-6 w-full max-w-sm">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <motion.div
              className="mr-3 text-3xl text-emerald-600"
              animate={{ scale: [1, 1.1, 1] }} // Animação de escala suave
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <FaClock />
            </motion.div>
            Horário de Funcionamento
          </h2>
          <div className="space-y-4">
            {[{ dia: "Segunda a Sábado", horario: "09:00 - 21:00" }, { dia: "Domingos e Feriados", horario: "09:00 - 13:00" }]
              .map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex justify-between text-gray-700 p-3 rounded-lg bg-gray-100"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="font-medium">{item.dia}:</span>
                  <span className="font-semibold">{item.horario}</span>
                </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Imagem */}
      <motion.div 
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/img/operating-hours/pose-apontando.png"
          alt="Horário de Funcionamento"
          width={400}
          height={300}
          className="rounded-xl object-cover"
          priority
        />
      </motion.div>
    </section>
  );
};

export default OperatingHours;
