import { Bind, Body, Controller, Delete, Dependencies, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
@Dependencies(CatsService)
export class CatsController {

    constructor(catsService) {
        this.catsService = catsService;
    }

    @Get()
    findAll() {
        return this.catsService.findAll();
    }

    @Get(':id')
    @Bind(Param('id'), Res())
    findOne(id, res) {
        const gatoEncontrado = this.catsService.findById(id);
        if(gatoEncontrado) {
            res.status(HttpStatus.OK).json(gatoEncontrado);
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
        
    }

    @Delete(':id')
    @Bind(Param('id'), Res())
    remove(id, res) {
        const indexGatoEncontrado = this.catsService.findIndexById(id);
        if(indexGatoEncontrado >= 0){
            this.catsService.deleteByIndex(indexGatoEncontrado);
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Post()
    @Bind(Body(), Res())
    create(cat, res) {
        this.catsService.create(cat);
        res.status(HttpStatus.CREATED).json(cat);
    }

    @Put(':id')
    @Bind(Param('id'), Body(), Res())
    update(id, cat, res) {
        const indexGatoEncontrado = this.catsService.findIndexById(id);
        if(indexGatoEncontrado >= 0){
            this.catsService.update(indexGatoEncontrado, cat);
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

}
