import { Link } from "react-router-dom";
import { portfolioList } from "./portfolioList";
import React, { Suspense, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper/modules";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
      aria-labelledby="portfolio-heading"
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-800 font-semibold text-sm mb-6 border border-amber-200">
            Our Portfolio
          </span>

          <motion.h3
            id="portfolio-heading"
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Excellence Driven by{" "}
            <span className="relative">
              <span className="relative z-10">Client Satisfaction</span>
              <motion.div
                className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-amber-400/30 to-orange-400/30 -z-0"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </motion.h3>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            We put our clients first, always. Their satisfaction fuels our
            commitment to quality, trust, and outstanding results.
          </motion.p>
        </motion.div>
      </div>

      {/* Main Portfolio Grid with Slider */}
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Side - Project Details */}
        <motion.div
          className="lg:w-2/5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="sticky top-24 bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full text-amber-700 font-medium border border-amber-100">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                Active Project
              </span>
            </div>

            <h4 className="text-3xl font-bold text-gray-900 mb-4">
              {portfolioList[activeIndex]?.title}
            </h4>

            <p className="text-gray-600 mb-8 leading-relaxed">
              A premium website delivering exceptional user experience and
              driving business growth through innovative design and development.
            </p>

            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-2">Project Status</p>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 1 }}
                  />
                </div>
              </div>
              <span className="text-amber-600 font-bold">100%</span>
            </div>

            <Link
              to={portfolioList[activeIndex]?.urls}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-amber-200 transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span>Visit Live Project</span>
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaExternalLinkAlt className="w-4 h-4" />
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Right Side - Slider */}
        <motion.div
          className="lg:w-3/5 w-full"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <button className="swiper-button-prev-custom p-4 bg-white rounded-full shadow-lg hover:shadow-xl border border-gray-100 hover:bg-gray-50 transition-all duration-300 group">
                <FaArrowLeft className="w-5 h-5 text-gray-700 group-hover:text-amber-600 transition-colors" />
              </button>
              <button className="swiper-button-next-custom p-4 bg-white rounded-full shadow-lg hover:shadow-xl border border-gray-100 hover:bg-gray-50 transition-all duration-300 group">
                <FaArrowRight className="w-5 h-5 text-gray-700 group-hover:text-amber-600 transition-colors" />
              </button>
            </div>

            <Suspense
              fallback={
                <div className="flex items-center justify-center h-[500px]">
                  <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              }
            >
              <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                  delay: 4000,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                  clickable: true,
                  renderBullet: (index, className) => {
                    return `<span class="${className} !w-3 !h-3 !bg-gray-300 !opacity-100 hover:!bg-amber-500 !transition-colors !duration-300"></span>`;
                  },
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                effect="creative"
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: ["-120%", 0, -500],
                  },
                  next: {
                    shadow: true,
                    translate: ["120%", 0, -500],
                  },
                }}
                className="!pb-12"
              >
                {portfolioList.map((project, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white bg-gradient-to-br from-gray-50 to-white">
                        {/* Image Container with Gradient Overlay */}
                        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                          <img
                            src={project.imageurl}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                          {/* Badge */}
                          <div className="absolute top-6 right-6">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 font-semibold text-sm border border-white/20">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              Live
                            </span>
                          </div>
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 to-transparent">
                          <h4 className="text-2xl font-bold mb-2">
                            {project.title}
                          </h4>
                          <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Premium website with cutting-edge features
                          </p>
                        </div>

                        {/* View Button */}
                        <Link
                          to={project.urls}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500"
                        >
                          <div className="p-4 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300">
                            <FaExternalLinkAlt className="w-6 h-6 text-gray-800" />
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Suspense>
          </div>

          {/* Counter */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                {String(activeIndex + 1).padStart(2, "0")}
              </div>
              <div className="text-sm text-gray-500">Current</div>
            </div>
            <div className="text-gray-300 text-2xl">/</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-300">
                {String(portfolioList.length).padStart(2, "0")}
              </div>
              <div className="text-sm text-gray-500">Total</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Portfolio;
