import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuAnSuaComponent } from './du-an-sua.component';

describe('DuAnSuaComponent', () => {
  let component: DuAnSuaComponent;
  let fixture: ComponentFixture<DuAnSuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuAnSuaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuAnSuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
