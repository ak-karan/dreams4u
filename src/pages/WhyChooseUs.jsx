import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaRocket,
  FaMobileAlt,
  FaBolt,
  FaPalette,
  FaMoneyBillWave,
  FaHeadset,
  FaChartLine,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

const features = [
  {
    id: 1,
    title: "Local SEO Expertise",
    desc: "Every website we build follows Google SEO best practices to improve visibility, rankings, and organic traffic.",
    icon: <FaSearch className="w-8 h-8" />,
    color: "from-cyan-500 to-blue-500",
    stats: "95% SEO Score",
    details:
      "On-page optimization, technical SEO, and local search optimization",
  },
  {
    id: 2,
    title: "Modern & Scalable Tech",
    desc: "We use modern technologies like React.js, Next.js to create fast, secure, and future-ready websites.",
    icon: <FaRocket className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    stats: "100% Scalable",
    details:
      "Built with React.js, Next.js, Tailwind CSS, and modern frameworks",
  },
  {
    id: 3,
    title: "Mobile-First Design",
    desc: "Your website will look and perform perfectly on mobile, tablet, and desktop devices.",
    icon: <FaMobileAlt className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
    stats: "100% Responsive",
    details: "Mobile-first approach with cross-device compatibility",
  },
  {
    id: 4,
    title: "Lightning Fast Speed",
    desc: "Speed matters. Our websites are optimized for fast loading and smooth user experience.",
    icon: <FaBolt className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-500",
    stats: "<2s Load Time",
    details: "Optimized images, code splitting, and performance monitoring",
  },
  {
    id: 5,
    title: "Custom Brand Design",
    desc: "No templates. We create custom website designs tailored to your brand, industry, and goals.",
    icon: <FaPalette className="w-8 h-8" />,
    color: "from-red-500 to-rose-500",
    stats: "100% Custom",
    details: "Unique designs reflecting your brand identity",
  },
  {
    id: 6,
    title: "Affordable Excellence",
    desc: "High-quality websites at budget-friendly pricing, ideal for startups and small businesses.",
    icon: <FaMoneyBillWave className="w-8 h-8" />,
    color: "from-lime-500 to-green-500",
    stats: "Best Value",
    details: "Transparent pricing with no hidden costs",
  },
  {
    id: 7,
    title: "Dedicated Support",
    desc: "We offer ongoing support, updates, and maintenance to keep your website secure and up-to-date.",
    icon: <FaHeadset className="w-8 h-8" />,
    color: "from-indigo-500 to-violet-500",
    stats: "24/7 Support",
    details: "Regular maintenance and security updates",
  },
  {
    id: 8,
    title: "Proven Success",
    desc: "With 50+ projects completed and a 95% client retention rate, our results speak for themselves.",
    icon: <FaChartLine className="w-8 h-8" />,
    color: "from-amber-500 to-orange-500",
    stats: "50+ Projects",
    details: "Track record of successful client partnerships",
  },
];

function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeDetail, setActiveDetail] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="py-24 bg-gradient-to-b from-gray-50 via-white to-cyan-50/30 relative overflow-hidden"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white text-sm font-semibold mb-6 shadow-lg shadow-cyan-500/25">
            <FaCheckCircle className="w-4 h-4" />
            Why Choose Us
          </div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
              Why Choose Dreams4u
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Dreams4u is a trusted website design company in Faridabad delivering
            SEO-friendly, high-performance websites that drive real business
            results.
          </motion.p>
        </motion.header>

        {/* Main Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button className="swiper-button-prev-custom p-4 bg-white rounded-full shadow-xl border border-gray-200 hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 group">
              <FaChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-cyan-600 transition-colors" />
            </button>
            <button className="swiper-button-next-custom p-4 bg-white rounded-full shadow-xl border border-gray-200 hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 group">
              <FaChevronRight className="w-5 h-5 text-gray-700 group-hover:text-cyan-600 transition-colors" />
            </button>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectCreative]}
            slidesPerView={1}
            spaceBetween={30}
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
                return `<span class="${className} !w-10 !h-2 !rounded-full !bg-gray-300 !opacity-100 hover:!bg-gradient-to-r hover:!from-cyan-500 hover:!to-blue-500 !transition-all !duration-300"></span>`;
              },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="!pb-14"
          >
            {features.map((item, index) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div
                    className={`relative h-full bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-100/50 group cursor-pointer`}
                    onClick={() =>
                      setActiveDetail(activeDetail === index ? null : index)
                    }
                  >
                    {/* Animated Border */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md`}
                    ></div>

                    {/* Card Content */}
                    <div className="relative bg-white rounded-3xl p-8 h-full">
                      {/* Icon with Gradient Background */}
                      <div
                        className={`inline-flex items-center justify-center p-4 bg-gradient-to-r ${item.color} rounded-2xl text-white shadow-lg mb-6`}
                      >
                        {item.icon}
                      </div>

                      {/* Badge */}
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 text-sm font-semibold rounded-full mb-4 border border-cyan-100">
                        {item.stats}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {item.desc}
                      </p>

                      {/* Hover Details */}
                      <AnimatePresence>
                        {activeDetail === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-gray-100">
                              <p className="text-sm text-gray-500">
                                {item.details}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Read More Button */}
                      <motion.button
                        className={`w-full mt-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                          activeDetail === index
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                            : "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 hover:text-cyan-600"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {activeDetail === index ? "Show Less" : "Learn More"}
                      </motion.button>
                    </div>

                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}
                    ></div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Active Feature Details */}
        <AnimatePresence>
          {activeDetail !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-100 shadow-xl"
            >
              <div className="flex items-start gap-6">
                <div
                  className={`p-4 bg-gradient-to-r ${features[activeDetail].color} rounded-2xl text-white`}
                >
                  {features[activeDetail].icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {features[activeDetail].title}
                  </h4>
                  <p className="text-gray-700 mb-4">
                    {features[activeDetail].details}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-2 bg-white rounded-full text-cyan-700 font-semibold text-sm border border-cyan-200">
                      {features[activeDetail].stats}
                    </span>
                    <button
                      onClick={() => setActiveDetail(null)}
                      className="px-4 py-2 text-cyan-600 hover:text-cyan-700 font-semibold transition-colors"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default WhyChooseUs;
