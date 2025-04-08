import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Professor } from 'src/models/professor.interface';

@Controller('usuarios')
export class UsuariosController {

    constructor(private usuarioService: UsuariosService) { }

    @Get('')
    public getProfessorAll() {
        this.handleRequest(this.usuarioService.getUserAll());
    }

    //Pegar usuario
    @Get('/:id')
    public getUserById(@Param() params: any) {
        this.handleRequest(this.usuarioService.getUserById(params.id));
    }

    //Criar usuario
    @Post('')
    public createUser(@Body() body: Professor) {
        this.handleRequest(this.usuarioService.createUser(body));
    }

    //Editar usuario
    @Put('/:id')
    public updateUserById(@Param() params: any, @Body() body: Professor) {
        this.handleRequest(this.usuarioService.updateUserById(params.id, body));
    }
    //Excluir usuario
    @Delete('/:id')
    public deleteUserById(@Param() params: any) {
        this.handleRequest(this.usuarioService.deleteUserById(params.id));
    }

    private async handleRequest(promise: Promise<any>) {
        try {
            return await promise;
        } catch (err) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, err);
        }
    }
}
