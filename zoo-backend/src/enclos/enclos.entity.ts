import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Enclos {
  @ApiProperty({ example: 1, description: "Identifiant unique de l'enclos" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Savane', description: "Nom de l'enclos" })
  @Column()
  nom: string;

  @ApiProperty({ example: 10, description: "Capacité maximale de l'enclos" })
  @Column()
  capacite: number;

  @ApiProperty({ example: 'Herbivore', description: "Type d'enclos (Herbivore, Carnivore, etc.)" })
  @Column()
  type: string;
} 