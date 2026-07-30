export interface Order {
  id: number;
  symbol: string;
  type: "Buy" | "Sell";
  lots: number;
  entry: number;
  exit: number;
  profit: number;
  status: "Open" | "Closed" | "Pending";
  date: string;
}

const ordersData: Order[] = [
  {
    id: 1001,
    symbol: "EUR/USD",
    type: "Buy",
    lots: 1,
    entry: 1.0875,
    exit: 1.0915,
    profit: 420,
    status: "Closed",
    date: "29 Jul 2026",
  },
  {
    id: 1002,
    symbol: "GBP/USD",
    type: "Sell",
    lots: 2,
    entry: 1.2745,
    exit: 1.2700,
    profit: 810,
    status: "Closed",
    date: "29 Jul 2026",
  },
  {
    id: 1003,
    symbol: "XAU/USD",
    type: "Buy",
    lots: 0.5,
    entry: 3382,
    exit: 3371,
    profit: -180,
    status: "Closed",
    date: "28 Jul 2026",
  },
  {
    id: 1004,
    symbol: "NAS100",
    type: "Buy",
    lots: 1,
    entry: 24340,
    exit: 0,
    profit: 0,
    status: "Open",
    date: "Today",
  },
];

export default ordersData;