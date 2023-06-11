import {
  CanActivate,
  ContextType,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { JWTPayload } from 'src/features/auth/types';
import { UserService } from 'src/features/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = this.getRequest(context);
    const token = this.extractToken(request);

    if (!token) throw new UnauthorizedException();

    try {
      const payload = await this.jwtService.verifyAsync<JWTPayload>(token, {
        secret: process.env.JWT_SECRET,
      });

      const user = await this.userService.getUserById(payload.userId);

      //assuming that user.token is some kind of session
      //we should check if token in headers equals to token saved in User
      if (token !== user.token) {
        throw new UnauthorizedException();
      }

      request.user = user;
    } catch (error) {
      throw new UnauthorizedException();
    }

    return true;
  }

  private getRequest(context: ExecutionContext) {
    if (context.getType<ContextType | 'graphql'>() === 'graphql') {
      return GqlExecutionContext.create(context).getContext().req;
    }

    return context.switchToHttp().getRequest();
  }

  private extractToken(request: Request): string | null {
    const [_, token] = request.headers.authorization?.split(' ') ?? [];
    return token || null;
  }
}
