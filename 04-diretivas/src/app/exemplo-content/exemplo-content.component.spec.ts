import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploContentComponent } from './exemplo-content.component';

describe('ExemploContentComponent', () => {
  let component: ExemploContentComponent;
  let fixture: ComponentFixture<ExemploContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
