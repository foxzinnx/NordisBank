'use client'; // Se estiver usando App Router

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      // Configurações opcionais do AOS
      once: true, 
      duration: 1000, 
      easing: 'ease-in-out', // tipo de easing
    });
  }, []);

  return null;
}