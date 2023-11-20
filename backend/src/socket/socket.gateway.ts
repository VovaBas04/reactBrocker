import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    OnGatewayInit,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import {DatabaseService} from "../database/database.service";

@WebSocketGateway({cors:true})
export class SocketGateway implements OnGatewayInit {
    constructor(private databaseService:DatabaseService) {
    }
    @WebSocketServer()
    server: Server;

    afterInit(server: Server) {
        console.log('Websocket server initialized.');
    }

    @SubscribeMessage('start')
    handleMessage(client: any, payload: any) {
        console.log("Получил сообщение")
        let data = this.databaseService.getSettings()
        // let date:Date =data.firstDay
        let date = new Date(data.firstDay);
        let speedDay = data.speed
        console.log(speedDay)
        this.server.emit('start', payload); // Отправляем сообщение всем клиентам
        setInterval(()=>{
          this.server.emit('date',date)
          date.setDate(date.getDate()+1);
        },speedDay*1000)
    }
}