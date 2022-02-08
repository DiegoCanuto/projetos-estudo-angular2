import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperdorElvisComponent } from './operdor-elvis.component';

describe('OperdorElvisComponent', () => {
  let component: OperdorElvisComponent;
  let fixture: ComponentFixture<OperdorElvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperdorElvisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperdorElvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
