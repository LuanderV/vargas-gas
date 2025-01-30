"use client";

import { TrendingUp, Users, Star, Briefcase } from "lucide-react";

const mockStats = [
  { value: "+50.000", label: "Botijões de Gás Vendidos", icon: <TrendingUp size={40} className="text-white" /> },
  { value: "+10.000", label: "Clientes Satisfeitos", icon: <Users size={40} className="text-white" /> },
  { value: "4.9/5.0", label: "Avaliação dos Clientes", icon: <Star size={40} className="text-white" /> },
  { value: "+12 Anos", label: "No mercado", icon: <Briefcase size={40} className="text-white" /> },
];

const StatsSection: React.FC = () => {
  return (
    <div className="relative flex justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-5xl bg-white shadow-lg rounded-3xl p-6 sm:p-10 flex flex-col items-center bg-[url('/img/background/bg-green-abstract.jpg')] bg-cover bg-center bg-no-repeat">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {mockStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {stat.icon}
              <span className="text-3xl sm:text-4xl font-extrabold text-green-500 mt-2">
                {stat.value}
              </span>
              <p className="mt-2 text-sm sm:text-lg text-white text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
