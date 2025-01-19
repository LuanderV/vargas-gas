import { FaCheckCircle, FaTruck, FaShieldAlt, FaSmile, FaLeaf, FaHeadset } from "react-icons/fa";

const SupportSection = () => {
  return (
    <div className="py-16 px-8 sm:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-green-800 text-center mb-12">
          Por que escolher nosso gás?
        </h2>

        {/* Conteúdo em colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Qualidade Garantida */}
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
            <FaCheckCircle className="text-green-600 text-4xl mb-6" />
            <h3 className="text-2xl font-bold text-green-800 mb-4">Qualidade Garantida</h3>
            <p className="text-gray-600">
              Nossos botijões são inspecionados rigorosamente para garantir que você receba gás de alta
              qualidade, seguro e eficiente para sua casa ou negócio.
            </p>
          </div>

          {/* Entrega Rápida */}
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
            <FaTruck className="text-green-600 text-4xl mb-6" />
            <h3 className="text-2xl font-bold text-green-800 mb-4">Entrega Rápida</h3>
            <p className="text-gray-600">
              Levamos o gás até você em tempo recorde, garantindo conveniência e pontualidade na entrega.
            </p>
          </div>

          {/* Segurança Primeiro */}
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
            <FaShieldAlt className="text-green-600 text-4xl mb-6" />
            <h3 className="text-2xl font-bold text-green-800 mb-4">Segurança Primeiro</h3>
            <p className="text-gray-600">
              Todos os nossos produtos seguem os mais altos padrões de segurança, com válvulas
              certificadas e manuseio adequado.
            </p>
          </div>

          {/* Avaliações Altas */}
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
            <FaSmile className="text-green-600 text-4xl mb-6" />
            <h3 className="text-2xl font-bold text-green-800 mb-4">Clientes Satisfeitos</h3>
            <p className="text-gray-600">
              Com mais de <strong>10 mil clientes satisfeitos</strong>, somos a escolha preferida para gás de cozinha e água potável.
            </p>
          </div>

          {/* Sustentabilidade */}
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
            <FaLeaf className="text-green-600 text-4xl mb-6" />
            <h3 className="text-2xl font-bold text-green-800 mb-4">Compromisso com o Meio Ambiente</h3>
            <p className="text-gray-600">
              Nossos processos são pensados para minimizar impactos ambientais, promovendo o uso
              responsável dos recursos.
            </p>
          </div>

          {/* Suporte ao Cliente */}
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
            <FaHeadset className="text-green-600 text-4xl mb-6" />
            <h3 className="text-2xl font-bold text-green-800 mb-4">Suporte ao Cliente</h3>
            <p className="text-gray-600">
              Nossa equipe está sempre pronta para ajudar, oferecendo suporte antes, durante e depois
              da sua compra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
