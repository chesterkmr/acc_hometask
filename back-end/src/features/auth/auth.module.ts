import { Module } from '@nestjs/common';
import { AuthService } from 'src/features/auth/auth.service';
import { UserModule } from 'src/features/user/user.module';

@Module({
  imports: [UserModule],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
