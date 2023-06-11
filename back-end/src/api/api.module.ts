import { Module } from '@nestjs/common';
import { AuthController } from 'src/api/auth/auth.controller';
import { HelloWorldController } from 'src/api/hello-world/hello-world.controller';
import { UserController } from 'src/api/user/user.controller';
import { AuthModule } from 'src/features/auth/auth.module';
import { UserModule } from 'src/features/user/user.module';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [HelloWorldController, AuthController, UserController],
})
export class ApiModule {}
