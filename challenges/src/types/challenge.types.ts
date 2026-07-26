import {
  ChallengePhase,
} from '../enums/challenge-phase.js';

import {
  ChallengeStatus,
} from '../enums/challenge-status.js';

import {
  ChallengeType,
} from '../enums/challenge-type.js';

export interface ChallengeRules {

  accountSize: number;

  profitTarget: number;

  dailyLossLimit: number;

  maxLossLimit: number;

  leverage: number;

  minimumTradingDays: number;

  maximumTradingDays: number;

}

export interface Challenge {

  id: string;

  name: string;

  type: ChallengeType;

  phase: ChallengePhase;

  status: ChallengeStatus;

  rules: ChallengeRules;

  createdAt: Date;

  updatedAt: Date;

}