import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthorizedUser } from 'src/common/decorators/user.decorator';
import { AuthGuard } from 'src/guards/auth.guard';
import { User } from 'src/schemas/user.schema';

@Controller()
@UseGuards(AuthGuard)
export class UserController {
  @Get('/user')
  async getUser(@AuthorizedUser() user: User) {
    return user;
  }
}
