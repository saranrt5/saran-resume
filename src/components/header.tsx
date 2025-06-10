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
  }} className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="1ca39fb1-4a29-4a80-a291-fdf07087d915" data-file-name="components/header.tsx">
      <div className="flex items-center justify-between" data-unique-id="5b7fa69b-8cb1-4c5d-902b-6385b59ad500" data-file-name="components/header.tsx">
        <div className="flex items-center space-x-6" data-unique-id="d944479d-852c-49e7-9d6b-2d6388d8017f" data-file-name="components/header.tsx">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white text-2xl font-bold" data-unique-id="868b1dec-230c-421c-ab5d-bfbcda6fd299" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="9471ab47-0e6e-4fe1-bcb6-4d73c6a83fb5" data-file-name="components/header.tsx">
            SR
          </span></div>
          <div data-unique-id="b10c50a9-c268-4a98-a3f0-d928a8e16866" data-file-name="components/header.tsx">
            <h1 className="text-4xl font-bold text-slate-900 mb-2" data-unique-id="fa2e5d12-f0d0-4aa2-9ac6-7f39e199f628" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="c0c700cc-075f-429a-b28d-f640880aab91" data-file-name="components/header.tsx">Saran Ravindranath</span></h1>
            <p className="text-xl text-slate-600 mb-4" data-unique-id="509e6080-705f-47fd-8e27-41a49d4f4361" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="63fca2dc-dad8-4868-a7ce-bb3295396a21" data-file-name="components/header.tsx">Strategic Product Manager</span></p>
            <div className="flex items-center space-x-6 text-slate-500" data-unique-id="8ca2b70a-31a1-4d7b-8c13-dd2757c0bebe" data-file-name="components/header.tsx">
              <div className="flex items-center space-x-2" data-unique-id="10f3faba-5f37-4a41-86b3-0d08a437c0b3" data-file-name="components/header.tsx">
                <Mail className="w-4 h-4" />
                <span className="text-sm" data-unique-id="791a5c8d-70af-4ba0-bc10-3d76f177c4c6" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="726daa95-6a7c-4007-9dc2-7174f5b22a88" data-file-name="components/header.tsx">rtsaran.kp@gmail.com</span></span>
              </div>
              <div className="flex items-center space-x-2" data-unique-id="80dfacb5-e4dc-4e62-97be-b55b0a1ebec8" data-file-name="components/header.tsx">
                <Phone className="w-4 h-4" />
                <span className="text-sm" data-unique-id="b6b9e14a-0460-40ac-b566-62d64fe2da1f" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="05c0d3b4-7f66-4234-b6da-2951dfafd4c1" data-file-name="components/header.tsx">+1 479-412-8287</span></span>
              </div>
              <div className="flex items-center space-x-2" data-unique-id="7bbefc60-f700-48e0-acbc-fd9bc580b2c5" data-file-name="components/header.tsx">
                <MapPin className="w-4 h-4" />
                <span className="text-sm" data-unique-id="60fa38f8-2f04-4887-a8a4-77bf742aab5b" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="f899e904-e55a-49ff-9ac5-a9be480d0d83" data-file-name="components/header.tsx">San Jose, USA</span></span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4" data-unique-id="4f4b6f26-336d-4bfa-800e-21b1eeae80ab" data-file-name="components/header.tsx">
          <div className="flex space-x-3" data-unique-id="c1fb2aca-3afe-4806-9fcc-7a95f9849d0b" data-file-name="components/header.tsx">
            <motion.a href="https://www.linkedin.com/in/saranravindranath/" target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors" data-unique-id="3d3daf36-2e3e-45c8-9dd4-7fb12640753c" data-file-name="components/header.tsx">
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
          
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="flex items-center space-x-2 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors font-medium" data-unique-id="d47c6c07-ed3e-4f9c-939a-5b179bc95d09" data-file-name="components/header.tsx">
            <Download className="w-4 h-4" />
            <span data-unique-id="6983501f-db6a-44e8-86dc-a2e73adfb556" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="6efaca8c-5c5f-471b-a0ec-a102f297229b" data-file-name="components/header.tsx">Download Resume</span></span>
          </motion.button>
        </div>
      </div>
    </motion.div>;
}