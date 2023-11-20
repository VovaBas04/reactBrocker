import { Module } from '@nestjs/common';
import { BrockerService } from './brocker.service';
import { BrockerController } from './brocker.controller';
import {DatabaseService} from "../database/database.service";
@Module({
  controllers: [BrockerController],
  providers: [BrockerService,DatabaseService],
})
export class BrockerModule {
}

