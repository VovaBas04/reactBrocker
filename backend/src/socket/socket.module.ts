import { Module } from '@nestjs/common';
import { SocketGateway } from './socket.gateway';
import {DatabaseService} from "../database/database.service";
@Module({
    providers:[SocketGateway,DatabaseService]
})
export class SocketModule {}
