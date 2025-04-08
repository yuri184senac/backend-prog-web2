import { Module } from '@nestjs/common';
import { AlunoController } from './aluno.controller';
import { AlunoService } from './aluno.service';
import { FirestoreService } from 'src/core/service/firestore-service.service';

@Module({
  controllers: [AlunoController],
  providers: [AlunoService, FirestoreService]
})
export class AlunoModule {}
