import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configSchema } from 'src/common/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: configSchema,
    }),
  ],
})
export class AppConfigModule {}
