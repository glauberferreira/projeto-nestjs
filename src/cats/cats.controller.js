import { Controller, Get } from '@nestjs/common';

const GATOS = [
    {
        id: 1,
        nome: "Franeudos",
        corOlhos: "verde",
        raca: "sphynx"
    },
    {
        id: 2,
        nome: "Chico",
        corOlhos: "azul",
        raca: "siamês"
    },
    {
        id: 3,
        nome: "Chambaril",
        corOlhos: "preto",
        raca: "munchkin"
    }
];

@Controller('cats')
export class CatsController {

    @Get()
    findAll() {
        return GATOS;
    }

}
