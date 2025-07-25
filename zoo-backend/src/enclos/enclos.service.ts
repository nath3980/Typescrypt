import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enclos } from './enclos.entity';

@Injectable()
export class EnclosService {
  constructor(
    @InjectRepository(Enclos)
    private readonly enclosRepo: Repository<Enclos>,
  ) {}

  create(data: Partial<Enclos>) {
    const enclos = this.enclosRepo.create(data);
    return this.enclosRepo.save(enclos);
  }

  findAll() {
    return this.enclosRepo.find();
  }

  findOne(id: number) {
    return this.enclosRepo.findOneBy({ id });
  }

  update(id: number, data: Partial<Enclos>) {
    return this.enclosRepo.update(id, data);
  }

  delete(id: number) {
    return this.enclosRepo.delete(id);
  }
} 