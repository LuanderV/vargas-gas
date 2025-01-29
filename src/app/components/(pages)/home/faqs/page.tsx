"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Como instalar o gás de cozinha com segurança?",
      answer:
        "Certifique-se de que a mangueira está conectada corretamente e utilize uma abraçadeira para fixá-la. Não force as conexões e verifique se não há vazamentos com água e sabão.",
    },
    {
      question: "Qual é a melhor forma de armazenar o botijão de gás?",
      answer:
        "O botijão deve ser armazenado em local ventilado, longe de fontes de calor, como fogões ou fornos, e sempre na posição vertical.",
    },
    {
      question: "Como identificar vazamentos de gás?",
      answer:
        "Você pode identificar vazamentos utilizando uma mistura de água e sabão. Aplique na área de conexão e observe se há formação de bolhas. Em caso de vazamento, feche o registro imediatamente.",
    },
    {
      question: "O que fazer em caso de cheiro forte de gás?",
      answer:
        "Desligue o registro do gás, abra todas as janelas para ventilação e evite ligar ou desligar aparelhos elétricos. Entre em contato com a fornecedora ou com os bombeiros.",
    },
    {
      question: "Quais são os sinais de que o botijão está acabando?",
      answer:
        "Chamas irregulares e dificuldade para manter o fogo aceso podem indicar que o gás está no fim. Tenha sempre um botijão reserva disponível.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 text-center bg-gray-50">
      <h1 className="text-4xl font-bold text-emerald-800 mb-8">
        Perguntas Frequentes
      </h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left text-gray-700 focus:outline-none hover:text-emerald-600 transition-colors duration-300"
            >
              <span className="text-lg font-medium">{item.question}</span>
              {activeIndex === index ? (
                <FaChevronUp size={20} className="text-emerald-500 transition-all duration-300" />
              ) : (
                <FaChevronDown size={20} className="text-gray-500 transition-all duration-300" />
              )}
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="mt-4 text-gray-600 overflow-hidden"
                >
                  <p className="p-3 border-l-4 border-emerald-400 bg-gray-100 rounded-md">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
