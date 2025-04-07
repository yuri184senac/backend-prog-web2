import { Module } from '@nestjs/common';
import { FirestoreService } from './service/firestore-service.service';

@Module({
  providers: [FirestoreService],
  exports: [FirestoreService]
})
export class CoreModule { }
