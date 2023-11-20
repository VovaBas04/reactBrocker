import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrockerController } from './brocker/brocker.controller';
import { DatabaseService } from './database/database.service';
import { BrockerModule } from './brocker/brocker.module';
import {BrockerService} from "./brocker/brocker.service";
import { StockModule } from './stock/stock.module';
import { SettingController } from './setting/setting.controller';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [BrockerModule, StockModule, SocketModule],
  controllers: [AppController, BrockerController, SettingController],
  providers: [AppService,BrockerService,DatabaseService],
})
export class AppModule {}
