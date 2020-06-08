import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendimentolistarComponent } from './atendimentolistar.component';

describe('AtendimentolistarComponent', () => {
  let component: AtendimentolistarComponent;
  let fixture: ComponentFixture<AtendimentolistarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtendimentolistarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtendimentolistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
