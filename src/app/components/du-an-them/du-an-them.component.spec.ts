import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuAnThemComponent } from './du-an-them.component';

describe('DuAnThemComponent', () => {
  let component: DuAnThemComponent;
  let fixture: ComponentFixture<DuAnThemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuAnThemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuAnThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
