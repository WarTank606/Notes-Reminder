import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNoteStartComponent } from './new-note-start.component';

describe('NewNoteStartComponent', () => {
  let component: NewNoteStartComponent;
  let fixture: ComponentFixture<NewNoteStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewNoteStartComponent]
    });
    fixture = TestBed.createComponent(NewNoteStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
