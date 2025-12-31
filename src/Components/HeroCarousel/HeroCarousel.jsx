"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/autoplay";

const slides = [
  {
    title: "MEGA FLASH SALE",
    highlight: "UP TO 80% OFF",
    desc: "Biggest deals of the year – Limited stock!",
    img: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1920&h=1080&fit=crop",
  },
  {
    title: "NEW SEASON ARRIVALS",
    highlight: "FRESH DROPS",
    desc: "Latest fashion, electronics & home essentials",
    img: "https://images.unsplash.com/photo-1611403570720-162d8829689a?w=1920&h=1080&fit=crop",
  },
  {
    title: "FREE SHIPPING NATIONWIDE",
    highlight: "ON ORDERS $99+",
    desc: "Fast delivery • 100% secure payment",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop",
  },
];

export default function HeroCarousel() {
  return (
    <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1200}
        grabCursor={true}
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                priority={i === 0}
                className="object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-white">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl"
                  >
                    <p className="text-yellow-400 font-bold text-sm sm:text-lg uppercase tracking-widest mb-4">
                      Limited Time Only
                    </p>
                    <motion.h1
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 1 }}
                      className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6"
                    >
                      {slide.title} <br />
                      <span className="text-red-500">{slide.highlight}</span>
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 1 }}
                      className="text-lg sm:text-2xl mb-10 max-w-2xl opacity-90"
                    >
                      {slide.desc}
                    </motion.p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link href="/products">
                        <button className="bg-red-600 hover:bg-red-700 px-8 py-5 rounded-full text-xl font-bold flex items-center gap-3 shadow-2xl">
                          Shop Now <ChevronRight size={32} />
                        </button>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
