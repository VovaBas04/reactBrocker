import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrockerService } from './brocker.service';
import { CreateBrockerDto } from './dto/create-brocker.dto';
import { UpdateBrockerDto } from './dto/update-brocker.dto';

@Controller('brocker')
export class BrockerController {
  constructor(private readonly brockerService: BrockerService) {}

  @Post()
  create(@Body() createBrockerDto: CreateBrockerDto) {
    return this.brockerService.create(createBrockerDto);
  }

  @Get()
  findAll() {
    return this.brockerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brockerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrockerDto: UpdateBrockerDto) {
    console.log(updateBrockerDto)
    return this.brockerService.update(+id, updateBrockerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brockerService.remove(+id);
  }
}
