"use client";

import { motion } from "framer-motion";
import { Download, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white text-2xl font-bold">
            JS
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">John Smith</h1>
            <p className="text-xl text-slate-600 mb-4">Senior Software Engineer</p>
            <div className="flex items-center space-x-6 text-slate-500">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">john.smith@email.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg bg-slate-800 text-white hover:bg-slate-900 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.button>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors font-medium"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
