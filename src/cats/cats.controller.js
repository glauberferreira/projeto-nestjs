import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {

    @Get()
    findAll() {
        return "Retorna todos os gatos";
    }

}
