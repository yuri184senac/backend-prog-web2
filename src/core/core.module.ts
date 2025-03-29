import { Module } from '@nestjs/common';
import { FirestoreServiceService } from './service/firestore-service.service';

@Module({
  providers: [FirestoreServiceService]
})
export class CoreModule { }
