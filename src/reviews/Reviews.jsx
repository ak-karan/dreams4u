import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper/modules";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  Award,
  TrendingUp,
  Users,
  ThumbsUp,
  ChevronLeft,
  ChevronRight,
  Shield,
  Zap,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import { reviews } from "./reviewsData";

const stats = [
  {
    icon: <Star className="w-5 h-5" />,
    value: "4.9/5",
    label: "Average Rating",
  },
  { icon: <Users className="w-5 h-5" />, value: "45+", label: "Happy Clients" },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    value: "95%",
    label: "Retention Rate",
  },
  { icon: <Zap className="w-5 h-5" />, value: "50+", label: "Projects Done" },
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white text-sm font-semibold mb-6 shadow-lg shadow-cyan-500/25">
            <Award className="w-4 h-4" />
            Client Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-gradient">
              What Our Clients Say
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join 45+ satisfied businesses in Faridabad who have transformed
            their digital presence with Dreams4u
          </p>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button className="swiper-button-prev-custom p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 group">
              <ChevronLeft className="w-5 h-5 text-white group-hover:text-cyan-400 transition-colors" />
            </button>
            <button className="swiper-button-next-custom p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 group">
              <ChevronRight className="w-5 h-5 text-white group-hover:text-cyan-400 transition-colors" />
            </button>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectCreative]}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
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
                return `<span class="${className} !w-10 !h-2 !rounded-full !bg-gray-600 !opacity-100 hover:!bg-gradient-to-r hover:!from-cyan-500 hover:!to-blue-500 !transition-all !duration-300"></span>`;
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
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                  onMouseEnter={() => setIsHovered(review.id)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden group p-1">
                    {/* Gradient Border */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${review.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
                    ></div>

                    <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 h-full">
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6">
                        <Quote className="w-8 h-8 text-gray-700" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-6">
                        {renderStars(review.rating)}
                        <span className="text-yellow-400 ml-2 font-bold">
                          {review.rating}.0
                        </span>
                      </div>

                      {/* Review Text */}
                      <p className="text-gray-300 mb-8 leading-relaxed italic">
                        "{review.text}"
                      </p>

                      {/* Client Info */}
                      <div className="flex items-center gap-4 pt-6 border-t border-gray-800">
                        {/* Avatar */}
                        <div
                          className={`relative w-14 h-14 rounded-full bg-gradient-to-r ${review.color} flex items-center justify-center text-white font-bold`}
                        >
                          {review.avatar}
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                            <ThumbsUp className="w-3 h-3" />
                          </div>
                        </div>

                        <div className="flex-1">
                          <h4 className="font-bold text-white">
                            {review.name}
                          </h4>
                          <p className="text-gray-400 text-sm">{review.role}</p>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full">
                              {review.project}
                            </span>
                            <span className="text-xs px-2 py-1 bg-cyan-900/30 text-cyan-300 rounded-full">
                              {review.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                        initial={false}
                        animate={{ opacity: isHovered === review.id ? 0.1 : 0 }}
                      />
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { text: "Google Partner", icon: "🔍" },
            { text: "Verified Agency", icon: "✅" },
            { text: "24/7 Support", icon: "🛡️" },
            { text: "Money Back Guarantee", icon: "💰" },
          ].map((badge, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-3xl mb-3">{badge.icon}</div>
              <div className="text-gray-300 font-medium">{badge.text}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
