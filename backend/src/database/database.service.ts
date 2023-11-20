import {Injectable, OnModuleDestroy} from '@nestjs/common';
import * as fs from "fs";
import {IBrocker} from "../brocker/brocker.interface";
import {IData} from "./data.interface";
import {IStock} from "../stock/stock.interface";
import {ISetting} from "../setting/setting.interface";

@Injectable()
export class DatabaseService implements OnModuleDestroy{
    private data:IData
    constructor() {
        console.log()
        this.data = JSON.parse(fs.readFileSync('./src/database/data.json','utf-8'))
    }
    read():IData{
        return this.data
    }
    getBrockers():IBrocker[]{
        return this.data.brockers;
    }
    setBrockers(brockers:IBrocker[]){
        this.data.brockers = brockers;
    }
    getStocks():IStock[]{
        return this.data.stocks;
    }
    setStocks(stocks:IStock[]){
        this.data.stocks = stocks;
    }
    incrementBrockerId():number{
        return ++this.data.last_brocker_id;
    }
    incrementStockId():number{
        return this.data.last_stock_id;
    }
    getSettings(){
        return this.data.settings
    }
    setSettings(data:ISetting){
        this.data.settings = data
    }
    write(data:IData):void{
        this.data = data
    }
    onModuleDestroy(){
        console.log("Вот тут")
        fs.writeFileSync('./src/database/data.json', JSON.stringify(this.data));
    }
}
