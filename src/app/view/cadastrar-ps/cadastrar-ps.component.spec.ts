import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPSComponent } from './cadastrar-ps.component';

describe('CadastrarPSComponent', () => {
  let component: CadastrarPSComponent;
  let fixture: ComponentFixture<CadastrarPSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarPSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
