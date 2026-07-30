export interface Order {
  id: number;
  symbol: string;
  type: "BUY" | "SELL";
  status: "OPEN" | "CLOSED";
  lot: number;
  openPrice: number;
  closePrice?: number;
  pnl: number;
}

const orders: Order[] = [
  {
    id: 1001,
    symbol: "EUR/USD",
    type: "BUY",
    status: "OPEN",
    lot: 1,
    openPrice: 1.1045,
    pnl: 120,
  },
  {
    id: 1002,
    symbol: "XAU/USD",
    type: "SELL",
    status: "CLOSED",
    lot: 0.5,
    openPrice: 2365.5,
    closePrice: 2358.3,
    pnl: 360,
  },
  {
    id: 1003,
    symbol: "GBP/USD",
    type: "BUY",
    status: "CLOSED",
    lot: 2,
    openPrice: 1.2765,
    closePrice: 1.2740,
    pnl: -140,
  },
];

export default orders;