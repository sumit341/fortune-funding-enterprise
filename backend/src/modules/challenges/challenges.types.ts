import type {
  Request,
} from 'express';


export interface ChallengeRequest
  extends Request {

  body: {

    name: string;

    accountSize: number;

    price: number;

    profitTarget: number;

    dailyLossLimit: number;

    maxLossLimit: number;

    leverage: number;

    maxTradingDays: number;

    description?: string;

    isActive?: boolean;

  };

}