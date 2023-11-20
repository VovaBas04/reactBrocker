import { PartialType } from '@nestjs/mapped-types';
import { CreateBrockerDto } from './create-brocker.dto';

export class UpdateBrockerDto extends PartialType(CreateBrockerDto) {}
