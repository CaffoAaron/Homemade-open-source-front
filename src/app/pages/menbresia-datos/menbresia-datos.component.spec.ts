import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenbresiaDatosComponent } from './menbresia-datos.component';

describe('MenbresiaDatosComponent', () => {
  let component: MenbresiaDatosComponent;
  let fixture: ComponentFixture<MenbresiaDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenbresiaDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenbresiaDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
