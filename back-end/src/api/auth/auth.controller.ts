import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { SignInDTO } from 'src/api/auth/dto/sign-in.dto';
import { SigninOutputDTO } from 'src/api/auth/output-dto/signin.output.dto';
import { SignoutOutputDto } from 'src/api/auth/output-dto/signout.output.dto';
import { AuthorizedUser } from 'src/common/decorators/user.decorator';
import { AuthService } from 'src/features/auth/auth.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { User } from 'src/schemas/user.schema';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  async signIn(@Body() payload: SignInDTO): Promise<SigninOutputDTO> {
    const accessToken =
      await this.authService.exchangeCredentialsForAccessToken(
        payload.email,
        payload.password,
      );

    if (!accessToken) throw new UnauthorizedException();

    return {
      accessToken,
    };
  }

  @UseGuards(AuthGuard)
  @Post('/signout')
  async signout(@AuthorizedUser() user: User): Promise<SignoutOutputDto> {
    await this.authService.signOut(user.id);

    return {
      result: true,
    };
  }
}
