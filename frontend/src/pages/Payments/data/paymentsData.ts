export interface Payment {
  id: number;
  plan: string;
  amount: number;
  method: string;
  status: "Paid" | "Pending" | "Failed";
  date: string;
}

const paymentsData: Payment[] = [
  {
    id: 1,
    plan: "Starter Challenge",
    amount: 49,
    method: "Stripe",
    status: "Paid",
    date: "29 Jul 2026",
  },
  {
    id: 2,
    plan: "Professional Challenge",
    amount: 99,
    method: "Card",
    status: "Pending",
    date: "28 Jul 2026",
  },
  {
    id: 3,
    plan: "Elite Challenge",
    amount: 199,
    method: "UPI",
    status: "Failed",
    date: "25 Jul 2026",
  },
];

export default paymentsData;