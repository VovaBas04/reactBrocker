import { Test, TestingModule } from '@nestjs/testing';
import { BrockerController } from './brocker.controller';
import { BrockerService } from './brocker.service';

describe('BrockerController', () => {
  let controller: BrockerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrockerController],
      providers: [BrockerService],
    }).compile();

    controller = module.get<BrockerController>(BrockerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
