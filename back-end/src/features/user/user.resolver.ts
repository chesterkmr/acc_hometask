import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateUserDto } from 'src/features/user/dto/create-user.dto';
import { GetUsersDto } from 'src/features/user/dto/get-users.dto';
import { UserRepository } from 'src/features/user/repository/user.repository';
import { AuthGuard } from 'src/guards/auth.guard';
import { UserModel } from 'src/models/user.model';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(private readonly userRepository: UserRepository) {}

  @Query(() => [UserModel])
  async users(@Args('query') getUsersDto: GetUsersDto): Promise<UserModel[]> {
    return await this.userRepository.findUsers(getUsersDto);
  }

  @Mutation(() => UserModel)
  async createUser(
    @Args('dto') createUserDto: CreateUserDto,
  ): Promise<UserModel> {
    return await this.userRepository.createUser({
      name: createUserDto.name,
      password: createUserDto.password,
      email: createUserDto.email,
    });
  }
}
