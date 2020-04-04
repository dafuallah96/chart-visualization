import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssidComponent } from './essid.component';

describe('EssidComponent', () => {
  let component: EssidComponent;
  let fixture: ComponentFixture<EssidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
