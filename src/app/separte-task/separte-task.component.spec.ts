import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparteTaskComponent } from './separte-task.component';

describe('SeparteTaskComponent', () => {
  let component: SeparteTaskComponent;
  let fixture: ComponentFixture<SeparteTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeparteTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparteTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
