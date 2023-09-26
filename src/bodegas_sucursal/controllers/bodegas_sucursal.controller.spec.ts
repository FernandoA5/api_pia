import { Test, TestingModule } from '@nestjs/testing';
import { BodegasSucursalController } from './bodegas_sucursal.controller';

describe('BodegasSucursalController', () => {
  let controller: BodegasSucursalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BodegasSucursalController],
    }).compile();

    controller = module.get<BodegasSucursalController>(BodegasSucursalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
