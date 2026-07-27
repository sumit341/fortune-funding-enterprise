import type {
  Model,
  UpdateQuery,
} from 'mongoose';

export class BaseRepository<T> {
  protected readonly model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(data: Partial<T>) {
    return this.model.create(data);
  }

  async findById(id: string) {
    return this.model.findById(id).exec();
  }

  async find(filter: Record<string, unknown> = {}) {
  return this.model.find(filter).exec();
}
  async update(
    id: string,
    data: UpdateQuery<T>
  ) {
    return this.model.findByIdAndUpdate(
      id,
      data,
      {
        returnDocument: 'after',
      }
    ).exec();
  }

  async delete(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}