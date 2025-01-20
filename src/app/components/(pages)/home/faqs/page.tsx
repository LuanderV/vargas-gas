"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold text-emerald-500 mb-8">
        Perguntas Frequentes
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 transition-all border border-gray-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left text-gray-700 focus:outline-none"
            >
              <span className="text-lg font-medium">{item.question}</span>
              {activeIndex === index ? (
                <FaChevronUp size={20} className="text-emerald-800" />
              ) : (
                <FaChevronDown size={20} className="text-emerald-800" />
              )}
            </button>
            {activeIndex === index && (
              <p className="mt-4 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
