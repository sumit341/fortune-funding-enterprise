export interface Challenge {
  id: number;
  name: string;
  price: number;
  accountSize: number;
  profitTarget: string;
  maxLoss: string;
  dailyLoss: string;
}

const challengeData: Challenge[] = [
  {
    id: 1,
    name: "Starter",
    price: 49,
    accountSize: 5000,
    profitTarget: "8%",
    maxLoss: "10%",
    dailyLoss: "5%",
  },
  {
    id: 2,
    name: "Professional",
    price: 99,
    accountSize: 10000,
    profitTarget: "8%",
    maxLoss: "10%",
    dailyLoss: "5%",
  },
  {
    id: 3,
    name: "Elite",
    price: 199,
    accountSize: 25000,
    profitTarget: "8%",
    maxLoss: "10%",
    dailyLoss: "5%",
  },
];

export default challengeData;