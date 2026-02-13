"use client";

import dynamic from "next/dynamic";

const AccountsPageClient = dynamic(
  () => import("./accounts-page-client").then((mod) => mod.AccountsPageClient),
  { ssr: false }
);

export default function AccountsPage() {
  return <AccountsPageClient />;
}
