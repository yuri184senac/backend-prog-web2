import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Professor } from 'src/models/professor.interface';

@Controller('usuarios')
export class UsuariosController {

    constructor(private usuarioService: UsuariosService) { }

    @Get('')
    public getProfessorAll() {
        try {
            return this.usuarioService.getUserAll();
        } catch (err) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, err);
        }
    }

    //Pegar usuario
    @Get('/:id')
    public getUserById(@Param() params: any) {
        try {
            return this.usuarioService.getUserById(params.id);
        } catch (err) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, err);
        }
    }

    //Criar usuario
    @Post('')
    public createUser(@Body() body: Professor) {
        try {
            return this.usuarioService.createUser(body);
        } catch (err) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, err);
        }
    }

    //Editar usuario
    @Put('/:id')
    public updateUserById(@Param() params: any, @Body() body: Professor) {
        try {
            return this.usuarioService.updateUserById(params.id, body);
        } catch (err) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, err);
        }
    }
    //Excluir usuario
    @Delete('/:id')
    public deleteUserById(@Param() params: any) {
        try {
            return this.usuarioService.deleteUserById(params.id);
        } catch (err) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, err);
        }
    }
}
