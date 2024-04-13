import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintabComponent } from './maintab.component';

describe('MaintabComponent', () => {
  let component: MaintabComponent;
  let fixture: ComponentFixture<MaintabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaintabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
