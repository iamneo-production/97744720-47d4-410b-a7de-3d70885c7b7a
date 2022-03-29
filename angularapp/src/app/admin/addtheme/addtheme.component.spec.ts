import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdthemeComponent } from './addtheme.component';

describe('AdthemeComponent', () => {
  let component: AdthemeComponent;
  let fixture: ComponentFixture<AdthemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdthemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdthemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
