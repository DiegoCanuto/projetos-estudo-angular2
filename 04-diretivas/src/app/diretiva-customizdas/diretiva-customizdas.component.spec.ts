import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaCustomizdasComponent } from './diretiva-customizdas.component';

describe('DiretivaCustomizdasComponent', () => {
  let component: DiretivaCustomizdasComponent;
  let fixture: ComponentFixture<DiretivaCustomizdasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaCustomizdasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaCustomizdasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
