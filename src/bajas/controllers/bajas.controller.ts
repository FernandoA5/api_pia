import { Controller } from '@nestjs/common';

@Controller('bajas')
export class BajasController {
    @Get()
    async getAll(){
        return await this.bajasService.getAll();
    }
}
