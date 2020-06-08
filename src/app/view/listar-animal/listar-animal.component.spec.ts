import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAnimalComponent } from './listar-animal.component';

describe('ListarAnimalComponent', () => {
  let component: ListarAnimalComponent;
  let fixture: ComponentFixture<ListarAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
