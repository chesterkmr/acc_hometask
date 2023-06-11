import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType({})
export class GetUsersDto {
  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  byEmailDomain?: string;
}
