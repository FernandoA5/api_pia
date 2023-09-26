import { Test, TestingModule } from '@nestjs/testing';
import { ProvedorController } from './provedor.controller';

describe('ProvedorController', () => {
  let controller: ProvedorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProvedorController],
    }).compile();

    controller = module.get<ProvedorController>(ProvedorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
