import { Controller, Get, Post, Param, Body, Delete, Patch } from '@nestjs/common';
import { EnclosService } from './enclos.service';
import { Enclos } from './enclos.entity';
import { ApiTags, ApiOperation, ApiOkResponse, ApiCreatedResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Enclos')
@Controller('enclos')
export class EnclosController {
  constructor(private readonly service: EnclosService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un nouvel enclos' })
  @ApiCreatedResponse({ description: 'Enclos créé', type: Enclos })
  create(@Body() dto: Partial<Enclos>) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les enclos' })
  @ApiOkResponse({ description: 'Liste des enclos', type: [Enclos] })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un enclos par son id' })
  @ApiParam({ name: 'id', type: Number, description: "ID de l'enclos" })
  @ApiOkResponse({ description: 'Enclos trouvé', type: Enclos })
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un enclos' })
  @ApiParam({ name: 'id', type: Number, description: "ID de l'enclos à mettre à jour" })
  @ApiBody({ type: Enclos })
  @ApiOkResponse({ description: 'Enclos mis à jour' })
  update(@Param('id') id: number, @Body() dto: Partial<Enclos>) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un enclos' })
  @ApiParam({ name: 'id', type: Number, description: "ID de l'enclos à supprimer" })
  @ApiOkResponse({ description: 'Enclos supprimé' })
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
} 