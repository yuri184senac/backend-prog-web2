import { Controller, HttpException, HttpStatus } from '@nestjs/common';

@Controller('cursos')
export class CursosController {
    private async handleRequest(promise: Promise<any>) {
        try {
            return await promise;
        } catch (err) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR, err);
        }
    }
}
