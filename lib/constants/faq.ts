export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is PennyWise free to use?",
    answer:
      "You can start for free and track spending, budgets, and transactions. Paid plans (if enabled) typically add advanced insights and automation.",
  },
  {
    question: "Do you store my bank password?",
    answer:
      "No. Bank connections are handled via secure providers (e.g., Plaid). We never store your bank login credentials and we can't move money.",
  },
  {
    question: "How does categorization work?",
    answer:
      "Transactions are automatically categorized based on merchant and description. You can edit categories, create rules, and keep your budgets accurate over time.",
  },
  {
    question: "Can I import transactions from a CSV?",
    answer:
      "Yes. If you don't want to connect a bank, you can upload a CSV export and still get budgeting, summaries, and reporting.",
  },
  {
    question: "What can I track besides spending?",
    answer:
      "Track income, budgets, recurring bills, savings goals, and your net worth across accounts so you always know where you stand.",
  },
];
