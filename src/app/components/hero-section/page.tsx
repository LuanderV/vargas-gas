import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-between py-8">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-start max-w-lg">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
          Gás e Água com <span className="text-green-500">Entrega Rápida</span>!
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mt-4">
          Peça gás P13 e água mineral 20L com total segurança e comodidade.
        </p>
        <button
          className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-600 transition duration-300"
        >
          Peça Agora
        </button>
      </div>

      {/* Right Side */}
      <div className="hidden md:block">
        <Image
          src="/img/hero-section/1.jpg"
          alt="Entrega de gás e água"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
