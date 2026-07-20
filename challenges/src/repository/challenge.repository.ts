import {
  ChallengeModel,
} from '@fortune-funding/database';


import type {
  CreateChallengeDto,
  UpdateChallengeDto,
  ChallengeQueryDto,
} from '../dto/index.js';



export class ChallengeRepository {


  async create(
    data: CreateChallengeDto
  ) {

    return ChallengeModel.create(
      data
    );

  }



  async findById(
    id: string
  ) {

    return ChallengeModel.findById(
      id
    );

  }



  async findByName(
    name: string
  ) {

    return ChallengeModel.findOne({

      name,

    });

  }



  async findMany(
    query: ChallengeQueryDto
  ) {


    const filter:
      Record<string, unknown> = {};



    if(query.search) {

      filter.name = {

        $regex:
          query.search,

        $options:
          'i',

      };

    }



    return ChallengeModel.find(
      filter
    )

    .sort({

      [query.sortBy]:
        query.order === 'asc'
          ? 1
          : -1,

    })

    .skip(

      (query.page - 1)
      *
      query.limit

    )

    .limit(
      query.limit
    );


  }




  async count(
    query: ChallengeQueryDto
  ) {


    const filter:
      Record<string, unknown> = {};



    if(query.search) {

      filter.name = {

        $regex:
          query.search,

        $options:
          'i',

      };

    }



    return ChallengeModel.countDocuments(
      filter
    );


  }





  async update(
    id:string,
    data:UpdateChallengeDto
  ) {


    return ChallengeModel.findByIdAndUpdate(

      id,

      data,

      {
        new:true,
      }

    );


  }





  async delete(
    id:string
  ) {


    return ChallengeModel.findByIdAndDelete(
      id
    );


  }


}



export const challengeRepository =
  new ChallengeRepository();