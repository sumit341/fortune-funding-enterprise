import type {
  CreateChallengeDto,
  UpdateChallengeDto,
  ChallengeQueryDto,
} from '../dto/index.js';


import {
  challengeRepository,
} from '../repository/index.js';


import {
  challengeMapper,
} from '../mapper/index.js';


import {
  ChallengeNotFoundError,
  ChallengeAlreadyExistsError,
} from '../errors/index.js';



export class ChallengeService {



async create(
  dto:CreateChallengeDto
) {


  const existing =
    await challengeRepository.findByName(
      dto.name
    );


  if(existing){

    throw new ChallengeAlreadyExistsError();

  }



  const challenge =
    await challengeRepository.create(
      dto
    );


  return challengeMapper.toResponse(
    challenge
  );


}





async findById(
 id:string
){


 const challenge =
   await challengeRepository.findById(
     id
   );


 if(!challenge){

   throw new ChallengeNotFoundError();

 }



 return challengeMapper.toResponse(
   challenge
 );


}






async update(
 id:string,
 dto:UpdateChallengeDto
){


 const challenge =
   await challengeRepository.update(
     id,
     dto
   );



 if(!challenge){

   throw new ChallengeNotFoundError();

 }



 return challengeMapper.toResponse(
   challenge
 );


}







async delete(
 id:string
){


 const challenge =
   await challengeRepository.delete(
     id
   );



 if(!challenge){

   throw new ChallengeNotFoundError();

 }



 return {

   success:true,

 };


}







async list(
 query:ChallengeQueryDto
){


 const challenges =
   await challengeRepository.findMany(
     query
   );


 const total =
   await challengeRepository.count(
     query
   );



 return {


   items:

    challengeMapper.toResponseList(
      challenges
    ),



   pagination:{


    page:
      query.page,


    limit:
      query.limit,


    total,


    totalPages:

      Math.ceil(
        total /
        query.limit
      ),


   },


 };

}



}



export const challengeService =
 new ChallengeService();