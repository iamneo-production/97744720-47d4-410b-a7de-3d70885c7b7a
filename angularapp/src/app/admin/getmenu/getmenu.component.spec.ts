import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmenuComponent } from './getmenu.component';

describe('GetmenuComponent', () => {
  let component: GetmenuComponent;
  let fixture: ComponentFixture<GetmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
