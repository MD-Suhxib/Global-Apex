"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Work() {
  const steps = [
    {
      step: "Step 1",
      title: "Browse Our Product Catalog",
      description:
        "Explore our comprehensive product range including premium decorative laminates, plywood products, natural stones, ceramics, and glass products. Browse through detailed specifications and high-quality images to find exactly what you need for your project requirements.",
      image: "/images/step1.png", // Replace with your actual image path
      reverse: false,
    },
    {
      step: "Step 2",
      title: "Choose What You Want",
      description:
        "Select your desired products from our extensive catalog. Compare different options, check technical specifications, and choose the quantities that meet your business needs. Our product experts are available to help you make the right choice for your specific requirements.",
      image: "/images/step2.png",
      reverse: true,
    },
    {
      step: "Step 3",
      title: "Place Order via WhatsApp",
      description:
        "Contact us directly through WhatsApp with your product selection and quantities. Our team will provide instant quotes, shipping details, and payment options. This convenient ordering process ensures quick communication and seamless transaction handling for international buyers.",
      image: "/images/step3.png",
      reverse: false,
    },
  ]

  return (
    <section className="min-h-screen bg-gray-50 py-24 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold">
          How it{" "}
          <span className="bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">
            Works
          </span>
        </h1>
      </div>

      {/* Steps */}
      <div className="space-y-28">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`flex flex-col ${
              step.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-12`}
          >
            {/* Image */}
            <div className="flex-1 bg-white rounded-[2rem] shadow-2xl p-10 flex justify-center items-center">
              <Image
                src={step.image}
                alt={step.title}
                width={500}
                height={400}
                className="rounded-2xl"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <span className="bg-purple-600 text-white text-sm font-semibold px-4 py-1 rounded mb-4 inline-block">
                {step.step}
              </span>
              <h2 className="text-4xl font-bold mb-4">{step.title}</h2>
              <p className="text-gray-500 leading-relaxed text-lg">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
