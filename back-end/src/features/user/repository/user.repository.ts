import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import {
  CreateUserParams,
  FindUserParams,
  FindUsersParams,
} from 'src/features/user/repository/types';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(createUserPayload: CreateUserParams): Promise<User> {
    const newUser = await this.userModel.create(createUserPayload);

    return newUser;
  }

  async updateUser(userId: string, payload: Partial<User>): Promise<User> {
    return await this.userModel.findOneAndUpdate({ _id: userId }, payload);
  }

  async findUsers(params: FindUsersParams): Promise<User[]> {
    const query: FilterQuery<User> = {};

    if (params.byEmailDomain) {
      query.email = { $regex: new RegExp(`@${params.byEmailDomain}`, 'g') };
    }

    return this.userModel.find(query).exec();
  }

  async findUser(params: FindUserParams): Promise<User | null> {
    const query: FilterQuery<User> = {};

    if (params.id) {
      query._id = params.id;
    }

    if (params.email) {
      query.email = params.email;
    }

    return this.userModel.findOne(query);
  }
}
