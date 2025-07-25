import { ApiProperty } from '@nestjs/swagger';

export class CreateAnimalDto {
  @ApiProperty({ example: 'Simba', description: "Nom de l'animal" })
  name: string;

  @ApiProperty({ example: 'Lion', description: "Espèce de l'animal" })
  species: string;
}

  