import {IStock} from "../stock/stock.interface";
import {IBrocker} from "../brocker/brocker.interface";
import {ISetting} from "../setting/setting.interface";
export interface IData {
    last_brocker_id:number,
    last_stock_id:number,
    brockers:Array<IBrocker>,
    settings:ISetting
    stocks:Array<IStock>
}
