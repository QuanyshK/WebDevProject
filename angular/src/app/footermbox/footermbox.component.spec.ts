import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootermboxComponent } from './footermbox.component';

describe('FootermboxComponent', () => {
  let component: FootermboxComponent;
  let fixture: ComponentFixture<FootermboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootermboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FootermboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
