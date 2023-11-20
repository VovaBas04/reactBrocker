import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import {DatabaseService} from "../database/database.service";

@Module({
  controllers: [StockController],
  providers: [StockService,DatabaseService],
})
export class StockModule {}
