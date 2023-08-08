import { Bind, Body, Controller, Delete, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';

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

    @Get(':id')
    @Bind(Param(), Res())
    findOne(params, res) {
        const gatoEncontrado = GATOS.find(gato => gato.id == params.id);
        if(gatoEncontrado) {
            res.status(HttpStatus.OK).json(gatoEncontrado);
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
        
    }

    @Delete(':id')
    @Bind(Param('id'), Res())
    remove(id, res) {
        const indexGatoEncontrado = GATOS.findIndex(gato => gato.id == id);
        if(indexGatoEncontrado >= 0){
            GATOS.splice(indexGatoEncontrado, 1);
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Post()
    @Bind(Body())
    create(cat) {
        return `Cadastrando um gato ${JSON.stringify(cat)}`
    }

}
