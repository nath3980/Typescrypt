import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAnimalDialogComponent } from './ajout-animal-dialog.component';

describe('AjoutAnimalDialogComponent', () => {
  let component: AjoutAnimalDialogComponent;
  let fixture: ComponentFixture<AjoutAnimalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutAnimalDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutAnimalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
