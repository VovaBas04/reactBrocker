import {ICountStock} from "../count-stock/count-stock.interface";

export interface IBrocker{
    id:number,
    fullName:string,
    company:string,
    money:number,
    stocks:Array<ICountStock>
}
