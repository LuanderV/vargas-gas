import { FaWhatsapp } from "react-icons/fa";

const ButtonWhastApp = () => {
  return (
    <>
        {/* Botão de WhatsApp */}
        <div className="text-center mt-10">
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de fazer um pedido de gás."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-white bg-green-600 hover:bg-green-700 font-bold text-lg rounded-lg shadow-lg transition-all duration-300"
          >
            <FaWhatsapp className="text-2xl mr-3" />
            Pedir pelo WhatsApp
          </a>
        </div>
    </>
  );
};

export default ButtonWhastApp;