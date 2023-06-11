import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/features/user/repository/user.repository';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUserById(id: string): Promise<User | null> {
    return await this.userRepository.findUser({ id });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findUser({ email });
  }

  async updateUser(userId: string, payload: Partial<User>): Promise<User> {
    return await this.userRepository.updateUser(userId, payload);
  }
}
