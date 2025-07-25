import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enclos } from './enclos.entity';
import { EnclosService } from './enclos.service';
import { EnclosController } from './enclos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Enclos])],
  providers: [EnclosService],
  controllers: [EnclosController],
})
export class EnclosModule {} 