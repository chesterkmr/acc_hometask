import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';

export const AuthorizedUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): User => {
    const request = ctx.switchToHttp().getRequest();

    return request.user as User;
  },
);
