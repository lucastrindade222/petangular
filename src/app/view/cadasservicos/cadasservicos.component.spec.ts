import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadasservicosComponent } from './cadasservicos.component';

describe('CadasservicosComponent', () => {
  let component: CadasservicosComponent;
  let fixture: ComponentFixture<CadasservicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadasservicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadasservicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
