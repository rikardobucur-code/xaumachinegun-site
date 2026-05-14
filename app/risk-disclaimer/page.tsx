import Link from "next/link";

export default function RiskDisclaimerPage() {
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
          <div className="inline-flex rounded-full border border-red-400/20 bg-red-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-red-300">
            High Risk Warning
          </div>

          <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Risk Disclaimer
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            XAUMachineGUN is a high-risk XAUUSD trading system designed for
            experienced users operating in supervised MetaTrader 5 execution
            environments.
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-2xl font-black text-yellow-400">
                No Financial Advice
              </h2>

              <p className="mt-4 leading-8 text-gray-400">
                All content provided through the XAUMachineGUN website,
                Telegram channel or related communications is intended for
                informational and educational purposes only.
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                Nothing should be interpreted as financial, investment or
                trading advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-yellow-400">
                Trading Risk
              </h2>

              <p className="mt-4 leading-8 text-gray-400">
                Trading leveraged products such as Forex and CFDs involves
                substantial risk and may result in partial or total capital
                loss.
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                XAUUSD (Gold) can experience aggressive volatility,
                unpredictable price movement and elevated margin pressure.
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                Users must fully understand the risks associated with automated
                trading systems before deploying any Expert Advisor on a live
                account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-yellow-400">
                No Profit Guarantees
              </h2>

              <p className="mt-4 leading-8 text-gray-400">
                Past performance does not guarantee future results.
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                XAUMachineGUN does not guarantee profitability, account growth
                or protection from losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-yellow-400">
                User Responsibility
              </h2>

              <p className="mt-4 leading-8 text-gray-400">
                Users remain fully responsible for:
              </p>

              <ul className="mt-4 list-disc space-y-3 pl-6 text-gray-400">
                <li>risk management decisions</li>
                <li>broker selection</li>
                <li>VPS stability and execution conditions</li>
                <li>position sizing and leverage</li>
                <li>monitoring account exposure</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-yellow-400">
                Supervised Usage Only
              </h2>

              <p className="mt-4 leading-8 text-gray-400">
                XAUMachineGUN is designed for supervised execution environments
                and should not be considered a passive or guaranteed income
                solution.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}