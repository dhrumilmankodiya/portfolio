"use client";

import { motion } from "framer-motion";
import { Package, Rocket, Clock } from "lucide-react";
import { heroData, colors, typography } from "@/lib/data";

const stats = [
  {
    value: "19+",
    label: "Products Shipped",
    icon: Package,
  },
  {
    value: "6",
    label: "Ventures",
    icon: Rocket,
  },
  {
    value: "4+",
    label: "Years",
    icon: Clock,
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl w-full text-center">
        {/* Main Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-bold mb-6"
          style={{
            fontSize: typography.hero,
            color: colors.text,
            lineHeight: 1.1,
          }}
        >
          {heroData.tagline}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-16"
          style={{
            fontSize: typography.body,
            color: colors.text,
            opacity: 0.8,
          }}
        >
          {heroData.subtitle}
        </motion.p>

        {/* Stats Display */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.15,
                  ease: "easeOut",
                }}
                className="flex flex-col items-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: colors.accent }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <span
                  className="font-bold"
                  style={{
                    fontSize: "48px",
                    color: colors.text,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: typography.body,
                    color: colors.text,
                    opacity: 0.7,
                  }}
                >
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20"
        >
          <div
            className="w-6 h-10 border-2 rounded-full flex justify-center pt-2 mx-auto"
            style={{ borderColor: colors.text }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: colors.accent }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}