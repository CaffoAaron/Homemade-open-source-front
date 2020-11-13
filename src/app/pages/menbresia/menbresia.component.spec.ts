import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenbresiaComponent } from './menbresia.component';

describe('MenbresiaComponent', () => {
  let component: MenbresiaComponent;
  let fixture: ComponentFixture<MenbresiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenbresiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenbresiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
