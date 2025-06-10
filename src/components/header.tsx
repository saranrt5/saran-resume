"use client";

import { motion } from "framer-motion";
import { Download, Mail, Phone, MapPin, Linkedin } from "lucide-react";
export function Header() {
  return <motion.div initial={{
    opacity: 0,
    y: -20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6
  }} className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white text-2xl font-bold"><span className="editable-text">
            SR
          </span></div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2"><span className="editable-text">Saran Ravindranath</span></h1>
            <p className="text-xl text-slate-600 mb-4"><span className="editable-text">Strategic Product Manager</span></p>
            <div className="flex items-center space-x-6 text-slate-500">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm"><span className="editable-text">rtsaran.kp@gmail.com</span></span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm"><span className="editable-text">+1 479-412-8287</span></span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm"><span className="editable-text">San Jose, USA</span></span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex space-x-3">
            <motion.a href="https://www.linkedin.com/in/saranravindranath/" target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
          
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="flex items-center space-x-2 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors font-medium">
            <Download className="w-4 h-4" />
            <span><span className="editable-text">Download Resume</span></span>
          </motion.button>
        </div>
      </div>
    </motion.div>;
}