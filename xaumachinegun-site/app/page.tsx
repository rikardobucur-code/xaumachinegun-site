"use client";

import { motion } from "framer-motion";
import {
  Shield,
  TrendingUp,
  Settings,
  Zap,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Lock,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full mb-6">
              <Zap size={16} />
              XAUUSD Expert Advisor
            </div>

            <h1 className="text-5xl md:text-7xl font-bold">
              XAUMachineGUN
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl leading-8">
              Expert Advisor pentru MetaTrader 5 construit pentru
              tranzacționare agresivă pe gold, cu logică de basket,
              averaging și management configurabil al riscului.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-yellow-500 text-black font-semibold px-8 py-4 rounded-2xl hover:bg-yellow-400 transition">
                Cere acces
              </button>

              <button className="border border-gray-700 px-8 py-4 rounded-2xl hover:bg-neutral-900 transition">
                Vezi detalii
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <p className="text-gray-400 text-sm">EA Status</p>
                  <h2 className="text-2xl font-bold">
                    Live Ready
                  </h2>
                </div>

                <div className="bg-green-500/10 text-green-400 p-3 rounded-2xl">
                  <CheckCircle />
                </div>
              </div>

              <div className="space-y-4">
                {[
                  ["Platform", "MetaTrader 5"],
                  ["Symbol", "XAUUSD"],
                  ["Style", "Basket Trading"],
                  ["Risk", "Configurable"],
                  ["Mode", "Aggressive"],
                ].map(([a, b]) => (
                  <div
                    key={a}
                    className="flex justify-between bg-black/40 rounded-2xl px-4 py-3"
                  >
                    <span className="text-gray-400">{a}</span>
                    <span className="font-semibold">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-yellow-400 uppercase text-sm tracking-widest font-semibold">
              Features
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Ce face XAUMachineGUN
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <TrendingUp />,
                title: "Basket Trading",
                text: "Gestionează mai multe poziții într-un singur basket.",
              },
              {
                icon: <Settings />,
                title: "Configurabil",
                text: "Lot, multiplier, TP și parametri modificabili.",
              },
              {
                icon: <BarChart3 />,
                title: "ATR Logic",
                text: "Poate adapta distanțele în funcție de volatilitate.",
              },
              {
                icon: <Shield />,
                title: "Risk Control",
                text: "Include equity stop și management al profitului.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6"
              >
                <div className="bg-yellow-500/10 text-yellow-400 p-3 rounded-2xl inline-flex mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-7">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="max-w-5xl mx-auto bg-yellow-500/10 border border-yellow-500/20 rounded-3xl p-8">
          <div className="flex gap-5">
            <div className="bg-yellow-500/10 text-yellow-300 p-3 rounded-2xl h-fit">
              <AlertTriangle />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Avertisment de risc
              </h2>

              <p className="text-gray-300 mt-4 leading-8">
                Tranzacționarea pe XAUUSD implică risc ridicat.
                Expert Advisor-ul nu garantează profit și trebuie
                folosit responsabil, preferabil testat pe demo înainte.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-16">
        <div className="max-w-4xl mx-auto bg-neutral-900 border border-neutral-800 rounded-3xl p-10 text-center">
          <div className="bg-yellow-500/10 text-yellow-400 inline-flex p-4 rounded-2xl mb-6">
            <Lock />
          </div>

          <h2 className="text-4xl font-bold">
            Vrei acces la XAUMachineGUN?
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-8">
            Primește acces demo, setări recomandate și viitoare
            actualizări ale Expert Advisor-ului.
          </p>

          <button className="mt-8 bg-yellow-500 text-black font-semibold px-8 py-4 rounded-2xl hover:bg-yellow-400 transition">
            Contactează-mă
          </button>
        </div>
      </section>
    </div>
  );
}