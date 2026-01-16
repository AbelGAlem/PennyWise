"use client";

import { useMemo, useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants/faq";

export default function FAQ() {
  const items = useMemo(() => FAQ_ITEMS, []);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-sm text-white/60 sm:text-base">
            Quick answers about bank connections, privacy, and how PennyWise helps
            you track your finances.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/2 backdrop-blur-xl">
          <div className="divide-y divide-white/10">
            {items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <button
                  key={item.question}
                  type="button"
                  onClick={() => setOpenIndex((v) => (v === index ? null : index))}
                  className="w-full px-6 py-5 text-left transition hover:bg-white/3 sm:px-8"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="text-base font-medium text-white/90">
                        {item.question}
                      </div>
                      <div
                        className={
                          "mt-3 text-sm leading-6 text-white/55 " +
                          (isOpen ? "block" : "hidden")
                        }
                      >
                        {item.answer}
                      </div>
                    </div>

                    <span
                      className={
                        "mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/3 text-white/70 transition " +
                        (isOpen
                          ? "rotate-45 text-emerald-300"
                          : "rotate-0")
                      }
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
