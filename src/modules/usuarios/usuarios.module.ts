import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { FirestoreService } from 'src/core/service/firestore-service.service';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService, FirestoreService]
})
export class UsuariosModule {}
