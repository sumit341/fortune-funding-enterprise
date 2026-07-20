export interface ChallengeResponseDto {

  id: string;

  name: string;

  accountSize: number;

  price: number;

  profitTarget: number;

  dailyLossLimit: number;

  maxLossLimit: number;

  leverage: number;

  maxTradingDays: number;

  description?: string;

  isActive: boolean;

  createdAt: Date;

  updatedAt: Date;

}