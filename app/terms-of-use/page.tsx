import Link from "next/link";

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-[#020409] px-4 py-20 text-white sm:px-6 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex rounded-full border border-yellow-400/30 px-5 py-2 text-sm font-semibold text-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-black"
          >
            ← Back to Homepage
          </Link>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/30 md:p-12">
          <div className="inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-yellow-400">
            Terms & Access Conditions
          </div>

          <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Terms of Use
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            These Terms of Use apply to the XAUMachineGUN website, Telegram
            channel, software access, updates, communications and any related
            materials provided under the XAUMachineGUN name.
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-2xl font-black text-yellow-400">
                Software Access
              </h2>

              <p className="mt-4 leading-8 text-gray-400">
                XAUMachineGUN is provided as access to trading software,
                settings, related information and supervised deployment guidance.
                Access may be granted manually and may require approval.
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                Access is not guaranteed and may be refused, delayed, suspended
                or revoked if misuse, abuse, unauthorized sharing or violation
                of these terms is detected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-yellow-400">
                No Financial Advice
              </h2>

              <p className="mt-4 leading-8 text-gray-400">
                XAUMachineGUN does not provide financial, investment or trading
                advice. All information shared through the website, Telegram
                channel or direct communication is for educational and
                informational purposes only.
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                Users are fully responsible for their own trading decisions,
                account risk, broker choice, leverage, VPS setup and capital
                exposure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-yellow-400">
                No Profit Guarantees
              </h2>

              <p className="mt-4 leading-8 text-gray-400">
                XAUMachineGUN does not guarantee profits, account growth,
                recovery from losses or protection from drawdown.
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                Past performance, public Myfxbook results, screenshots,
                Telegram updates or historical trading data do not guarantee
                future performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-yellow-400">
                High-Risk Trading
              </h2>

              <p className="mt-4 leading-8 text-gray-400">
                Trading XAUUSD, Forex, CFDs or leveraged products involves
                substantial risk and may result in partial or total capital
                loss.
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                XAUMachineGUN is intended for experienced users who understand
                automated trading, basket exposure, volatility, margin pressure
                and drawdown risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-yellow-400">
                Supervised Usage
              </h2>

              <p className="mt-4 leading-8 text-gray-400">
                XAUMachineGUN is designed for supervised trading environments.
                It should not be treated as a passive income system, guaranteed
                income product or careless set-and-forget solution.
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                Users must monitor their accounts, understand their exposure and
                take responsibility for stopping, adjusting or removing the
                software when necessary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-yellow-400">
                Licensing & Account Protection
              </h2>

              <p className="mt-4 leading-8 text-gray-400">
                XAUMachineGUN may use account-lock licensing, manual approval,
                access restrictions or other protection systems to prevent
                unauthorized distribution or misuse.
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                Users may not copy, resell, share, reverse engineer, distribute
                or provide unauthorized access to XAUMachineGUN files, settings,
                logic or related materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-yellow-400">
                Payments & Refunds
              </h2>

              <p className="mt-4 leading-8 text-gray-400">
                If paid access is offered, payment terms will be communicated
                before access is granted.
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                Due to the digital nature of the product, payments may be
                non-refundable once software access, files, settings or private
                onboarding information have been delivered.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-yellow-400">
                Changes to Access or Terms
              </h2>

              <p className="mt-4 leading-8 text-gray-400">
                XAUMachineGUN may update, modify, pause, restrict or discontinue
                access, features, pricing, onboarding requirements or these
                terms at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-yellow-400">
                Contact
              </h2>

              <p className="mt-4 leading-8 text-gray-400">
                Official communication and access requests are handled through
                the XAUMachineGUN Telegram channel.
              </p>

              <div className="mt-6">
                <a
                  href="https://t.me/XAUMachineGUN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-yellow-400 px-6 py-3 font-black text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
                >
                  Open Telegram
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}