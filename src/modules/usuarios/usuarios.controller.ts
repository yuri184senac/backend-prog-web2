import { Controller, Get, Param } from '@nestjs/common';

@Controller('usuarios')
export class UsuariosController {
    //Pegar usuario
    @Get('/:id')
    public getUserById(@Param() params: string @Body() ) {

    }

    //Criar usuario
    //Editar usuario
    //Excluir usuario
    
}
