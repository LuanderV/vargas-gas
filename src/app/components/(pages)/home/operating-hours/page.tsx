import { FaClock } from "react-icons/fa";
import Image from "next/image";

const OperatingHours = () => {
  return (
    <div className="py-16 flex flex-col md:flex-row items-center justify-between rounded-xl p-6">
      {/* Horário de Funcionamento */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
          <h2 className="text-2xl font-bold text-emerald-500 mb-6 flex items-center">
            <FaClock className="mr-3" size={24} />
            Horário de Funcionamento
          </h2>
          <div className="space-y-4">
            {/* Segunda a Sábado */}
            <div className="flex justify-between text-gray-600">
              <span className="font-medium">Segunda a Sábado:</span>
              <span className="font-semibold">09:00 - 21:00</span>
            </div>

            {/* Domingo e Feriados */}
            <div className="flex justify-between text-gray-600">
              <span className="font-medium">Domingos e Feriados:</span>
              <span className="font-semibold">09:00 - 13:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Imagem */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/img/operating-hours/pose-apontando.png"
          alt="Horário de Funcionamento"
          width={400}
          height={300}
          className="rounded-xl object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default OperatingHours;
