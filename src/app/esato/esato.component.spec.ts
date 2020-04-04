import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsatoComponent } from './esato.component';

describe('EsatoComponent', () => {
  let component: EsatoComponent;
  let fixture: ComponentFixture<EsatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
