import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithemeComponent } from './editheme.component';

describe('EdithemeComponent', () => {
  let component: EdithemeComponent;
  let fixture: ComponentFixture<EdithemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdithemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
