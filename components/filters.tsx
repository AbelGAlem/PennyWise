"use client";

import { Suspense } from "react";
import { AccountFilter } from "@/components/account-filter";
import { DateFilter } from "@/components/date-filter";

export const Filters = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-y-2 lg:gap-y-0 lg:gap-x-2">
      <Suspense fallback={<div className="w-40 h-9 bg-white/10 rounded-md animate-pulse" />}>
        <AccountFilter />
      </Suspense>
      <Suspense fallback={<div className="w-40 h-9 bg-white/10 rounded-md animate-pulse" />}>
        <DateFilter />
      </Suspense>
    </div>
  );
};
