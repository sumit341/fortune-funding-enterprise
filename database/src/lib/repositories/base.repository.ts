import type {
  Model,
  HydratedDocument,
  UpdateQuery,
} from 'mongoose';


export abstract class BaseRepository<T> {

  constructor(
    protected readonly model: Model<T>
  ) {}


  async findById(
    id: string
  ) {

    return this.model
      .findById(id)
      .exec();

  }


  async findOne(
    filter: Record<string, unknown>
  ) {

    return this.model
      .findOne(filter)
      .exec();

  }


  async findMany(
    filter: Record<string, unknown> = {}
  ) {

    return this.model
      .find(filter)
      .exec();

  }


  async create(
    data: Partial<T>
  ): Promise<HydratedDocument<T>> {

    return this.model
      .create(data);

  }


  async update(
    id: string,
    data: UpdateQuery<T>
  ) {

    return this.model
      .findByIdAndUpdate(
        id,
        data,
        {
          new:true,
        }
      )
      .exec();

  }


  async delete(
    id:string
  ) {

    return this.model
      .findByIdAndDelete(id)
      .exec();

  }


  async count(
    filter: Record<string,unknown> = {}
  ){

    return this.model
      .countDocuments(filter)
      .exec();

  }

}