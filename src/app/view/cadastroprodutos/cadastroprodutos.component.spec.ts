import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroprodutosComponent } from './cadastroprodutos.component';

describe('CadastroprodutosComponent', () => {
  let component: CadastroprodutosComponent;
  let fixture: ComponentFixture<CadastroprodutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroprodutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
