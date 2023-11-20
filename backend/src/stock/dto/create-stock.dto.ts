import {IStock} from "../stock.interface";
import {IPriceDate} from "../../price-date/price-date.interface";

export class CreateStockDto implements IStock{
    constructor(public id:number,public company:string,public companyEng:string,public is_active:boolean,public priceDate:IPriceDate[]) {
    }
}
