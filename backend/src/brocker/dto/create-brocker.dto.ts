import {DatabaseService} from "../../database/database.service";
import {IBrocker} from "../brocker.interface";
import {IStock} from "../../stock/stock.interface";
import {ICountStock} from "../../count-stock/count-stock.interface";

export class CreateBrockerDto implements IBrocker {
    constructor(public id:number|null,public fullName:string,public company:string,public money:number,public stocks:ICountStock[]) {
    }
}
