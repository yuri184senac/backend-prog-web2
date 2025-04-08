import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Aluno } from 'src/models/aluno.interface';
import { AlunoService } from './aluno.service';

@Controller('aluno')
export class AlunoController {
    constructor(private alunoService: AlunoService) { }

    @Get('')
    public getAlunoAll() {
        try {
            return this.alunoService.getAlunoAll();
        } catch (err) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, err);
        }
    }

    @Get('/:id')
    public getAlunoById(@Param() params: any) {
        try {
            return this.alunoService.getAlunoById(params.id);
        } catch (err) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, err);
        }
    }

    @Post('')
    public createAluno(@Body() body: Aluno) {
        try {
            return this.alunoService.createAluno(body);
        } catch (err) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, err);
        }
    }

    @Put('/:id')
    public updateAlunoById(@Param() params: any, @Body() body: Aluno) {
        try {
            return this.alunoService.updateAlunoById(params.id, body);
        } catch (err) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, err);
        }
    }
    @Delete('/:id')
    public deleteAlunoById(@Param() params: any) {
        try {
            return this.alunoService.deleteAlunoById(params.id);
        } catch (err) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, err);
        }
    }
}
