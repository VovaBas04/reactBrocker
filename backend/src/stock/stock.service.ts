import { Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import {DatabaseService} from "../database/database.service";

@Injectable()
export class StockService {
  constructor(private databaseService:DatabaseService) {
  }
  create(createStockDto: CreateStockDto) {
    return 'This action adds a new stock';
  }

  findAll() {
    return this.databaseService.getStocks()
  }

  findOne(id: number) {
    return this.databaseService.getStocks().find(item=>item.id===id)
  }

  update(id: number, updateStockDto: UpdateStockDto) {
    let stocks = this.databaseService.getStocks()
    let stockUpdate = stocks.findIndex(item=>item.id===id)
    for (let property in updateStockDto){
      stocks[stockUpdate][property] = updateStockDto[property]
    }
    this.databaseService.setStocks(stocks)
    return stocks[stockUpdate]
  }

  remove(id: number) {
    return `This action removes a #${id} stock`;
  }
}
