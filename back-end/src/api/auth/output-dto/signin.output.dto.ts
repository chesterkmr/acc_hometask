import { IsString } from 'class-validator';

export class SigninOutputDTO {
  @IsString()
  accessToken: string;
}
