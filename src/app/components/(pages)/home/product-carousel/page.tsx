"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import ButtonWhastApp from "../../../button-whatsapp/page";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
}

export default function ProductCarousel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const mockData: Product[] = [
          { id: "1", name: "Gás de Cozinha P13", imageUrl: "/img/product-carousel/P13.jpg", },
          { id: "2", name: "Galão de Água 20L", imageUrl: "/img/product-carousel/agua20l.jpg" },
          { id: "3", name: "Carvão", imageUrl: "/img/product-carousel/carvao.jpg" },
        ];
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setProducts(mockData);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="py-16 text-white text-center bg-[url('/img/product-carousel/bg-product.jpg')] bg-cover bg-center bg-no-repeat"
>
      <h2 className="text-4xl font-bold mb-8">Nossos Produtos</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto"
      >
        {loading ? (
          <SwiperSlide>
            <p className="text-lg font-semibold">Carregando produtos...</p>
          </SwiperSlide>
        ) : (
          products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="p-2 rounded-xl bg-[url('/img/background/bg-green-abstract.jpg')] bg-cover bg-center bg-no-repeat backdrop-blur-md shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover rounded-md "
                  priority
                />
                <h3 className="mt-4 text-2xl font-semibold text-white bg-[url('/img/background/bg-green-gradient.jpg')] bg-cover bg-center rounded-lg">{product.name}</h3>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
      <div className="mt-8">
        <ButtonWhastApp />
      </div>
    </section>
  );
}
