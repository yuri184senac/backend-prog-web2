import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Usuario } from 'src/models/usuario.interface';
import { ProfessoresService } from './professores.service';
import { Professor } from 'src/models/professor.interface';

@Controller('professores')
export class ProfessoresController {

    constructor(private professorService: ProfessoresService) { }

    @Get('')
    public getProfessorAll() {
        try {
            return this.professorService.getProfessorAll();
        } catch (err) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, err);
        }
    }

    @Get('/:id')
    public getProfessorById(@Param() params: any) {
        try {
            return this.professorService.getProfessorById(params.id);
        } catch (err) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, err);
        }
    }

    @Post('')
    public createProfessor(@Body() body: Professor) {
        try {
            return this.professorService.createProfessor(body);
        } catch (err) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, err);
        }
    }

    @Put('/:id')
    public updateProfessorById(@Param() params: any, @Body() body: Professor) {
        try {
            return this.professorService.updateProfessorById(params.id, body);
        } catch (err) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, err);
        }
    }

    @Delete('/:id')
    public deleteProfessorById(@Param() params: any) {
        try {
            return this.professorService.deleteProfessorById(params.id);
        } catch (err) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, err);
        }
    }

}
