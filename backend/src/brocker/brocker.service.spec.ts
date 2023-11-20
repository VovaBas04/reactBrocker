import { Test, TestingModule } from '@nestjs/testing';
import { BrockerService } from './brocker.service';

describe('BrockerService', () => {
  let service: BrockerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrockerService],
    }).compile();

    service = module.get<BrockerService>(BrockerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
