import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Usuario } from 'src/models/usuario.interface';
import { ProfessoresService } from './professores.service';
import { Professor } from 'src/models/professor.interface';

@Controller('professores')
export class ProfessoresController {

    constructor(private professorService: ProfessoresService) { }

    @Get('')
    public getProfessorAll() {
        this.handleRequest(this.professorService.getProfessorAll());
    }

    @Get('/:id')
    public getProfessorById(@Param() params: any) {
        this.handleRequest(this.professorService.getProfessorById(params.id));
    }

    @Post('')
    public createProfessor(@Body() body: Professor) {
        this.handleRequest(this.professorService.createProfessor(body));
    }

    @Put('/:id')
    public updateProfessorById(@Param() params: any, @Body() body: Professor) {
        this.handleRequest(this.professorService.updateProfessorById(params.id, body));
    }

    @Delete('/:id')
    public deleteProfessorById(@Param() params: any) {
        this.handleRequest(this.professorService.deleteProfessorById(params.id));
    }

    private async handleRequest(promise: Promise<any>) {
        try {
            return await promise;
        } catch (err) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, err);
        }
    }

}
