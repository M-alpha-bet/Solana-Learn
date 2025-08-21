import { LoaderCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function SpeedTransactions() {
  const transactions = [
    { id: 1, amount: 32.48, walletAddy: "432jfhruRb3ur..." },
    { id: 2, amount: 25.02, walletAddy: "54vwNPreu3m4h..." },
    { id: 3, amount: 5.2, walletAddy: "4pvqaM76csVZf6..." },
    { id: 4, amount: 56.0, walletAddy: "hDNai8JzqAYcfrY..." },
    { id: 5, amount: 13.75, walletAddy: "9rNu7wM8Xjf2Tt..." },
    { id: 6, amount: 78.22, walletAddy: "GFT4ruVks8qYtu..." },
    { id: 7, amount: 9.99, walletAddy: "D8mTn1cPr5vRMt..." },
    { id: 8, amount: 45.63, walletAddy: "3kVu8xF9qRhT7..." },
    { id: 9, amount: 27.1, walletAddy: "MA7tK2jCvqRf7..." },
    { id: 10, amount: 18.4, walletAddy: "AeR6m2cjfN8u..." },
    { id: 11, amount: 62.3, walletAddy: "JxTRqA7cLwEd8..." },
    { id: 12, amount: 3.5, walletAddy: "98LcQxuR7dF9W..." },
    { id: 13, amount: 90.0, walletAddy: "Tz3RQw7ybUE2w..." },
    { id: 14, amount: 11.11, walletAddy: "ZqYu9RbfxEmv0p..." },
    { id: 15, amount: 132.43, walletAddy: "4B3WhnEuGPH5l..." },
  ];

  const [queue] = useState(transactions);
  const [current, setCurrent] = useState<typeof transactions>([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setCurrent((prev) => {
        const nextTx = queue[index % queue.length];
        index++;

        return [...prev.slice(-2), { ...nextTx, key: crypto.randomUUID() }];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [queue]);

  const variants = {
    initial: {
      y: 50,
      transition: { duration: 0.4 },
    },
    animate: {
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      x: 200,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="absolute top-[8rem] right-[7rem] max-w-[25rem] flex flex-col gap-2">
      <AnimatePresence mode="popLayout">
        {current.map((tx, i) => {
          const status =
            i === current.length - 1
              ? "Pending"
              : i === current.length - 2
              ? "Transfer"
              : "Complete";

          const badgeColor =
            status === "Pending"
              ? "bg-yellow"
              : status === "Transfer"
              ? "bg-blue"
              : "bg-green";

          const borderColor =
            status === "Complete" ? "border-l-12 border-yellow" : "";

          return (
            <motion.div
              key={tx.id}
              layout="position"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              className={`flex items-center justify-between gap-6 px-5 py-4 rounded-[1rem] shadow-sm bg-white transition-all ${borderColor} ${
                status === "Pending"
                  ? "opacity-40 mx-5"
                  : status === "Transfer"
                  ? "opacity-60 mx-2"
                  : "opacity-100"
              }`}
            >
              <div>
                <p className="text-[1rem] leading-5 transaction-text">
                  Sending
                  <img
                    className="inline-block px-2 align-middle size-auto"
                    src="/icons/speed-features/solanaLogoMark.png"
                    alt="Solana"
                  />
                  {tx.amount} SOL
                </p>
                <p className="text-[1.25rem] leading-7 transaction-text text-black2!">
                  {tx.walletAddy}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className={`px-4 py-1 rounded-[2.375rem] ${badgeColor} text-white!`}
                >
                  <p
                    className={`transaction-text  ${
                      status === "Pending" ? "text-black2!" : "text-white!"
                    }`}
                  >
                    {status}
                  </p>
                </div>
                <div>
                  {status === "Complete" ? (
                    <img
                      src="/icons/speed-features/Loader.png"
                      alt="Complete"
                    />
                  ) : (
                    <LoaderCircle className="size-8 animate-spin" />
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
