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
  }} className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="145e1688-21f0-4009-be5f-8285ef55abb6" data-file-name="components/header.tsx">
      <div className="flex items-center justify-between" data-unique-id="386eec87-9d12-4298-923d-83f326a1ee7e" data-file-name="components/header.tsx">
        <div className="flex items-center space-x-6" data-unique-id="1bbaed96-5534-41d7-a8e7-a485f426b48b" data-file-name="components/header.tsx">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white text-2xl font-bold" data-unique-id="ce528307-a292-450f-ad2e-a522d7f068aa" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="aab52008-da68-4715-8955-85b712c75876" data-file-name="components/header.tsx">
            SR
          </span></div>
          <div data-unique-id="e675e6b5-b161-481d-bfb8-1e7f84ae3a44" data-file-name="components/header.tsx">
            <h1 className="text-4xl font-bold text-slate-900 mb-2" data-unique-id="a894a2fe-bb5e-4c28-add4-805364c9233d" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="f91c68c2-6e8b-4f2d-a023-7adbb2859513" data-file-name="components/header.tsx">Saran Ravindranath</span></h1>
            <p className="text-xl text-slate-600 mb-4" data-unique-id="4512d2ee-bd60-4ff7-b006-47dff0109ebc" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="446c765c-8aa4-4a1e-a6d7-2ad2505d8212" data-file-name="components/header.tsx">Strategic Product Manager</span></p>
            <div className="flex items-center space-x-6 text-slate-500" data-unique-id="4b28631e-3a13-4664-818f-ccf9f92fee78" data-file-name="components/header.tsx">
              <div className="flex items-center space-x-2" data-unique-id="63a2f290-32de-42c4-b1d4-ec28385cdd4b" data-file-name="components/header.tsx">
                <Mail className="w-4 h-4" />
                <span className="text-sm" data-unique-id="5ea0519d-369e-4434-aed0-1c084b99bd20" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="1aedbec5-18f7-4bf1-a2fd-5c0549380037" data-file-name="components/header.tsx">rtsaran.kp@gmail.com</span></span>
              </div>
              <div className="flex items-center space-x-2" data-unique-id="786ebd5b-7bfb-4a8a-ac7d-a83817092f7f" data-file-name="components/header.tsx">
                <Phone className="w-4 h-4" />
                <span className="text-sm" data-unique-id="a3c53d1c-cdb4-4b8a-90cf-5729f869bd1d" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="13ae3787-011d-4fd8-b342-75f237d185cf" data-file-name="components/header.tsx">+1 479-412-8287</span></span>
              </div>
              <div className="flex items-center space-x-2" data-unique-id="1e2f67d4-a597-4f24-bf5d-bd963376d543" data-file-name="components/header.tsx">
                <MapPin className="w-4 h-4" />
                <span className="text-sm" data-unique-id="cbe82339-87a0-43ad-92d5-a6e40d1f08a5" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="711a0d0b-a5c9-4a93-9635-854e0bd0c5e7" data-file-name="components/header.tsx">San Jose, USA</span></span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4" data-unique-id="2d5a29a3-039b-4a76-8ee6-9dc8a06fb7f0" data-file-name="components/header.tsx">
          <div className="flex space-x-3" data-unique-id="c0412d31-6c94-4354-9879-6140a55e8cb3" data-file-name="components/header.tsx">
            <motion.a href="https://www.linkedin.com/in/saranravindranath/" target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors" data-unique-id="2f10c2da-f8bb-48bc-8148-62e7c35ce887" data-file-name="components/header.tsx">
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
          
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="flex items-center space-x-2 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors font-medium" data-unique-id="a9795f11-bb91-4749-9c4c-eb4b050962fd" data-file-name="components/header.tsx">
            <Download className="w-4 h-4" />
            <span data-unique-id="d28eb007-0027-438a-99ee-db2f72932fdb" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="b152f83c-6a25-4657-96d1-86acf4616657" data-file-name="components/header.tsx">Download Resume</span></span>
          </motion.button>
        </div>
      </div>
    </motion.div>;
}