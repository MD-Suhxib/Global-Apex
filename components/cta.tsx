"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react"

export default function CTA() {
  // WhatsApp configuration
  const whatsappNumber = "918618271718"; // Your number without +
  const companyName = "Global Apex";
  
  // Pre-filled messages
  const quoteMessage = `Hello ${companyName}! I'm interested in getting a quote for your premium granite and marble products. Please provide more information about pricing and availability.`;
  
  const consultationMessage = `Hello ${companyName}! I'd like to schedule a consultation for my project. Please let me know your available time slots.`;

  // Function to open WhatsApp
  const openWhatsApp = (message: string) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            READY FOR YOUR <span className="text-[#c5a47e]">NEXT PROJECT</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let us help you select the perfect stone for your luxury project. Contact our team today for personalized consultation and competitive quotes.
          </p>
          <div className="w-20 h-1 bg-[#c5a47e] mx-auto"></div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
        >
          {/* Get Instant Quote Button */}
          <motion.button
            onClick={() => openWhatsApp(quoteMessage)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#c5a47e] text-black px-10 py-5 rounded-full font-semibold text-lg tracking-wider uppercase hover:bg-[#b8966d] transition-all duration-300 flex items-center justify-center gap-3 min-w-[250px] cursor-pointer"
          >
            <MessageCircle size={20} />
            GET INSTANT QUOTE
          </motion.button>
          
          {/* Schedule Consultation Button */}
          <motion.button
            onClick={() => openWhatsApp(consultationMessage)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-[#c5a47e] text-[#c5a47e] px-10 py-5 rounded-full font-semibold text-lg tracking-wider uppercase hover:bg-[#c5a47e] hover:text-black transition-all duration-300 flex items-center justify-center gap-3 min-w-[250px] cursor-pointer"
          >
            <Clock size={20} />
            SCHEDULE CONSULTATION
          </motion.button>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-black border border-[#c5a47e]/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm"
        >
          <h3 className="text-3xl font-bold mb-12 text-center tracking-wide">
            CONTACT <span className="text-[#c5a47e]">INFORMATION</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center group cursor-pointer"
              onClick={() => window.location.href = 'mailto:globalapex.exports@gmail.com'}
            >
              <div className="bg-[#c5a47e]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c5a47e]/20 transition-all duration-300">
                <Mail className="text-[#c5a47e]" size={24} />
              </div>
              <p className="text-sm text-gray-400 mb-2 uppercase tracking-widest">Email</p>
              <p className="text-lg font-semibold group-hover:text-[#c5a47e] transition-colors duration-300">
                globalapex.exports@gmail.com
              </p>
              <p className="text-lg font-semibold group-hover:text-[#c5a47e] transition-colors duration-300">
                info@globalapexs.com
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center group cursor-pointer"
              onClick={() => window.open(`tel:+918618271718`, '_self')}
            >
              <div className="bg-[#c5a47e]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c5a47e]/20 transition-all duration-300">
                <Phone className="text-[#c5a47e]" size={24} />
              </div>
              <p className="text-sm text-gray-400 mb-2 uppercase tracking-widest">Phone</p>
              <p className="text-lg font-semibold group-hover:text-[#c5a47e] transition-colors duration-300">
                +91 8618271718
              </p>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center group cursor-pointer"
              onClick={() => openWhatsApp(`Hello ${companyName}! I would like to know more about your products and services.`)}
            >
              <div className="bg-[#c5a47e]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c5a47e]/20 transition-all duration-300">
                <MessageCircle className="text-[#c5a47e]" size={24} />
              </div>
              <p className="text-sm text-gray-400 mb-2 uppercase tracking-widest">WhatsApp</p>
              <p className="text-lg font-semibold group-hover:text-[#c5a47e] transition-colors duration-300">
                Chat with Us
              </p>
              <p className="text-sm text-gray-400 mt-1">Quick Response</p>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center group cursor-pointer"
            >
              <div className="bg-[#c5a47e]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c5a47e]/20 transition-all duration-300">
                <Clock className="text-[#c5a47e]" size={24} />
              </div>
              <p className="text-sm text-gray-400 mb-2 uppercase tracking-widest">Business Hours</p>
              <p className="text-lg font-semibold group-hover:text-[#c5a47e] transition-colors duration-300">
                Mon - Sat: 9AM - 6PM
              </p>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-700 text-center"
          >
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Global Presence</p>
            <p className="text-lg font-semibold text-[#c5a47e]">
              Serving Clients Worldwide • Premium Stone Solutions Since 2007
            </p>
          </motion.div>
        </motion.div>

        {/* Quick Response Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 bg-[#c5a47e]/10 px-6 py-4 rounded-full border border-[#c5a47e]/20">
            <div className="w-3 h-3 bg-[#c5a47e] rounded-full animate-pulse"></div>
            <p className="text-[#c5a47e] font-semibold tracking-wide">
              GUARANTEED RESPONSE WITHIN 24 HOURS
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}