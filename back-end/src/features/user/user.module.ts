import { Module } from '@nestjs/common';
import { UserRepositoryModule } from 'src/features/user/repository/user-repository.module';
import { UserResolver } from 'src/features/user/user.resolver';
import { UserService } from 'src/features/user/user.service';

@Module({
  imports: [UserRepositoryModule],
  providers: [UserResolver, UserService],
  exports: [UserResolver, UserService],
})
export class UserModule {}
