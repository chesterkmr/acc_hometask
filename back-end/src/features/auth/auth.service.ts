import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/features/user/user.service';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async exchangeCredentialsForAccessToken(
    email: string,
    password: string,
  ): Promise<string | null> {
    const user = await this.userService.getUserByEmail(email);

    if (!user) return null;

    if (!this.isPasswordValid(password, user.password)) return null;

    const token = await this.jwtService.signAsync({ userId: user.id });
    await this.persistTokenToUser(user, token);

    return token;
  }

  private async persistTokenToUser(user: User, token: string): Promise<void> {
    await this.userService.updateUser(user.id, { token });
  }

  private isPasswordValid(
    inputPassword: string,
    userPassword: string,
  ): boolean {
    // normally we comparing hashes but for current task it will be overkill
    return inputPassword === userPassword;
  }

  async signOut(userId: string): Promise<void> {
    await this.userService.updateUser(userId, { token: null });
  }
}
