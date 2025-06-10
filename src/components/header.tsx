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
  }} className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="bc4c7c7e-1221-48a2-888a-44786b5240e7" data-file-name="components/header.tsx">
      <div className="flex items-center justify-between" data-unique-id="f52d4c68-b60c-4629-a0ab-c60d0c3faa8e" data-file-name="components/header.tsx">
        <div className="flex items-center space-x-6" data-unique-id="286d0f30-420a-44b6-a19f-80fd7b7a88a0" data-file-name="components/header.tsx">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white text-2xl font-bold" data-unique-id="cfabd1ca-d0af-495b-aae8-efb13d23cf55" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="6959a5c9-8e52-41fc-a894-c6c8a2f233d7" data-file-name="components/header.tsx">
            SR
          </span></div>
          <div data-unique-id="8ce6edbc-0280-4c2c-a29a-a2719e1ac42b" data-file-name="components/header.tsx">
            <h1 className="text-4xl font-bold text-slate-900 mb-2" data-unique-id="d525f44d-11e2-436c-bf7f-4f16aea48ad8" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="6bd5af1f-7866-4554-9271-a69323561818" data-file-name="components/header.tsx">Saran Ravindranath</span></h1>
            <p className="text-xl text-slate-600 mb-4" data-unique-id="a0ea53c7-9b39-44c9-a0bc-b3a91ccb3407" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="76d0ccf8-b268-44b8-8a3b-f99a469285cf" data-file-name="components/header.tsx">Strategic Product Manager</span></p>
            <div className="flex items-center space-x-6 text-slate-500" data-unique-id="ccfb1c6f-576f-479a-841f-3a4c31996ba3" data-file-name="components/header.tsx">
              <div className="flex items-center space-x-2" data-unique-id="7f32fd27-1323-436b-bb0b-61d4de3e9f46" data-file-name="components/header.tsx">
                <Mail className="w-4 h-4" />
                <span className="text-sm" data-unique-id="b78e6bc5-fc50-4546-9511-657aff3cee23" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="82204a82-f553-40da-b27b-b6c95553b54d" data-file-name="components/header.tsx">rtsaran.kp@gmail.com</span></span>
              </div>
              <div className="flex items-center space-x-2" data-unique-id="c254149a-6614-4397-b606-f400143cf6cc" data-file-name="components/header.tsx">
                <Phone className="w-4 h-4" />
                <span className="text-sm" data-unique-id="947bad85-c518-4439-a0ee-e7ee6fcc9d43" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="24332fed-06d2-4ec0-9424-2a8d92c624d0" data-file-name="components/header.tsx">+1 479-412-8287</span></span>
              </div>
              <div className="flex items-center space-x-2" data-unique-id="fb08c836-4629-4fc6-b9e7-d79536e63b03" data-file-name="components/header.tsx">
                <MapPin className="w-4 h-4" />
                <span className="text-sm" data-unique-id="e86fe5e3-00cf-48eb-8dd3-1fc10ef3b57f" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="9dd60b74-3e5a-4341-807c-69da108ee304" data-file-name="components/header.tsx">San Jose, USA</span></span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4" data-unique-id="6045867f-8471-4e8f-8171-43f2a2bb904c" data-file-name="components/header.tsx">
          <div className="flex space-x-3" data-unique-id="bd413c09-3c90-4bfb-8534-6498b17f2825" data-file-name="components/header.tsx">
            <motion.a href="https://www.linkedin.com/in/saranravindranath/" target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors" data-unique-id="ff9fc16b-5446-4412-9be5-99fc00952bc0" data-file-name="components/header.tsx">
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
          
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="flex items-center space-x-2 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors font-medium" data-unique-id="0d32a8e2-3e34-4a4b-a301-d756099ee11e" data-file-name="components/header.tsx">
            <Download className="w-4 h-4" />
            <span data-unique-id="1d87fffb-6ef8-4ad1-b9b6-b1f0562e9014" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="0b688507-06f4-4081-919f-bfdd2ffa09a1" data-file-name="components/header.tsx">Download Resume</span></span>
          </motion.button>
        </div>
      </div>
    </motion.div>;
}