import api from "./axios";

export interface JournalEntry {
  id: string;
  symbol: string;
  side: "buy" | "sell";
  profit: number;
  notes: string;
  createdAt: string;
}

export interface JournalData {
  totalTrades: number;
  winningTrades: number;
  losingTrades: number;
  entries: JournalEntry[];
}

export const getJournalApi = () =>
  api.get<JournalData>("/journal");