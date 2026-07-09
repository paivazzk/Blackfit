import React from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Horarios from './components/Horarios';
import Planos from './components/Planos';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-zinc-950 text-white font-sans min-h-screen selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <Sobre />
      <Horarios />
      <Planos />
      <Footer />
    </div>
  );
}