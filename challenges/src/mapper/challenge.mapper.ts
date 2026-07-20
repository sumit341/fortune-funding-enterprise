import type {
  ChallengeResponseDto,
} from '../dto/index.js';



export class ChallengeMapper {


  toResponse(
    challenge:any
  ): ChallengeResponseDto {


    return {

      id:
        challenge._id.toString(),

      name:
        challenge.name,

      accountSize:
        challenge.accountSize,

      price:
        challenge.price,

      profitTarget:
        challenge.profitTarget,

      dailyLossLimit:
        challenge.dailyLossLimit,

      maxLossLimit:
        challenge.maxLossLimit,

      leverage:
        challenge.leverage,

      maxTradingDays:
        challenge.maxTradingDays,

      description:
        challenge.description,

      isActive:
        challenge.isActive,

      createdAt:
        challenge.createdAt,

      updatedAt:
        challenge.updatedAt,

    };

  }



  toResponseList(
    challenges:any[]
  ) {


    return challenges.map(
      challenge =>
        this.toResponse(challenge)
    );

  }


}


export const challengeMapper =
  new ChallengeMapper();