import {Body, Controller, Get, Patch} from '@nestjs/common';
import UpdateSettingDto from "./update-setting.dto";
import {DatabaseService} from "../database/database.service";

@Controller('setting')
export class SettingController {
    constructor(private databaseService:DatabaseService) {
    }
    @Patch()
    setSetting(@Body() updateSettingDto:UpdateSettingDto){
        console.log(updateSettingDto)
        this.databaseService.setSettings(updateSettingDto)
        return updateSettingDto
    }
    @Get()
    getSetting(){
        console.log(this.databaseService.getSettings())
        return this.databaseService.getSettings()
    }
}
