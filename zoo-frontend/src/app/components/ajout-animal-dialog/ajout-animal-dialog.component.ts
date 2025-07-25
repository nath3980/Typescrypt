import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-ajout-animal-dialog',
  templateUrl: './ajout-animal-dialog.html',
  styleUrls: ['./ajout-animal-dialog.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class AjoutAnimalDialogComponent {
  animal = {
    name: '',
    species: '',
    health: 100
  };

  constructor(private dialogRef: MatDialogRef<AjoutAnimalDialogComponent>) {}

  onCancel() {
    this.dialogRef.close();
  }

  onAdd() {
    this.dialogRef.close(this.animal);
  }
}