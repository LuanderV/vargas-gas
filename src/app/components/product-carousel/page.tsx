"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import ButtonWhastApp from "../button-whatsapp/page";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

export function ProductCarousel() {
  const [products, setProducts] = useState<Product[]>([]);

  // Simulação de carregamento de dados
  useEffect(() => {
    const mockFetchData = async () => {
      try {
        // Simulando um atraso e dados mockados
        const mockData: Product[] = [
          { id: "1", name: "Gás de Cozinha 13kg", imageUrl: "/img/products/product1.jpg", price: "R$ 99,99" },
          { id: "2", name: "Gás de Cozinha 45kg", imageUrl: "/img/products/product2.jpg", price: "R$ 129,99" },
          { id: "3", name: "Gás de Cozinha 13kg Premium", imageUrl: "/img/products/product3.jpg", price: "R$ 149,99" },
          { id: "4", name: "Gás para Indústria", imageUrl: "/img/products/product4.jpg", price: "R$ 79,99" },
          { id: "5", name: "Gás para Comércio", imageUrl: "/img/products/product5.jpg", price: "R$ 199,99" },
          { id: "6", name: "Gás de Cozinha 13kg Econômico", imageUrl: "/img/products/product6.jpg", price: "R$ 89,99" },
        ];
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setProducts(mockData);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };
    mockFetchData();
  }, []);

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold text-green-900 mb-8">Nossos Produtos de Gás</h2>
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
        {products.length > 0 ? (
          products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="p-4 transition-all transform hover:scale-105 hover:shadow-xl rounded-md bg-white shadow-md">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover rounded-md"
                  priority
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-lg font-semibold text-green-600">{product.price}</p>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <p>Carregando produtos...</p>
          </SwiperSlide>
        )}
      </Swiper>
      <ButtonWhastApp />
    </section>
  );
}

export default ProductCarousel;
