import { Module } from '@nestjs/common';
import { ProfessoresController } from './professores.controller';
import { ProfessoresService } from './professores.service';
import { FirestoreService } from 'src/core/service/firestore-service.service';

@Module({
  controllers: [ProfessoresController],
  providers: [ProfessoresService, FirestoreService]
})
export class ProfessoresModule {}
