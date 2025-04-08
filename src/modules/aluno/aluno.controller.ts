import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Aluno } from 'src/models/aluno.interface';
import { AlunoService } from './aluno.service';

@Controller('aluno')
export class AlunoController {
    constructor(private alunoService: AlunoService) { }

    @Get('')
    public getAlunoAll() {
        this.handleRequest(this.alunoService.getAlunoAll());
    }

    @Get('/:id')
    public getAlunoById(@Param() params: any) {
        this.handleRequest(this.alunoService.getAlunoById(params.id));
    }

    @Post('')
    public createAluno(@Body() body: Aluno) {
        this.handleRequest(this.alunoService.createAluno(body));
    }

    @Put('/:id')
    public updateAlunoById(@Param() params: any, @Body() body: Aluno) {
        this.handleRequest(this.alunoService.updateAlunoById(params.id, body));
    }
    @Delete('/:id')
    public deleteAlunoById(@Param() params: any) {
        this.handleRequest(this.alunoService.deleteAlunoById(params.id));
    }

    private async handleRequest(promise: Promise<any>) {
        try {
            return await promise;
        } catch (err) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, err);
        }
    }
}
