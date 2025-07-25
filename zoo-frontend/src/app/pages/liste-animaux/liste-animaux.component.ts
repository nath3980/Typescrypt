// zoo-frontend/src/app/liste-animaux/liste-animaux.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AjoutAnimalDialogComponent } from '../../components/ajout-animal-dialog/ajout-animal-dialog.component';
import { AnimalDto } from '../../../dto/animal.dto';
import { CreateAnimalDto } from '../../../dto/create-animal.dto';

@Component({
  selector: 'app-liste-animaux',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    RouterModule,
    MatDialogModule, // Ajout du module de dialog
  ],
  templateUrl: './liste-animaux.component.html',
})
export class ListeAnimauxComponent implements OnInit {
  displayedColumns: string[] = ['name', 'species', 'health', 'action'];
  dataSource: MatTableDataSource<AnimalDto> =
    new MatTableDataSource<AnimalDto>(); // On déclare un tableau de type AnimalDto

  constructor(private http: HttpClient, private dialog: MatDialog) {} // Ajout du dialog

  ngOnInit(): void {
    // On passe le parametre generic AnimalDto[] pour que le typescript sache que le tableau contient des objets de type AnimalDto
    this.http
      .get<AnimalDto[]>('http://localhost:3000/animaux')
      .subscribe((animaux) => {
        this.dataSource.data = animaux;
      });
  }

  // Fonction pour ouvrir le dialog d'ajout d'animal
  ajouterAnimal() {
    console.log('click ajouterAnimal');
    this.dialog
      .open(AjoutAnimalDialogComponent, {
        height: '400px',
        width: '400px',
      })
      .afterClosed()
      .subscribe((result: CreateAnimalDto) => {
        console.log(
          'La modale a ete fermee avec les donnees suivantes : ',
          result
        );

        if (result) {
          // Si l'utilisateur a cliqué sur "Ajouter"

          // On envoie le nouvel animal à l'API qui devrait le creer et le renvoyer
          this.http
            .post<AnimalDto>('http://localhost:3000/animaux', result)
            .subscribe((animal) => {
              console.log("L'animal a été ajouté : ", animal);
              this.dataSource.data = [...this.dataSource.data, animal]; // On ajoute le nouvel animal au tableau une fois qu'il a ete cree
            });
        }
      });
  }

  relacherAnimal(id: number) {
    this.http
      .delete<AnimalDto>(`http://localhost:3000/animaux/${id}`)
      .subscribe(() => {
        // On retire l'animal supprimé du tableau affiché
        this.dataSource.data = this.dataSource.data.filter(
          (animal) => animal.id !== id
        );
      });
  }
}
