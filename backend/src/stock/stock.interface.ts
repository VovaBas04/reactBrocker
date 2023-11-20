import {IPriceDate} from "../price-date/price-date.interface";

export interface IStock {
    id:number,
    company:string,
    companyEng:string,
    is_active:boolean,
    priceDate:IPriceDate[]
}
