"use client";

import { motion } from "framer-motion";
import { Download, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
export function Header() {
  return <motion.div initial={{
    opacity: 0,
    y: -20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6
  }} className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100" data-unique-id="17218d6b-a70a-4631-9f95-5b28fbe30960" data-file-name="components/header.tsx">
      <div className="flex items-center justify-between" data-unique-id="f6183c80-947f-4cf2-85de-77d50b9c63bb" data-file-name="components/header.tsx">
        <div className="flex items-center space-x-6" data-unique-id="3a8ed49b-ab1f-4f8c-838c-bd55ffb6e5c8" data-file-name="components/header.tsx">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white text-2xl font-bold" data-unique-id="718b0ca2-3af5-4fee-832e-7342bebc86a1" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="d859e58d-95f4-4058-b563-13c8617a577c" data-file-name="components/header.tsx">
            JS
          </span></div>
          <div data-unique-id="05438ec2-ff57-49fa-92bd-e8c0452cc6e2" data-file-name="components/header.tsx">
            <h1 className="text-4xl font-bold text-slate-900 mb-2" data-unique-id="30960afe-758d-42ae-9431-57fa37419471" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="265d23eb-2f6a-4d1e-8020-7ce055108641" data-file-name="components/header.tsx">John Smith</span></h1>
            <p className="text-xl text-slate-600 mb-4" data-unique-id="c88bd6a8-a41a-4655-b0ec-ab456804fa85" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="dc6b1b04-8a0b-4471-84f4-4514527ce09c" data-file-name="components/header.tsx">Senior Software Engineer</span></p>
            <div className="flex items-center space-x-6 text-slate-500" data-unique-id="90aceedd-38f8-47fc-ac43-01b8ecd65b92" data-file-name="components/header.tsx">
              <div className="flex items-center space-x-2" data-unique-id="a806a024-b324-4cbc-a4ef-8616b5faa3dc" data-file-name="components/header.tsx">
                <Mail className="w-4 h-4" />
                <span className="text-sm" data-unique-id="0037f997-ca4c-498e-9fca-7b2830e73304" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="aa87feb7-fc86-4081-97cb-d0e1ef3e5f62" data-file-name="components/header.tsx">john.smith@email.com</span></span>
              </div>
              <div className="flex items-center space-x-2" data-unique-id="f5ea589c-3a10-46f4-8411-0fe0ddf6369d" data-file-name="components/header.tsx">
                <Phone className="w-4 h-4" />
                <span className="text-sm" data-unique-id="badf9bc3-e7fe-4bc3-9d7a-436330a6e75c" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="678dd221-3cb0-4879-99e5-398840527829" data-file-name="components/header.tsx">+1 (555) 123-4567</span></span>
              </div>
              <div className="flex items-center space-x-2" data-unique-id="3a05ae88-76ef-443e-9e31-28abc8b4129e" data-file-name="components/header.tsx">
                <MapPin className="w-4 h-4" />
                <span className="text-sm" data-unique-id="9ab594c7-7fb7-419c-8587-80d12441b57a" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="de52af1f-e7c2-4413-87a1-e7b23f76dff2" data-file-name="components/header.tsx">San Francisco, CA</span></span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4" data-unique-id="f9d531da-400f-4d52-ac8a-18cf785c6294" data-file-name="components/header.tsx">
          <div className="flex space-x-3" data-unique-id="748b3640-978d-4ee9-affd-d3bfe2e25744" data-file-name="components/header.tsx">
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors" data-unique-id="bb0dd57a-ff0e-48c5-9a18-c8892ed31d1c" data-file-name="components/header.tsx">
              <Linkedin className="w-5 h-5" />
            </motion.button>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="p-3 rounded-lg bg-slate-800 text-white hover:bg-slate-900 transition-colors" data-unique-id="c4474a4b-087c-4d1b-b36f-3e421aaa3aa3" data-file-name="components/header.tsx">
              <Github className="w-5 h-5" />
            </motion.button>
          </div>
          
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="flex items-center space-x-2 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors font-medium" data-unique-id="86267e75-aded-4f1c-9b30-5a6217334574" data-file-name="components/header.tsx">
            <Download className="w-4 h-4" />
            <span data-unique-id="38249bee-7b91-4291-9b8f-8e3d4b55e042" data-file-name="components/header.tsx"><span className="editable-text" data-unique-id="f4a89239-8bed-4fa4-bf63-e7635896af76" data-file-name="components/header.tsx">Download Resume</span></span>
          </motion.button>
        </div>
      </div>
    </motion.div>;
}