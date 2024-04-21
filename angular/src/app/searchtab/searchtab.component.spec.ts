import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtabComponent } from './searchtab.component';

describe('SearchtabComponent', () => {
  let component: SearchtabComponent;
  let fixture: ComponentFixture<SearchtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchtabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
