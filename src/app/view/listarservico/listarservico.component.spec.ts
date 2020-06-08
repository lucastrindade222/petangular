import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarservicoComponent } from './listarservico.component';

describe('ListarservicoComponent', () => {
  let component: ListarservicoComponent;
  let fixture: ComponentFixture<ListarservicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarservicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarservicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
