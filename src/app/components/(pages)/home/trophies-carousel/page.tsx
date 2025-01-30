"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Lista de troféus (pode vir de uma API futuramente)
const trophies = [
  {
    id: 1,
    name: "Prêmio Qualidade Total",
    year: 2023,
    position: "1º Lugar Nacional",
    competition: "Melhores Empresas do Ano",
    image: "/img/trophies/qualidade-total.png",
  },
  {
    id: 2,
    name: "Melhor Atendimento",
    year: 2022,
    position: "Top 3 no Brasil",
    competition: "Ranking Nacional de Serviços",
    image: "/img/trophies/melhor-atendimento.png",
  },
  {
    id: 3,
    name: "Excelência em Serviços",
    year: 2021,
    position: "1º Lugar Regional",
    competition: "Concurso de Excelência Empresarial",
    image: "/img/trophies/excelencia.png",
  }
];

const TrophiesCarousel = () => {
  return (
    <section className="py-16 text-center bg-gray-50">
      <h2 className="text-3xl font-bold text-emerald-500 mb-8">
        🏆 Nossos Troféus e Conquistas
      </h2>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {trophies.map((trophy, index) => (
          <SwiperSlide key={trophy.id}>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={trophy.image}
                alt={trophy.name}
                width={120}
                height={120}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{trophy.name}</h3>
              <p className="text-sm text-gray-600">{trophy.year}</p>
              <span className="mt-1 text-emerald-600 font-medium">{trophy.position}</span>
              <p className="text-xs text-gray-500 mt-2">{trophy.competition}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TrophiesCarousel;
