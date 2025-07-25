import { Module } from '@nestjs/common';
import { Animal } from './entities/animal.entity';
import { AnimauxController } from './animaux.controller';
import { AnimauxService } from './animaux.service';
import { TypeOrmModule } from '@nestjs/typeorm'; // <-- AJOUTE CETTE LIGNE

@Module({
  imports: [TypeOrmModule.forFeature([Animal])],
  controllers: [AnimauxController],
  providers: [AnimauxService]
})
export class AnimauxModule {}
