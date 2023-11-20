import {ISetting} from "./setting.interface";

export default class UpdateSettingDto implements ISetting{
    constructor(public speed:number,public firstDay:Date) {
    }
}