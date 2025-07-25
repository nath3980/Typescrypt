
// animaux.controller.ts
import { Controller, Get, Post, Param, Body, Query, Delete } from '@nestjs/common';
import { AnimauxService } from './animaux.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.guard';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiOkResponse, ApiCreatedResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { Animal } from './entities/animal.entity';

@ApiTags('Animaux')
@Controller('animaux')
export class AnimauxController {
  constructor(private readonly service: AnimauxService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un nouvel animal' })
  @ApiCreatedResponse({ description: 'Animal créé', type: Animal })
  create(@Body() dto: CreateAnimalDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les animaux' })
  @ApiOkResponse({ description: 'Liste des animaux', type: [Animal] })
  findAll() {
    return this.service.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('veterinaire', 'gardien')
  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un animal par son id' })
  @ApiParam({ name: 'id', type: Number, description: "ID de l'animal" })
  @ApiOkResponse({ description: 'Animal trouvé', type: Animal })
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
 }

  @Get('search/name')
  @ApiOperation({ summary: 'Rechercher un animal par nom' })
  @ApiQuery({ name: 'name', type: String, description: "Nom de l'animal" })
  @ApiOkResponse({ description: 'Animal trouvé', type: Animal })
  findByName(@Query('name') name: string) {
    return this.service.findByName(name);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('gardien')
  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un animal par son id' })
  @ApiParam({ name: 'id', type: Number, description: "ID de l'animal à supprimer" })
  @ApiOkResponse({ description: 'Animal supprimé' })
  deleteWithId(@Param('id') id: number) {
    return this.service.deleteWithId(id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('veterinaire')
  @Get('soigner/:id')
  @ApiOperation({ summary: "Soigner un animal (remet sa santé à 100)" })
  @ApiParam({ name: 'id', type: Number, description: "ID de l'animal à soigner" })
  @ApiOkResponse({ description: 'Animal soigné', type: Animal })
  async soignerAnimal(@Param('id') id: number) {
    return this.service.soignerAnimal(id);
  }
}

