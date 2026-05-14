"use client";

import { motion } from "framer-motion";

const myfxbookUrl =
  "https://www.myfxbook.com/portfolio/xaumachinegun-by-iamrika/12041054";

const telegramUrl = "https://t.me/XAUMachineGUN";

const features = [
  {
    title: "Breakout Trap Entries",
    text: "Detects aggressive gold moves and positions recovery logic around volatility spikes.",
  },
  {
    title: "Fibonacci Averaging Engine",
    text: "Uses structured recovery spacing instead of random grid expansion.",
  },
  {
    title: "Dynamic ATR Distance System",
    text: "Adapts recovery spacing to current XAUUSD volatility conditions.",
  },
  {
    title: "Trend & Range Adaptive Logic",
    text: "Adjusts behavior depending on ranging or trending market structure.",
  },
  {
    title: "Server-Side Basket SL Protection",
    text: "Basket-level exposure protection for extreme market conditions.",
  },
  {
    title: "Supervised Trading Workflow",
    text: "Built for monitored execution environments, not careless set-and-forget usage.",
  },
];

const presets = [
  {
    name: "LOW RISK",
    label: "Conservative",
    text: "Smoother drawdown profile focused on stability and durability.",
    balance: "Best for larger balances and lower exposure.",
  },
  {
    name: "MEDIUM RISK",
    label: "Recommended",
    text: "Balanced aggressive configuration for serious live deployment.",
    balance: "Requires strong margin and active monitoring.",
  },
  {
    name: "HIGH RISK",
    label: "Experienced Only",
    text: "Aggressive exposure profile with significant drawdown potential.",
    balance: "High risk tolerance required.",
  },
];

const myfxbookStats = [
  ["Gain", "+81.19%"],
  ["Abs. Gain", "+79.02%"],
  ["Profit", "$7,902.33"],
  ["Balance", "$15,902.33"],
  ["Equity", "$15,884.93"],
  ["Drawdown", "53.17%"],
];

const accountDetails = [
  ["Broker", "RoboForex"],
  ["Platform", "MetaTrader 5"],
  ["Leverage", "1:1000"],
  ["Market", "XAUUSD"],
  ["Deposits", "$10,000"],
  ["Withdrawals", "$2,000"],
];

const standardSetupPoints = [
  ["Account Type", "Standard account"],
  ["Recommended Capital", "$5,000–$10,000+"],
  ["Best For", "Main serious deployment"],
  ["Market", "XAUUSD"],
];

const centSetupPoints = [
  ["Account Type", "Cent account"],
  ["Minimum Deposit", "$100 USD / 10,000 USC"],
  ["Recommended Balance", "50,000 USC+"],
  ["Best For", "Lower-capital start"],
];

