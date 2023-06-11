import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ApiModule } from 'src/api/api.module';
import { AppConfigModule } from 'src/features/config/config.module';
import { DatabaseModule } from 'src/features/database/database.module';
import { GraphqlModule } from 'src/features/graphql/graphql.module';
import { QueryRunningReporterModule } from 'src/features/query-running-reporter/query-running-reporter.module';

@Module({
  imports: [
    AppConfigModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1hour' },
    }),
    QueryRunningReporterModule,
    DatabaseModule,
    GraphqlModule,
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
