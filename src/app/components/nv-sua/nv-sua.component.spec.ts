import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvSuaComponent } from './nv-sua.component';

describe('NvSuaComponent', () => {
  let component: NvSuaComponent;
  let fixture: ComponentFixture<NvSuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NvSuaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NvSuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
