import { Injectable } from '@nestjs/common';
import { CreateBrockerDto } from './dto/create-brocker.dto';
import { UpdateBrockerDto } from './dto/update-brocker.dto';
import {DatabaseService} from "../database/database.service";
import {IBrocker} from "./brocker.interface";

@Injectable()
export class BrockerService {
  constructor(public databaseService:DatabaseService) {
  }
  create(createBrockerDto: CreateBrockerDto) {
    console.log(createBrockerDto)
    let brockers:IBrocker[] = this.databaseService.getBrockers()
    createBrockerDto.id= this.databaseService.incrementBrockerId()
    createBrockerDto.stocks = []
    brockers.push(createBrockerDto)
    this.databaseService.setBrockers(brockers)
    return createBrockerDto
  }
  findAll() {
        return this.databaseService.getBrockers()
  }

  findOne(id: number) {
    return this.databaseService.getBrockers().find(item=>item.id===id)
  }

  update(id: number, updateBrockerDto: UpdateBrockerDto) {
    let brockers = this.databaseService.getBrockers()
    let brockerUpdate = brockers.findIndex(item=>item.id===id)
    for (let property in updateBrockerDto){
      brockers[brockerUpdate][property] = updateBrockerDto[property]
    }
    this.databaseService.setBrockers(brockers)
    return brockers[brockerUpdate]
  }

  remove(id: number) {
    this.databaseService.setBrockers(this.databaseService.getBrockers().filter(item=>item.id!==id))
    return id
  }
}
