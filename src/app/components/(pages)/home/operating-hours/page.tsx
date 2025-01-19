import { FaClock } from 'react-icons/fa';

const OperatingHours = () => {
  return (
    <div className="p-8 rounded-xl">
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
  );
};

export default OperatingHours;
