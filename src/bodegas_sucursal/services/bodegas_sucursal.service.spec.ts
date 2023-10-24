import { Test, TestingModule } from '@nestjs/testing';
import { BodegasSucursalService } from './bodegas_sucursal.service';

describe('BodegasSucursalService', () => {
  let service: BodegasSucursalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BodegasSucursalService],
    }).compile();

    service = module.get<BodegasSucursalService>(BodegasSucursalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
