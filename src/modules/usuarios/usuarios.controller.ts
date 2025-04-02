import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from 'src/models/usuario.interface';

@Controller('usuarios')
export class UsuariosController {

    constructor(private usuarioService: UsuariosService) { }
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
    public createUser(@Body() body: Usuario) {
        try {
            return this.usuarioService.createUser(body);
        } catch (err) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, err);
        }
    }

    //Editar usuario
    @Put('/:id')
    public updateUserById(@Param() params: any, @Body() body: Usuario) {
        try {
            return this.usuarioService.updateUserById(params.id, body);
        } catch (err) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, err);
        }
    }
    //Excluir usuario
    
}
