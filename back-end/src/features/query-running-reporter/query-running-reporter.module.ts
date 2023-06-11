import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { QueryRuningReporterService } from 'src/features/query-running-reporter/query-running-reporter.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [QueryRuningReporterService],
})
export class QueryRunningReporterModule {}
