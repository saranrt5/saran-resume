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
  }} className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="06b9321f-b705-4ae2-b4bc-cf02277d8321" data-file-name="components/header.tsx">
      <div className="flex items-center justify-between" data-unique-id="a6d21912-9628-4429-997d-e1ef311ed8f5" data-file-name="components/header.tsx">
        <div className="flex items-center space-x-6" data-unique-id="bc6d16dc-6507-450b-b933-831f07696e10" data-file-name="components/header.tsx">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white text-2xl font-bold" data-unique-id="76213c5c-3c23-44cd-9c91-985cafdb74c2" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="992ffc2e-693c-438e-ad3d-38f50e526e63" data-file-name="components/header.tsx">
            SR
          </span></div>
          <div data-unique-id="a50f03c7-16e7-41fa-b0c2-44c41606cadc" data-file-name="components/header.tsx">
            <h1 className="text-4xl font-bold text-slate-900 mb-2" data-unique-id="c953b207-c721-4f94-8413-587e71dd02e8" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="e398d30c-b8a8-4118-a1f8-c4e78d122e8a" data-file-name="components/header.tsx">Saran Ravindranath</span></h1>
            <p className="text-xl text-slate-600 mb-4" data-unique-id="0a0bb0a0-5ee3-44ea-80dd-d9fde1ef9837" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="7c923f6b-ae1b-4e2b-a6a2-e9664864c19e" data-file-name="components/header.tsx">Strategic Product Manager</span></p>
            <div className="flex items-center space-x-6 text-slate-500" data-unique-id="539a4a67-7c1d-4e51-8edf-b5df97cda4dc" data-file-name="components/header.tsx">
              <div className="flex items-center space-x-2" data-unique-id="b584afea-b148-486b-a0ff-913d09bf6edf" data-file-name="components/header.tsx">
                <Mail className="w-4 h-4" />
                <span className="text-sm" data-unique-id="9a6d1e86-8fb9-4f9b-bad4-6f8a7f654c2c" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="e7cbc770-2e01-4cbf-b4c2-9bc8913734e9" data-file-name="components/header.tsx">rtsaran.kp@gmail.com</span></span>
              </div>
              <div className="flex items-center space-x-2" data-unique-id="067d17cd-354d-4a25-b4a1-ff036091339b" data-file-name="components/header.tsx">
                <Phone className="w-4 h-4" />
                <span className="text-sm" data-unique-id="ca529a8f-8d12-486a-8796-b555f238d0a2" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="4ad72652-6379-4d73-bf48-9b518ff1e964" data-file-name="components/header.tsx">+1 479-412-8287</span></span>
              </div>
              <div className="flex items-center space-x-2" data-unique-id="6173b0b2-6ca4-4821-a0a3-94595f82371c" data-file-name="components/header.tsx">
                <MapPin className="w-4 h-4" />
                <span className="text-sm" data-unique-id="db44d134-ecfc-42ee-b771-4c716aa8f4d9" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="cbbd3af8-a4b4-44f0-a989-fe6b432b79cf" data-file-name="components/header.tsx">San Jose, USA</span></span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4" data-unique-id="ee67b4be-754c-4c7c-838a-83e6c050ef59" data-file-name="components/header.tsx">
          <div className="flex space-x-3" data-unique-id="65fd566a-f377-4237-8333-b67fa4f7488b" data-file-name="components/header.tsx">
            <motion.a href="https://www.linkedin.com/in/saranravindranath/" target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors" data-unique-id="3a721835-7b58-4226-ab77-a01239b945a8" data-file-name="components/header.tsx">
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
          
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="flex items-center space-x-2 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors font-medium" data-unique-id="f3f420f9-9a1b-41ca-b8cd-3e1e86a419e8" data-file-name="components/header.tsx">
            <Download className="w-4 h-4" />
            <span data-unique-id="47f23a2b-9615-4f46-b577-a7d127c15e97" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="5e9d1751-1b65-4c47-a280-43db85cdc4fa" data-file-name="components/header.tsx">Download Resume</span></span>
          </motion.button>
        </div>
      </div>
    </motion.div>;
}