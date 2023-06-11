import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';

@Injectable()
export class QueryRuningReporterService {
  @Interval(5000)
  report() {
    console.log('QUERY RUNNING');
  }
}
