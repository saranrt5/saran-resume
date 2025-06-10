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
  }} className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="0e767bf8-b03b-4115-a509-95a12d5fc1cf" data-file-name="components/header.tsx">
      <div className="flex items-center justify-between" data-unique-id="eba28b97-19f4-4b0d-af21-bc8f3a617e34" data-file-name="components/header.tsx">
        <div className="flex items-center space-x-6" data-unique-id="4accd0cb-6dae-4d20-9f2e-4d67f78a6840" data-file-name="components/header.tsx">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white text-2xl font-bold" data-unique-id="1ca4b153-0d90-4bf9-9619-e2aba182c986" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="80d9fb0a-5a0b-4475-ad3b-3ef8e37dd9f4" data-file-name="components/header.tsx">
            SR
          </span></div>
          <div data-unique-id="c0b74a55-5d1e-485e-a695-8e2e725416ec" data-file-name="components/header.tsx">
            <h1 className="text-4xl font-bold text-slate-900 mb-2" data-unique-id="bc0c46e5-3f04-4bac-83ce-0e1dc2feab1b" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="d7fac93c-7c20-49e7-b837-dff6629c1dea" data-file-name="components/header.tsx">Saran Ravindranath</span></h1>
            <p className="text-xl text-slate-600 mb-4" data-unique-id="a63231b1-fb1d-48de-9d11-28c2d7ade93b" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="0e9a1034-b4e5-4938-974d-58fb0161d3f3" data-file-name="components/header.tsx">Strategic Product Manager</span></p>
            <div className="flex items-center space-x-6 text-slate-500" data-unique-id="98995ec4-e9ef-45d8-86c4-65ef557535af" data-file-name="components/header.tsx">
              <div className="flex items-center space-x-2" data-unique-id="9a9d97e1-1d6e-475d-b18b-8fb27f4ba78e" data-file-name="components/header.tsx">
                <Mail className="w-4 h-4" />
                <span className="text-sm" data-unique-id="ee357489-cc80-49f3-9d9e-3b9e56e3e12e" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="b61d2e81-1882-4c8b-a1f3-83031f739c88" data-file-name="components/header.tsx">rtsaran.kp@gmail.com</span></span>
              </div>
              <div className="flex items-center space-x-2" data-unique-id="27b70e58-7c57-4d80-85df-da70d820f2d3" data-file-name="components/header.tsx">
                <Phone className="w-4 h-4" />
                <span className="text-sm" data-unique-id="b0a4ad9a-9985-40f8-81be-7f611b78ba55" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="8f7f76f3-bf2b-4e50-829d-a9f060fff769" data-file-name="components/header.tsx">+1 479-412-8287</span></span>
              </div>
              <div className="flex items-center space-x-2" data-unique-id="adebca0f-0db2-48ed-93bc-c4e578bea607" data-file-name="components/header.tsx">
                <MapPin className="w-4 h-4" />
                <span className="text-sm" data-unique-id="f80774a8-5aaf-44fd-bfbe-3ac989929a7e" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="9b653716-bdae-46fe-af47-c04dd0b82b99" data-file-name="components/header.tsx">San Jose, USA</span></span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4" data-unique-id="ae88df2a-a99c-4c8e-beb7-41468f44ec18" data-file-name="components/header.tsx">
          <div className="flex space-x-3" data-unique-id="5420bdbf-4954-4e4e-9fca-a84a62c2ce27" data-file-name="components/header.tsx">
            <motion.a href="https://www.linkedin.com/in/saranravindranath/" target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors" data-unique-id="9864c5b6-af0e-4f9c-bedf-0d94944323be" data-file-name="components/header.tsx">
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
          
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="flex items-center space-x-2 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors font-medium" data-unique-id="9a330b58-841e-4900-a21c-ef44de797c95" data-file-name="components/header.tsx">
            <Download className="w-4 h-4" />
            <span data-unique-id="13e3211b-4e57-436a-ac49-73db046f3254" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="959b79bd-004a-4f72-9550-c4bad947a20a" data-file-name="components/header.tsx">Download Resume</span></span>
          </motion.button>
        </div>
      </div>
    </motion.div>;
}