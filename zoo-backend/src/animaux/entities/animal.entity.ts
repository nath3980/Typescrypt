
// src/animaux/entities/animal.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Animal {
  @ApiProperty({ example: 1, description: "Identifiant unique de l'animal" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Simba', description: "Nom de l'animal" })
  @Column()
  name: string;

  @ApiProperty({ example: 'Lion', description: "Espèce de l'animal" })
  @Column()
  species: string;

  @ApiProperty({ example: 100, description: "Niveau de santé de l'animal" })
  @Column({ default: 100 })
  health: number;
}