const faqs = [
  {
    q: "Is XAUMachineGUN fully automated?",
    a: "It is an Expert Advisor for MetaTrader 5, but it is designed for supervised usage with proper risk control.",
  },
  {
    q: "Does XAUMachineGUN guarantee profits?",
    a: "No. No trading system can guarantee profits. Losses and significant drawdowns are possible, especially during strong volatility.",
  },
  {
    q: "Which market is it built for?",
    a: "XAUMachineGUN is built specifically around XAUUSD / Gold volatility behavior.",
  },
  {
    q: "Is a VPS recommended?",
    a: "Yes. A stable VPS is strongly recommended for continuous execution and reduced connection issues.",
  },
  {
    q: "Can I start with a smaller balance?",
    a: "Yes. Cent accounts can lower the entry barrier, but they do not remove risk. Smaller balances can still be affected quickly during volatile XAUUSD movement.",
  },
  {
    q: "How can I request access?",
    a: "Access requests are handled through the official XAUMachineGUN Telegram channel.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020409] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-250px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[130px] md:h-[700px] md:w-[700px] md:blur-[160px]" />
        <div className="absolute bottom-[-300px] right-[-200px] h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[140px] md:h-[700px] md:w-[700px] md:blur-[180px]" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:py-4">
          <img
            src="/logo.png"
            alt="XAUMachineGUN logo"
            className="h-9 w-auto max-w-[155px] object-contain sm:h-11 sm:max-w-[190px] md:h-12 md:max-w-[220px]"
          />

          <nav className="hidden items-center gap-7 text-sm text-gray-400 md:flex">
            <a href="#results" className="hover:text-yellow-400">
              Results
            </a>
            <a href="#interface" className="hover:text-yellow-400">
              Interface
            </a>
            <a href="#features" className="hover:text-yellow-400">
              Features
            </a>
            <a href="#setup" className="hover:text-yellow-400">
              Setup
            </a>
            <a href="#presets" className="hover:text-yellow-400">
              Presets
            </a>
            <a href="#faq" className="hover:text-yellow-400">
              FAQ
            </a>
          </nav>

          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full border border-yellow-400/30 px-3 py-2 text-xs font-semibold text-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-black sm:px-5 sm:text-sm"
          >
            Join Telegram
          </a>
        </div>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-4 pb-20 pt-14 sm:px-6 sm:pt-20 md:pb-32 md:pt-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center xl:gap-16">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-yellow-400 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
              XAUUSD Basket Recovery EA / MetaTrader 5
            </div>

            <h1 className="max-w-5xl text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
              XAUMachineGUN
              <span className="block bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent">
                Advanced Gold Trading Logic
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg md:mt-8 md:text-xl md:leading-9">
              Advanced MetaTrader 5 Expert Advisor engineered for supervised
              XAUUSD basket recovery trading with adaptive volatility protection,
              structured exposure logic and serious risk awareness.
            </p>

            <div className="mt-6 inline-flex rounded-full border border-red-400/20 bg-red-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-300">
              High Risk / Experienced Traders Only
            </div>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4 md:mt-10">
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-yellow-400 px-7 py-4 text-center font-black text-black shadow-2xl shadow-yellow-500/20 transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
              >
                Request Access
              </a>
              <a
                href={myfxbookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-center font-black text-white transition-all duration-300 hover:scale-105 hover:border-yellow-400/40 hover:bg-yellow-400/10"
              >
                View Myfxbook
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3 sm:gap-4 md:mt-14">
              {[
                ["Primary Market", "XAUUSD"],
                ["Platform", "MT5"],
                ["Access", "Telegram"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-white/[0.06] sm:p-5"
                >
                  <div className="text-[10px] uppercase tracking-[0.22em] text-gray-500 sm:text-xs sm:tracking-[0.25em]">
                    {a}
                  </div>
                  <div className="mt-2 font-bold text-yellow-400 sm:mt-3">
                    {b}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-yellow-400/20 blur-3xl md:rounded-[2.5rem]" />
            <div className="relative overflow-hidden rounded-[2rem] border border-yellow-400/20 bg-[#080b12]/90 shadow-2xl shadow-yellow-500/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-yellow-500/20 md:rounded-[2.5rem]">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-4 sm:px-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="text-right text-[10px] text-gray-500 sm:text-sm">
                  XAUMachineGUN SYSTEM PANEL
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5">
                    <div className="text-xs uppercase tracking-[0.25em] text-gray-500">
                      Status
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />
                      <div className="text-xl font-black text-green-400 sm:text-2xl">
                        LIVE
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5">
                    <div className="text-xs uppercase tracking-[0.25em] text-gray-500">
                      Market
                    </div>
                    <div className="mt-3 text-xl font-black text-yellow-400 sm:text-2xl">
                      XAUUSD
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-black/50 p-4 sm:rounded-[2rem] sm:p-5">
                  <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.25em] text-gray-500">
                        Basket Engine
                      </div>
                      <div className="mt-2 text-xl font-black sm:text-2xl">
                        Recovery Structure
                      </div>
                    </div>
                    <div className="w-fit rounded-full bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-400">
                      ACTIVE
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ["Entry Logic", "Breakout Trap"],
                      ["Recovery Type", "Fibonacci"],
                      ["Distance Model", "ATR Adaptive"],
                      ["Protection", "Basket SL"],
                      ["Execution", "Supervised"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                      >
                        <span className="text-xs text-gray-500 sm:text-sm">
                          {label}
                        </span>
                        <span className="text-right text-xs font-bold text-gray-200 sm:text-sm">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-4 sm:rounded-[2rem] sm:p-5">
                  <div className="text-xs uppercase tracking-[0.25em] text-yellow-400">
                    Risk Engine
                  </div>
                  <div className="mt-2 text-lg font-black sm:text-xl">
                    Adaptive Volatility Protection
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    Built for controlled exposure, monitored execution and
                    basket-level risk awareness.
                  </p>
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-black/50 p-4 sm:rounded-[2rem] sm:p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-sm text-gray-500">System Preview</div>
                    <div className="text-sm font-bold text-yellow-400">
                      LIVE LOGIC
                    </div>
                  </div>

                  <div className="relative h-44 overflow-hidden rounded-2xl bg-white/[0.03] sm:h-56">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.12),transparent_70%)]" />
                    <svg
                      viewBox="0 0 600 220"
                      className="absolute inset-0 h-full w-full"
                    >
                      <path
                        d="M0 190 C40 170, 60 160, 100 150 C140 140, 180 120, 220 125 C260 130, 300 90, 340 100 C380 110, 420 70, 460 60 C500 50, 540 30, 600 10"
                        fill="none"
                        stroke="#facc15"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        id="results"
        className="relative z-10 border-y border-white/10 bg-white/[0.03] px-4 py-20 sm:px-6 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
            <div>
              <div className="inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-green-400 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
                Myfxbook Public Portfolio
              </div>

              <h2 className="mt-6 text-3xl font-black sm:text-4xl md:text-6xl">
                Live Verified Results
              </h2>

              <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg md:mt-6">
                XAUMachineGUN is connected to a public Myfxbook portfolio with
                live account statistics, broker details and transparent
                performance tracking.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
                {accountDetails.map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5"
                  >
                    <div className="text-xs uppercase tracking-[0.25em] text-gray-500">
                      {label}
                    </div>
                    <div className="mt-3 text-lg font-black text-gray-100">
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
                <a
                  href={myfxbookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-full bg-yellow-400 px-7 py-4 font-black text-black shadow-2xl shadow-yellow-500/20 transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
                >
                  Open Myfxbook Portfolio
                </a>
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 font-black text-white transition-all duration-300 hover:scale-105 hover:border-yellow-400/40 hover:bg-yellow-400/10"
                >
                  Join Telegram
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-yellow-400/20 bg-black/50 p-4 shadow-2xl shadow-yellow-500/10 sm:p-6 md:rounded-[2.5rem]">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-gray-500">
                    Account Snapshot
                  </div>
                  <div className="mt-2 text-xl font-black sm:text-2xl">
                    XAUMachineGUN by iamrika
                  </div>
                </div>
                <div className="rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-black text-green-400">
                  VERIFIED
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {myfxbookStats.map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5"
                  >
                    <div className="text-xs uppercase tracking-[0.25em] text-gray-500">
                      {label}
                    </div>
                    <div
                      className={`mt-3 text-2xl font-black sm:text-3xl ${
                        label === "Drawdown"
                          ? "text-red-400"
                          : "text-green-400"
                      }`}
                    >
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-4 sm:rounded-[2rem] sm:p-5">
                <div className="text-xs uppercase tracking-[0.25em] text-yellow-400">
                  Important Note
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-300">
                  Performance is live and aggressive. Drawdown must be treated
                  seriously. This EA is built for supervised trading, not
                  careless set-and-forget usage. Past performance does not
                  guarantee future results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        id="interface"
        className="relative z-10 px-4 py-20 sm:px-6 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-yellow-400">
                Real Environment
              </div>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-6xl">
                Live MT5 Interface
              </h2>
              <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg md:mt-6">
                XAUMachineGUN running in a real MetaTrader 5 environment with
                active XAUUSD execution and monitored basket management.
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-yellow-400/20 bg-black/40 shadow-2xl shadow-yellow-500/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-yellow-500/20 sm:rounded-[2rem]">
              <img
                src="/hero.png"
                alt="XAUMachineGUN MT5"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        id="features"
        className="relative z-10 px-4 py-20 sm:px-6 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            Core Architecture
          </div>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-6xl">
            How XAUMachineGUN Works
          </h2>

          <div className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/30 hover:bg-white/[0.05] sm:rounded-[2rem] sm:p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10 font-black text-yellow-400">
                  +
                </div>
                <h3 className="text-xl font-black sm:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-4 leading-8 text-gray-400 sm:mt-5">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        id="setup"
        className="relative z-10 border-y border-white/10 bg-white/[0.03] px-4 py-20 sm:px-6 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
            <div>
              <div className="inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-yellow-400 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
                Recommended Account Setup
              </div>

              <h2 className="mt-6 text-3xl font-black sm:text-4xl md:text-6xl">
                Standard or Cent Deployment
              </h2>

              <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg md:mt-6">
                XAUMachineGUN can be deployed on standard accounts with larger
                capital or on cent accounts for traders who want a lower-capital
                starting point. Standard accounts remain the preferred serious
                deployment option, while cent accounts can be useful for smaller
                exposure, testing and gradual scaling.
              </p>

              <div className="mt-6 rounded-[1.5rem] border border-red-400/20 bg-red-400/10 p-5 sm:rounded-[2rem]">
                <div className="text-xs font-black uppercase tracking-[0.25em] text-red-300">
                  Risk Reminder
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-300">
                  Cent accounts reduce the capital required to start, but they
                  do not remove trading risk. 10,000 USC is only the minimum
                  entry point. For better stability and risk control, 50,000 USC
                  or more is strongly recommended.
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[2rem] border border-yellow-400/20 bg-black/50 p-4 shadow-2xl shadow-yellow-500/10 sm:p-6 md:rounded-[2.5rem]">
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-gray-500">
                    Primary Setup
                  </div>
                  <div className="mt-2 text-2xl font-black">
                    Standard Account Deployment
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                  {standardSetupPoints.map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                    >
                      <div className="text-xs uppercase tracking-[0.25em] text-gray-500">
                        {label}
                      </div>
                      <div className="mt-3 text-lg font-black text-yellow-400">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-black/40 p-4 sm:p-6 md:rounded-[2.5rem]">
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-gray-500">
                    Alternative Setup
                  </div>
                  <div className="mt-2 text-2xl font-black">
                    Cent Account Deployment
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                  {centSetupPoints.map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                    >
                      <div className="text-xs uppercase tracking-[0.25em] text-gray-500">
                        {label}
                      </div>
                      <div className="mt-3 text-lg font-black text-yellow-400">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 sm:rounded-[2rem]">
                  <div className="text-xs uppercase tracking-[0.25em] text-gray-500">
                    Why Cent Accounts?
                  </div>
                  <p className="mt-3 text-sm leading-7 text-gray-300">
                    Cent accounts allow users to trade with smaller real-money
                    exposure while keeping the account balance displayed in
                    cents. This can be useful for testing, learning execution
                    behavior and reducing the capital required for initial
                    deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        id="presets"
        className="relative z-10 px-4 py-20 sm:px-6 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            Risk Profiles
          </div>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-6xl">
            Professional Risk Presets
          </h2>

          <div className="mt-10 grid gap-4 sm:mt-14 md:gap-6 xl:grid-cols-3">
            {presets.map((preset) => (
              <div
                key={preset.name}
                className="rounded-[1.5rem] border border-yellow-400/15 bg-black/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40 sm:rounded-[2rem] sm:p-8"
              >
                <div className="text-sm uppercase tracking-[0.25em] text-gray-500">
                  {preset.label}
                </div>
                <div className="mt-4 text-2xl font-black text-yellow-400 sm:text-3xl">
                  {preset.name}
                </div>
                <p className="mt-5 leading-8 text-gray-400 sm:mt-6">
                  {preset.text}
                </p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-gray-300 sm:mt-8">
                  {preset.balance}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        id="faq"
        className="relative z-10 px-4 py-20 sm:px-6 md:py-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              FAQ
            </div>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-6xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-4 sm:mt-14 sm:space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-[1.5rem] border border-white/10 bg-black/40 p-6 transition-all duration-300 hover:border-yellow-400/30 sm:rounded-[2rem] sm:p-8"
              >
                <h3 className="text-lg font-bold text-yellow-400 sm:text-xl">
                  {faq.q}
                </h3>
                <p className="mt-4 leading-8 text-gray-400 sm:mt-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        id="access"
        className="relative z-10 px-4 py-20 text-center sm:px-6 md:py-28"
      >
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-yellow-400/20 bg-gradient-to-b from-yellow-400/10 to-transparent p-6 sm:p-10 md:rounded-[3rem] md:p-12">
          <div className="text-xs uppercase tracking-[0.25em] text-yellow-400 sm:text-sm sm:tracking-[0.35em]">
            Official Access Channel
          </div>
          <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl md:mt-6 md:text-7xl">
            Join XAUMachineGUN on Telegram.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg md:mt-8">
            Follow live updates, Myfxbook performance, development progress and
            future access announcements through the official Telegram channel.
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4 md:mt-10">
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full bg-yellow-400 px-8 py-4 font-black text-black shadow-2xl shadow-yellow-500/20 transition-all duration-300 hover:scale-105 hover:bg-yellow-300 sm:px-10 sm:py-5 sm:text-lg"
            >
              Join Telegram Channel
            </a>
            <a
              href={myfxbookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 font-black text-white transition-all duration-300 hover:scale-105 hover:border-yellow-400/40 hover:bg-yellow-400/10 sm:px-10 sm:py-5 sm:text-lg"
            >
              View Live Results
            </a>
          </div>
        </div>
      </motion.section>

      <section className="relative z-10 border-t border-white/10 px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm leading-7 text-gray-500 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-bold text-gray-300">Risk Warning:</span>{" "}
            Trading leveraged products such as Forex and CFDs involves
            substantial risk and may not be suitable for all investors. Past
            performance does not guarantee future results.
          </div>

          <div className="flex flex-wrap gap-5">
            <a href="/risk-disclaimer" className="hover:text-yellow-400">
              Risk Disclaimer
            </a>

            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              Telegram
            </a>
            <a
              href={myfxbookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              Myfxbook
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}