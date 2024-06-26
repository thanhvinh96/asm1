import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvListComponent } from './nv-list.component';

describe('NvListComponent', () => {
  let component: NvListComponent;
  let fixture: ComponentFixture<NvListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NvListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
